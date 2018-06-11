let deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	createCardPicker() {
		return () => {
			const pickedCardConst = Math.floor(Math.random() * 52);
			const pickedSuitConst = Math.floor(pickedCardConst / 13);

			return {suit: this.suits[pickedSuitConst], card: pickedCardConst % 13};
		};
	},
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.info(`card: ${pickedCard.card} of ${pickedCard.suit}`);
