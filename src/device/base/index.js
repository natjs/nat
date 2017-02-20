let device

__weex_define__('@weex-temp/x', (__weex_require__) => {
	device = __weex_require__('@weex-module/nat/device/base')
})

// info

const info = (cb) => {
	return new Promise((resolve, reject) => {
		device.info((ret) => {
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
	info
}
