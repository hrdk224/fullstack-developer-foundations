new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(console.log);

// this will fail because executor function will run immediately and schedules setTimeout and exits the promise internal try catch and the promise
// remains in a pending state then the event loop picks it upback and executes in separate stack
