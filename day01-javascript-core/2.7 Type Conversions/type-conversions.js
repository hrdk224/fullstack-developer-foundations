//String Conversions
let value = true;
// alert(typeof value); // boolean

value = String(true);
console.log(typeof value);

//Numeric Conversions
// in mathematical functions happen automatically

console.log('6' / '3');

console.log(Number('   123   ')); // 123
console.log(Number('123z')); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/* Boolean Conversions

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true. */

console.log(Boolean(1)); //true
console.log(Boolean(0)); // false

console.log(Boolean('hello')); // true
console.log(Boolean('')); // false
