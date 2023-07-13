const data = require('./dados')

//Encontre a primeira pessoa que tem uma dívida. 
//Exemplo de retorno: {
//   nome: 'Carol',
//   divida: true,
//   gostaDeProgramarEm:['JS', 'REACT', 'JAVA']
// }

const pessoaComDivida = () => data.find((pessoa) => pessoa.divida === true)

console.log(pessoaComDivida())