# 📳 ios-haptics

javascript library for haptic feedback inside of safari on ios

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
import { hapticTrigger } from 'ios-haptics'
```


vanilla
```javascript
const element = document.getElementById('element')

hapticTrigger(element)
```

svelte
```html
<button {@attach hapticTrigger}>click me</button>
```

react
```html
<button ref={hapticTrigger}>click me</button>
```

vue
```html
<button :ref="hapticTrigger">click me</button>
```


## ⚙️ how it works

this uses the `<input type="checkbox" switch />` (introduced in safari 17.4), which has haptic feedback when toggled

`hapticTrigger` renders one of those on top of your element, so when the user taps it, safari triggers the native haptic feedback

---

feel free to send a pr or open an issue if you have suggestions or find
improvements
