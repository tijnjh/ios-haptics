# ios-haptics

A small JavaScript utility for triggering subtle haptic feedback on iOS devices,
using a clever browser-specific quirk.

try it here: https://codepen.io/tijnjh/pen/KwpgPqB

## 🚀 Installation

```sh
npm i ios-haptics
```

## 📦 Usage

Just call these functions on any event where you want haptic feedback:

```javascript
import { haptic } from "ios-haptics";

// A single haptic "click"
haptic();

// Two rapid haptics (good for confirmation)
haptic.confirm();

// Three rapid haptics (useful for errors)
haptic.error();
```

## ⚙️ How it works (The Trick)

This library leverages a clever workaround that became possible with the
introduction of the HTML `switch` control in Safari 17.4. These native controls
gained haptic feedback on iOS.

The method involves dynamically creating a temporary, hidden `<label>` element
containing an `<input type="checkbox" switch />`. Programmatically "clicking"
this label triggers the native iOS haptic feedback associated with the switch
control. Immediately after, these temporary elements are removed from the DOM.

**I found this technique on [cobalt.tools](https://cobalt.tools). This library
is largely a port and package of their solution.**

## ⚠️ Notes

- **iOS Specific:** This only works on iOS devices where the `switch` input type
  has haptic feedback.
- **Best Effort:** The haptics are system-defined; you can't customize intensity
  or pattern beyond what's provided.
- **Temporary:** This is a neat trick, but it might stop working if Apple
  changes its internal handling of these controls.

## 🤝 Contributions

Feel free to send a PR or open an issue if you have suggestions or find
improvements.
