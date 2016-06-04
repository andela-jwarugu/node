var mymodule = require('./mymodule.js');
var dir = process.argv[2]
var extString = process.argv[3]

mymodule(dir, extString, function(err, list){
	if (err)
		return console.error("this is an error", err);
	list.forEach(function(item){
		console.log(item);
	});
});

