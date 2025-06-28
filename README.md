
# ios-haptics

javascript library for haptic feedback inside of safari on ios

![GitHub last commit](https://img.shields.io/github/last-commit/tijnjh/ios-haptics)
[![npm version](https://img.shields.io/npm/v/tsuite.svg)](https://npmjs.com/package/ios-haptics)
![NPM Downloads](https://img.shields.io/npm/dm/ios-haptics)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/ios-haptics)

demo: [ios-haptics demo](https://wg.tijn.dev?h=s0kqLSnJz1PITLFVykgsKMlMVrKD0Db6ECk7Lkw1zvl5aZlFuTClCskQPj4trkVF%7EUVwDakgHlw5AA&c=UwAA&j=hYwxDsIwDEX3nMLKBAPJTsQC6sAxUJqSiDqObDMgxN1RlY6Vun3pv_cKNmKFL%7ERH0xLhBxMTgs2qTc7eJ0En2ReSUyfEBmNGim9MVd0z6TCnZV4_9_FgO2OPjmqcS3zBZQ2HPedGdSqMG6qL_dpNDMzEW4G0HMH8AQ)

## installation

```sh
npm i ios-haptics
```

## usage

```javascript
import { haptic } from "ios-haptics";

// a single haptic 
haptic();

// two rapid haptics (good for confirmation)
haptic.confirm();

// three rapid haptics (useful for errors)
haptic.error();
```

## how it works

this uses the `<input type="checkbox" switch />` (introduced in safari 17.4), which has haptic feedback when toggled

every `haptic` call, it will create one of those in the background, toggle it (which has haptic feedback), then remove it

---

Feel free to send a PR or open an issue if you have suggestions or find
improvements.
