// Task 1

let user = { name: 'John', years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Task 2

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (maxSalary < value) {
      maxSalary = value;
      maxName = key;
    }
  }
  return console.log(maxName);
}

topSalary(salaries);
