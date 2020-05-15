function add (a,b, callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(result){
    console.log('콜백 함수 호출');
    console.log('10+10=%d',result);
});