import Animal from "./classes-type/Animal";
import IDeck from "./function/ideck";
import identity, {loggingIdentity} from "./generics/identity";

/*
const animal = new Animal("dog");

const deck: IDeck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
	createCardPicker: ,
};
*/
console.info(identity("fuck off"));
console.info(loggingIdentity(["one", "two"]));

const importedLoggingIdentity: <U>(arg: U[]) => U[] = loggingIdentity;
console.info(importedLoggingIdentity(["one", "two"]));
