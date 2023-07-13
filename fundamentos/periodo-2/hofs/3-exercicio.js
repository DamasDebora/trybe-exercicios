const data = require('./dados')

// gostam de programar em java
const desenvolvedorJava = () => {
	const people = data.filter((person) => person.gostaDeProgramarEm.includes('JAVA'))
  return people
}

console.log(desenvolvedorJava())