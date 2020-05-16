var express = require('express')
    , http = require('http')
    , path = require('path');

var bodyParser = require('body-parser')
    ,static = require('serve-static');

var app = express();
var expressErrorHandler = require('express-error-handler');

app.set('port', process.env.PORT || 3000);
// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));
// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

var router = express.Router();

router.route('/process/login').post(function(req, res){
    console.log('/process/login 처리함');
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password ||req.query.password;
    
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다</h1>');
    res.write('<div><p>Param id: '+paramId+'</p></div>');
    res.write('<div><p>Param password: '+paramPassword+'</p></div>');
    res.write("<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});


var errorHandler = expressErrorHandler({
    static:{
        '404':'./public/404.html'
    }
});

// 라우터 객체를 app객체에 등록
app.use('/', router);

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(3000,function(){
    console.log('서버가 3000번 포트에서 시작됨');
});