/**
 * Task 1 :
 * What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

soln: It will be 4 because arrays are objects and shoppingCart is refernce to it

Task 2 :


let array = ['Jazz', 'Blues'];
console.log(array);
array.push('Rock-n-Roll');
console.log(array);
function replaceMiddle(arr, element) {
  let index = Math.round(arr.length / 2) - 1;
  arr[index] = element;
  return arr;
}
array = replaceMiddle(array, 'Classics');
console.log(array);
array.shift();
console.log(array);
array.unshift('Rap', 'Reggae');
console.log(array);

Task 3:
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]

Task 4: 


function sumInput() {
  let number = [];
  while (true) {
    let value = prompt('NUmber please: ', 0);
    if (value === null || value === '' || !isFinite(value)) break;
    number.push(+value);
  }
  let sum = 0;
  for (let num of number) {
    sum += num;
  }
  return sum;
}
alert(sumInput());

Task 5:
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
