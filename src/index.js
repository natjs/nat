let Nat

if (typeof(__weex_define__) === 'function') {
	const camera = require('./camera')
	const communication = require('./communication')
	const geolocation = require('./geolocation')
	const media = require('./media')
	const modal = require('./modal')
	const recorder = require('./recorder')
	const network = require('./network')
	const sensor = require('./sensor')
	const device = require('./device')

	Nat = {
		
		// communication
		call: communication.call,
		sms: communication.sms,
		mail: communication.mail,

		// geolocation
		geolocation: geolocation,

		// media
		audio: media.audio,
		image: media.image,
		video: media.video,

		// camera
		camera: camera,
		
		// recorder
		recorder: recorder,

		// modal
		alert: modal.alert,
		confirm: modal.confirm,
		prompt: modal.prompt,
		toast: modal.toast,

		// network
		fetch: network.stream.fetch,
		download: network.transfer.download,
		upload: network.transfer.upload,
		websocket: network.websocket,

		// sensor
		accelerometer: sensor.accelerometer,
		compass: sensor.compass,

		// device
		device: device.base,
		battery: device.battery,
		network: device.network,
		screen: device.screen,
		vibrate: device.vibration.vibrate,
		volume: device.volume,
		
	}
} else {
	Nat = {}
}

module.exports = Nat
