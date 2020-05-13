function add(a, b, callback){
    var result = a+b;
    callback(result);
    var count=0;
    var history = function(){
        count++;
        return count+':'+a+'+'+b+'='+result;
    };
    return history;
}

var add_history = add(10,10, function(result){
    console.log('callback');
    console.log('result : %d',result);
});

console.log('결과값: '+add_history());
console.log('결과값: '+add_history());
console.log('결과값: '+add_history());