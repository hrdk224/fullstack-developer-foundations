/*Task 1
counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
function makeCounter() {
  let count = 0;
  function counter() {
    return counter.count++;
  }

  counter.set = value => {
    counter.count = value;
    return counter;
  };
  counter.decrease = () => counter.count--;

  return counter;
}

let counter = makeCounter();
counter.set(10);
counter.decrease();

console.log(counter.count); // 10

Task 2


*/
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}
console.log(sum(1)(2).toString()); // 3
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15
