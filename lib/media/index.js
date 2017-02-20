'use strict';

var _audio = require('./audio');

var _audio2 = _interopRequireDefault(_audio);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};