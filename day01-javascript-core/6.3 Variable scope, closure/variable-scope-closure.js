/**
 * Task: 1
 * let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? Ans : Pete because it uses the recent one

  Task: 2
  function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show? Ans Pete but if there was no let name inside function it would be John because it is a global variable

Task 3

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ? ans: 0
alert( counter2() ); // ? ans: 0 This is due to different invocation

Task 4
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ? 1
alert( counter.up() ); // ? 2
alert( counter.down() ); // ? 1

Task 5

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

ans: This will throw an error due to function being out of the scope its present inside the if statement

Task 6:



function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

 Task 7
 
 let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func(); //Answer: reinitialization throws error

Task 8




.. your code for inBetween and inArray 
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(a, b) {
  return function (x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

Task 9


let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

// by name (Ann, John, Pete)
users.sort((a, b) => (a.name > b.name ? 1 : -1));

// by age (Pete, Ann, John)
users.sort((a, b) => (a.age > b.age ? 1 : -1));

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

Task 10

function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
*/
