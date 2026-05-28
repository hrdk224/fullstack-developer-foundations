// let a = +prompt('Enter the first number', ''); // unary operator "+" coverts string to number
// let b = +prompt('Enter the second number', '');
// // let sum = Number(a) + Number(b); // usual method

// alert(`sum: ${a + b}`);

// Task 2

//alert(Math.round(6.35 * 10) / 10);

// Task 3
// function readNumber() {
//   let num;
//   do {
//     num = +prompt('Enter a number please: ', '');
//   } while (!isFinite(num));
//   if (num === null || num === '') return null;
//   return num;
// }
// alert(`Read: ${readNumber()}`);

// Task 4
//This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// It is due precision loss and to prevent this use less than operator

//Task 5
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(2, 5));

//Task 6

function randomInteger(min, max) {
  return min + Math.round(Math.random() * (max + 1 - min));
}
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
