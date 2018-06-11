interface IDeck {
	suits: string[];
	cards: number[];
	createCardPicker(this: IDeck): () => ICard;
}
