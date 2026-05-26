// "if" statement : evaluates a condition in parentheses and, if the result is true, executes a block of code.
// it evaluates expression in paranthesis and converts it to boolean
// A number 0, an empty string "", null, undefined, and NaN all become false.
// Because of that they are called “falsy” values.
//Other values become true, so they are called “truthy”.

// "else" : when the condition turns out falsy this code gets executed
let year = 2015;
if (year == 2015) {
  console.log('You guessed it right!');
} else {
  console.log('How can you be so wrong?'); // any value except 2015
}

// "else-if"

if (year < 2015) {
  console.log('Too early...');
} else if (year > 2015) {
  console.log('Too late');
} else {
  console.log('Exactly!');
}

// conditional operator '?': Sometimes, we need to assign a variable depending on a condition.

let accessAllowed;
let age = 19;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

//The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

//Syntax: let result = condition ? value1 : value2;

// Multiple "?"

let age = 18;

let message =
  age < 3
    ? 'Hi, baby!'
    : age < 18
      ? 'Hello!'
      : age < 100
        ? 'Greetings!'
        : 'What an unusual age!';

console.log(message);

/* if-else form: 
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
*/
