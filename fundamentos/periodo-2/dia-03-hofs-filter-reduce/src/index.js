const {countries} = require('../data/countries')

// 1 - Calcule a quantidade total da população de todos os países.
const getPopulation = () => {
	return countries.reduce((countries, country) => countries + country.population, 0)
}
getPopulation()

//2 - Calcule a área total de todos os países.
const getArea = () => {
	return countries.reduce((countries, country) => countries + country.area, 0)
}
console.log(getArea())

// 3 - Encontre o país com o maior nome.
const longestName = () => countries
  .reduce((acc, country) => acc.name.length > country.name.length ? acc : country) 
console.log(longestName())

//4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const aArray = names.join('').toLocaleLowerCase().split('');
const countA = () =>
	aArray.reduce((acc, name) => name === 'a' ? acc += 1 : acc, 0)
countA()

//5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const studentAverage = (students, grades) => {
  return students.map((student, i) => ({
			name: student,
			average: grades[i].reduce((acc, curr) => acc + curr) / grades[i].length
	})) 
}
console.log(studentAverage(students, grades))


