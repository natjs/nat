import { isNative } from '../utils'

let modal

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		modal = __weex_require__('@weex-module/nat/modal')
	})
}
// alert

const Alert = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		if (isNative) {
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
		} else {
			window.alert(opts.message)
			resolve()
		}
	})
}

// confirm

const Confirm = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		if (isNative) {
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
		} else {
			const c = window.confirm(opts.message)
			resolve(c)
		}
	})
}

// prompt

const Prompt = (opts, cb) => {
	return new Promise((resolve, reject) => {
		if (typeof(opts) === 'string') {
			opts = {
				message: opts
			}
		}

		opts = opts || {}

		if (isNative) {
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
		} else {
			const p = window.prompt(opts.message || '', opts.text || '')

			resolve({
				result: p && p.length,
				data: p
			})
		}
	})
}

// toast

const Toast = (opts, cb) => {
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

		if (isNative) {
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
		} else {
			window.alert(opts.message)
			resolve()
		}
	})
}

const actionSheet = {
	show(opts, cb) {
		return new Promise((resolve, reject) => {
			opts = opts || {}

			if (!Array.isArray(opts.options) || !opts.options.length) {
				reject({
					code: 145050,
					message: 'ACTIONSHEET_INVALID_ARGUMENT'
				})
				return
			}

			const options = opts.options.map((item) => {
				if (['string', 'number'].includes(typeof item)) {
					return {
						title: item
					}
				}
				return item
			})

			if (isNative) {
				modal.showActionSheet({
					title: opts.title,
					options
				}, (ret) => {
					resolve(ret)
					if (typeof cb === 'function') cb(null, ret)
				})
			} else {
				resolve()
			}
		})
	}
}

module.exports = {
	alert: Alert,
	confirm: Confirm,
	prompt: Prompt,
	toast: Toast,
	actionSheet
}
