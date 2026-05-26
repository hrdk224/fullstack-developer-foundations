// rewritten arrow function

function ask(question, yes, no) {
  question ? yes() : no();
}

ask(
  ' ',
  () => console.log('agreed'),
  () => console.log('You cancelled the execution'),
);
