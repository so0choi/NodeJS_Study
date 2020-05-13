var calc = require('./calc');
console.log('모듈로 분리한 후 :%d',calc.add(10,10));

var calc2 = require('./calc2');
console.log('calc2: %d',calc2.add(10,10));