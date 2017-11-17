let transfer

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		transfer = __weex_require__('@weex-module/nat/transfer')
	})
}

// download

const download = (url, opts, hooks, cb) => {
	return new Promise((resolve, reject) => {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof opts === 'function') {
			cb = opts
		} else if (typeof opts === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts
			}
		}

		if (typeof url === 'object') {
			opts = url
		} else {
			opts = opts || {}
			opts.url = url
		}

		// hooks
		hooks = hooks || {}

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, (ret) => {
			ret = ret || {}

			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress)
				}
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

// upload

const upload = (url, opts, hooks, cb) => {
	return new Promise((resolve, reject) => {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof opts === 'function') {
			cb = opts
		} else if (typeof opts === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts
			}
		}

		if (typeof url === 'object') {
			opts = url
		} else {
			opts = opts || {}
			opts.url = url
		}

		// hooks
		hooks = hooks || {}

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			})
			return
		}

		// method
		opts.method = (opts.method) ? opts.method.toUpperCase() : 'POST'

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			})
			return
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, (ret) => {
			ret = ret || {}

			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress)
				}
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

module.exports = {
	download,
	upload
}
