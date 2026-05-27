/* 
 A Symbol is a unique, immutable primitive data type introduced to serve as secure object property keys.
  Unlike strings, every created symbol is guaranteed to be globally unique, even if it shares the exact 
same description label as another symbol.


*/
// Creating symbols with descriptions (useful for debugging)
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2); // false (Each symbol is entirely unique!)

/*
Use case: 
    Symbols is to create "hidden" properties on objects. This prevents naming collisions when working with 
    third-party libraries, external API data, or multiple scripts manipulating the same codebase.*/

// Imagine this object comes from a 3rd-party dependency
let user = {
  name: 'John',
};

// Our script defines a unique symbol key
let ourId = Symbol('id');
user[ourId] = 123;

// Another script defines its own symbol key
let theirId = Symbol('id');
user[theirId] = 'ABC-999';

// Result: Zero collisions! Both keys coexist independently
console.log(user[ourId]); // 123
console.log(user[theirId]); // "ABC-999"

// Syntax Warning: for object literal

let myKey = Symbol('key');
let obj = {
  name: 'John',
  [myKey]: 'Secure Value', // Computed property Syntax
};

/* Object Traversal Behavior
Symbols respect a built-in privacy policy when it comes to standard JavaScript loops and utilities:
Method / Feature.    Behavior with Symbol Keys
for...in Loop.          Skipped (Ignored)
Object.keys(obj)        Skipped (Ignored)
Object.assign({}, obj)  Copied (Preserved during object cloning/merges)
*/

let id = Symbol('id');
user = {
  name: 'John',
  age: 18,
  [id]: 10,
};

for (let i in user) {
  console.log(user[i]);
}

/* Local vs Global Mechanics
Symbol.for(key): Checks the global registry. If a symbol with that string name already exists, it returns it; otherwise, it creates it.

Symbol.keyFor(symbol): Does the reverse lookup—takes a global symbol and extracts its registered string key name (returns undefined for local symbols).

*/
// --- GLOBAL REGISTRY ---
let globalSym1 = Symbol.for('appState');
let globalSym2 = Symbol.for('appState');

console.log(globalSym1 === globalSym2); // true (Points to the exact same entity)
console.log(Symbol.keyFor(globalSym1)); // "appState"

// --- LOCAL SYSTEM ---
let localSym = Symbol('appState');
console.log(Symbol.keyFor(localSym)); // undefined (Not in global registry)
