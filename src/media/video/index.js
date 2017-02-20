let video

__weex_define__('@weex-temp/x', (__weex_require__) => {
	video = __weex_require__('@weex-module/nat/media/video')
})

// play
const play = (path) => {
	return new Promise((resolve, reject) => {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			})
			return
		}

		video.play(path, (ret) => {
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

const pause = () => {
	return new Promise((resolve, reject) => {
		video.pause((ret) => {
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

const stop = () => {
	return new Promise((resolve, reject) => {
		video.stop((ret) => {
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
