console.log('Synchronous 1');
Promise.resolve().then(() => {
  console.log('Microtask 1');
  Promise.resolve().then(() => console.log('Microtask 3 (Nested)'));
});

Promise.resolve().then(() => console.log('Microtask 2'));
console.log('Synchronous 2');
