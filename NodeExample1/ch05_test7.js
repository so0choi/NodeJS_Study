var http = require('http');
var server = http.createServer();
var port=3000;
var fs = require('fs');

server.listen(port,function(){
    console.log('서버 시작');
});

var options = {
    host:'www.google.com',
    port:80,
    path:'/'
};


server.on('request',function(request,respond){
    var resData ='';
    var req = http.get(options, function(res){
        
        res.on('data',function(chunk){
            resData += chunk;
        });
    
        res.on('end',function(){
           respond.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
            respond.write(resData);
            respond.end();
        });

 
    });
req.on('error',function(err){
    console.log('오류 발생: '+err.message);
});
});

