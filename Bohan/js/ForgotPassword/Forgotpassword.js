
// 不需要sock的接口http://www.bohanserver.top:8088/webservice.asmx；
//<script>
//function ForgotPassword() {
//	x = document.getElementById("Forgotpass");
//	x.innerHTML =  "http://www.bohan-smartec.com/";
//}
//
//</script>



//获取验证码
function sendmessage(obj,second){
		if(sendmessage){
			countDown(obj,second)
		}
		else{
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
