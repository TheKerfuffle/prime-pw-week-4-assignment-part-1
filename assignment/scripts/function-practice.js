console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}

// Call the function to test

console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, for example 'Hello, Jo!'

function helloName( name ) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test

console.log(helloName('Chuckles'));

// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber , secondNumber) {
  return firstNumber + secondNumber;
}

console.log('Calling addNumbers with 2 and 3:', addNumbers(2,3));

// 4. Function to multiply three numbers & return the result

function multiplyThree(num1,num2,num3){
  return num1*num2*num3;
}

console.log('Calling multiplyThree with 3, 4 and 5:', multiplyThree(3,4,5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let a1 = [1,2,3,4,5];
let a2 = [];
function getLast( array ) {
  if (array.length === 0){
    return undefined;
  } else {
    return array[array.length -1];
  }
}

console.log('a1:',a1);
console.log('a2:',a2);
console.log('Calling an array with elements, (a1) with last item 5:', getLast(a1));
console.log('Calling an empty array, (a2) should say undefined:', getLast(a2));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  for (let element of array) {
    if (element === value) {
      return true;
    }
  } return false;
}

console.log('Looking for 3 in array1 (a1) - should say true:', find(3,a1));
console.log('Looking for 3 in array2 (a2) - should say false:', find(3,a2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string.indexOf(letter) === 0) {
    return true;
  } return false;
}

console.log( 'isFirstLetter - should say true:', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false:', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll(array) {
  let sum = 0;
  for (let element of array){
    sum = sum + element;
  }
  return sum;
}

console.log('Calling sumAll with array1 (a1) from before:', sumAll(a1));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let a3 = [1,-2,3,-4,5,-6];
let a4 = [-1,-2,-3,-4,-5,-6];

function positiveElements(array) {
  let positiveArray = [];
  for (let element of array){
    if (element>0){
      positiveArray.push(element);
    }
  }
  return positiveArray;
}

console.log('a3:',a3);
console.log('a4:',a4);
console.log('Calling positiveElements for an all positive array (a1):', positiveElements(a1));
console.log('Calling positiveElements for a half positive array (a3):', positiveElements(a3));
console.log('Calling positiveElements for an all negative array (a4):', positiveElements(a4));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//
// Find the nth Tetrahedral Number
// A tetrahedron is a pyramid with a triangular base and three sides.
// A tetrahedral number is a number of items within a tetrahedron.
// Create a function that takes an integer n and returns the nth tetrahedral number.
// https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv

const tetrahedralNumber = n => {
  let t = 0;
  if (n<=0) {
    return null;
  }
  for (let h=n; h>0; h--) {
  //  console.log('in loop 1', h);
    for (let l=h; l>0; l--){
  //    console.log('in loop 2', l);
  // Used these bits of commented out code to test that the loops were behaving as expected.
      t+=l;
    }
  }
  return t;
}

console.log('Testing tetrahedralNumber with 2, should be 4:', tetrahedralNumber(2));
console.log('Testing tetrahedralNumber with 5, should be 35:', tetrahedralNumber(5));
console.log('Testing tetrahedralNumber with 6, should be 56:', tetrahedralNumber(6));

// The .length property on an array will return the number of elements in the array.
// For example, the array below contains 2 elements: [1, [2, 3]]
// Suppose we instead wanted to know the total number of non-nested items in the nested array.
// In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// https://edabit.com/challenge/yXSTvCNen2DQHyrh6


// ATTEMPT 1
// function getLength(nestedArray) {
//   for (let part of nestedArray) {
//     console.log(part);
//     if (part.length !== undefined){
//       return 1;
//     } else {
//       getLength(part);
//     }
//   }
//   return length;
// }


// FAILED ATTEMPT 2
// function getLength(nestedArray, length) {
//   if (nestedArray === []){
//     return 0;
//   }
//
//   for (let part of nestedArray){
//     console.log('current part:', part, 'current length:', length);
//     if (part.length !== undefined){
//       return getLengthgetLength(part,length);
//     } else if (part.length === undefined) {
//       length ++;
//       console.log('increasing length');
//     }
//   }
//
//   return length;
// }


// FAILED ATTEMPT 3
// let length = 0;
// function getLength(nestedArray, length) {
//   for (let part of nestedArray){
//     console.log('current part:',part, 'current length', length);
//     if (part.length !== undefined){
//       console.log('running recursion with part', part, 'and current length', length);
//       getLength(part, length);
//     }
//     length++;
//     console.log('increasing length');
//   }
//   return length;
// }

function getLength(nestedArray) {
  let length = 0;
  for (let part of nestedArray){
    if (part.length !== undefined){
      length += getLength(part);
    } else{
      length++;
    }
  }
  return length;
}

let a5 = [1,[2,3]];
let a6 = [1,[2,[3,4]]];
let a7 = [[1,2,3],4,[[[5,6],7],8]]
console.log('Testing getLength of a5, should be 3', getLength(a5));
console.log('Testing getLength of a6, should be 4', getLength(a6));
console.log('Testing getLength of a7, should be 8', getLength(a7));
