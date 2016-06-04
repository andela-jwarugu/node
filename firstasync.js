var fs = require('fs');
var lines = undefined;

function newLines(){
	fs.readFile(process.argv[2], 'utf8',function doneReading(err, fileContents){
		var lines = fileContents.split('\n').length - 1;
		console.log(lines);
	})
}

newLines();
