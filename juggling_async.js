var http = require('http');
var concat = require('concat-stream');
var results = [];
var count = 0;

function printFiles(){
	for(var i=0; i<3; i++){
		console.log(results[i]);
	}
}

function readAllFiles(index){
	http.get(process.argv[2 + index] , function(response){
		response.pipe(concat(function(data){
			results[index] = data.toString();
			count++;
			if(count == 3){
				printFiles();
			}
		}))
	})
}

for(var i=0; i<3; i++){
	readAllFiles(i);
}

