var Torpedo = require("torpedo.js");
var formidable = require('formidable');
var util = require('util');
var path = require('path');
var py = require('./src/shellExec');

var { get, post } = new Torpedo({
	name:"detect",
	port:8000
});

get('/').sendFile(path.join(__dirname, 'index.html'));

post('/').do((req, res, next) => {
	var form = new formidable.IncomingForm();
	form.uploadDir = "./input";
	form.keepExtensions = true;
	form.parse(req, function(err, fields, files) {
		res.sendFile(path.join(__dirname,py.execute(files.photo.path)));
  });		
});

get('/uploads').sendFile(path.join(__dirname, './output/gallery/index.html'));


