let WebpackDevServer = require("webpack-dev-server"),
	webpack = require("webpack"),
	fs = require("fs"),
	path = require('path'),
	config = require('./config'),
	opn = require('opn'),
	webpackconfig = require("./build/webpack.dev.conf.js");

let host = process.env.HOST || config.dev.host,
	port = process.env.PORT && Number(process.env.PORT) || config.dev.port;

	console.log(111);
let compiler = webpack(webpackconfig),
	server = new WebpackDevServer(compiler, {
		clientLogLevel : 'warning',//none,error,warning,info
	    historyApiFallback: {
	      rewrites: [
	        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
	      ],
	    },
	    hot: true,
	    contentBase: false, 
	    compress: true,
	    host: host,
	    port: port,
	    overlay: config.dev.errorOverlay
	      ? { warnings: false, errors: true }
	      : false,
	    publicPath: config.dev.assetsPublicPath,
	    proxy: config.dev.proxyTable,
	    quiet: true, 
	    watchOptions: {
	      poll: config.dev.poll,
	    }
	});

	console.log(2222)
server.listen(port, host, function(){
	console.log(`listen on ${host} ${port}!`);
	let uri = 'http://'+ host + ":" + port;
	opn(uri, {app: ['chrome']});
});


