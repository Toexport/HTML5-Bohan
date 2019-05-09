
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


//var USERTOKEN = $.cookie('userToken');
//var req = RequestByToken(USERTOKEN);
//
//function RequestByToken(AToken) {
//	console.log('Param:'+AToken);
//var dataXML = '<?xml version="1.0" encoding="utf-8"?>'; 
//dataXML = dataXML +'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; 
//dataXML = dataXML +'  <soap:Header>' 
//                +'<Certificate xmlns="http://bohansever.top/">'
//                +'<token>'+AToken+'</token>' 
//                +'<language>simple-chinese</language>'
//                +'</Certificate>' 
//                +'</soap:Header>';
//dataXML = dataXML +'<soap:Body>'
//                +'<GetUserDeviceList xmlns="http://bohansever.top/" />' 
//                + '</soap:Body>'; 
//dataXML = dataXML + '</soap:Envelope>';
//
//var URLAddr ="http://www.bohanserver.top:8088/webservice.asmx?op=GetLoadNameList";
//var xmlhttp;
//if (window.XMLHttpRequest)
//{
//	xmlhttp = new XMLHttpRequest();
//}
//else
//{
//	xmlhttp = new ActiveXObject("Micosoft.xmlhttp");	
//}

$.ajax({
	type:"POST",
	url:URLAddr+AName,
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
         console.log(dataStr);
        var obj = JSON.parse(dataStr);// 数据转换JSON
        var Str = obj.content;
         if (obj.statusCode == 2)
         {
            alert("登录超时，请重新登录");
            $.removeCookie('userToken', { path: '/' }); // => true//通过传递null作为cookie的值即可
            window.location.href="/Bohan/Html/login/index.html";//指向登录的页面地址
         }
         
        var Arr = Str.split(',');
        for (var i = 0; i < Arr.length; i++) 
        {
           var item = Arr[i];
           console.log(item);
           
//         var data = $('sidebox').append("<p>"+item+"</p>");
//         console.log(data);
           document.getElementById('sidebox').innerHTML = item;
//       var td=document.createElement("td");  //新建一个元素节点td          
//       var node=document.createTextNode(result.inforesult[i].secret_content);//新建文本节点储存后端返回的信息并把返回信息赋给变量node
//       td.appendChild(node);     //在元素td上新增子节点，内容为node
//       var tr=document.getElementById("sidebox");	//找到td的父节点tr
//       tr.appendChild(td) ;    //为父节点tr新增子节点td

    }
	},
	error: function() {
		console.log('Failed');
	},
	async:true
});
}

