import Animal from "./Animal";

export default class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}

	public move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

const tom: Animal = new Horse("Tommy the Palomino");

tom.move(34);
