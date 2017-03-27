# Nat.js

[![npm](https://badge.fury.io/js/natjs.svg)](https://www.npmjs.com/package/natjs)
[![license](https://img.shields.io/npm/l/natjs.svg)](https://www.npmjs.com/package/natjs)

Next generation mobile framework for building native / hybrid apps.

## Links

- [Documentation](http://natjs.com/)
- [Github](https://github.com/natjs/)

## Installation

```bash
npm install natjs --save
```

add nat moudles you need from weex plugin market

```bash
weexpack plugin add [nat moudle]
```

## Usage

Use Nat in weex file (.we)

```html
<script>
import Nat from 'natjs'

// make a phone call
Nat.call('415-736-0000')

// take a photo
Nat.camera.captureImage((err, ret) => {
    console.log('Path: ', ret.path)
})

</script>
```

## Modules

- camera
- communication
- geolocation
- media
- modal
- recorder
- network
- sensor
- device

## Supported Platforms

- Android
- iOS

## License

[MIT](http://opensource.org/licenses/MIT)

