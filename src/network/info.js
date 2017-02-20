let info

__weex_define__('@weex-temp/x', (__weex_require__) => {
	info = __weex_require__('@weex-module/nat/network/info')
})

// info

const get = (opts, cb) => {
	info.get()
}

module.exports = {
	get
}
