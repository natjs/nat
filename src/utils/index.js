const isFn = (fn) => {
	return typeof fn === 'function'
}

const isPhone = (str) => {
	if (typeof(str) === 'number') {
		str = str.toString()
	} else if (typeof(str) !== 'string') {
		return false
	}

	return !!str.match(/^\+?[\d\-\#\*\.\(\)]+$/)
}

const isEmail = (str) => {
	if (typeof(str) !== 'string') {
		return false
	}

	return !!str.match(/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/)
}

module.exports = {
	isFn,
	isPhone,
	isEmail
}