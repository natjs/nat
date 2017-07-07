let vibration

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		vibration = __weex_require__('@weex-module/nat/device/vibration')
	})
}

// vibrate

const vibrate = (time, cb) => {
	if (typeof time === 'function') {
		cb = time
		time = {}
	}

	return new Promise((resolve, reject) => {
		vibration.vibrate(time || 500, (ret) => {
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
	vibrate
}
