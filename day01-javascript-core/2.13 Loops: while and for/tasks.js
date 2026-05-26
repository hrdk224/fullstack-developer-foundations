// Task 1
// let i = 3;

// while (i) {
//   alert(--i); // 2 1 0 if i-- 3 2 1
// }

// Task 2
// let i = 0;
// while (++i < 5) alert(i); //1 2 3 4

// i = 0;
// while (i++ < 5) alert(i); // 1 2 3 4 5

// Task 3
// for (let i = 0; i < 5; i++) console.log(i); // 0 1 2 3 4
// for (let i = 0; i < 5; ++i) console.log(i); // 0 1 2 3 4

// Task 4
// for (let i = 2; i < 10; i += 2) {
//   console.log(i);
// }

// Task 5
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i++}!`);
// }

// Task 6

// let num;
// do {
//   num = prompt('Enter a number greater than or equal to 100', '');
// } while (num <= 100 && num);

// let num = prompt('Enter a number greater than or equal to 100', '');
// while (num <= 100) {
//   num = prompt('Enter a number greater than or equal to 100', '');
//   if ((num = ' ')) {
//     break;
//   }
// }

// Task 7
let range = 20;
let result = ' ';
next: for (let i = 2; i <= range; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue next;
    }
  }
  result = result + ' ' + i;
}
console.log(result);
