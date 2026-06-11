// Task 1
function A() {}
function B() {}

A.prototype = B.prototype = {}; // {} empty object is created this is assigned to B then A

let a = new A();

console.log(a instanceof B); // true
