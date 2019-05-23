// 
// function WebSocketTest() {
//          if ("WebSocket" in window) {
//             alert("您的浏览器支持 WebSocket!");
//             // 打开一个 web socket
////             var ws = new WebSocket("ws:http://www.bohanserver.top:8088/");
//             var ws = new WebSocket("ws://122.10.97.35:8888");
//             ws.onopen = function() {
//                // Web Socket 已连接上，使用 send() 方法发送数据
//                ws.send("1000");
//                alert("数据发送中...");
//             };
//              
//             ws.onmessage = function (evt)  { 
//                var received_msg = evt.data;
//                alert("数据已接收...");
//             };
//              
//             ws.onclose = function() { 
//                // 关闭 websocket
//                alert("连接已关闭..."); 
//             };
//          } else {
//             // 浏览器不支持 WebSocket
//             alert("您的浏览器不支持 WebSocket!");
//          }
//       }



//var ws = new WebSocket("ws://http://www.bohanserver.top:8088/");
////连接Sock
//ws.onopen = function(evt) {
//	console.log("Connection open ...");
//	ws.send("Hello WebSockets!");
//}
////发送数据
//ws.onmessage = function(evt) {
//	console.log("Received Message: " + evt.data);
//	ws.close();
//}
//
////接收数据
//ws.onclose = function(evt){
//	console.log("Connection closed.");
//}


//upstream mqttServer {
//      server mqttserverip1:8882 weight=1;
//      server mqttserverip1:8882 weight=1;
//      #check interval=3000 rise=2 fall=5 timeout=1000;
//  }
//  
//server {
//      listen       443 ssl;
//      server_name  localhost;
//      ssl on; //如果是Linux版本nginx需要配置此项，Windows版本nginx不需要配置
//      ssl_certificate      E:/project/nginx-1.13.6/certfile/pc.crt;
//      ssl_certificate_key  E:/project/nginx-1.13.6/certfile/pc.key;
//      ssl_session_cache    shared:SSL:1m;
//      ssl_session_timeout  5m;
//      ssl_ciphers  HIGH:!aNULL:!MD5;
//      ssl_prefer_server_ciphers  on;
//      location /mqtt {
//          proxy_pass http://mqttServer;
//          proxy_http_version 1.1;
//          proxy_set_header Upgrade $http_upgrade;
//          proxy_set_header Connection "upgrade";
//      }
//  }