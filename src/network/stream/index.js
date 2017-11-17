import { isNative } from '../../utils'

let stream

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		stream = __weex_require__('@weex-module/nat/stream')
	})
}

// fetch

const Fetch = (url, opts, cb) => {
	return new Promise((resolve, reject) => {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			})
			return
		}

		if (typeof url === 'object') {
			cb = opts
			opts = url
		} else if (typeof opts === 'function') {
			cb = opts
			opts = {
				url
			}
		} else {
			opts = opts || {}
			opts.url = url
		}

		// headers
		opts.headers = opts.headers || {}

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json'
		}

		// method
		opts.method = (opts.method) ? opts.method.toUpperCase() : 'GET'

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			})
			return
		}

		// type
		opts.type = (opts.type) ? opts.type.toLowerCase() : 'json'

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			})
			return
		}

		// body
		if (typeof opts.body === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body)
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				})
				return
			}
		}

		opts = {
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		}

		if (isNative) {
			stream.fetch(opts, (ret) => {
				ret = ret || {}

				if (ret.error) {
					reject(ret.error)
					if (typeof cb === 'function') cb(ret.error, null)
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
						case 'json':
							ret.data = JSON.parse(ret.data)
							break

						case 'jsonp': {
							const matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/)
							if (matched) {
								ret.data = JSON.parse(matched[1])
							}
							break
						}
						}
					}
					resolve(ret)
					if (typeof cb === 'function') cb(null, ret)
				}
			})
		} else {
			const url = opts.url
			delete opts.url

			let _res = {}

			window.fetch(url, opts)
			.then((res) => {
				_res = res

				if (res.ok) {
					if (res.status === 204) {
						return null
					} else {
						if (opts.type === 'json') {
							return res.json()
						} else {
							return res.text()
						}
					}
				} else {
					throw new Error(res.statusText)
				}
			})
			.then((data) => {
				if (opts.type === 'jsonp') {
					const matched = data.match(/^\s*?.*\((.*)\)\s*?$/)
					if (matched) {
						data = JSON.parse(matched[1])
					}
				}

				resolve({
					data,
					headers: _res.headers,
					ok: _res.ok,
					redirected: _res.redirected,
					status: _res.status,
					statusText: _res.statusText
				})
			})
			.catch((e) => {
				reject(e)
				if (typeof cb === 'function') cb(e, null)
			})
		}
	})
}

module.exports = {
	fetch: Fetch
}
