/**A constructor function is a regular function used as a blueprint to create multiple similar objects. By widespread convention:
- They are named with a capital first letter (e.g., User, Product).
- They are executed exclusively using the new operator. */

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let jack = new User('Jack');
let alice = new User('Alice');

console.log(jack.name); //Jack
console.log(alice.name); //Alice

/** Working:
 * Create an empty object and assign it to the this keyword context.
   Execute the function body, binding properties and methods to this.
   Set up prototypical inheritance (linking the object to the constructor's prototype).
   Return this automatically at the end.
 * 
   
   // A look at the implicit code executed by the engine:
function User(name) {
  // 1. this = {};              (Implicitly created)

  // 2. Body runs, modifying 'this'
  this.name = name;
  this.isAdmin = false;

  // 3. return this;            (Implicitly returned)
}
 */

// adding methods

function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`My name is : ${this.name}`);
  };
}

let jacks = new Person('Jack');

jacks.sayHi();

/* 
The return Rule
Usually, constructors do not have a return statement. However, if one exists, the engine follows a strict rule:
- If you return an Object, the implicit this is discarded, and that object is returned instead.
- If you return a Primitive (like a string, number, or an empty return;), it is completely ignored, and this is returned.
*/

function BigUser() {
  this.name = 'John';
  return { name: 'Godzilla' }; // Overrides 'this'
}

console.log(new BigUser().name); // Godzilla

/*
new.target
Inside any function, you can inspect the special property new.target to verify if the function was invoked with the new keyword.
- Called with new: new.target equals the function itself.
- Called without new: new.target is undefined.
*/

function User() {
  if (!new.target) {
    throw new Error("Must use 'new' operator");
  }
  this.name = 'John';
}
