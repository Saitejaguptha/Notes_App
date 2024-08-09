const fs = require('fs');
/*
const book = {
	title: 'Maths Text Book',
	Author: 'Aryabatta',
}

const bookJSON = JSON.stringify(book);

fs.writeFileSync('sample.txt',bookJSON);

const databuffer = fs.readFileSync('sample.txt').toString();
console.log(databuffer);
*/

const databuffer = JSON.parse(fs.readFileSync('sample.txt').toString());
console.log(databuffer.title);

databuffer.title="Socail Text Book";
databuffer.Author="Rahul Dravid";

const modified = JSON.stringify(databuffer);
fs.writeFileSync('sample.txt',modified);
