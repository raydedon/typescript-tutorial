class Grid {
	public static origin = {x: 0, y: 0};
	constructor(public scale: number) { }
	public calculateDistanceFromOrigin(point: {x: number; y: number; }) {
		const xDist = (point.x - Grid.origin.x);
		const yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
}
