
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if ( r != null ){
       return decodeURI(r[2]);
    }else{
       return null;
    } 
}

function RequestByToken(AToken,AName,AParamNames,AParamValues) {
//	console.log('Param:'+AToken);
var dataXML = '<?xml version="1.0" encoding="utf-8"?>'; 
dataXML = dataXML +'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; 
dataXML = dataXML +'<soap:Header>' 
                  +'<Certificate xmlns="http://bohansever.top/">'
                  +'<token>'+AToken+'</token>'
                  +'<language>simple-chinese</language>'
                  +'</Certificate>' 
                  +'</soap:Header>';
dataXML = dataXML +'<soap:Body>'
                  +'<'+AName+' xmlns="http://bohansever.top/">';
if (AParamNames.length > 0) {
	for(var i = 0; i < AParamNames.length; i++) {
		//console.log(AParamValues[i]);
		dataXML = dataXML + '<' + AParamNames[i] + '>' + AParamValues[i] + '</' + AParamNames[i] + '>';
	}
}
dataXML = dataXML +'</'+AName+'>';
dataXML = dataXML + '</soap:Body>'; 
dataXML = dataXML + '</soap:Envelope>';
//console.log(dataXML);
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
//		  xmlhttp.setRequestHeader("loadName",LoadName);  
	},
	success: function(data) {
        	var dataStr = $(data).find(AName+"Result").text();
        	console.log(dataStr);
        var obj = JSON.parse(dataStr);// 数据转换JSON
          console.log(obj);
        var Str = obj.content;
//      console.log(Str);
//      console.log(typeof Str);
//      console.log(Str instanceof String);
//      console.log(Str instanceof Array);
//      console.log(Str.length);
         if (obj.statusCode == 0)
         {
          	if (Str instanceof Array)
            {
//            	  console.log(Str.length);
            	  for(var key in Str) {
//          	  	 console.log(Str[key]);
            	  	 Arr.push(Str[key]);
           	  }
            } 
            else
            {
              	Arr = Str.split(',');
            }
         }
         else if (obj.statusCode == 2)
         {
            alert("登录超时，请重新登录");
            $.removeCookie('userToken', { path: '/' }); // => true//通过传递null作为cookie的值即可
            window.location.href="../login/index.html";//指向登录的页面地址
         }
        
	},
	error: function() {
		console.log('Failed');
	},
	async:false // false 同步
});

return Arr;
}


function CaculateCS (AData) {
	var cs = -1;
	var len = AData.length/2;
	//console.log(len);
	var tempStr = '';
	var tempCS = 0;
	var tempInt = 0;
	if (AData.length % 2 == 0) {
		cs = 0;
		for (i = 0; i < len; i++) {
			tempStr = AData.substring(2*i, 2*(i+1));
			//console.log(tempStr);
			tempInt = parseInt(tempStr, 16);
			//console.log('>>>>>>>>'+tempInt);
			cs = cs + tempInt;
		}
		cs = cs & 255; //取低位1个字节
	}
	return cs;
}
