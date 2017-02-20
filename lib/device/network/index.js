'use strict';

var network = void 0;

__weex_define__('@weex-temp/x', function (__weex_require__) {
	network = __weex_require__('@weex-module/nat/device/network');
});

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
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
	status: status
};