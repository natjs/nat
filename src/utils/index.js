const isNative = typeof window !== 'object'

const isFn = (fn) => {
	return typeof fn === 'function'
}

const isPhone = (str) => {
	if (typeof(str) === 'number') {
		str = str.toString()
	} else if (typeof(str) !== 'string') {
		return false
	}

	return /^\+?[\d\-\#\*\.\(\)]+$/.test(str)
}

const isEmail = (str) => {
	if (typeof(str) !== 'string') {
		return false
	}

	return /^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
}

module.exports = {
	isNative,
	isFn,
	isPhone,
	isEmail
}
