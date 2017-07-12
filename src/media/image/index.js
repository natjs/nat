let image

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		image = __weex_require__('@weex-module/nat/media/image')
	})
}

// pick
const pick = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'function') {
		cb = opts
		opts = {}
	}

	opts.limit = opts.limit || 1
	opts.quality = (opts.quality && opts.quality < 100) ? parseInt(opts.quality) : 100

	return new Promise((resolve, reject) => {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, (ret) => {
			if (ret === null) {
				return
			}

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

// preview

const preview = (files, opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'function') {
		cb = opts
		opts = {}
	}

	return new Promise((resolve, reject) => {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof(files) === 'string') {
			files = [files]
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots'
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label'
			} else if (files.length === 1) {
				opts.style = 'none'
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, (ret) => {
			ret = ret || {}

			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else {
				resolve()
				if (typeof cb === 'function') cb(null)
			}
		})
	})
}

// info

const info = (path, cb) => {
	return new Promise((resolve, reject) => {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			})
			return
		}

		image.info(path, (ret) => {
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

// exif

const exif = (path, cb) => {
	return new Promise((resolve, reject) => {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			})
			return
		}

		image.exif(path, (ret) => {
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
	pick,
	preview,
	info,
	exif
}
