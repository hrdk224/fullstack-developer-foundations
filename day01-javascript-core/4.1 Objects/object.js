// # Object: complex container used to store collection of data

let user = {
  name: 'John',
  age: 19,
};

// # Accessing Dot vs Square bracket

//Dot
let id = {
  name: 'gabriel',
};
id.age = 30; // add/modify
console.log(id.age); // Read
delete user.age;

//Square bracket

let person = {};
// 1. Handling spaces
person['like birds'] = true;
// 2. Dynamic variable
let key = 'name';
person[key] = 'John';
console.log(person.key); //undefined! Dot notation looks for a literal key named 'key'
console.log(person['like birds']);

/* # advanced object literal

Computed Properties
You can use square brackets directly inside an object literal to turn the value of an external variable into a key name. */

let fruit = 'apple';

let bag = {
  [fruit]: 5,
};
console.log(bag.apple);

//Shorthand: If your property key and your variable name match perfectly, you can omit the colon and the repetitive text.

function makeUser(name, age) {
  return {
    name, // Same as name: name
    age, // Same as age: age
  };
}

// # Checking existence "in" operator

console.log('name' in user);
console.log('weight' in user);

// # looping through object
let house = {
  size: '3bhk',
  time: '3 years',
  owner: 'haris',
};

for (let key in house) {
  console.log(key);
  console.log(house[key]);
}
