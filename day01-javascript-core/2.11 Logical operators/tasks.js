// Task 1

// alert(null || 2 || undefined); // truthy value : 2

// Task 2
//alert(alert(1) || 2 || alert(3)); // 2 because or just finds for truthy value when it got 2 it got executed as output
// alert(1) returns undefined

// Task 3
//alert(1 && null && 2); //null

// Task 4
// alert(alert(1) && alert(2)); // undefined

// Task 5
// alert(null || (2 && 3) || 4); // 3
// precedence of 2 && 3 is 3 then expression comes down to null || 3 || 4 so first expression gives the truthy 3

// Task 6
// let age = 40;
// if (age >= 14 && age <= 90) [console.log('Inclusively')];

// Task 7
// if(!(age >= 14 && age <= 90))
// if(age <= 14 || age >= 90)

// Task 8
// if (-1 || 0) console.log('first'); // first
// if (-1 && 0) console.log('second');
// if (null || (-1 && 1)) console.log('third'); // third

// Task 9
let user = prompt("Who's there?", '');
if (user == 'Admin') {
  password = prompt('Password ', '');

  if (password == 'TheMaster') {
    alert('Welcome');
  } else if (password == ' ' || password == null) {
    alert('Canceled');
  } else {
    alert('wrong password');
  }
} else if (user == ' ' || user == null) {
  alert('Canceled');
} else {
  alert("I don't know you");
}
