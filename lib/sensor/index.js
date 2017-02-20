'use strict';

var _accelerometer = require('./accelerometer');

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = require('./compass');

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};