const addZero = (num, minDigit) => {
	let simbol = ''
	// Add simbol for negative numbers
	if (num < 0) {
		simbol = '-'
		num *= -1
	}

	const numString = (num).toString()

	// add digits to the number
	const addDigit = minDigit - numString.length

	return `${simbol}${'0'.repeat(addDigit)}${num}`
}

exports.getTwoDigit = (num) => addZero(num, 2)
