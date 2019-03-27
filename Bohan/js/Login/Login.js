//function LoginFunction() {
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
////		 		if(name == "15118041624" && pwd == "123456789"){
//		 			alert("登录成功！");
//		 			window.location.href = "http://www.bohanserver.top:8088/webservice.asmx/Login";
//		 		}
//		 		else{
//		 			alert("用户名或密码错误！");
//		 			window.location.href = "index.html";
//		 		}

		/*var user = $("input[type='radio']:checked").val();
		var type = 0;
		if(user == "学生"){
			type = 0;
		}
		else if(user == "实习指导老师"){
			type = 1;
		}
		else if(user == "项目负责人"){
			type = 2;
		}*/

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
		/**
		 * 获取数据后的处理程序
		 */
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
		// 		httpRequest.open('GET', "http://www.bohanserver.top:8088/webservice.asmx/Login?username=name&password=psw", true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
		// 		httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
		// 		/**
		// 		 * 获取数据后的处理程序
		// 		 */
		// 		httpRequest.onreadystatechange = function() {
		// 			document.getElementById("demo").innerHTML = "数据回调";
		// 			if (httpRequest.readyState == 4 && httpRequest.status == 0) {
		// 				document.getElementById("demo").innerHTML = "请求成功";
		// 				var json = httpRequest.responseText; //获取到json字符串，还需解析
		// 				console.log(json);
		// 			}
		// 		};

		/*$.post("http://www.bohanserver.top:8088/webservice.asmx/Login", data, function(data, textStatus, xhr) {

			if (textStatus == "success") {
				if (data[0]["returnflag"] == "1") {
					setCookie("user", name, 1);
					setCookie("SESSIONID", data[0]["SESSIONID"], 1);
					setCookie("type", type, 1);
					switch (type) {
						case 0:
							window.location = "practice_system/html/StudentIndex.html";
							break;
						case 1:

							window.location = "practice_system/html/TeacherIndex.html";
							break;
						case 2:

							window.location = "practice_system/html/ProjectorIndex.html";
							break;
						default:
							alert("未知错误!");
							// statements_def
							break;
					}
				} else {
					alert("用户名或密码错误！");
				}
			} else {
				alert("服务器错误！");
			}
//		});*/
//
//	}
//}

//function LoginFunction() {
//	var name = document.getElementById("username").value;
//	var pwd = document.getElementById("password").value;
//	if (name == "");
//}


//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
function LoginFunction(){
    var name = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
	  alert("name");
    if(name == null || name == "" || name == undefined){
//      showMsg("请输入用户名");
        alert("用户名不能为空！");
        form.username.focus ();
        console.log("name");
        return false;
    }else  if(pwd == null || pwd == "" || pwd == undefined){
        showMsg("请输入密码");
        form.password.focus ();
        return false;
    }
这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
   $.ajax({
//      url : systemURL,// 获取自己系统后台用户信息接口
        url: "http://www.bohanserver.top:8088/webservice.asmx/Login"
        data :{"password":pass,"username":user},
        type : "GET",
        dataType: "json",
        success : function(data) {
            if (data){
                if (data.code == "1111") { //判断返回值，这里根据的业务内容可做调整
                        setTimeout(function () {//做延时以便显示登录状态值
                           showMsg("正在登录中...");
                           console.log(data);
//                         window.location.href =  url;//指向登录的页面地址
                          window.location.href = "http://www.bohanserver.top:8088/webservice.asmx/Login";
                       },100)
                    } else {
                        showMsg(data.message);//显示登录失败的原因
                        return false;
                    }
                }
            },
            error : function(data){
                showMsg(data.message);
            }
    });
}

//错误信息提醒
function showMsg(msg){
    $("#CheckMsg").text(msg);
}

//监听回车键提交
$(function(){
    document.onkeydown=keyDownSearch;
    function keyDownSearch(e) {
        // 兼容FF和IE和Opera
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            $('#submit').click();//具体处理函数
            return false;
        }
        return true;
    }
});

