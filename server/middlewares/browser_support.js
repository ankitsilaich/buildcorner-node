// /*
// 	Check for Browser Support
// */
//
// module.exports = function(req, res, next) {
// //	console.log(req)
// 	if (req.useragent.version) {
// 		var browser_version = parseInt(req.useragent.version);
// 		if ((req.useragent.isIE && (browser_version < 9)) || (req.useragent.isOpera && (browser_version < 9)) || (req.useragent.isSafari && (browser_version < 5)) || (req.useragent.isChrome && (browser_version < 75)) || (req.useragent.isFirefox && (browser_version < 4)) ) {
//
// 			return res.sendFile(_dir.PUBLIC_ASSETS + '/browser_support.html');
// 		}
//
// 	}
// 	 return next();
//
// };
