import Animal from "./Animal";

class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}

	public move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

const sam = new Snake("Sammy the Python");

sam.move();
