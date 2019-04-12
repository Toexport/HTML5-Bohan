
//验证表单是否为空，若为空则将焦点聚焦在input表单上，否则表单通过，登录成功
function LoginFunction(){
    var name = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    if(name == null || name == "" || name == undefined){
        alert("用户名不能为空");
        return false;
    }
    if(pwd == null || pwd == "" || pwd == undefined){
        alert("请输入密码");
        return false;
    }
    
//这里为用ajax获取用户信息并进行验证，如果账户密码不匹配则登录失败，如不需要验证用户信息，这段可不写
  $.ajax({
  	    //服务器请求地址
        url:'http://www.bohanserver.top:8088/webservice.asmx/Login',
        data : {"userName":name,"password":pwd},
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
//      	console.log(code);
        if (obj.statusCode == 0) { //判断返回值，这里根据的业务内容可做调整
           setTimeout(function () {//做延时以便显示登录状态值
              showMsg("正在登录中...");
              showMsg(obj.message);
              alert(obj.message);
              console.log(obj.message);
              var content = obj.content;// Token
              console.log(content);
//             window.location.href =  url;//指向登录的页面地址
             },100);
             }else {
                 showMsg(obj.message);//显示登录失败的原因
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

////监听回车键提交
//$(function(){
//  document.onkeydown=keyDownSearch;
//  function keyDownSearch(e) {
//      // 兼容FF和IE和Opera
//      var theEvent = e || window.event;
//      var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
//      if (code == 13) {
//          $('#submit').LoginFunction();//具体处理函数
//          return false;
//      }
//      return true;
//  }
//});


