var fs = require('fs');
fs.writeFile('./output.txt','Hello World',function(err){
    if(err){
        console.log('Error:'+err);
    }
    
    console.log('output.txt 파일에 데이터 쓰기 완료');
    
    fs.readFile('./output.txt','utf8',function(err,data){
        if(err){
            console.log('Read err:'+err);
        }
        console.log(data);
    });
});