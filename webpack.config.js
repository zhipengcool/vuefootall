//var ET = require('extract-text-webpack-plugin');
module.exports = {
	//入口配置文件
	entry:__dirname+'/src/scripts/app.js',
	//输出文件
	output:{
		path:__dirname+"/prd/",
		filename:"boudle.js"      //编译之后的目标文件
	},
	//配置souce-map   可以查看源码
	devtool:"source-map",
	devServer: {
	    	contentBase: __dirname+"/prd",//本地服务器所加载的页面所在的目录
	    	//colors: true,//终端中输出结果为彩色
	    	historyApiFallback: true,//不跳转
	    	inline: true,//实时刷新
	    	port:'8080',
	    	host:'localhost'
  	},
	module:{
		loaders:[
		//css
		{
			test:/\.css$/,        //编译所有的css文件
			loader:"style-loader!css-loader"
		},
		// es2015
		{
			test:/\.js$/,        //编译所有的js文件
			loader:"babel-loader"
		},
		{
			test:/\.scss$/,        //编译所有的scss文件
			loader:"style-loader!css-loader!sass-loader"
			//loader:ET.extract('style-loader','css-loader!sass-loader')
		},
		{
			test:/\.string$/,
			loader:"string-loader"
		}

		]
	}
	
  	//plugin:[new ET("boudle.css")]   //生成css的入口文件

}