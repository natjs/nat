'use strict';

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _battery = require('./battery');

var _battery2 = _interopRequireDefault(_battery);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var _screen = require('./screen');

var _screen2 = _interopRequireDefault(_screen);

var _vibration = require('./vibration');

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = require('./volume');

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};