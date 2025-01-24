export const addLeftZero = (num?: number, digits = 2): string => {
  if (typeof num !== 'number') return ''

  let numParse = Number(num)
  if (isNaN(numParse)) return ''

  let text = ''
  // Add simbol for negative numbers and change number to positive
  if (numParse < 0) {
    text += '-'
    numParse += -1
  }

  const numStr = numParse.toString()
  const digitSize = digits - numStr.length

  if (digitSize < 0) {
    return `${text}${numStr}`
  }

  return `${text}${'0'.repeat(digitSize)}${numStr}`
}
