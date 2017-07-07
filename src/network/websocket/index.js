let websocket

if (weex && weex.requireModule) {
	websocket = weex.requireModule('nat/network/websocket')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		websocket = __weex_require__('@weex-module/nat/network/websocket')
	})
}

// connect

const connect = (opts, cb) => {
}

// send

const send = (opts, cb) => {
}

// close

const close = (opts, cb) => {
}

module.exports = {
	connect,
	send,
	close
}
