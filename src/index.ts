/**
 * ios-haptics v0.0.9
 * tijn.dev
 * @license MIT
 */

function haptic() {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(50);
      return;
    }

    const labelEl = document.createElement('label')
    labelEl.ariaHidden = 'true'
    labelEl.style.display = 'none'

    const inputEl = document.createElement('input')
    inputEl.type = 'checkbox'
    inputEl.setAttribute('switch', '')
    labelEl.appendChild(inputEl)

    document.head.appendChild(labelEl)
    labelEl.click()
    document.head.removeChild(labelEl)
  }
  catch {
    // do nothing
  }
};

haptic.confirm = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50]);
    return;
  }

  haptic()
  setTimeout(() => haptic(), 120)
}

haptic.error = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50, 70, 50]);
    return;
  }

  haptic()
  setTimeout(() => haptic(), 120)
  setTimeout(() => haptic(), 240)
}

export { haptic }
