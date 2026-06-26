import { isIos } from './utils'

export function hapticTrigger(element: HTMLElement | undefined | null) {
  if (!element || typeof window === 'undefined') {
    return
  }

  if (!isIos()) {
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
    touchAction: 'manipulation',
  }

  Object.assign(switchEl.style, styles)

  switchEl.style.setProperty('-webkit-tap-highlight-color', 'transparent')

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative'
  }

  element.insertAdjacentElement('beforeend', switchEl)
}
