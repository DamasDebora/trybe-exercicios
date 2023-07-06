const books = require('./booksData')

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
	return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}

someBookWasReleaseOnThe80s()