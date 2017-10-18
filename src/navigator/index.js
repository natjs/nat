let navigator

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		navigator = __weex_require__('@weex-module/nat/navigator')
	})
}

// push

const push = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'string') {
		opts = {
			url: opts
		}
	}

	return new Promise((resolve, reject) => {
		navigator.push(opts, (ret) => {
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

// pop
const pop = (opts, cb) => {
	return new Promise((resolve, reject) => {
		navigator.pop(opts, (ret) => {
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

// popToRoot
const popToRoot = (opts, cb) => {
	opts = opts || {
		animated: true
	}

	if (typeof opts === 'function') {
		cb = opts
		opts = {
			animated: true
		}
	}

	return new Promise((resolve, reject) => {
		navigator.popToRoot(opts, (ret) => {
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

// setTitle
const setTitle = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'string') {
		opts = {
			title: opts
		}
	}

	return new Promise((resolve, reject) => {
		navigator.setTitle(opts, (ret) => {
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

// setColor
const setColor = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'string') {
		opts = {
			color: opts
		}
	}

	return new Promise((resolve, reject) => {
		navigator.setColor(opts, (ret) => {
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

// setBackgroundColor
const setBackgroundColor = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		}
	}

	return new Promise((resolve, reject) => {
		navigator.setBackgroundColor(opts, (ret) => {
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

// setFontSize
const setFontSize = (opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		}
	}

	return new Promise((resolve, reject) => {
		navigator.setFontSize(opts, (ret) => {
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

// init
const init = (opts, cb) => {
	opts = opts || {}

	return new Promise((resolve, reject) => {
		navigator.init(opts, (ret) => {
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

// hide
const hide = (cb) => {
	return new Promise((resolve, reject) => {
		navigator.hide((ret) => {
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

// show
const show = (cb) => {
	return new Promise((resolve, reject) => {
		navigator.show((ret) => {
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
	push,
	pop,
	popToRoot,
	setTitle,
	setColor,
	setBackgroundColor,
	setFontSize,
	init,
	hide,
	show
}
