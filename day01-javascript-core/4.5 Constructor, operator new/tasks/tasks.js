/**Task 1
 * Two functions – one object
Is it possible to create functions A and B so that new A() == new B()?
Yes 

let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
console.log(new A() == new B());

Task 2 
Create a new calculator



function Calculator() {
  this.read = function () {
    this.a = 2;
    this.b = 3;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

Task 3*/
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += 4;
  };
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
