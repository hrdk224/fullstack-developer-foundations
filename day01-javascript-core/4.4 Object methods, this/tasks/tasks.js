// Task 1
// function makeUser() {
//   return {
//     name: 'John',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name); // John

// Task 2
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = 2;
//     this.b = 4;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up().showStep();
