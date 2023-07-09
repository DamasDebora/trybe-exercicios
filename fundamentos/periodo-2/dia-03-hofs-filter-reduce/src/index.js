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

