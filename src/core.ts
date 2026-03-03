export const supportsHaptics =
  typeof window === "undefined"
    ? false
    : window.matchMedia("(pointer: coarse)").matches;

export type HapticType = "light" | "success" | "error" | "warning";

function _single() {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(50);
      return;
    }

    if (!supportsHaptics) return;

    const labelEl = document.createElement("label");
    labelEl.ariaHidden = "true";
    labelEl.style.display = "none";

    const inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.setAttribute("switch", "");
    labelEl.appendChild(inputEl);

    document.head.appendChild(labelEl);
    labelEl.click();
    document.head.removeChild(labelEl);
  } catch {
    // do nothing
  }
}

function _confirm() {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50]);
    return;
  }
  _single();
  setTimeout(() => _single(), 120);
}

function _error() {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50, 70, 50]);
    return;
  }
  _single();
  setTimeout(() => _single(), 120);
  setTimeout(() => _single(), 240);
}

export function trigger(type: HapticType = "light") {
  switch (type) {
    case "success":
      return _confirm();
    case "error":
      return _error();
    case "warning":
      return _confirm();
    case "light":
    default:
      return _single();
  }
}

export { _single as singleHaptic, _confirm as confirmHaptic, _error as errorHaptic };
