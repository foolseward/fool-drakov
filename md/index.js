var drakov = require('drakov');
var aglio = require('./aglio');
var path = require('path');
var sourceFiles = path.resolve(__dirname, './md/*.md');
var fs = require("fs");
var argv = {
  sourceFiles: sourceFiles,//md文档存储地
  serverPort: 4007,
  disableCORS: false,//false允许跨域访问
  debugMode: true,
  discover: true,
  public: true,//true允许外围ip访问api,false只能本地访问
  watch: true,
  method: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
};

drakov.run(argv, function () {
    console.log('drakov start 4007');
});

