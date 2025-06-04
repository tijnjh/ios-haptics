//#region src/index.ts
/**
* A single haptic "click"
*/
const haptic = () => {
	try {
		const label = document.createElement("label");
		label.ariaHidden = "true";
		label.style.display = "none";
		const input = document.createElement("input");
		input.type = "checkbox";
		input.setAttribute("switch", "");
		label.appendChild(input);
		document.head.appendChild(label);
		label.click();
		document.head.removeChild(label);
	} catch {}
};
/**
* Two rapid haptics (good for confirmation)
*/
haptic.confirm = () => {
	haptic();
	setTimeout(() => haptic(), 120);
};
/**
* Three rapid haptics (useful for errors)
*/
haptic.error = () => {
	haptic();
	setTimeout(() => haptic(), 120);
	setTimeout(() => haptic(), 240);
};

//#endregion
export { haptic };