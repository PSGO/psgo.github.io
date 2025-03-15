// Payloads

// Dumpers

function load_AppDumper(){
    PLfile = "appdumper.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_KernelDumper(){
    PLfile = "kerneldumper.bin";
    LoadpaylodsGhen20(PLfile);
}


// Tools

function load_PS4Debug(){
    PLfile = "ps4debug.bin";
    Pay = PLfile;
    LoadpaylodsGhen20(PLfile);
}

function load_App2USB(){
    PLfile = "app2usb.bin";
    Pay = PLfile;
    LoadpaylodsGhen20(PLfile);
}


function load_BackupDB(){
    PLfile = "backupdb.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_RestoreDB(){
    PLfile = "exitidu.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_DisableASLR(){
    PLfile = "disableaslr.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_DisableUpdates(){
    PLfile = "disableupdates.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_EnableUpdates(){
    PLfile = "enbaleupdates.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_ExitIDU(){
    PLfile = "exitidu.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_FTP(){
    PLfile = "ftp.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_HistoryBlocker(){
    PLfile = "historyblocker.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_RIFRenamer(){
    PLfile = "rifrenamer.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_Orbis(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/Tools/Orbis-Toolbox-${firm}.bin`;
    LoadpaylodsGhen20(PLfile);
}

// Linux

function load_Linux(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');

    PLfile = `../Bins/Linux/LinuxLoader-${firm}.bin`;

    LoadpaylodsGhen20(PLfile);

}

function load_Linux2gb(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/Linux/LinuxLoader-${firm}-2gb.bin`;
    LoadpaylodsGhen20(PLfile);


}

function load_Linux3gb(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/Linux/LinuxLoader-${firm}-3gb.bin`;

    LoadpaylodsGhen20(PLfile);  

}

function load_Linux4gb(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/Linux/LinuxLoader-${firm}-4gb.bin`;

    LoadpaylodsGhen20(PLfile);  

}

function load_Linux5gb(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/Linux/LinuxLoader-${firm}-5gb.bin`;

    LoadpaylodsGhen20(PLfile);  

}

// Mod Menu

// GTA

function load_GTAArbic(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/GTA/gtava1-${firm}.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_GTAArbic3(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/GTA/gtava3-${firm}.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_GTAL(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/GTA/gtavl-${firm}.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_GTABQ(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/GTA/gtavbq133-${firm}.bin`;
    LoadpaylodsGhen20(PLfile);
}

// RDR2

function load_Oysters113(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/RDR2/Oysters-FREE-1.13.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Oysters119(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/RDR2/Oysters-FREE-1.19.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Oysters124(){
    var firm = document.getElementById("cb").value;
    firm = firm.replace('.', '');
    PLfile = `../Bins/RDR2/Oysters-FREE-1.24.bin`;
    LoadpaylodsGhen20(PLfile);
}