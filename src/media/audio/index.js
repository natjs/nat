let audio

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio')
} else if (typeof(__weex_define__) === 'function') {
	__weex_define__('@weex-temp/x', (__weex_require__) => {
		audio = __weex_require__('@weex-module/nat/media/audio')
	})
}

// play
const play = (path, cb) => {
	return new Promise((resolve, reject) => {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			})
			return
		}

		audio.play(path, (ret) => {
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

// pause

const pause = (cb) => {
	return new Promise((resolve, reject) => {
		audio.pause((ret) => {
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

// stop

const stop = (cb) => {
	return new Promise((resolve, reject) => {
		audio.stop((ret) => {
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
	play,
	pause,
	stop
}
