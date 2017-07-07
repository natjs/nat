let camera

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		camera = __weex_require__('@weex-module/nat/camera')
	})
}

// launch

const launch = (opts) => {
	camera.launch()
}

// captureImage (snap)

const captureImage = (opts, cb) => {
	opts = opts || {}

	return new Promise((resolve, reject) => {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, (ret) => {
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

// captureVideo (record)

const captureVideo = (opts, cb) => {
	opts = opts || {}

	return new Promise((resolve, reject) => {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, (ret) => {
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
	launch,
	captureImage,
	captureVideo
}
