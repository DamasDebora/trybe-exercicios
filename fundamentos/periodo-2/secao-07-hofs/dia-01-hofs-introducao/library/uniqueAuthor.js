const books = require('./booksData')

//Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
	return books.every((book) => 
		books.some((bookSome) => 
		(bookSome.author.birthYear === book.author.birthYear))
	)
}

authorUnique()