// function expression: Since function is just a value like numbers or strings it can stored inside a variable

let value = function () {
  console.log('value');
};

value();

let gold = value; // functions can be copied

gold();

// Callback function

function ask(yes, no) {
  0 ? yes() : no();
}

ask(
  function () {
    console.log('You agreed');
  },
  function () {
    console.log('you rejected');
  },
);

// A: Creation time (Hoisting)

// Works perfectly
sayHello();
function sayHello() {
  console.log('Hello!');
}

//ERROR! sayHi is not initialized yet
sayHi();
let sayHi = function () {
  console.log('Hi!');
};

// B: Block scope

let age = 20;
let welcome; // Declare variable outside

if (age >= 18) {
  welcome = function () {
    console.log('Adult');
  }; // Function Expression
} else {
  welcome = function () {
    console.log('Minor');
  };
}

welcome(); // works
