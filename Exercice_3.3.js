/*
 **Write a program that will create a duplicate of a given array.
 **Bonus: make a first version that will only do it using push().
 **Make a second version that uses a single method call to perform the copy.
 */

const readLineSync = require("readline-sync"); //Call the module to ask question to the user.

let userNumber = readLineSync.question("Enter the number of things you want to put in the array: ");

let firstArray = [];

while (userNumber > 0) { //while loop who push ever yelement in the array.

  let anotherThings = readLineSync.question("Enter the things you want to put in the first array: ");

  firstArray.push(anotherThings);

  userNumber -= 1;
}

console.log("The array is already for the copy: " + firstArray);

let secondArray = [];

for (let i = 0; i < firstArray.length; i++) {

  secondArray.push(firstArray[i]);
}

console.log("This array is a copy who use a for loop: " + secondArray);

let sliceArray = secondArray.slice()//Copy an array in an another array.

console.log("This array is a copy who use .slice(): " + sliceArray);
