
function RequestByToken(AToken,AName) {
//	console.log('Param:'+AToken);
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

var URLAddr ="http://www.bohanserver.top:8088/webservice.asmx?op=";
var xmlhttp;
if (window.XMLHttpRequest)
{
	xmlhttp = new XMLHttpRequest();
}
else
{
	xmlhttp = new ActiveXObject("Micosoft.xmlhttp");	
}
var Arr = [];
$.ajax({
	type:"POST",
	url:URLAddr+AName,
	dataType:"xml",
	contentType:"text/xml; charset=utf-8",
	data:dataXML,
	beforeSend: function(xmlhttp) {
		xmlhttp.setRequestHeader("SOAPAction",
		  "http://bohansever.top/"+AName);
		  xmlhttp.setRequestHeader("token",AToken);  
	},
	success: function(data) {
        	var dataStr = $(data).find(AName+"Result").text();
        var obj = JSON.parse(dataStr);// 数据转换JSON
        var Str = obj.content;
//          console.log(Str);
         if (obj.statusCode == 0)
         {
          	 Arr = Str.split(',');
          } 
          else if (obj.statusCode == 2)
         {
            alert("登录超时，请重新登录");
            $.removeCookie('userToken', { path: '/' }); // => true//通过传递null作为cookie的值即可
            window.location.href="/Bohan/Html/login/index.html";//指向登录的页面地址
         }
	},
	error: function() {
		console.log('Failed');
	},
	async:false // false 同步
});
return Arr;

}
