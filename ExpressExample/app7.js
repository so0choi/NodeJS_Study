var express = require('express')
    , http = require('http')
    , path = require('path');

var bodyParser = require('body-parser')
    ,static = require('serve-static');

var app = express();
app.set('port', process.env.PORT || 3000);

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));
// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    //클라이언트에서 요청 할 때 GET 일지 POST 일지 모르는 경우 두가지 다 고려 하기 위해 두가지 요청 파라미터를 모두 검사
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password ||req.query.password;
    
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다</h1>');
    res.write('<div><p>Param id: '+paramId+'</p></div>');
    res.write('<div><p>Param password: '+paramPassword+'</p></div>');
    res.end();
});

http.createServer(app).listen(3000,function(){
    console.log('서버가 3000번 포트에서 시작됨');
});