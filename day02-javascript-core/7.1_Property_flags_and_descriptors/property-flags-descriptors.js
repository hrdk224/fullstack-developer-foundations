/*
Task 1: 

what is th output ?
'use strict';
let backpack = {};

Object.defineProperty(backpack, 'gadget', {
  value: 'Compass',
});

backpack.gadget = 'Laser Pointer';
console.log(backpack.gadget);

soln: there will be TypeError because we tried to change the value and Object.defineProperty by default assign false to every flags

Task 2:

Suppose an object has a property configured like this:

Object.defineProperty(user, "role", {
  value: "Admin",
  writable: true,
  configurable: false
});
Can we run Object.defineProperty(user, "role", { writable: false }); later in the script without throwing an error? Why or why not?

soln: Yes, This the only exception but vice-versa and other flags cannot be manipulated.



*/
