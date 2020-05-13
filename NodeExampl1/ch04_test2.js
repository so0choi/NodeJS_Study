process.on('exit',function(){
    console.log('exit event 발생');
});

setTimeout(function(){
    console.log('2초 후 시스템 종료 시도');
    process.exit();
},2000);