/* global SerialPort, ParityType, FlowControlType */
/**
 * Wrapper class around Webserial API to communicate with the serial device.
 * @param {typeof import("w3c-web-serial").SerialPort} device - Requested device prompted by the browser.
 *
 * ```
 * const port = await navigator.serial.requestPort();
 * ```
 */
class Transport {
    constructor(device, tracing = false, enableSlipReader = true) {
        this.device = device;
        this.tracing = tracing;
        this.slipReaderEnabled = false;
        this.baudrate = 0;
        this.traceLog = "";
        this.lastTraceTime = Date.now();
        this.buffer = new Uint8Array(0);
        this.SLIP_END = 0xc0;
        this.SLIP_ESC = 0xdb;
        this.SLIP_ESC_END = 0xdc;
        this.SLIP_ESC_ESC = 0xdd;
        this._DTR_state = false;
        this.slipReaderEnabled = enableSlipReader;
    }
    /**
     * Request the serial device vendor ID and Product ID as string.
     * @returns {string} Return the device VendorID and ProductID from SerialPortInfo as formatted string.
     */
    getInfo() {
        const info = this.device.getInfo();
        return info.usbVendorId && info.usbProductId
            ? `WebSerial VendorID 0x${info.usbVendorId.toString(16)} ProductID 0x${info.usbProductId.toString(16)}`
            : "";
    }
    /**
     * Request the serial device product id from SerialPortInfo.
     * @returns {number | undefined} Return the product ID.
     */
    getPid() {
        return this.device.getInfo().usbProductId;
    }
    /**
     * Format received or sent data for tracing output.
     * @param {string} message Message to format as trace line.
     */
    trace(message) {
        const delta = Date.now() - this.lastTraceTime;
        const prefix = `TRACE ${delta.toFixed(3)}`;
        const traceMessage = `${prefix} ${message}`;
        console.log(traceMessage);
        this.traceLog += traceMessage + "\n";
    }
    async returnTrace() {
        try {
            await navigator.clipboard.writeText(this.traceLog);
            console.log("Text copied to clipboard!");
        }
        catch (err) {
            console.error("Failed to copy text:", err);
        }
    }
    hexify(s) {
        return Array.from(s)
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join("")
            .padEnd(16, " ");
    }
    hexConvert(uint8Array, autoSplit = true) {
        if (autoSplit && uint8Array.length > 16) {
            let result = "";
            let s = uint8Array;
            while (s.length > 0) {
                const line = s.slice(0, 16);
                const asciiLine = String.fromCharCode(...line)
                    .split("")
                    .map((c) => (c === " " || (c >= " " && c <= "~" && c !== "  ") ? c : "."))
                    .join("");
                s = s.slice(16);
                result += `\n    ${this.hexify(line.slice(0, 8))} ${this.hexify(line.slice(8))} | ${asciiLine}`;
            }
            return result;
        }
        else {
            return this.hexify(uint8Array);
        }
    }
    /**
     * Format data packet using the Serial Line Internet Protocol (SLIP).
     * @param {Uint8Array} data Binary unsigned 8 bit array data to format.
     * @returns {Uint8Array} Formatted unsigned 8 bit data array.
     */
    slipWriter(data) {
        const outData = [];
        outData.push(0xc0);
        for (let i = 0; i < data.length; i++) {
            if (data[i] === 0xdb) {
                outData.push(0xdb, 0xdd);
            }
            else if (data[i] === 0xc0) {
                outData.push(0xdb, 0xdc);
            }
            else {
                outData.push(data[i]);
            }
        }
        outData.push(0xc0);
        return new Uint8Array(outData);
    }
    /**
     * Write binary data to device using the WebSerial device writable stream.
     * @param {Uint8Array} data 8 bit unsigned data array to write to device.
     */
    async write(data) {
        const outData = this.slipWriter(data);
        if (this.device.writable) {
            const writer = this.device.writable.getWriter();
            if (this.tracing) {
                console.log("Write bytes");
                this.trace(`Write ${outData.length} bytes: ${this.hexConvert(outData)}`);
            }
            await writer.write(outData);
            writer.releaseLock();
        }
    }
    /**
     * Append a buffer array after another buffer array
     * @param {Uint8Array} arr1 - First array buffer.
     * @param {Uint8Array} arr2 - magic hex number to select ROM.
     * @returns {Uint8Array} Return a 8 bit unsigned array.
     */
    appendArray(arr1, arr2) {
        const combined = new Uint8Array(arr1.length + arr2.length);
        combined.set(arr1);
        combined.set(arr2, arr1.length);
        return combined;
    }
    // Asynchronous generator to yield incoming data chunks
    async *readLoop(timeout) {
        if (!this.reader)
            return;
        try {
            while (true) {
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Read timeout exceeded")), timeout));
                // Await the race between the timeout and the reader read
                const result = await Promise.race([this.reader.read(), timeoutPromise]);
                // If a timeout occurs, result will be null; otherwise, it will have { value, done }
                if (result === null)
                    break;
                const { value, done } = result;
                if (done || !value)
                    break;
                yield value; // Yield each data chunk
            }
        }
        catch (error) {
            console.error("Error reading from serial port:", error);
        }
        finally {
            this.buffer = new Uint8Array(0);
        }
    }
    // Read a specific number of bytes
    async newRead(numBytes, timeout) {
        if (this.buffer.length >= numBytes) {
            const output = this.buffer.slice(0, numBytes);
            this.buffer = this.buffer.slice(numBytes); // Remove the returned data from buffer
            return output;
        }
        while (this.buffer.length < numBytes) {
            const readLoop = this.readLoop(timeout);
            const { value, done } = await readLoop.next();
            if (done || !value) {
                break;
            }
            // Append the newly read data to the buffer
            this.buffer = this.appendArray(this.buffer, value);
        }
        // Return as much data as possible
        const output = this.buffer.slice(0, numBytes);
        this.buffer = this.buffer.slice(numBytes);
        return output;
    }
    async flushInput() {
        var _a;
        if (this.reader && !(await this.reader.closed)) {
            await this.reader.cancel();
            this.reader.releaseLock();
            this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
        }
    }
    async flushOutput() {
        var _a, _b;
        this.buffer = new Uint8Array(0);
        await ((_a = this.device.writable) === null || _a === void 0 ? void 0 : _a.getWriter().close());
        (_b = this.device.writable) === null || _b === void 0 ? void 0 : _b.getWriter().releaseLock();
    }
    // `inWaiting` returns the count of bytes in the buffer
    inWaiting() {
        return this.buffer.length;
    }
    /**
     * Detect if the data read from device is a Fatal or Guru meditation error.
     * @param {Uint8Array} input Data read from device
     */
    detectPanicHandler(input) {
        const guruMeditationRegex = /G?uru Meditation Error: (?:Core \d panic'ed \(([a-zA-Z ]*)\))?/;
        const fatalExceptionRegex = /F?atal exception \(\d+\): (?:([a-zA-Z ]*)?.*epc)?/;
        const inputString = new TextDecoder("utf-8").decode(input);
        const match = inputString.match(guruMeditationRegex) || inputString.match(fatalExceptionRegex);
        if (match) {
            const cause = match[1] || match[2];
            const msg = `Guru Meditation Error detected${cause ? ` (${cause})` : ""}`;
            throw new Error(msg);
        }
    }
    /**
     * Take a data array and return the first well formed packet after
     * replacing the escape sequence. Reads at least 8 bytes.
     * @param {number} timeout Timeout read data.
     * @yields {Uint8Array} Formatted packet using SLIP escape sequences.
     */
    async *read(timeout) {
        var _a;
        if (!this.reader) {
            this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
        }
        let partialPacket = null;
        let isEscaping = false;
        let successfulSlip = false;
        while (true) {
            const waitingBytes = this.inWaiting();
            const readBytes = await this.newRead(waitingBytes > 0 ? waitingBytes : 1, timeout);
            if (!readBytes || readBytes.length === 0) {
                const msg = partialPacket === null
                    ? successfulSlip
                        ? "Serial data stream stopped: Possible serial noise or corruption."
                        : "No serial data received."
                    : `Packet content transfer stopped`;
                this.trace(msg);
                throw new Error(msg);
            }
            this.trace(`Read ${readBytes.length} bytes: ${this.hexConvert(readBytes)}`);
            let i = 0; // Track position in readBytes
            while (i < readBytes.length) {
                const byte = readBytes[i++];
                if (partialPacket === null) {
                    if (byte === this.SLIP_END) {
                        partialPacket = new Uint8Array(0); // Start of a new packet
                    }
                    else {
                        this.trace(`Read invalid data: ${this.hexConvert(readBytes)}`);
                        const remainingData = await this.newRead(this.inWaiting(), timeout);
                        this.trace(`Remaining data in serial buffer: ${this.hexConvert(remainingData)}`);
                        this.detectPanicHandler(new Uint8Array([...readBytes, ...(remainingData || [])]));
                        throw new Error(`Invalid head of packet (0x${byte.toString(16)}): Possible serial noise or corruption.`);
                    }
                }
                else if (isEscaping) {
                    isEscaping = false;
                    if (byte === this.SLIP_ESC_END) {
                        partialPacket = this.appendArray(partialPacket, new Uint8Array([this.SLIP_END]));
                    }
                    else if (byte === this.SLIP_ESC_ESC) {
                        partialPacket = this.appendArray(partialPacket, new Uint8Array([this.SLIP_ESC]));
                    }
                    else {
                        this.trace(`Read invalid data: ${this.hexConvert(readBytes)}`);
                        const remainingData = await this.newRead(this.inWaiting(), timeout);
                        this.trace(`Remaining data in serial buffer: ${this.hexConvert(remainingData)}`);
                        this.detectPanicHandler(new Uint8Array([...readBytes, ...(remainingData || [])]));
                        throw new Error(`Invalid SLIP escape (0xdb, 0x${byte.toString(16)})`);
                    }
                }
                else if (byte === this.SLIP_ESC) {
                    isEscaping = true;
                }
                else if (byte === this.SLIP_END) {
                    this.trace(`Received full packet: ${this.hexConvert(partialPacket)}`);
                    this.buffer = this.appendArray(this.buffer, readBytes.slice(i));
                    yield partialPacket;
                    partialPacket = null;
                    successfulSlip = true;
                }
                else {
                    partialPacket = this.appendArray(partialPacket, new Uint8Array([byte]));
                }
            }
        }
    }
    /**
     * Read from serial device without slip formatting.
     * @yields {Uint8Array} The next number in the Fibonacci sequence.
     */
    async *rawRead() {
        if (!this.reader)
            return;
        try {
            while (true) {
                const { value, done } = await this.reader.read();
                if (done || !value)
                    break;
                if (this.tracing) {
                    console.log("Raw Read bytes");
                    this.trace(`Read ${value.length} bytes: ${this.hexConvert(value)}`);
                }
                yield value; // Yield each data chunk
            }
        }
        catch (error) {
            console.error("Error reading from serial port:", error);
        }
        finally {
            this.buffer = new Uint8Array(0);
        }
    }
    /**
     * Send the RequestToSend (RTS) signal to given state
     * # True for EN=LOW, chip in reset and False EN=HIGH, chip out of reset
     * @param {boolean} state Boolean state to set the signal
     */
    async setRTS(state) {
        await this.device.setSignals({ requestToSend: state });
        // # Work-around for adapters on Windows using the usbser.sys driver:
        // # generate a dummy change to DTR so that the set-control-line-state
        // # request is sent with the updated RTS state and the same DTR state
        // Referenced to esptool.py
        await this.setDTR(this._DTR_state);
    }
    /**
     * Send the dataTerminalReady (DTS) signal to given state
     * # True for IO0=LOW, chip in reset and False IO0=HIGH
     * @param {boolean} state Boolean state to set the signal
     */
    async setDTR(state) {
        this._DTR_state = state;
        await this.device.setSignals({ dataTerminalReady: state });
    }
    /**
     * Connect to serial device using the Webserial open method.
     * @param {number} baud Number baud rate for serial connection. Default is 115200.
     * @param {typeof import("w3c-web-serial").SerialOptions} serialOptions Serial Options for WebUSB SerialPort class.
     */
    async connect(baud = 115200, serialOptions = {}) {
        var _a;
        await this.device.open({
            baudRate: baud,
            dataBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.dataBits,
            stopBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.stopBits,
            bufferSize: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.bufferSize,
            parity: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.parity,
            flowControl: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.flowControl,
        });
        this.baudrate = baud;
        this.reader = (_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.getReader();
    }
    async sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * Wait for a given timeout ms for serial device unlock.
     * @param {number} timeout Timeout time in milliseconds (ms) to sleep
     */
    async waitForUnlock(timeout) {
        while ((this.device.readable && this.device.readable.locked) ||
            (this.device.writable && this.device.writable.locked)) {
            await this.sleep(timeout);
        }
    }
    /**
     * Disconnect from serial device by running SerialPort.close() after streams unlock.
     */
    async disconnect() {
        var _a, _b;
        if ((_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.locked) {
            await ((_b = this.reader) === null || _b === void 0 ? void 0 : _b.cancel());
        }
        await this.waitForUnlock(400);
        await this.device.close();
        this.reader = undefined;
    }
}
export { Transport };
