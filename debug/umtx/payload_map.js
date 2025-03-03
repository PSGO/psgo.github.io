// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/pacbrew-repo/actions/runs/12400108209",
    //     version: "?",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    // etaHEN is added twice so that on 1.xx-2.xx you can load it in webkit only mode too
    // but on 3.xx-4.xx it only shows in kernel exploit mode since it needs the 9020 elf loader for kstuff
    {
        displayTitle: "Byepervisor HEN",
        description: "FPKG enabler",
        fileName: "byepervisor.elf",
        author: "SpecterDev, ChendoChap, flatz, fail0verflow, Znullptr, kiwidog, sleirsgoevy, EchoStretch, LightningMods, BestPig, zecoxao", 
        projectSource: "https://github.com/EchoStretch/Byepervisor",
        binarySource: "https://github.com/EchoStretch/Byepervisor/actions/runs/12567456429",
        version: "47a6ae7",
        supportedFirmwares: ["1.00", "1.01", "1.02", "1.12", "1.14", "2.00", "2.20", "2.25", "2.26", "2.30", "2.50", "2.70"],
        toPort: 9021
    },
    {
        displayTitle: "ftpsrv",
        description: "Uses john-tornblom's elfldr. FTP server. Runs on port 2121.",
        fileName: "ftpsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/ftpsrv/releases/tag/v0.11.1",
        version: "0.11.1",
        toPort: 9021
    },
    {
        displayTitle: "klogsrv",
        description: "Uses john-tornblom's elfldr. Klog server. Runs on port 3232.",
        fileName: "klogsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/klogsrv",
        binarySource: "https://github.com/ps5-payload-dev/klogsrv/releases/tag/v0.5.1",
        version: "0.5.1",
        toPort: 9021
    },
    {
        displayTitle: "shsrv",
        description: "Uses john-tornblom's elfldr. Telnet shell server. Runs on port 2323.",
        fileName: "shsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/shsrv",
        binarySource: "https://github.com/ps5-payload-dev/shsrv/releases/tag/v0.13",
        version: "0.13",
        toPort: 9021
    },
    {
        displayTitle: "gdbsrv",
        description: "Uses john-tornblom's elfldr. GDB server. Runs on port 2159.",
        fileName: "gdbsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/gdbsrv",
        binarySource: "https://github.com/ps5-payload-dev/gdbsrv/releases/tag/v0.5",
        version: "0.5",
        toPort: 9021
    }
];
