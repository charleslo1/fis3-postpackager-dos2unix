// libs
var D2UConverter = require('dos2unix').dos2unix;


/**
 * fis3打包后将DOS格式文本文件转换成UNIX格式，使代码可直接在类UNIX系统运行
 * @param  {Object} ret      一个包含处理后源码的结构
 * @param  {Object} conf     一般不需要关心，自动打包配置文件
 * @param  {Object} settings 插件配置属性
 * @param  {Object} opt      命令行参数
 * @return {undefined}
 */
module.exports = function (ret, conf, settings, opt) {
	// ret.src 所有的源码，结构是 {'<subpath>': <File 对象>}
	// ret.ids 所有源码列表，结构是 {'<id>': <File 对象>}
	// ret.map 如果是 spriter、postpackager 这时候已经能得到打包结果了，
	// 可以修改静态资源列表或者其他
	console.log('D2UConverter...：');
	console.log(__dirname);
	console.log('settings', settings);
	console.log('opt', opt);

	var d2u = new D2UConverter();
	d2u.on('error', function(err) {
		console.error(err);
	})
	.on('end', function(stats) {
		console.log('D2UConverter: ', stats);
	});

	var files = [];
	fis.util.map(ret.src, function (subpath, file) {
		if(file._isText) {
			files.push('/Users/CharlesLo/Documents/work/keketour.com/branches/rework_view/keketour.com/web' + file.release);
		}
	});
	files.length = 10;
	console.log(files);
	// 处理
	setTimeout(function (argument) {
		console.log('D2UConverter-process');
		d2u.process(files);
	}, 1000);

}
