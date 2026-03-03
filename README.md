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

### Vanilla

```javascript
import { trigger } from 'ios-haptics'

trigger()           // light tap
trigger('success')  // two rapid taps
trigger('error')    // three rapid taps
trigger('warning')  // two rapid taps
```

Or use the classic API:

```javascript
import { haptic } from 'ios-haptics'

haptic()          // single tap
haptic.confirm()  // two rapid taps
haptic.error()    // three rapid taps
```

### React

```jsx
import { useHaptics } from 'ios-haptics/react'

function App() {
  const { trigger } = useHaptics()
  return <button onClick={() => trigger('success')}>Tap me</button>
}
```

### Vue

```vue
<script setup>
import { useHaptics } from 'ios-haptics/vue'
const { trigger } = useHaptics()
</script>

<template>
  <button @click="trigger('success')">Tap me</button>
</template>
```

### Svelte

```svelte
<script>
  import { haptic } from 'ios-haptics/svelte'
</script>

<!-- use as an action -->
<button use:haptic={'success'}>Tap me</button>
```

---

## ⚙️ How it works

iOS Safari doesn't expose the Vibration API, but it *does* trigger haptic feedback when toggling a `<input type="checkbox" switch />` element — a feature introduced in Safari 17.4.

Each call dynamically creates one of these inputs in the background, toggles it, and immediately removes it — giving you a clean, side-effect-free haptic tap.

On Android, `navigator.vibrate()` is used instead, so it works cross-platform out of the box.

---

## 🤝 Contributing

PRs and issues are welcome!
