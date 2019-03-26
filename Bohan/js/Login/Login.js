//function myFunction() {
//	// document.getElementById("demo").innerHTML="My First External JavaScript";
//	var name = document.getElementById("username").value;
//	var pwd = document.getElementById("password").value;
//	if (name == "") {
//		alert("用户名不能为空！");
//	} else if (pwd == "") {
//		alert("密码不能为空！");
//	} else if (pwd != "" && pwd.length < 6) {
//		alert("密码不能小于6位！");
//	} else if (name != "" && pwd != "" && pwd.length >= 6) {
//		
//		// 		if(name == "20180804" && pwd == "123456"){
//		// 			alert("登录成功！");
//		// 			window.location.href = "https://s.weibo.com/weibo/coloros6?topnav=1&wvr=6&b=1";
//		// 		}
//		// 		else{
//		// 			alert("用户名或密码错误！");
//		// 			window.location.href = "index.html";
//		// 		}
//
//		/*var user = $("input[type='radio']:checked").val();
//		var type = 0;
//		if(user == "学生"){
//			type = 0;
//		}
//		else if(user == "实习指导老师"){
//			type = 1;
//		}
//		else if(user == "项目负责人"){
//			type = 2;
//		}*/
//
//		var data = {
//			"username": name,
//			"password": pwd
//		};
//		document.getElementById("demo").innerHTML = "正在请求...";
//
//		var httpRequest = new XMLHttpRequest(); //第一步：创建需要的对象
//		httpRequest.open('POST', "http://1.youzhanmall.com/?mod=index&code=gyl_app_yzorder", true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
//		httpRequest.setRequestHeader("Content-type", "application/json"); //设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
//		httpRequest.send(JSON.stringify(data)); //发送请求 将json写入send中
//		/**
//		 * 获取数据后的处理程序
//		 */
//		httpRequest.onreadystatechange = function() { //请求后的回调接口，可将请求成功后要执行的程序写在其中
//			document.getElementById("demo").innerHTML = "数据回调";
//			// alert(httpRequest.status);
//			if (httpRequest.readyState == 4) { //验证请求是否发送成功
//				document.getElementById("demo").innerHTML = httpRequest.responseXML;
//				var json = httpRequest.responseText; //获取到服务端返回的数据
//				alert(json.valueOf("message"));
//				console.log(json);
//			}
//		};
//		// 		httpRequest.open('GET', "http://www.bohanserver.top:8088/webservice.asmx/Login?username=name&password=psw", true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
//		// 		httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
//		// 		/**
//		// 		 * 获取数据后的处理程序
//		// 		 */
//		// 		httpRequest.onreadystatechange = function() {
//		// 			document.getElementById("demo").innerHTML = "数据回调";
//		// 			if (httpRequest.readyState == 4 && httpRequest.status == 0) {
//		// 				document.getElementById("demo").innerHTML = "请求成功";
//		// 				var json = httpRequest.responseText; //获取到json字符串，还需解析
//		// 				console.log(json);
//		// 			}
//		// 		};
//
//		/*$.post("http://www.bohanserver.top:8088/webservice.asmx/Login", data, function(data, textStatus, xhr) {
//
//			if (textStatus == "success") {
//				if (data[0]["returnflag"] == "1") {
//					setCookie("user", name, 1);
//					setCookie("SESSIONID", data[0]["SESSIONID"], 1);
//					setCookie("type", type, 1);
//					switch (type) {
//						case 0:
//							window.location = "practice_system/html/StudentIndex.html";
//							break;
//						case 1:
//
//							window.location = "practice_system/html/TeacherIndex.html";
//							break;
//						case 2:
//
//							window.location = "practice_system/html/ProjectorIndex.html";
//							break;
//						default:
//							alert("未知错误!");
//							// statements_def
//							break;
//					}
//				} else {
//					alert("用户名或密码错误！");
//				}
//			} else {
//				alert("服务器错误！");
//			}
//		});*/
//
//	}
//}

function fnLogin() {
 var oUname = document.getElementById("uname")
 var oUpass = document.getElementById("upass")
 var oError = document.getElementById("error_box")
 var isError = true;
 if (oUname.value.length > 20 || oUname.value.length < 6) {
  oError.innerHTML = "用户名请输入6-20位字符";
  isError = false;
  return;
 }else if((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
  oError.innerHTML = "首字符必须为字母";
  return;
 }else for(var i=0;i<oUname.value.charCodeAt(i);i++){
  if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57) && (oUname.value.charCodeAt(i)<97)||(oUname.value.charCodeAt(i)>122)){
   oError.innerHTML = "必须为字母跟数字组成";
   return;
  }
 }
 
 if (oUpass.value.length > 20 || oUpass.value.length < 6) {
  oError.innerHTML = "密码请输入6-20位字符"
  isError = false;
  return;
 }
 window.alert("登录成功")
}

