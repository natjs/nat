'use strict';

var device = void 0;

__weex_define__('@weex-temp/x', function (__weex_require__) {
	device = __weex_require__('@weex-module/nat/device/base');
});

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};