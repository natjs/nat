let modal

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		modal = __weex_require__('@weex-module/nat/modal')
	})
}

// alert

const alert = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		modal.alert({
			title: opts.title || '',
			message: opts.message || '',
			okButton: opts.okButton || 'OK'
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

// confirm

const confirm = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		modal.confirm({
			title: opts.title || '',
			message: opts.message || '',
			okButton: opts.okButton || 'OK',
			cancelButton: opts.cancelButton || 'Cancel'
		}, (ret) => {
			if (typeof(ret) === 'undefined') {
				ret = {
					error: 'unknow error, please report to natjs team'
				}
			}

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

// prompt

const prompt = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		modal.prompt({
			title: opts.title || '',
			message: opts.message || '',
			text: opts.text || '',
			okButton: opts.okButton || 'OK',
			cancelButton: opts.cancelButton || 'Cancel'
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

// toast

const toast = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom'
		}

		modal.toast({
			message: opts.message || '',
			duration: opts.duration || 3000,
			position: opts.position
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

module.exports = {
	alert,
	confirm,
	prompt,
	toast
}
