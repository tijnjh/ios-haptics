export function isIos() {
  if (typeof navigator === 'undefined')
    return false

  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}

export function h<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  { styles, ...otherAttrs }: Partial<HTMLElementTagNameMap[T]> & {
    styles: Partial<CSSStyleDeclaration> & Record<string & {}, unknown>
  },
) {
  const el = document.createElement(tag)

  Object.assign(el, otherAttrs)
  Object.assign(el.style, styles)

  return el
}
