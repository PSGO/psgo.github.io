# Javascript implementation of esptool

This is a modification of https://github.com/espressif/esptool-js for the K6BP Rigcontrol
project. It is different from the Espressif esptool-js in that:
* The connection dialogue only presents devices with a CP2102 Serial to USB adapter which has a USB vendor ID of 0x10c4 and product ID of 0xea60. This corresponds to an ESP32 plugged in to USB. The CP2102 can be configured with a user-unique USB ID, but the ESP32 uses the Silicon Labs generic ID for the chip. The Espressif version of this tool presents every serial port in your system, which can be confusing for the naive user.
* The program recovers better from a failure to open a device.
* The program is more robust about device disconnection. It detects when the device is unplugged from USB. It attempts to disconnect the device when the web page is unloaded.
* The web page is more space-efficient.

This program is derived from the Espressif origin/gh-pages branch, not the newest branch,
as the newest branch doesn't work on my hardware (or at all, for all I know) and I can't
debug it without more knowledge of the ESP32 serial programmer protocol.

This repository contains a Javascript implementation of [esptool](https://github.com/espressif/esptool), a serial flasher utility for Espressif chips. Unlike the Python-based esptool, `esptool-js` doesn't implement generation of binary images out of ELF files, and doesn't include companion tools similar to [espefuse.py](https://github.com/espressif/esptool/wiki/espefuse) and [espsecure.py](https://github.com/espressif/esptool/wiki/espsecure).

`esptool-js` is based on [Web Serial API](https://wicg.github.io/serial/) and works in Google Chrome and Microsoft Edge, [version 89 or later](https://developer.mozilla.org/en-US/docs/Web/API/Serial#browser_compatibility).

## Live demo

Visit https://espressif.github.io/esptool-js/ to see this tool in action.

## Testing it locally

```
npm install
python3 -m http.server 8008
```

Then open http://localhost:8008 in Chrome or Edge.

## License

The code in this repository is Copyright (c) 2021 Espressif Systems (Shanghai) Co. Ltd. It is licensed under Apache 2.0 license, as described in [LICENSE](LICENSE) file.
