const SHARE_TYPES = {
	'app': 1,
	'emotion': 2,
	'file': 3,
	'image': 4,
	'music': 5,
	'video': 6,
	'webpage': 7,
	'link': 7,
	'mini-program': 8
}

const SCENE_TYPES = {
	'session': 0,
	'timeline': 1,
	'favorite': 2
}

let __c

const wechat = {
	get wechatModule() {
		if (__c) {
			return __c
		} else if (weex && weex.requireModule) {
			__c = weex.requireModule('nat/wechat')
			return __c
		}
	},

	// init
	init(appId, cb) {
		return new Promise((resolve, reject) => {
			if (!appId) {
				reject({
					code: 301040,
					message: 'MISSING_ARGUMENT',
					details: 'appId is required'
				})
				return
			}

			this.wechatModule.init(appId, (ret) => {
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

	// checkInstalled
	checkInstalled(cb) {
		return new Promise((resolve, reject) => {
			this.wechatModule.checkInstalled((ret) => {
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

	/**
		share

		@params
		- content
			- title
			- description (desc)
			- type
			- filePath
			- thumbUrl
			- dataUrl
			- link
		- scene
	 */
	share(params, cb) {
		return new Promise((resolve, reject) => {
			if (!params) {
				reject({
					code: 301040,
					message: 'SHARE_MISSING_ARGUMENT'
				})
				return
			}

			params = params || {}

			if (typeof params.scene === 'string') {
				params.scene = SCENE_TYPES[params.scene] || 0
			} else {
				params.scene = params.scene || 0
			}

			if (typeof params.content === 'string') {
				params.text = params.content
				delete params.content
			} else {
				let type = 0
				params.content = params.content || {}

				if (!params.content.description && params.content.desc) {
					params.content.description = params.content.desc
				}

				if (typeof params.content.type === 'string') {
					type = SHARE_TYPES[params.content.type]
					params.content.type = type

					if (!type) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'unsupported share content type'
						})
						return
					}
				}

				// app & file
				// filePath: local only
				if ([1, 3].includes(type) && !params.content.filePath) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.filePath is required'
					})
					return
				}
				// emotion & image & music & video
				else if ([2, 4, 5, 6].includes(type) && !params.content.dataUrl) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.dataUrl is required'
					})
					return
				}

				// add link (music & webpage)
				if ([5, 7].includes(type) && !params.content.link) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.link is required'
					})
					return
				}
			}

			this.wechatModule.share(params, (ret) => {
				ret = ret || {}

				if (ret.error) {
					reject(ret.error)
					if (typeof cb === 'function') cb(ret.error, null)
				} else {
					delete ret.status
					resolve(ret)
					if (typeof cb === 'function') cb(null, ret)
				}
			})
		})
	},

	// pay
	pay(params, cb) {
		return new Promise((resolve, reject) => {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				})
				return
			}

			// if (!params.appid) {
			// 	reject({
			// 		code: 301040,
			// 		message: 'PAY_MISSING_ARGUMENT',
			// 		details: '[params.appid] is required'
			// 	})
			// 	return
			// }

			this.wechatModule.pay(params, (ret) => {
				ret = ret || {}

				if (ret.error) {
					reject(ret.error)
					if (typeof cb === 'function') cb(ret.error, null)
				} else {
					delete ret.status
					resolve(ret)
					if (typeof cb === 'function') cb(null, ret)
				}
			})
		})
	},

	// auth
	auth(params, cb) {
		return new Promise((resolve, reject) => {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				})
				return
			}

			params = params || {}

			if (!params.info) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT',
					details: '[params.info] is required'
				})
				return
			}

			this.wechatModule.auth(params, (ret) => {
				ret = ret || {}

				if (ret.error) {
					reject(ret.error)
					if (typeof cb === 'function') cb(ret.error, null)
				} else {
					delete ret.status
					resolve(ret)
					if (typeof cb === 'function') cb(null, ret)
				}
			})
		})
	}
}

module.exports = wechat
