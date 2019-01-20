var routeHandlers = require('./route-handlers');
var responseUtils = require('./response');
var staticMiddleware = require('./static');

var bootstrapMiddleware = function(app, argv) {
    //在response header中打上drakov的标记
    if (argv.drakovHeader) {
        app.use(responseUtils.drakovHeaders);
    }
    //似乎是加载非mock的route配置
    if (argv.staticPaths) {
        staticMiddleware.setupRoutes(app, argv.staticPaths, argv.pathDelimiter);
    }
    //加载跨域配置，加载方法配置
    app.use(responseUtils.corsHeaders(argv.disableCORS, argv.header));
    app.use(responseUtils.delayedResponse(argv.delay));
    app.use(responseUtils.allowMethods(argv.method));
};

/**
 * @description:  
 * @param {Express} app express实例 
 * @param {Object} argv 用户配置 
 * @return: 
 */
exports.init = function(app, argv, cb) {
    //加载非mock的route， 设置跨域和方法过滤条件
    bootstrapMiddleware(app, argv);
    var options = {sourceFiles: argv.sourceFiles,
      autoOptions: argv.autoOptions,
      ignoreHeaders: argv.ignoreHeader};
    //这里应该是开始加载mock配置
    routeHandlers(options, function(err, middleware) {
        cb(err, middleware);
    });
};
