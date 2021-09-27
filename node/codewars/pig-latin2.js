// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


// const wordRes = pigWord('Programmering')
// console.log(wordRes, "rogrammeringPay")

const pigIt2 = s => s.split(' ').map(w => ! w.match(/[A-Za-z]+/g)? w : w.slice(1)+w[0]+'ay').join(' ')


const input = "Pig latin is cool !!! Yay"

console.log(input);
console.log(res);

console.log(pigIt2(input))
