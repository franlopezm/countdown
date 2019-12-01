const addZero = (num, minDigit) => {
	const numString = num.toString()

	// add digits to the number
	const addDigit = minDigit - numString.length
	if (addDigit < 0) return numString

	return `${'0'.repeat(addDigit)}${num}`
}

exports.getTwoDigit = (num) => addZero(num, 2)
