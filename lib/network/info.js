'use strict';

var info = void 0;

if (weex && weex.requireModule) {
	info = weex.requireModule('nat/network/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		info = __weex_require__('@weex-module/nat/network/info');
	});
}

// info

var get = function get(opts, cb) {
	info.get();
};

module.exports = {
	get: get
};