import { isIos } from './utils'

export function hapticTrigger(element: HTMLElement | undefined | null) {
  if (!element || typeof window === 'undefined') {
    return
  }

  if (!isIos()) {
    return
  }

  if (element.querySelector(':scope > [data-haptic-trigger]')) {
    return
  }

  const labelEl = document.createElement('label')

  labelEl.setAttribute('data-haptic-trigger', '')
  labelEl.setAttribute('aria-hidden', 'true')

  const labelStyles: Partial<CSSStyleDeclaration> = {
    position: 'absolute',
    inset: '0',
    touchAction: 'manipulation',
  }

  Object.assign(labelEl.style, labelStyles)

  labelEl.style.setProperty('-webkit-tap-highlight-color', 'transparent')

  const switchEl = document.createElement('input')

  switchEl.type = 'checkbox'
  switchEl.setAttribute('switch', '')

  // The switch must never sit under the finger: WebKit marks a touchstart on it as handled, which cancels scrolling.
  const switchStyles: Partial<CSSStyleDeclaration> = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '0',
    visibility: 'hidden',
  }

  Object.assign(switchEl.style, switchStyles)

  // The label re-dispatches its click to the switch; keep that copy from reaching the element's click handlers a second time.
  switchEl.addEventListener('click', event => event.stopPropagation())

  labelEl.append(switchEl)

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative'
  }

  element.insertAdjacentElement('beforeend', labelEl)
}
