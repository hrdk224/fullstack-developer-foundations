// Basic Anatomy & Declaration

function sayHello() {
  console.log('Hello Everyone!');
}
sayHello();
sayHello();

// Variable scope

let globalUser = 'Alice';
function greet() {
  let localMessage = 'Hi!'; // only usable inside block
  globalUser = 'Bob';
  console.log(localMessage + ' ' + globalUser);
}
greet();
// console.log(localMessage); // ERROR!

// Parameters vs Arguements

// sender & text are parameters
function sendMessage(sender, text) {
  console.log(sender + ' ' + text);
}

// alice and blake
sendMessage('alice', 'blake');

// Default Parameters

function welcomeUser(name, role = 'Guest') {
  console.log('Welcome' + name + ', Role : ' + role);
}

welcomeUser('Tim'); // "Welcome Tim, Role: Guest" (Uses default)
welcomeUser('Max', 'Admin'); // "Welcome Max, Role: Admin" (Overwrites default)

// return value

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4));
