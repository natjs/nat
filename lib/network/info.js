'use strict';

var info = void 0;

__weex_define__('@weex-temp/x', function (__weex_require__) {
	info = __weex_require__('@weex-module/nat/network/info');
});

// info

var get = function get(opts, cb) {
	info.get();
};

module.exports = {
	get: get
};