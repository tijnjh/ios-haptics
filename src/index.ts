import { h, isIos } from './utils'

export function hapticTrigger(element: HTMLElement | undefined | null) {
  if (
    !element
    || typeof window === 'undefined'
    || !isIos()
    || element.querySelector(':scope > [data-haptic-trigger]')
  ) {
    return
  }

  const labelEl = h('label', {
    ariaHidden: 'true',
    styles: {
      position: 'absolute',
      inset: '0',
      touchAction: 'manipulation',
      webkitTapHighlightColor: 'transparent',
    },
  })

  const switchEl = h('input', {
    type: 'checkbox',

    // the switch must never sit under the finger
    // webkit marks a touchstart on it as handled, which cancels scrolling
    styles: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      margin: '0',
      visibility: 'hidden',
    },

    // the label re-dispatches its click to the switch
    // keep that copy from reaching the element's click handlers a second time
    onclick: event => event.stopPropagation(),
  })

  labelEl.dataset.hapticTrigger = ''

  switchEl.setAttribute('switch', '')

  labelEl.append(switchEl)

  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative'
  }

  element.append(labelEl)
}
