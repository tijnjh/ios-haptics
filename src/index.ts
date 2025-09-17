export const supportsHaptics = window.matchMedia('(pointer: coarse)').matches

function _haptic() {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(50)
      return
    }

    if (!supportsHaptics) {
      return
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
}

_haptic.confirm = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50])
    return
  }

  _haptic()
  setTimeout(() => _haptic(), 120)
}

_haptic.error = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50, 70, 50])
    return
  }

  _haptic()
  setTimeout(() => _haptic(), 120)
  setTimeout(() => _haptic(), 240)
}

// prevent intellisense from being unhelpful
interface haptic {
  /** @deprecated */
  apply: never

  /** @deprecated */
  arguments: never

  /** @deprecated */
  bind: never

  /** @deprecated */
  call: never

  /** @deprecated */
  caller: never

  /** @deprecated */
  length: never

  /** @deprecated */
  name: never

  /** @deprecated */
  prototype: never

  /** @deprecated */
  toString: never

  /** @deprecated */
  Symbol: never

  /**  a single haptic */
  (): void

  /** two rapid haptics */
  confirm: () => void

  /** three rapid haptics */
  error: () => void
}

const __haptic = _haptic as haptic

export { __haptic as haptic }
