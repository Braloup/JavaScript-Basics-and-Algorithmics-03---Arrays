const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("How many numbers do you want to add?: ");
let addNumber = [];
while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter the number you want to add: ");
  addNumber.push(parseInt(anotherNumber));
  userNumber -= 1;
}
console.log("Your choice number is: " + addNumber);
let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {
  toatalNumber += addNumber[i];
}
console.log("The addition of these numbers gives: " + toatalNumber);
