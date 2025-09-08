function haptic() {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(50)
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

haptic.confirm = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50])
    return
  }

  haptic()
  setTimeout(() => haptic(), 120)
}

haptic.error = () => {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50, 70, 50])
    return
  }

  haptic()
  setTimeout(() => haptic(), 120)
  setTimeout(() => haptic(), 240)
}

// prevent intellisense from being unhelpful
declare interface Haptic {
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

  /**  a single haptic */
  (): void

  /** two rapid haptics */
  confirm: () => void

  /** three rapid haptics */
  error: () => void
}

const h: Haptic = haptic as any

export { h as haptic }
