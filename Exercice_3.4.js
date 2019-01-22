const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number of digit you want to put in the array: ");

let minMaxArray = [];

while(userNumber > 0){

  let addNumber = readLineSync.question("Enter the number you want to push in the array: ");

  minMaxArray.push(addNumber);
  userNumber -= 1;
}
console.log("Your array is: " + minMaxArray);

console.log("The minimum element of your aray is: " + Math.min(...minMaxArray));

console.log("The maximum element of your array is: " + Math.max(...minMaxArray));
