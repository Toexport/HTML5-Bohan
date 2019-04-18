//// 獲取參數
function getQueryString(token) {
	console.log(token);
            var reg = new RegExp("(^|&)" + token + "=([^&]*)(&|$)", "i");
            var r = location.search.substr(1).match(reg);
            if (r != null){
            	return unescape(decodeURI(r[2]));
            }else {
            	return null;
            }  
}
var Token = getQueryString('content');
console.log("List页面："+Token);// 登录成功后拿到的参数
if (Token == null) {
	window.location.href="/Bohan/Html/login/index.html";//指向登录的页面地址
}
var xmlhttp = new XMLHttpRequest();
function RequestByToken(AToken, APosName, ALoadName) {
//var data = '<?xml version="1.0" encoding="utf-8"?>'; 
var data =  '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; 
data = data +'  <soap:Header>' 
                +'<Certificate xmlns="http://bohansever.top/">'
                    +'<token>'+AToken+'</token>' 
                    +'<language>simple-chinese</language>'
                +'</Certificate>' 
            +'</soap:Header>';
data = data +'<soap:Body>'
                +'<GetLoadNameList xmlns="http://bohansever.top/">' 
//                 +'<PosName>'+APosName+'</PosName>'
//                 +'<LoadName>'+ALoadName+'</LoadName>'        
                +'</GetLoadNameList>'
           + '<soap:Body>'; 
data = data + '</soap:Envelope>';
//var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
var URL="http://www.bohanserver.top:8088/webservice.asmx";
xmlhttp.open("POST",URL, true); 
xmlhttp.setRequestHeader ("Content-Type","text/xml; charset=utf-8"); 
xmlhttp.setRequestHeader ("SOAPAction","http://www.bohanserver.top:8088/webservice.asmx/GetLoadNameList"); 
xmlhttp.onreadystatechange = callBack;
xmlhttp.send(data); 
//document.write(xmlhttp.responseText);
console.log(data);
}

function callBack() {
	if (xmlhttp.readyState == 4) {
		if(xmlhttp.status == 200) {
			var res = xmlhttp.responseXML;
			console.log(res);
		}
	}
}
var req = RequestByToken(Token, '', '');
