const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorne o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength
const dragonDamage = (dragon) => {
	const minDamage = 15
	const maxDamage = Math.floor((Math.random()) * dragon.strength)

	const damage = maxDamage > minDamage ? maxDamage : minDamage
	return damage
}

dragonDamage(dragon)

//Crie uma função que retorne o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength

const warriorDamage = (warrior) => {
	const minDamage = warrior.strength
	const maxDamage = Math.floor((Math.random() * (minDamage * warrior.weaponDmg)))

	const damage = maxDamage > minDamage? maxDamage : minDamage
	return damage
}

console.log(warriorDamage(warrior))

//Crie uma função que retorne um objeto com duas chaves e dois valores 
//contendo o dano e a mana gasta pelo mago em um turno.
const mageDamage = (mage) => {
	const mana =  mage.mana
	const minDamage = mage.intelligence
	const maxDamage = minDamage * 2

	const turnStats = {
		manaSpent: 0,
		damageDealt: 'not enough mana',
	}

	if(mana > 15){
		const damage = minDamage < maxDamage ? maxDamage : minDamage
		turnStats.manaSpent = 15
		turnStats.damageDealt = damage
		return turnStats

	}

	return turnStats
}

console.log(mageDamage(mage))


