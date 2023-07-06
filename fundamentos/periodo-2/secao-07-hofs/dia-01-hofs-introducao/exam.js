const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
	if(rightAnswer === studentAnswer){
		return 1
	} if (studentAnswer === 'N.A') {
		return 0
	}
	return -0.5
}

const counterPoints = (rightAnswers, studentAnswers, callback) => {
	let counter = 0

	for (let i = 0; i < rightAnswers.length; i += 1){
		const callbackResult = callback(rightAnswers[i], studentAnswers[i])
		counter += callbackResult
	}
	return `final result: ${counter}`
}

console.log(counterPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers))

