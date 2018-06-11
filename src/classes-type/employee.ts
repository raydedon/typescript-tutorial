import Person from "./person";

class Employee extends Person {
	private department: string;

	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}

	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}
