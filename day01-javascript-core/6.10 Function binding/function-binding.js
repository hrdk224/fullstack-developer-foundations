/* Task 1
function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

//ans: null

Task 2


function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });

f(); // John because function can only be bound once

Task 3

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'John',
});

console.log(bound.test); // what will be the output? why? // undefined result of bind has other object and does not have test property

Task 4


function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

Task 5
askPassword(() => user.login(true), () => user.login(false));
*/
