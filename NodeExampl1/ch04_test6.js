var fs = require('fs');

fs.readFile('./package.json','utf8',function(err,data){
    console.log(data);
});

console.log('package.json 파일을 읽도록 요청했습니다');