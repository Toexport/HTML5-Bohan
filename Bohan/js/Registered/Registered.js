



//验证输入的电话号码是否是11位数字
//if(!phoneReg.test($('[name=mobileNum]').val())){
//$('[name=mobileNum]').after(errMsg('请输入正确的手机号码！'));
//　　　　return false；
//}
//获取验证码
function sendmessage(obj,second){
	var name = document.getElementById("mobileNum").value;
	if(name == null || name == "" || name == undefined){
//      showMsg("请输入用户名");
        alert("手機號碼不能为空");
//      form.name.focus ();
        return false;
  }else {
  	if(sendmessage){
			countDown(obj,second)
		}else{
			alert("错误，虽然永远走不到这里！");
		}
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
        data : {"mobileNum":name,"flag":0},
        //设置请求方法
        type : 'GET',
        //设置数据类型
        dataType: 'jsonp',
        jsonpCallback:'liudehua',
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
