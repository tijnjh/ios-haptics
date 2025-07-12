/**
 * ios-haptics v0.0.9
 * tijn.dev
 * @license MIT
 */

function haptic() {
  try {
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
  haptic()
  setTimeout(() => haptic(), 120)
}

haptic.error = () => {
  haptic()
  setTimeout(() => haptic(), 120)
  setTimeout(() => haptic(), 240)
}

export { haptic }
