import { isIos } from './utils'

const SCROLL_THRESHOLD_PX = 10

export function hapticTrigger(element: HTMLElement | undefined | null) {
  if (!element || typeof window === 'undefined') {
    return
  }

  if (!isIos()) {
    return
  }

  if (element.querySelector('[data-haptic-trigger]')) {
    return
  }

  const switchEl = document.createElement('input')

  switchEl.type = 'checkbox'
  switchEl.setAttribute('switch', '')
  switchEl.setAttribute('data-haptic-trigger', '')
  switchEl.setAttribute('aria-hidden', 'true')
  switchEl.tabIndex = -1

  const styles: Partial<CSSStyleDeclaration> = {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    margin: '0',
    opacity: '0',
    clipPath: 'inset(0 round 999px)',
    // Allow scroll gestures when the touch starts on the switch overlay.
    touchAction: 'pan-x pan-y',
  }

  Object.assign(switchEl.style, styles)

  switchEl.style.setProperty('-webkit-tap-highlight-color', 'transparent')

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative'
  }

  let pointerStartY = 0
  let isScrollGesture = false

  switchEl.addEventListener('pointerdown', (event) => {
    pointerStartY = event.clientY
    isScrollGesture = false
  }, { passive: true })

  switchEl.addEventListener('pointermove', (event) => {
    if (Math.abs(event.clientY - pointerStartY) > SCROLL_THRESHOLD_PX) {
      isScrollGesture = true
      switchEl.checked = false
    }
  }, { passive: true })

  switchEl.addEventListener('pointerup', () => {
    if (isScrollGesture) {
      switchEl.checked = false
    }

    isScrollGesture = false
  }, { passive: true })

  switchEl.addEventListener('pointercancel', () => {
    isScrollGesture = false
    switchEl.checked = false
  }, { passive: true })

  element.insertAdjacentElement('beforeend', switchEl)
}
