global.phrase = 'Hello Global'; // Node uses 'global' instead of 'window'

function setupGreeting() {
  let phrase = 'Hello Local';

  let regularFn = function () {
    console.log(phrase);
  };
  let dynamicFn = new Function('console.log(global.phrase);');

  return { regularFn, dynamicFn };
}

let greetings = setupGreeting();
greetings.regularFn(); // Prints: Hello Local // act according to local scope
greetings.dynamicFn(); // Prints: Hello Global // when declared anywhere checks the global scope

// What will `Output A` and `Output B` print to the console when executed, and _why_ does the behavior differ between the two?
