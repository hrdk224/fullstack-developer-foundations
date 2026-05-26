console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)

//String Comparisons

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

// Comparisons of diffrent type

console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1
console.log(true == 1); // true
console.log(false == 0); // true

//Strict Equality here comparison is done without type conversion

console.log(0 === false); // false, because the types are different
console.log(0 == false); // true

console.log(null == undefined); // true (NOTE)

// Zero and Null strange result

console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true because null gets converted to 0 here

console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)
/* Why does it dislike zero so much? Always false!

We get these results because:

Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value. */
