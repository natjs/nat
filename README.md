# Weex Nat

## Installation

```
npm install weex-nat --save
```

add nat moudles you need from weex plugin market

```
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

## Resources
- [Documentation](http://natjs.com/)
