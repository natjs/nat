let battery

__weex_define__('@weex-temp/x', (__weex_require__) => {
	battery = __weex_require__('@weex-module/nat/device/battery')
})

// status

const status = (cb) => {
	return new Promise((resolve, reject) => {
		battery.status((ret) => {
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
