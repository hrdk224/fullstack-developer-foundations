/**
 * Temporary Wrappers
Primitives (strings, numbers, booleans) are lightweight and don't store properties. 
When you call a method, JavaScript instantly creates a temporary object wrapper, runs 
the method, and immediately destroys it.
 */

let str = 'hello';
console.log(str.toUpperCase()); //HELLO
// wrapper is now dead; 'str' is mow primitive

/**
 * The Golden Rule of null and undefined
These two are the only primitives with zero methods. They have no object wrappers.
Attempting to call a method on them will instantly crash your program.
 */

let user = null;
console.log(user.toUpperCase()); // TypeError: cannot read properties of null

/**
 * Never use new Primitive()
Using the new keyword with primitive constructors creates a permanent object, 
which breaks standard logic loops because all objects are truthy.
 */
let zero = new Number(0); // This is an Object, not a number!

if (zero) {
  // ⚠️ This executes! Even though it wraps 0, objects are ALWAYS true.
}
