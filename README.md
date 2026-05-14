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
import { haptic } from 'ios-haptics'

// a single haptic
haptic()

// two rapid haptics
haptic.confirm()

// three rapid haptics
haptic.error()
```

## Angular

Angular support is available through `ios-haptics/angular`.

Preferred usage — directive on a native `<label>`:

```html
<label hapticTrigger class="button-like">
  Like
</label>
```

```ts
import { Component } from '@angular/core'
import { HapticTriggerDirective } from 'ios-haptics/angular'

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [HapticTriggerDirective],
  template: `
    <label hapticTrigger class="button-like">
      Like
    </label>
  `,
})
export class ExampleComponent {}
```

Component usage is also available:

```html
<haptic-trigger>
  Like
</haptic-trigger>
```

```ts
import { HapticTriggerComponent } from 'ios-haptics/angular'
```

The Angular trigger is interaction-driven. It is not a replacement for the deprecated imperative `haptic()` API on iOS 26.5+.

---

## ⚙️ how it works

this uses the `<input type="checkbox" switch />` (introduced in safari 17.4), which has haptic feedback when toggled

every `haptic` call, it will create one of those in the background, toggle it, then remove it

on devices that support it, `navigator.vibrate()` is called instead, so it works on android too

---

feel free to send a pr or open an issue if you have suggestions or find
improvements
