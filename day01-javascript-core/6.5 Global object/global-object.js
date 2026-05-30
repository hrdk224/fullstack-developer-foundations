'use strict';
let currentUser = 'Guest';
var sessionActive = true;

function initializeSystem() {
  var currentUser = 'Admin';
  global.currentUser = 'SuperUser';
}

initializeSystem();
console.log(global.currentUser);
console.log(global.sessionActive);
console.log(currentUser);
//1. What are the values of `window.currentUser` and `window.sessionActive` after `initializeSystem()` finishes executing?
// SuperUser, true
//2. What will be returned if you type a bare `console.log(currentUser)` in the main scope after the function runs? Why?
// Guest
