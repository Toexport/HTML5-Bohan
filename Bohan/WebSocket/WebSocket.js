
function WebSocketTest() {
            if ("WebSocket" in window) {
               alert("您的浏览器支持 WebSocket!");
               // 打开一个 web socket
               var ws = new WebSocket("ws://www.bohanserver.top:8888");
               ws.onopen = function() {
                  // Web Socket 已连接上，使用 send() 方法发送数据
//                var susename = "3A1002004115118041624";
//                var part = "LoadName";
//                var name = "测试专用@测试专用";
//                var str = susename+part+name;
                  alert(str);
                  ws.send("E7621801090021000013000500810000003E0D");
//                E7621801090021000013000500800000003D0D  开
//                E7621801090021000013000500810000003E0D  关
                  alert("数据发送中...");
               };
               ws.onmessage = function (evt)  { 
                  var received_msg = evt.data;
                  alert("数据已接收...");
               };
               
               ws.onclose = function() { 
                  // 关闭 websocket
                  alert("连接已关闭..."); 
               };
            } else {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
        }
