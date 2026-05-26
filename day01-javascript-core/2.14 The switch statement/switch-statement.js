// Switch Statement: looks for ""==="" and runs that block of code. and break statements are used between each blocks
let dayNumber = 2;
switch (dayNumber) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('another day');
}

// if you don't but break you will get all the output

// Grouping cases

let fruit = 'apple';
switch (fruit) {
  case 'apple':
  case 'banana':
  case 'Mango':
    console.log('This is the fruit');
    break;
  default:
    console.log('Unknown food');
}

// Type Matter "==="

let number = '7';
switch (number) {
  case '7':
    console.log('This is the string');
    break;
  case 7:
    console.log('This is the nuumber');
    break;
  default:
    console.log('This is not 7');
}
