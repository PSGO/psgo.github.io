var i = 0;

function go() {
      document.getElementById("psip").style.visibility = "hidden";
      document.getElementById("psip").value = "localhost";
      document.getElementById("cb").style.visibility = "hidden";
      removeOptions(document.getElementById("cb"));
}


function addOption(selectbox,text,value )

  {var optn = document.createElement("OPTION");

  optn.text = text;

  optn.value = value;

  selectbox.options.add(optn);

}

function removeOptions(selectElement) {
  var i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
     selectElement.remove(i);
  }
}


var getPayload = function(payload, onLoadEndCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', payload);
  xhr.send();
  xhr.responseType = "arraybuffer";
  xhr.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(xhr, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.send(data);

  xhr.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(xhr, event);
  };
}

function LoadviaGoldhen(PLfile){
  var PS4IP = document.getElementById("psip").value;
		var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://${PS4IP}:9090/status`);
		xhr.send();
		xhr.onerror = function(){
			alert("加载错误 , 请先到系统设置中顶部的GoldHEN插件，启用binloader服务 ");
			return;
		};
		xhr.onload = function(){
			var responseJson = JSON.parse(xhr.responseText);
			if (responseJson.status=="ready"){
		  getPayload(PLfile, function (xhr) {
				if ((xhr.status === 200 || xhr.status === 304) && xhr.response) {
				   //Sending bins via IP POST Method
           sendPayload(`http://${PS4IP}:9090`, xhr.response, function (xhr) {
            if (xhr.status === 200) {
              msgs2.innerHTML="加载完成";
					   }else{
               alert("找不到载荷文件");
               return;
              }
					})
				}
			});
			}
			else {
				alert("无法加载有效载荷，因为 binloader 服务器未启用");
				return;
			}
		};
	}
