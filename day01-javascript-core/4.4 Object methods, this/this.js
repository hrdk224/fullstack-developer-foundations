// "this" keyword refers to object currently executing the method, its value is evaluated at runtime
// based on the context of the call
'use strict';
// Accessing object data
let user = {
  name: 'John',
  age: 30,
  sayHi() {
    // "this" refers to the  'user' object
    console.log(`hi, ${this.name}`);
  },
};

user.sayHi();

// One function, Different object

function showName() {
  console.log(this.name);
}

let master = { name: 'Alice' };
let admin = { name: 'Bob' };

master.f = showName;
admin.f = showName;

master.f();
admin.f();

// Calling function without an object(Undefined)

function sayMyName() {
  return console.log(this);
}

sayMyName();

// arrow function have no "this"

let person = {
  name: 'Tanmay',
  age: 13,

  call() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};

person.call();
