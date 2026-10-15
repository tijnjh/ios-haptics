import { isIos } from './utils'

const SWITCH_ID = 'ios-haptics-switch'
const TRIGGER_ATTRIBUTE = 'data-haptic-trigger'

const PROXIED_ANCHOR_ATTRIBUTES = ['href', 'target', 'rel', 'download', 'referrerpolicy', 'hreflang', 'type', 'ping']

interface PendingTap {
  label: HTMLLabelElement
  prevented: boolean
}

let pendingTap: PendingTap | undefined
let listening = false

function isTriggerLabel(target: EventTarget | null): target is HTMLLabelElement {
  return target instanceof HTMLLabelElement && target.hasAttribute(TRIGGER_ATTRIBUTE)
}

function ensureSwitch() {
  if (document.getElementById(SWITCH_ID)) {
    return
  }

  const switchEl = document.createElement('input')

  switchEl.type = 'checkbox'
  switchEl.setAttribute('switch', '')
  switchEl.id = SWITCH_ID
  switchEl.setAttribute('aria-hidden', 'true')

  // One switch for the whole page, outside every element: WebKit marks a touchstart on a switch as handled, which cancels scrolling.
  // `visibility: hidden` keeps the renderer WebKit needs to toggle it, and makes it unfocusable so a tap never closes the keyboard.
  const switchStyles: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '1px',
    height: '1px',
    margin: '0',
    visibility: 'hidden',
    pointerEvents: 'none',
  }

  Object.assign(switchEl.style, switchStyles)

  document.body.append(switchEl)
}

// The label default-handles the tap, so a link underneath never navigates. Buttons need nothing: WebKit submits forms on the
// DOMActivate the label still dispatches, and a submit or reset button handling it would have kept an enclosing link from navigating.
function followLink(label: HTMLLabelElement) {
  for (let element = label.parentElement; element; element = element.parentElement) {
    if (element instanceof HTMLButtonElement && element.form && (element.type === 'submit' || element.type === 'reset')) {
      return
    }

    if (element instanceof HTMLAnchorElement && element.hasAttribute('href')) {
      // A detached anchor still navigates, and its click reaches no listener in the page.
      const proxy = document.createElement('a')

      for (const name of PROXIED_ANCHOR_ATTRIBUTES) {
        const value = element.getAttribute(name)

        if (value !== null) {
          proxy.setAttribute(name, value)
        }
      }

      proxy.click()

      return
    }
  }
}

function onClick(event: MouseEvent) {
  const target = event.target

  if (target instanceof HTMLInputElement && target.id === SWITCH_ID) {
    // The click the label forwards to the switch is ours alone; "click outside" handlers would otherwise close whatever the tap opened.
    // It is dispatched after the tap has finished propagating, so a stopPropagation in the page cannot hide it.
    event.stopImmediatePropagation()

    if (pendingTap && !pendingTap.prevented) {
      followLink(pendingTap.label)
    }

    return
  }

  if (!isTriggerLabel(target) || !document.getElementById(SWITCH_ID)) {
    return
  }

  // A disabled control must not buzz.
  if (target.parentElement?.matches(':disabled, [aria-disabled="true"]')) {
    event.preventDefault()

    return
  }

  // WebKit skips the label's forwarding when the click is preventDefault'ed, which every client-side router link does.
  // Record the call instead of forwarding it; the label already keeps the element's native action from running.
  const tap: PendingTap = { label: target, prevented: false }

  pendingTap = tap

  Object.defineProperties(event, {
    preventDefault: {
      configurable: true,
      value: () => {
        if (event.cancelable) {
          tap.prevented = true
        }
      },
    },
    defaultPrevented: {
      configurable: true,
      get: () => tap.prevented,
    },
    returnValue: {
      configurable: true,
      get: () => !tap.prevented,
      set: (value: boolean) => {
        if (!value && event.cancelable) {
          tap.prevented = true
        }
      },
    },
  })
}

// The label's default action ends by dispatching DOMActivate, which is what submits a form.
// WebKit never saw the page's preventDefault, so honour it here.
function onActivate(event: Event) {
  const tap = pendingTap

  if (!tap || event.target !== tap.label) {
    return
  }

  pendingTap = undefined

  if (tap.prevented) {
    event.stopImmediatePropagation()
    event.preventDefault()
  }
}

export function hapticTrigger(element: HTMLElement | undefined | null): (() => void) | undefined {
  if (!element || typeof window === 'undefined') {
    return
  }

  if (!isIos()) {
    return
  }

  if (element.querySelector(`:scope > [${TRIGGER_ATTRIBUTE}]`)) {
    return
  }

  ensureSwitch()

  if (!listening) {
    window.addEventListener('click', onClick, true)
    window.addEventListener('DOMActivate', onActivate, true)
    listening = true
  }

  const labelEl = document.createElement('label')

  labelEl.htmlFor = SWITCH_ID
  labelEl.setAttribute(TRIGGER_ATTRIBUTE, '')
  labelEl.setAttribute('aria-hidden', 'true')

  const labelStyles: Partial<CSSStyleDeclaration> = {
    position: 'absolute',
    inset: '0',
    touchAction: 'manipulation',
  }

  Object.assign(labelEl.style, labelStyles)

  labelEl.style.setProperty('-webkit-tap-highlight-color', 'transparent')

  const wasStatic = getComputedStyle(element).position === 'static'

  if (wasStatic) {
    element.style.position = 'relative'
  }

  element.insertAdjacentElement('beforeend', labelEl)

  return () => {
    labelEl.remove()

    if (wasStatic) {
      element.style.position = ''
    }
  }
}
