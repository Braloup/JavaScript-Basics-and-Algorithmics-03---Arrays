/*
**Write a program that will add all the elements of an array.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let userNumber = readLineSync.question("How many numbers do you want to add?: ");//How many numbers want the user?

let addNumber = [];

while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter the number you want to add: ");
  addNumber.push(parseInt(anotherNumber));
  userNumber -= 1;
}

console.log("Your choice number is: " + addNumber);// An array withe the number user choice.
let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {//Add the all numbers in the array
  toatalNumber += addNumber[i];
}
console.log("The addition of these numbers gives: " + toatalNumber);
