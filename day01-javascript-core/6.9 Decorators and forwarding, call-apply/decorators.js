/* function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
  */

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function (...args) {
    let savedThis = this; // store this into an intermediate variable
    setTimeout(function () {
      f.apply(savedThis, args); // use it here
    }, ms);
  };
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test'); // shows "test" after 1000ms
f1500('test'); // shows "test" after 1500ms
