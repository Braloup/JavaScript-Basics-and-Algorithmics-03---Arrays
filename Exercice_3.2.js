/*
**Write a program that will calculate the average value of an array.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let userNumber = readLineSync.question("Enter the number of digits you want to average: ");

let averageNumber = userNumber;

let addNumber = [];

while (userNumber > 0) { /// While loop to push numbers in the array.
  let anotherNumber = readLineSync.question("Enter digit  to averange: ");

  addNumber.push(parseInt(anotherNumber));
  userNumber -= 1;
}

console.log("The number you want to average is: " + addNumber);

let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {//Add all numbers in the arry.
  toatalNumber += addNumber[i];
}

console.log("The average of your numbers is : " + toatalNumber / averageNumber);
