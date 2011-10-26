
/**
 * Module dependencies.
 */

var express = require('express'),
	markdown = require('gh-markdown'),
	fs = require('fs'),
	mime = require('mime'),
	path = require('path'),
	docs, app;
	
app = express.createServer();

docs = [
	'intro.md',
	'api.md',
	'outro.md'
];

docs = docs.map(function(doc) {
	return './docs/' + doc;
});

app.get('/?assets/*', function(req, res) {
	var asset = fs.readFileSync("./" + req.url, "utf8"),
		header;

	if (!res.getHeader("content-type")) {
	  header = getHeader("blah." + path.extname(req.url));
	  res.setHeader('Content-Type', header);
	}
	
	res.send(asset);
});

app.get('/', function(req, res){
	var intro = fs.readFileSync('./html/intro.html'),
		outro = fs.readFileSync('./html/outro.html');
		
	markdown(docs, function(err, html) {
		if (err) throw err;
		html = intro + html + outro;
		res.send(html);
	});
});

function getHeader(assetPath) {
  var charset, type;
  type = mime.lookup(assetPath);
  charset = mime.charsets.lookup(type);
  charset = charset ? "; charset=" + charset : "";
  return type + charset;
}

app.listen(3000);