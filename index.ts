import {num} from './module/module';
class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
			this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string,
	lastName: string
}

function greeter(person : Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
console.log(num);

const array: Array<number> = [1];
const tuple: [string, number] = ['a', 1];

enum Color { Red = 100, Green, Blue };
console.log(Color.Red);
console.log(Color[100]);
console.log(Color.Green);
console.log(Color.Blue);

const str: Object = 'a';

const list2: any[] = [1, 'a', false];
list2[1] = 0;

const a: Object = 'a';
(<string>a).split('').join('');

function func() {
	throw 'a';
}

function sumMatrix(matrix: number[][]) {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
			var currentRow = matrix[i];
			for (let i = 0; i < currentRow.length; i++) {
					sum += currentRow[i];
			}
	}

	return sum;
}

for (let i = 0; i < 10 ; i++) {
	setTimeout(function() { console.log(i); }, 100 * i);
}

const {
	a : newNum,
	b : newStr
} : {
	a: number,
	b: string
} = {
	a: 10,
	b: 'str'
}