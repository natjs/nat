'use strict';

var websocket = void 0;

if (weex && weex.requireModule) {
	websocket = weex.requireModule('nat/network/websocket');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		websocket = __weex_require__('@weex-module/nat/network/websocket');
	});
}

// connect

var connect = function connect(opts, cb) {};

// send

var send = function send(opts, cb) {};

// close

var close = function close(opts, cb) {};

module.exports = {
	connect: connect,
	send: send,
	close: close
};