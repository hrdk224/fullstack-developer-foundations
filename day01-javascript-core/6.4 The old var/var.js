var index = 99;

function loopRunner() {
  console.log('Value 1:', index); //undefined

  for (var index = 0; index < 3; index++) {
    // executing loop logic
  }

  console.log('Value 2:', index); // 3
}

loopRunner();
console.log('Value 3:', index); // 99
