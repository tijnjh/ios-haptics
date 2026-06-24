export function hapticTrigger(element: HTMLElement | undefined | null) {
  if (!element) return;

  const switchEl = document.createElement("input");

  switchEl.type = "checkbox";
  switchEl.setAttribute("switch", "");

  const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    opacity: 0,
    cursor: "pointer",
    clipPath: "inset(0 round 999px)",
    touchAction: "manipulation",
  };

  Object.assign(switchEl.style, styles);

  switchEl.style.setProperty("-webkit-tap-highlight-color", "transparent");

  element.style.position = "relative";

  element.insertAdjacentElement("beforeend", switchEl);
}
