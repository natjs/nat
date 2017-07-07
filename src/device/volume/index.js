let volume

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		volume = __weex_require__('@weex-module/nat/device/volume')
	})
}

// get

const get = (cb) => {
	return new Promise((resolve, reject) => {
		volume.get((ret) => {
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

// set

const set = (vol, cb) => {
	return new Promise((resolve, reject) => {
		volume.set(vol, (ret) => {
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
	get,
	set
}
