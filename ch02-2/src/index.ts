import IPerson from './person/IPerson';
import Person from './person/Person';
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();
let people: IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()));

class AIterable implements Iterable<string> {
	constructor(private strings: string[] = [], private currentIndex: number = 0) {}
	[Symbol.iterator](): Iterator<string> {
		let currentIndex = this.currentIndex;
		let length = this.strings.length;

		return {
			next: () => {
				const value = currentIndex < length ? this.strings[currentIndex++] : undefined;
				const done = value === undefined;

				return { value, done };
			}
		};
	}
}

for (const value of new AIterable(['hello', 'world', '!'])) {
	console.log(value);
}

class IterableUsingGenerator<T> implements Iterable<T> {
	constructor(private values: T[] = [], private currentIndex: number = 0) {}
	*[Symbol.iterator] () {
		while(this.currentIndex < this.values.length) {
			yield this.values[this.currentIndex++];
		}
	}
}

for (const value of new IterableUsingGenerator(['hello', 'world', '!'])) {
	console.log(value);
}

for (const value of new IterableUsingGenerator([4, 5, 6])) {
	console.log(value);
}

function* aaa() {
	for (const value of [1,2,3]) {
		yield value;
	}
}