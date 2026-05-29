/*
Task 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // Hare, Krishna, :-O

Task 2

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
function aclean(arr) {
  let obj = [];

  obj = arr.map(item => item.toLowerCase().split('').sort().join(''));
  return Array.from(new Set(obj));
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

Task 3
*/
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys()); // map.key() returns an iterable not a array

// Error: keys.push is not a function
keys.push('more');
