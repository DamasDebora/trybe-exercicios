const checkNumbers = (myNumber, number) => myNumber === number

const result = (myNumber, callback) => {
	const randomNumber = Math.floor((Math.random() * 5) + 1)
	return callback(myNumber, randomNumber) ? 'Lucky day, you won!' : 'Try again!'
}

console.log(result(2, checkNumbers))