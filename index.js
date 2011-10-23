
/**
 * Module dependencies.
 */

var express = require('express'),
	markdown = require('gh-markdown'),
	fs = require('fs'),
	docs, app;
	
	
app = express.createServer();

docs = [
	'intro.md',
	'outro.md'

];

docs = docs.map(function(doc) {
	return './docs/' + doc;
})

app.get('/', function(req, res){
	var intro = fs.readFileSync('./html/intro.html'),
		outro = fs.readFileSync('./html/outro.html');
		
	markdown(docs, function(err, html) {
		if (err) throw err;
		
		html = intro + html + outro;
		res.send(html);
	});
});

app.listen(3000);