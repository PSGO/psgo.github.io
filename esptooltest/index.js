console.log("Index.js 4");
const baudrates = document.getElementById("baudrates");
const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const resetButton = document.getElementById("resetButton");
const consoleStartButton = document.getElementById("consoleStartButton");
const consoleStopButton = document.getElementById("consoleStopButton");
const eraseButton = document.getElementById("eraseButton");
const programButton = document.getElementById("programButton");
const filesDiv = document.getElementById("files");
const terminal = document.getElementById("terminal");
const programDiv = document.getElementById("program");
const consoleDiv = document.getElementById("console");
const lblBaudrate = document.getElementById("lblBaudrate");
const lblConnTo = document.getElementById("lblConnTo");
const tableBody = document.getElementById("tableBody");
const table = document.getElementById('fileTable');
const alertDiv = document.getElementById('alertDiv');

//import { Transport } from './cp210x-webusb.js'
import { Transport } from './webserial.js?a=1'
import { ESPLoader } from './ESPLoader.js'
import { ESPError } from './error.js'

let term = new Terminal({cols:120, rows:40});
term.open(terminal);

let device = null;
let transport;
let chip = null;
let esploader;
let file1 = null;
let connected = false;
let index = 1;
let pollSerialInterval;

disconnectButton.style.display = "none";
eraseButton.style.display = "none";
consoleStopButton.style.display = "none";
filesDiv.style.display = "none";


function convertUint8ArrayToBinaryString(u8Array) {
	var i, len = u8Array.length, b_str = "";
	for (i=0; i<len; i++) {
		b_str += String.fromCharCode(u8Array[i]);
	}
	return b_str;
}

function convertBinaryStringToUint8Array(bStr) {
	var i, len = bStr.length, u8_array = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		u8_array[i] = bStr.charCodeAt(i);
	}
	return u8_array;
}

function handleFileSelect(evt) {
    var file = evt.target.files[0];

    if (!file) return;

    var reader = new FileReader();

    reader.onload = (function(theFile) {
        return function(e) {
            file1 = e.target.result;
            evt.target.data = file1;
        };
    })(file);

    reader.readAsBinaryString(file);
}

function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function pollSerialStart() {
  if (!pollSerialInterval) {
    pollSerialInterval = setInterval(pollSerial, 100);
  }
}

function pollSerialStop() {
  if (!pollSerialInterval) {
    clearInterval(pollSerialInterval);
    pollSerialInterval = null;
  }
}

async function pollSerial(e)
{
    if (pollSerialInterval) {
        console.log("pollSerial");
        if (device.readable) {
            let val = await transport.rawRead();
            if (typeof val !== 'undefined') {
                term.write(val);
            } else {
                cleanUp();
            }
        }
    }
}

connectButton.onclick = async () => {
//    device = await navigator.usb.requestDevice({
//        filters: [{ vendorId: 0x10c4 }]
//    });

    const options = {
      filters: [
        // This is the vendor and product ID for generic CP2102 serial-to-USB adapter
        // chips, and matches the ESP32 Audio Kit. Although Silicon Labs will sell unique
        // USB product IDs to customers, one is not used for the ESP32 Audio Kit.
        // The physical chip is probably a Chinese CP201 clone, rather than the Silicon
        // Labs one.
        //
        // Because the CP201 USB ID is so generic, this will also attach all manner
        // of IoT and Arduino devices.
        { usbVendorId: 0x10c4, usbProductId: 0xea60 }
      ]
    };
    if (device === null) {
        try {
            device = await navigator.serial.requestPort(options);
            transport = new Transport(device);
            device.addEventListener('disconnect', cleanUp);
            navigator.serial.addEventListener('disconnect', cleanUp);
            esploader = new ESPLoader(transport, baudrates.value, term);
            connected = true;
    
            chip = await esploader.main_fn();
    
            // Temporarily broken
            // await esploader.flash_id();

            console.log("Settings done for :" + chip);
            lblBaudrate.style.display = "none";
            lblConnTo.innerHTML = "Connected to device: " + chip;
            lblConnTo.style.display = "block";
            baudrates.style.display = "none";
            connectButton.style.display = "none";
            disconnectButton.style.display = "initial";
            eraseButton.style.display = "initial";
            resetButton.style.display = "initial";
            filesDiv.style.display = "initial";
            consoleDiv.style.display = "none";

            // pollSerialStart();
        } catch(e) {
            console.error(e);
            term.writeln(`Error: ${e.message}`);
            cleanUp();
            return;
        }
    }
}

resetButton.onclick = async () => {
    console.log("Reset");
    if (device === null) {
        device = await navigator.serial.requestPort({
        });
        transport = new Transport(device);
    }

    await transport.setDTR(false);
    await new Promise(resolve => setTimeout(resolve, 100));
    await transport.setDTR(true);
}

eraseButton.onclick = async () => {
    eraseButton.disabled = true;
    try{
        await esploader.erase_flash();
    } catch (e) {
        console.error(e);
        term.writeln(`Error: ${e.message}`);
    } finally {
        eraseButton.disabled = false;
    }
}

