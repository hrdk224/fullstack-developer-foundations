// Shortcuts for zeroes(e-notation)

let billion = 1e9; //1000000000
let micro = 1e-6; //0.000001

// Readability

let budget = 1_000_000;

// base system
let hex = 0xff; // 255
let binanry = 0b11111111; // 255

// converting number to string base
(255).toString(16); //ff
(255).toString(2); // "11111111" (Note the two dots to call on literals)

// Rounding operators
Math.floor(3.6); // 3  (Rounds down)
Math.ceil(3.1); // 4  (Rounds up)
Math.round(3.5); // 4  (Rounds to nearest)
Math.trunc(3.6); // 3  (Cuts off decimals)

// Rounding to specific decimal places (returns a STRING)
let num = 12.3456;
num.toFixed(2); // "12.35"
+num.toFixed(2); // 12.35 (Unary plus converts it back to a number)

// Precision loss pitfalls
// Floating point errors due to binary conversion
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// The Fix
let safeSum = +(0.1 + 0.2).toFixed(2); // 0.3

//Validations and strict checks
// NaN never equals itself
console.log(NaN === NaN); // false

// Global vs Strict Number methods
isNaN('str'); // true  (converts "str" to NaN first)
Number.isNaN('str'); // false (strict check: type is string, not NaN)

isFinite('123'); // true  (converts "123" to a finite number)
Number.isFinite('123'); // false (strict check: type is string)

// Precise Equality with Object.is()
Object.is(NaN, NaN); // true
Object.is(0, -0); // false (handles signed zeroes)

// Soft parsing and extracting number

// Unary plus/Number() are strict and fail on units
+'100px'; // NaN

// parseInt / parseFloat read until they hit a non-numeric character
parseInt('100px'); // 100
parseFloat('12.5em'); // 12.5
parseInt('a123'); // NaN (fails immediately if first char is non-numeric)

// Parsing with a specific radix (base)
parseInt('ff', 16); // 255
