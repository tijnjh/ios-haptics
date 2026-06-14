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

```tsx
import { HapticTrigger } from 'ios-haptics/react'

<HapticTrigger>
  tap me
</HapticTrigger>
```

```vue
<script setup>
import { HapticTrigger } from 'ios-haptics/vue'
</script>

<template>
  <HapticTrigger>
    tap me
  </HapticTrigger>
</template>
```

```svelte
<script>
  import { HapticTrigger } from 'ios-haptics/svelte'
</script>

<HapticTrigger>
  tap me
</HapticTrigger>
```

## ⚙️ how it works

this uses the `<input type="checkbox" switch />` (introduced in safari 17.4), which has haptic feedback when toggled

`HapticTrigger` renders one of those on top of your element, so when the user taps it, safari triggers the native haptic feedback

the old `haptic()` api is deprecated and no longer works reliably on newer ios versions

---

feel free to send a pr or open an issue if you have suggestions or find
improvements