addFile.onclick = () => {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    //Column 1 - Offset
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "text";
    element1.id = "offset" + rowCount;
    element1.value = '0x1000';
    cell1.appendChild(element1);
    
    // Column 2 - File selector
    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "file";
    element2.id = "selectFile" + rowCount;
    element2.name = "selected_File" + rowCount;
    element2.addEventListener('change', handleFileSelect, false);
    cell2.appendChild(element2);
    
    // Column 3  - Progress
    var cell3 = row.insertCell(2);
    cell3.classList.add("progress-cell");
    cell3.style.display = 'none'
    cell3.innerHTML = `<progress value="0" max="100"></progress>`;

    // Column 4  - Remove File
    var cell4 = row.insertCell(3);
    cell4.classList.add('action-cell');
    if (rowCount > 1) {
        var element4 = document.createElement("input");
        element4.type = "button";
        var btnName = "button" + rowCount;
        element4.name = btnName;
        element4.setAttribute('class', "btn");
        element4.setAttribute('value', 'Remove'); // or element1.value = "button";
        element4.onclick = function() {
                removeRow(row);
        }
        cell4.appendChild(element4);
    }
}

function removeRow(row) {
    const rowIndex = Array.from(table.rows).indexOf(row);
    table.deleteRow(rowIndex);
}

// to be called on disconnect - remove any stale references of older connections if any
function cleanUp() {
    if (device) {
        console.log("Disconnected.");
        term.writeln("Disconnected.");
        transport.disconnect();
        device.forget();
        device = null;
        transport = null;
        chip = null;
        connected = false;
        baudrates.style.display = "initial";
        connectButton.style.display = "initial";
        disconnectButton.style.display = "none";
        eraseButton.style.display = "none";
        resetButton.style.display = "none";
        lblConnTo.style.display = "none";
        filesDiv.style.display = "none";
        alertDiv.style.display = "none";
        consoleDiv.style.display = "initial";
        pollSerialStop();
    }
}

disconnectButton.onclick = async () => {
    if(transport)
        await transport.disconnect();

    term.clear();
    cleanUp();
};

consoleStartButton.onclick = async () => {
    if (device === null) {
        device = await navigator.serial.requestPort({
        });
        transport = new Transport(device);
    }
    lblConsoleFor.style.display = "block";
    consoleStartButton.style.display = "none";
    consoleStopButton.style.display = "initial";
    programDiv.style.display = "none";

    await transport.connect();

    while (true) {
        let val = await transport.rawRead();
        if (typeof val !== 'undefined') {
            term.write(val);
        } else {
            break;
        }
    }
    console.log("quitting console");
}

consoleStopButton.onclick = async () => {
    await transport.disconnect();
    term.clear();
    consoleStartButton.style.display = "initial";
    consoleStopButton.style.display = "none";
    programDiv.style.display = "initial";
}

function validate_program_inputs() {
    let offsetArr = []
    var rowCount = table.rows.length;
    var row;
    let offset = 0;
    let fileData = null;
 
    // check for mandatory fields
    for (let index = 1; index < rowCount; index ++) {
        row = table.rows[index];

        //offset fields checks
        var offSetObj = row.cells[0].childNodes[0];
        offset = parseInt(offSetObj.value);

        // Non-numeric or blank offset
        if (Number.isNaN(offset))
            return "Offset field in row " + index + " is not a valid address!"
        // Repeated offset used
        else if (offsetArr.includes(offset))
            return "Offset field in row " + index + " is already in use!";
        else
            offsetArr.push(offset);

        var fileObj = row.cells[1].childNodes[0];
        fileData = fileObj.data;
        if (fileData == null)
            return "No file selected for row " + index + "!";

    }
    return "success"
}

programButton.onclick = async () => {
    const alertMsg = document.getElementById("alertmsg");
    const err = validate_program_inputs();

    if (err != "success") {
        alertMsg.innerHTML = "<strong>" + err + "</strong>";
        alertDiv.style.display = "block";
        return;
    }

    // Hide error message
    alertDiv.style.display = "none";

    const fileArray = [];
    const progressBars = [];

    for (let index = 1; index < table.rows.length; index++) {
        const row = table.rows[index];

        const offSetObj = row.cells[0].childNodes[0];
        const offset = parseInt(offSetObj.value);

        const fileObj = row.cells[1].childNodes[0];
        const progressBar = row.cells[2].childNodes[0];

        progressBar.value = 0;
        progressBars.push(progressBar);

        row.cells[2].style.display = "initial";
        row.cells[3].style.display = "none";

        fileArray.push({data:fileObj.data, address:offset});
    }

    try {
        await esploader.write_flash({
            fileArray,
            flash_size: 'keep',
            reportProgress(fileIndex, written, total) {
                progressBars[fileIndex].value = written / total * 100;
            },
            calculateMD5Hash: (image) => CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)),
        });
    } catch (e) {
        console.error(e);
        term.writeln(`Error: ${e.message}`);
    } finally {
        // Hide progress bars and show erase buttons
        for (let index = 1; index < table.rows.length; index++) {
            table.rows[index].cells[2].style.display = "none";
            table.rows[index].cells[3].style.display = "initial";
        }
    }
}

// Attempt to close an open serial device before unloading the page, because
// the browser sometimes seems to leave it open, and then we can't open the
// device again.
addEventListener('beforeunload', cleanUp);
addEventListener('unload', cleanUp);

addFile.onclick();
