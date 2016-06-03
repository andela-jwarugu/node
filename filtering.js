var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function doneReading(err, list){
	// console.log(list[0]);
	// console.log(path.extname(list[0]));
	// console.log(process.argv[3]);
	list.forEach(function(item){
		extStr = "." + process.argv[3];
		//console.log(extStr);
		if (path.extname(item) == extStr){
			console.log(item);
		};
	});
});



