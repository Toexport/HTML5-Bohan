//获取验证码
function sendmessageS(obj,second){
	var name = document.getElementById("mobileNum").value;
	if(name == null || name == "" || name == undefined){
//      showMsg("请输入用户名");
        alert("手機號碼不能为空");
//      form.name.focus ();
        return false;
 }
function countDown(obj,second){
    // 如果秒数还是大于0，则表示倒计时还没结束
     if(second>=0){
          // 获取默认按钮上的文字
          if(typeof buttonDefaultValue === 'undefined' ){
            buttonDefaultValue =  obj.defaultValue;
        }
        // 按钮置为不可点击状态
        obj.disabled = true;            
        // 按钮里的内容呈现倒计时状态
        obj.value = buttonDefaultValue+'('+second+')';
        // 时间减一
        second--;
        // 一秒后重复执行
        setTimeout(function(){countDown(obj,second);},1000);
        // 否则，按钮重置为初始状态
        }else{
        // 按钮置未可点击状态
        obj.disabled = false;   
        // 按钮里的内容恢复初始状态
        obj.value = buttonDefaultValue;
       } 
}
    //这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
  $.ajax({
        url:'http://www.bohanserver.top:8088/webservice.asmx/GetRegisterCode',
        data : {"mobileNum":name,"flag":1},
        //设置请求方法
        type : 'GET',
        //设置数据类型
         dataType: "xml",
         timeout: 1000,      //设定超时
         cache: false,       //禁用缓存
         
        success : function(data) {
        	data = $.xml2json(data);// xml转json
        	var strData = data;
        	var str = strData.substring(); //获取指定的字符
        	console.log(str);
        var obj = JSON.parse(str);
        	var code = obj.statusCode;
        if (obj.statusCode == 0) { //判断返回值，这里根据的业务内容可做调整
           setTimeout(function () {//做延时以便显示登录状态值
              showMsg("正在登录中...");
              showMsg(obj.message);
              alert(obj.message);
              console.log(obj.message);
              
             },100);
             }else {
                 showMsg(obj.message);//显示登录失败的原因
                 alert(obj.message);
//               location.replace(document.referrer); // 错误重新刷新一次界面
                 return false;
               }
            }, 
            error : function(data){
            	    console.log("Fail");
                showMsg(obj.message);  
//              location.replace(document.referrer); // 错误重新刷新一次界面
            }
    });
 }



// 修改密码
function ForgotPassword() {
//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
    var name = document.getElementById("mobileNum").value;
    var Code = document.getElementById("VerCode").value;
    var pwd = document.getElementById("password").value;
    if(name == null || name == "" || name == undefined){
        alert("手机号不能为空");
        return false;
    }
    if(Code == null || Code == "" || Code == undefined){
        alert("请输入验证码");
        return false;
    }
    if(pwd == null || pwd == "" || pwd == undefined){
        alert("请输入密码");
        return false;
    }
//这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
$.ajax({
	    //服务器请求地址
        url:'http://www.bohanserver.top:8088/webservice.asmx/Register',
        data : {"userName":name,"checkCode":Code,"password":pwd,"flag":1},
        //设置请求方法
        type : 'GET',
        //设置数据类型
         dataType: "xml",
         timeout: 1000,      //设定超时
         cache: false,       //禁用缓存
        success : function(data) {
        	console.log(data);
        	data = $.xml2json(data);// xml转json
        	var strData = data;
        	var str = strData.substring(); //获取指定的字符
        	console.log(str);
        var obj = JSON.parse(str);
        	var code = obj.statusCode;
        if (obj.statusCode == 0) { //判断返回值，这里根据的业务内容可做调整
           setTimeout(function () {//做延时以便显示登录状态值
              showMsg("正在登录中...");
              showMsg(obj.message);
              alert(obj.message);
              console.log(obj.message);
              window.location.href="/Bohan/Html/login/index.html";//指向登录的页面地址
             },100);
             }else {
//               showMsg(obj.message);//显示登录失败的原因
                 alert(obj.message);
                 return false;
               }
            }, 
            error : function(data){
            	    console.log("Fail");
                showMsg(obj.message);  
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
