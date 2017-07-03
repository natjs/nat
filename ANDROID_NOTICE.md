# Nat.js: Android Usage Notice

If you are using the Nat modules within the list below, you should modify `WXPageActivity`.

- Camera
- Communication
- Screen
- Stream
- Transfer
- Geolocation
- Media-image


1. Add `mInstance.onActivityResult()` in `onActivityResult()`
2. Add `mInstance.onRequestPermissionsResult()` in `onRequestPermissionsResult()`

---
If you still have questions about anything in the code, you can open an issue on this repo.
