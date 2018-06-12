export default function identity<T>(arg: T): T {
	return arg;
}

export function loggingIdentity<T>(arg: T[]): T[] {
	console.log(arg.length);  // Array has a .length, so no more error
	return arg;
}
