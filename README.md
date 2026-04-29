# 📳 ios-haptics

javascript library for haptic feedback inside of safari on ios

please note this only works on ios 17.4 to 26.4, as apple patched it in ios 26.5

![GitHub last commit](https://img.shields.io/github/last-commit/tijnjh/ios-haptics)
[![npm version](https://img.shields.io/npm/v/ios-haptics.svg)](https://npmjs.com/package/ios-haptics)
![NPM Downloads](https://img.shields.io/npm/dm/ios-haptics)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/ios-haptics)

demo: [ios-haptics demo](https://codepen.io/tijnjh/pen/KwpgPqB)

## 📦 installation

```sh
npm i ios-haptics
```

## 🚀 usage

```javascript
import { haptic } from 'ios-haptics'

// a single haptic
haptic()

// two rapid haptics
haptic.confirm()

// three rapid haptics
haptic.error()
```

## ⚙️ how it works

this uses the `<input type="checkbox" switch />` (introduced in safari 17.4), which has haptic feedback when toggled

> [!IMPORTANT]
> apple patched the bug this library used for haptic feedback in ios 26.5. you can no longer trigger haptic feedback programmatically by calling `.click()` on a `<label>` that is `for` an `<input type="checkbox" switch />`. haptic feedback still works when the user directly clicks the checkbox switch themselves, but it can no longer be done programmatically.

every `haptic` call, it will create one of those in the background, toggle it, then remove it

on devices that support it, `navigator.vibrate()` is called instead, so it works on android too

---

feel free to send a pr or open an issue if you have suggestions or find
improvements
