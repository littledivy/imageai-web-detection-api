var shell = require('shelljs')
var refreshGallery = require('./refreshGallery');

module.exports.execute = function (arg) {
	shell.exec(`touch ./output/${arg.split('/')[1]}`, {silent:false}).stdout;
	var code = require('./pyScript').code(arg);
	shell.exec(`python3 -c "${code}"`, {silent:false}).stdout;
	refreshGallery.refresh();
	return `./output/${arg.split('/')[1]}`;
}

