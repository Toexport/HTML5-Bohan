//function CreateWS() {
//	var ws = new WebSocket("ws://www.bohanserver.top:8888");
//	ws.onopen = wsOnOpen;
//	ws.onmessage = wsOnMessage;
//	ws.onclose = wsOnClose;
//};
//
//function wsOnOpen() {
//	console.log('已连接');
//};
//		
//function wsOnMessage(evt) {
//	var received_msg = evt.data;
//};

var ws = null;
//var ArrMsgWebsocket = [];
function  CreateWS(sendMsg) {
	if("WebSocket" in window) {
		// 打开一个 web socket
		if(ws == null || ws.readyState != WebSocket.OPEN) {
			ws = new WebSocket("ws://www.bohanserver.top:8888");
//			console.log('Initial websocket');
		} 
		else {
			console.log(ws.readyState);
			ws.send(sendMsg);
			return ws;
		}
		  
		ws.onopen = function(event) {
		// Web Socket 已连接上，使用 send() 方法发送数据		
			ws.send(sendMsg);
			//console.log('已发送'+sendMsg);
		};
//		ws.onmessage = function(event) {
//			var received_msg = event.data;
//			console.log(received_msg);
//			var obj = JSON.parse(received_msg);// 数据转换JSON
////			console.log(obj);
//          Str = obj.content;
//          ArrMsgWebsocket = Str.split(',');
            
//          console.log(Str.substring(0,12));	
            
//         if (Str.length > 12) {
//         	var subStr = Str.substring(12,Str.length);
//         	console.log(subStr);
//         }else {
//         	console.log("字符长度不足");
//         }
			//console.log(Str);
//			alert(Str);
//			location.reload();// 每次發送指令后加載一次數據
			
			//process received message ...显示message内容
			
			//alert("数据已接收...");
		//};
		ws.onclose = function() {
			// 关闭 websocket
			alert("连接已关闭...");
		};
	} else {
		// 浏览器不支持 WebSocket
		alert("您的浏览器不支持 WebSocket!");
	}
	return ws;
}