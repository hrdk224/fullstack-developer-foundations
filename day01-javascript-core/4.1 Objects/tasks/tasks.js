// Task 1

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// Task 2
// let schedule = {};
// function isEmpty(object) {
//   for (let key in object) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(schedule)); // true
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule)); // false

// Task 3
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// Task 4
// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
function multiplyNumeric(object) {
  for (let key in object) {
    object[key] =
      typeof object[key] === 'number' ? object[key] * 2 : object[key];
  }
  return object;
}

console.log(multiplyNumeric(menu));

// after the call
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
};
