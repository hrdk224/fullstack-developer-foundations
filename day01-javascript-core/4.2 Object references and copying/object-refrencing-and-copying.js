// Primitive vs Objects: Primitive are copies by "value", Objects are copied by "reference"

let user = { name: 'John' };
let admin = user; //Copying the reference (address)
admin.name = 'Pete'; //Changed using the 'admin' reference
console.log(user.name);

// Comparison by reference

let a = {};
let b = a;
console.log(a === b); // true {They point the same object}

let x = {};
let y = {};

console.log(x === y); // false because the memory address is diiferent

// Const object can be modified

const dev = { name: alice };
dev.name = 'Bob'; // can be changed internally
console.log(dev.name);
// dev = { name: 'hardik' }; // Error cannot change the variable reference

// Shallow cloning vs deep cloning
//Shallow copying: This copies top-level properties.
// However, if your object has a nested object inside it, only the reference to that nested object is copied.

let user = {
  name: 'John',
  sizes: { height: 180 }, // Nested object
};

let clone = Object.assign({}, user);
// Alternative: let clone = { ...user };

clone.name = 'Pete';
console.log(user.name); // "John" (Top-level primitive is safely isolated)

clone.sizes.height = 190;
console.log(user.sizes.height); // 190! ❌ (The nested object was still shared by reference!)

// Deep cloning (Structured Clone)
// clones everything

let user = {
  name: 'John',
  sizes: { height: 180 },
};

let deepClone = structuredClone(user);

deepClone.sizes.height = 190;
console.log(user.sizes.height); // 180 ✅ (Completely independent!)
