let Nat = {}

if ((weex && weex.requireModule) || typeof(__weex_define__) === 'function') {
	const camera = require('./camera')
	const communication = require('./communication')
	const geolocation = require('./geolocation')
	const media = require('./media')
	const modal = require('./modal')
	const recorder = require('./recorder')
	const network = require('./network')
	const sensor = require('./sensor')
	const device = require('./device')
	const Navigator = require('./navigator')
	const alipay = require('./third-party/alipay')
	const wechat = require('./third-party/wechat')

	// camera
	if (camera) {
		Nat.camera = camera
	}

	// communication
	if (communication) {
		Nat.call = communication.call
		Nat.sms = communication.sms
		Nat.mail = communication.mail
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation
	}

	// media
	if (media) {
		Nat.audio = media.audio
		Nat.image = media.image
		Nat.video = media.video
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert
		Nat.confirm = modal.confirm
		Nat.prompt = modal.prompt
		Nat.toast = modal.toast
		Nat.actionSheet = modal.actionSheet
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch
		Nat.download = network.transfer.download
		Nat.upload = network.transfer.upload
		Nat.websocket = network.websocket
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer
		Nat.compass = sensor.compass
	}

	// device
	if (device) {
		Nat.device = device.info
		Nat.battery = device.battery
		Nat.network = device.network
		Nat.screen = device.screen
		Nat.vibrate = device.vibration.vibrate
		Nat.volume = device.volume
	}

	// navigator
	if (Navigator) {
		Nat.navigator = Navigator
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay
	}

	// wechat
	if (wechat) {
		Nat.wechat = wechat
	}

}

module.exports = Nat
