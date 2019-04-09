
//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
function LoginFunction(){
    var name = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    if(name == null || name == "" || name == undefined){
//      showMsg("请输入用户名");
        alert("用户名不能为空");
//      form.name.focus ();
        return false;
    }
    if(pwd == null || pwd == "" || pwd == undefined){
//      showMsg("请输入密码");
        alert("请输入密码");
//      form.pwd.focus ();
        return false;
    }
//这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
  $.ajax({
//	headers:{
//		"Content-type":"application/json;charset=utf-8"
//	},
  	    //服务器请求地址
//      url:'http://www.bohanserver.top:8088/webservice.asmx/Login',
        url:'http://www.funnywork.com:443/users/demo',
        data : {"userName":name,"password":pwd},
        //设置请求方法
        type : 'GET',
        //设置数据类型
        dataType: 'jsonp',
        jsonpCallback:'liudehua',
//      jsonpCallback:'callback',
//      jsonpCallback:"successCallback",
        //是否 执行缓存
//      cache:false, 
        success : function(data) {
        	console.log(data)
            if (data){
                if (data.code == "0") { //判断返回值，这里根据的业务内容可做调整
                        setTimeout(function () {//做延时以便显示登录状态值
                           showMsg("正在登录中...");
                           showMsg(data.message);
//                         console.log(data);
//                         window.location.href =  url;//指向登录的页面地址
//                        window.location.href = "../list/list .js";
                       },100)
                    } else {
                        showMsg(data.message);//显示登录失败的原因
//                      window.location.href = "../Login/Login.js";
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
            $('#submit').LoginFunction();//具体处理函数
            return false;
        }
        return true;
    }
});

