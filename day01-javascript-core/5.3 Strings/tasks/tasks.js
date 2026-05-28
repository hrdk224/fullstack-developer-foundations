/* Task 1
// Attempt: 1
let string = 'hardik';
function ucFirst(str) {
  let string;
  for (let i in str) {
    if (i == 0) string = str[i].toUpperCase();
    else string += str[i];
  }
  return string;
}
console.log(ucFirst(string));


//soln

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('hardik'));

Task 2


function checkSpam(str) {
  let s = str.toLowerCase();
  console.log(s);
  if (s.includes('xxx') || s.includes('viagra')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

Task 3


function truncate(str, maxlength) {
  if (maxlength < str.length) return str.slice(0, maxlength) + '...';
  else return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate('Hi everyone!', 20));

Task 4

*/
function extarctCurrencyValue(str) {
  return +str.slice(1);
}
