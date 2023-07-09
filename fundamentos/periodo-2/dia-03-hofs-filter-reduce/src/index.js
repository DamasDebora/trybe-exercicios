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