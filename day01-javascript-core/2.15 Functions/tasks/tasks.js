// task 1
// if the there else in side a function there will be no difference

//rewritten function using ? and ||

function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}

// function min(a,b)
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// function pow(x,n)

function pow(x, n) {
  return x ** n;
}
console.log(pow(2, 10));
