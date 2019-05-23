
//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
function LoginFunction() {
	var name = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	if(name == null || name == "" || name == undefined) {
		alert("用户名不能为空");
		return false;
	}
	if(pwd == null || pwd == "" || pwd == undefined) {
		alert("请输入密码");
		return false;
	}

	//这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
	$.ajax({
		url: 'http://www.bohanserver.top:8088/webservice.asmx/Login',
		data: {
			"userName": name,
			"password": pwd
		},
		type: 'GET',
		dataType: "xml",
		timeout: 1000, //设定超时
		cache: false, //禁用缓存
		success: function(data) {
			data = $.xml2json(data); // xml转json
			var strData = data;
			var str = strData.substring(); //获取指定的字符
			console.log(str);
			var obj = JSON.parse(str);
			if(obj.statusCode == 0) //判断返回值，这里根据的业务内容可做调整
			{
				setTimeout(
					function() //做延时以便显示登录状态值
					{
//						alert(obj.message);
						console.log(obj.message);
						var content = obj.content; // Token
						console.log(content);
						console.log(name);
						$.cookie('username', name, {
							expires: 0.1,
							path: '/'
						});
						$.cookie('userToken', content, {
							expires: 0.1,
							path: '/'
						});
//						window.location.href = "/Bohan/Html/list/list%20.html";
						window.location.href = "../list/list%20.html";
						//								Pushlist();
					},
					100);
			} else {
				showMsg(obj.message); //显示登录失败的原因
				alert(obj.message);
				location.replace(document.referrer); // 错误重新刷新一次界面
				return false;
			}
		},
		error: function(data) {
			console.log("Fail");
//			location.replace(document.referrer); // 错误重新刷新一次界面
			showMsg(obj.message);
		}
	});
}

//错误信息提醒
function showMsg(msg) {
	$("#CheckMsg").text(msg);
}
