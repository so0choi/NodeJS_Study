var fs = require('fs');
var data = fs.readFileSync('./package.json','utf8');
console.log(data);
console.log('read file');