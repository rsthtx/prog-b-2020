// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const input = "Pig latin is cool !!! Yay"
const res = pigIt(input);

console.log(input);
console.log(res);

// const wordRes = pigWord('Programmering')
// console.log(wordRes, "rogrammeringPay")

function pigIt(str) {
  const words = str.split(' ')

  const convertedWords = []

  for (const word of words) {
    if (word.match(/[A-Za-z]+/g)) {
      convertedWords.push(pigWord(word))
    } else {
      convertedWords.push(word)
    }
  }

  return convertedWords.join(' ')
}

function pigWord(word) {
  const firstLetter = word[0]
  const remainingLetters = word.slice(1)

  return remainingLetters + firstLetter + 'ay'
}

