let pets = new Set(["Cat", "Dog", "Hamster"]);
pets
pets["species"] = "mammals";

for (const pet in pets) {
	console.log(pet); // "species"
}

for (const pet of pets) {
	console.log(pet); // "Cat", "Dog", "Hamster"
}
