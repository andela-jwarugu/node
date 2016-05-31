var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

//Getting the number of new lines

var arr = str.split('\n');
var total = 0;

for (var i=0; i<arr.length-1; i++){
	total += 1;
}

console.log(total);

//Better solution

var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);