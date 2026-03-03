# 📳 ios-haptics

A lightweight JavaScript library for triggering haptic feedback in Safari on iOS — and on Android too.

![GitHub last commit](https://img.shields.io/github/last-commit/tijnjh/ios-haptics)
[![npm version](https://img.shields.io/npm/v/ios-haptics.svg)](https://npmjs.com/package/ios-haptics)
![NPM Downloads](https://img.shields.io/npm/dm/ios-haptics)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/ios-haptics)

🎮 **[Live Demo on CodePen](https://codepen.io/tijnjh/pen/KwpgPqB)**

---

## 📦 Installation

```sh
npm i ios-haptics
```

---

## 🚀 Usage

```javascript
import { haptic } from 'ios-haptics'

// Single haptic pulse
haptic()

// Two rapid pulses (confirm)
haptic.confirm()

// Three rapid pulses (error)
haptic.error()
```

---

## ⚙️ How it works

iOS Safari doesn't expose the Vibration API, but it *does* trigger haptic feedback when toggling a `<input type="checkbox" switch />` element — a feature introduced in Safari 17.4.

Each `haptic()` call dynamically creates one of these inputs in the background, toggles it, and immediately removes it — giving you a clean, side-effect-free haptic tap.

On Android, `navigator.vibrate()` is used instead, so it works cross-platform out of the box.

---

## 🤝 Contributing

PRs and issues are welcome! If you have suggestions or find improvements, feel free to open one.
