const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number of things you want to put in the array: ");

let firstArray = [];
while (userNumber > 0) {

  let anotherThings = readLineSync.question("Enter the things you want to put in the first array: ");
  firstArray.push(anotherThings);
  userNumber -= 1;
}
console.log("The array is already for the copy: " + firstArray);
let secondArray =[];
for (let i = 0; i < firstArray.length; i++) {
  secondArray.push(firstArray[i]);
}
console.log(secondArray);
