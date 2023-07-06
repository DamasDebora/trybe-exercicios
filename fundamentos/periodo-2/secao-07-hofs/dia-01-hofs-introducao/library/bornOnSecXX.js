const books = require('./booksData')

//Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
	return books.every((book) => (
		book.author.birthYear >= 1901 && book.author.birthYear <= 2000
	))
}

everyoneWasBornOnSecXX()