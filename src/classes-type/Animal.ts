export default class Animal {
	private name: string;
	constructor(theName: string) { this.name = theName; }
	public move(distanceInMeters: number = 0) { console.log(`${this.name} moved ${distanceInMeters}m.`); }
}
