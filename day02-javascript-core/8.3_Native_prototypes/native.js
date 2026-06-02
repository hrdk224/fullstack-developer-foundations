/*
function f() {
  console.log('hello');
}
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
f.defer(1000);


function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (defer) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), 1000);
  };
};

f.defer(1000)(1, 9);

*/
