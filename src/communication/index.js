import utils from '../utils'

let communication

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		communication = __weex_require__('@weex-module/nat/communication')
	})
}

// call

const call = (to, cb) => {
	return new Promise((resolve, reject) => {
		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			})
			return
		} else if (!utils.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			})
			return
		}

		communication.call(to, (ret) => {
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

// sms

const sms = (to, text, cb) => {
	text = text || ''

	if (typeof text === 'function') {
		cb = text
		text = ''
	}

	return new Promise((resolve, reject) => {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof(to) === 'string') {
			to = [to]
		}

		for (let i = 0; i < to.length; i++) {
			if (!utils.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT',
				})
				return
			}
		}

		communication.sms(to, text, (ret) => {
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

// mail

const mail = (to, opts, cb) => {
	opts = opts || {}

	if (typeof opts === 'function') {
		cb = opts
		opts = {}
	}

	return new Promise((resolve, reject) => {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof(to) === 'string') {
			to = [to]
		}

		for (let i = 0; i < to.length; i++) {
			if (!utils.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				})
				return
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
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
	call,
	sms,
	mail
}
