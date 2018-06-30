interface IBird {
	fly(): void;
	layEggs(): void;
}

interface IFish {
	swim(): void;
	layEggs(): void;
}

class Sparrow implements IBird {
	public fly() {
		console.info();
	}
	public layEggs() {
		console.info();
	}
}

class Katla implements IFish {
	public swim() {
		console.info();
	}
	public layEggs() {
		console.info();
	}
}

function getSmallPet(): IFish | IBird {
	return new Sparrow();
}

let pet = getSmallPet();

// Each of these property accesses will cause an error
if ((pet as IFish).swim) {
	(pet as IFish).swim();
} else if ((pet as IBird).fly) {
	(pet as IBird).fly();
}

function isFish(petArg: IFish | IBird): petArg is IFish {
	return (petArg as IFish).swim !== undefined;
}

if (isFish(pet)) {
	pet.swim();
} else {
	pet.fly();
}

f(1, 2);
f(1);
f(1, undefined);
f(1);

function f(x: number, y?: number) {
	return x + (y || 0);
}

interface IAlias { num: number; }
interface Interface {
	num: number;
}
declare function aliased(arg: IAlias): IAlias;
declare function interfaced(arg: Interface): Interface;
