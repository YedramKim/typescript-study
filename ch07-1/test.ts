import { readFile, readFileSync } from 'fs';

console.log('read package.json using 동기 api...');
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

readFile('./package.json', (error: Error, buffer: Buffer) => {
	console.info('비동기 함수')
	console.log(buffer.toString());
});

const readFilePromise = (fileName: string): Promise<string> => new Promise<string>((resolve, reject) => {
	readFile(fileName, (error: Error, buffer: Buffer) => {
		if (error) reject(error);
		else resolve(buffer.toString());
	});
});

(async () => {
	const content = await readFilePromise('./package.json');
	console.log('async / await');
	console.info(content);
})()
