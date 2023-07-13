const data = require('./dados')
//Crie uma função que verifica se alguma pessoa tem divida, se tiver, retorne true

const verificarDivida = () => {
	return data.some((pessoa) => pessoa.divida)
}

console.log(verificarDivida())