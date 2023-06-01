const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
        {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
        },
    ],
};


//1 - Imprimir no console.log: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'`)

/*
2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos.
Atribua a essa chave um objeto que contenha as seguintes informações:
{
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
*/
reader.favoriteBooks[1] = {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco'
}
console.log(reader)

//3- imprima “Julia tem {quantidade} livros favoritos.” ou “Julia tem 1 livro favorito.”

const favsQuantity =  reader.favoriteBooks.length

favsQuantity > 1 
? console.log(`${reader.name} tem ${favsQuantity} livros favoritos`) 
: console.log(`${reader.name} tem ${favsQuantity} livro favorito`)
