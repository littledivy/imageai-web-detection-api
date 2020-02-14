var shell = require('shelljs');

module.exports.refresh = () => {
  shell.exec('cd output && gallerify');
  return true;
};
