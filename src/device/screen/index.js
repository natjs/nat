let screen

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		screen = __weex_require__('@weex-module/nat/device/screen')
	})
}

// brightness

const brightness = {
	get: (cb) => {
		return new Promise((resolve, reject) => {
			screen.getBrightness((ret) => {
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
	},

	set: (brightness, cb) => {
		return new Promise((resolve, reject) => {
			screen.setBrightness(brightness, (ret) => {
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
}

// orientation

const orientation = {
	status: (cb) => {
		return new Promise((resolve, reject) => {
			screen.getOrientation((ret) => {
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
	},

	lock: (orientation, cb) => {
		if (typeof orientation === 'function') {
			cb = orientation
			orientation = {}
		}

		// orientation
		if ([
			'portrait-primary',
			'portrait-secondary',
			'landscape-primary',
			'landscape-secondary',
			'portrait',  // either portrait-primary or portrait-secondary.
			'landscape', // either landscape-primary or landscape-secondary.
			'any'        // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any'
		}

		return new Promise((resolve, reject) => {
			screen.lockOrientation(orientation, (ret) => {
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
	},

	unlock: (cb) => {
		return new Promise((resolve, reject) => {
			screen.unlockOrientation((ret) => {
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
}

// info

const info = (cb) => {
	return new Promise((resolve, reject) => {
		screen.info((ret) => {
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
	brightness,
	orientation,
	info
}
