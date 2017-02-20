'use strict';

var vibration = void 0;

__weex_define__('@weex-temp/x', function (__weex_require__) {
	vibration = __weex_require__('@weex-module/nat/device/vibration');
});

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
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
	vibrate: vibrate
};