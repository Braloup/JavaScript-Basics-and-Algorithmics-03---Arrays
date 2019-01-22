const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number of digits you want to average: ");
let averageNumber = userNumber;
let addNumber = [];
while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter digit you to averange: ");
  addNumber.push(parseInt(anotherNumber));
  userNumber -= 1;
}
console.log("The number you want to average is: " + addNumber);
let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {
  toatalNumber += addNumber[i];
}

console.log("The average of your numbers is : " + toatalNumber / averageNumber);
