# Nat.js

[![npm](https://badge.fury.io/js/natjs.svg)](https://www.npmjs.com/package/natjs)
[![license](https://img.shields.io/npm/l/natjs.svg)](https://www.npmjs.com/package/natjs)

Next generation mobile framework for building native / hybrid apps.

## Links

- [Website](http://natjs.com/)
- [Github](https://github.com/natjs/)
- [Issues](https://github.com/natjs/nat/issues)

## Documentation
To check out docs and examples, visit [natjs.com](http://natjs.com/).

## Nat Explorer
Nat Explorer is a nat example app, help you explore Nat modules instantly. [Source Code](https://github.com/natjs/nat-explorer)

[![Available on App Store](http://natjs.com/_assets/images/btn_app_store.svg)](https://itunes.apple.com/us/app/nat-explorer/id1262312650)
&nbsp;&nbsp;
[![Android App on Google Play](http://natjs.com/_assets/images/btn_google_play.svg)](https://play.google.com/store/apps/details?id=com.instapp.natex)

Also, you can download it directly by scan the QRcode below.

<img src="http://natjs.com/_assets/images/nat-explorer_qrcode-s.png" alt="Download Nat Explorer" width="120" style="display: block;">

## Installation

```bash
npm install natjs --save
```

Add nat moudles you need from weex plugin market

```bash
weexpack plugin add [nat moudle]
```

## Usage

Use Nat in vue/weex file (`.vue`/`.we`)

```html
<script>
import Nat from 'natjs'

// Make a phone call
Nat.call('415-736-0000')

// Take a photo
Nat.camera.captureImage((err, ret) => {
    console.log('Path: ', ret.path)
})

// Get device info
Nat.device.info((err, ret) => {
    console.log('Info: ', ret)
})

</script>
```

## Modules

- camera
- communication
- geolocation
- media
    - image
    - audio
    - video
- modal
- recorder
- steam
- transfer
- sensor
    - accelerometer
    - compass
- device
    - info
    - network
    - vibration
    - screen
    - volume
    - battery

## Supported Platforms

- Android
- iOS

## License

[MIT](http://opensource.org/licenses/MIT)

