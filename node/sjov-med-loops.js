console.log("### Opg: 1 #######")
// Opg 1 tæl ned fra 10 - med while løkke
console.log("opg 1 while loop")
let i = 10
while (i >= 1) {
  console.log(i);
  i--;
}

// Opg 1 tæl ned fra 10 - med for løkke
console.log("opg 1 for loop")
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("### Opg: 2 #######")
// læg sammen til 20: 1+2+3+...+20

console.log("opg 2 med while løkke");
let sum = 0;
let tal = 1;
while (tal <= 20) {
  // sum = sum + tal;
  sum += tal;
  // console.log(sum);
  tal++;
}
console.log(sum)

console.log("opg 2 med for løkke");
sum = 0
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log(sum)

// for (INIT; COND; STEP) {
//   // DO SOMETHING
//   for (INIT; COND; STEP) {
//     // DO SOMETHING
//   }
// }

console.log("### Opg: 3 #######")
for (let tabelNr = 2; tabelNr <= 10; tabelNr++) {
  process.stdout.write(tabelNr + "-tabellen: ");
  for (let i = 1; i <= 10; i++) {
    let value = i * tabelNr
    // console.log(value)
    process.stdout.write(value + " ");
  }
  console.log()
}

console.log("### Opg: 4 #######")
// ligning: y = 3x^2 + 6x + 9
// beregn y for x: {0,10,20,...,100}
for (let i = 0; i <= 10; i++) {
  let x = i * 10
  // y = 3x^2 + 6x + 9
  let y = 3 * x * x + 6 * x + 9;
  console.log(x + " : " + y);
}
