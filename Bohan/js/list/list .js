
// 獲取參數
//function getQueryString(token) {
//	console.log(token);
//          var reg = new RegExp("(^|&)" + token + "=([^&]*)(&|$)", "i");
//          var r = location.search.substr(1).match(reg);
//          if (r != null){
//          	return unescape(decodeURI(r[2]));
//          }else {
//          	return null;
//          }  
//}

//var Token = getQueryString('content');
//console.log("List页面："+Token);// 登录成功后拿到的参数
//if (Token == null) {
//	window.location.href="/Bohan/Html/login/index.html";//指向登录的页面地址
//}


var userToken = .$cookie('userToken');
var req = RequestByToken(userToken);

function RequestByToken(AToken) {
	console.log('Param:'+AToken);
var dataXML = '<?xml version="1.0" encoding="utf-8"?>'; 
dataXML = dataXML +'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; 
dataXML = dataXML +'  <soap:Header>' 
                  +'<Certificate xmlns="http://bohansever.top/">'
                  +'<token>'+AToken+'</token>' 
                  +'<language>simple-chinese</language>'
                  +'</Certificate>' 
                  +'</soap:Header>';
dataXML = dataXML +'<soap:Body>'
                  +'<GetUserDeviceList xmlns="http://bohansever.top/" />' 
                  + '</soap:Body>'; 
dataXML = dataXML + '</soap:Envelope>';
//console.log(dataXML);
var URLAddr="http://www.bohanserver.top:8088/webservice.asmx?op=GetLoadNameList";
var xmlhttp;
if (window.XMLHttpRequest)
{
	xmlhttp = new XMLHttpRequest();
}
else
{
	xmlhttp = new ActiveXObject("Micosoft.xmlhttp");	
}
$.ajax({
	type:"POST",
	url:URLAddr,
	dataType:"xml",
	contentType:"text/xml; charset=utf-8",
	data:dataXML,
	beforeSend: function(xmlhttp) {
		xmlhttp.setRequestHeader("SOAPAction",
		  "http://bohansever.top/GetLoadNameList");
		  xmlhttp.setRequestHeader("token",AToken);  
	},
	success: function(data) {
        	var dataStr = $(data).find("GetLoadNameListResult").text();
         console.log(dataStr );
	},
	error: function() {
		console.log('Failed');
	},
	async:true
});
}

