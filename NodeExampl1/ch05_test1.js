var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작됐습니다. : %d',port);
})

server.on('request', function(req, res){
    console.log('request');
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<body>")
    res.write("<h1>hi</h1>")
    res.write("</body>")
    res.write("</html>");
    res.end();
} )