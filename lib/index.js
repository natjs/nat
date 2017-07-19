'use strict';

var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = require('./camera');
	var communication = require('./communication');
	var geolocation = require('./geolocation');
	var media = require('./media');
	var modal = require('./modal');
	var recorder = require('./recorder');
	var network = require('./network');
	var sensor = require('./sensor');
	var device = require('./device');
	var navigator = require('./navigator');

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (navigator) {
		Nat.navigator = navigator;
	}
}

module.exports = Nat;