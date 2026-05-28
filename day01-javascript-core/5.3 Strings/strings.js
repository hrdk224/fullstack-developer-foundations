// Reading characters safely

/* let str = 'Hello';

console.log(str.length); // 5 (Note: It is a property, NOT a function str.length())

// Modern .at() allows negative indexing to read from the end
console.log(str[0]); // "H"
console.log(str[-1]); // undefined
console.log(str.at(-1)); // "o" (Last character)

// Loop over characters directly
for (let char of str) {
  /* ... */

// # Immutability

// let word = 'Hi';
// word[0] = 'h'; //error

// word = 'h' + word[1]; // new variable

// // # Serching for substrings */

let phrase = 'Widget with id';

// 1. Modern Booleans (includes, startsWith, endsWith)

console.log(phrase.includes('id')); //true
phrase.includes('id', 13); // false (Starts looking from index 13)
phrase.startsWith('Wid'); // true
phrase.endsWith('get'); // false

// 2. Legacy Index Matching (indexOf)
phrase.indexOf('id'); // 1 (Returns matching position index)
phrase.indexOf('Missing'); // -1 (Not found)

//  Danger Zone with indexOf() inside conditional checks
if (phrase.indexOf('Widget')) {
  // This block WON'T run because index is 0, which evaluates to false!
}
// Safe legacy usage:
if (phrase.indexOf('Widget') !== -1) {
  /* Works safely */
}

// String slices
let text = 'stringify';

// slice(start, end) -> Extracts from start up to, but NOT including, end
text.slice(0, 5); // "strin"
text.slice(2); // "ringify" (Goes all the way to the end)
text.slice(-4, -1); // "gif"     (Negative values count backwards from the end)

// UTF-16 character conversions
'Z'.codePointAt(0); // 90 (Extracts numeric code from string)
String.fromCodePoint(90); // "Z" (Constructs character from numeric code)
