# Weex Nat

[![npm](https://badge.fury.io/js/weex-nat.svg)](https://www.npmjs.com/package/weex-nat)
[![license](https://img.shields.io/npm/l/weex-nat.svg)](https://www.npmjs.com/package/weex-nat)

Next generation mobile framework for building native / hybrid apps.

## Links

- [Documentation](http://natjs.com/)
- [Github](https://github.com/natjs/)

## Installation

```bash
npm install weex-nat --save
```

add nat moudles you need from weex plugin market

```bash
weexpack plugin add [nat moudle you need]
```

## Usage

Use Nat in weex file (.we)

```html
<script>
import 'Nat' from 'weex-nat'

// make a phone call
Nat.call('415-736-0000')

// take a photo
Nat.camera.captureImage((err, ret) => {
    console.log('Path: ', ret.path)
})

// more...

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

