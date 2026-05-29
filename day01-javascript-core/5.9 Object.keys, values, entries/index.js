/* Task 1
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

console.log(sumSalaries(salaries));

Task 2
*/
let user = {
  name: 'John',
  age: 30,
};

function count(user) {
  return Object.keys(user).length;
}

console.log(count(user)); // 2
