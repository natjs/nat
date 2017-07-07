let network

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		network = __weex_require__('@weex-module/nat/device/network')
	})
}

// status

const status = (cb) => {
	return new Promise((resolve, reject) => {
		network.status((ret) => {
			ret = ret || {}

			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

module.exports = {
	status
}
