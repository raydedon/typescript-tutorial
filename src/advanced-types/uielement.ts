type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
	public animate(dx: number, dy: number, easing: Easing) {
		if (easing === "ease-in") {
			console.info("ease-in");
		} else if (easing === "ease-out") {
			console.info("ease-out");
		} else if (easing === "ease-in-out") {
			console.info("ease-in-out");
		} else {
			console.info("else no match");
		}
	}
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
