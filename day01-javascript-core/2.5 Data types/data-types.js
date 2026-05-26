//Number (integers and floating point)

let n = 123;
n = 12.345;

// Besides regular numbers,
// there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

alert(1 / 0); // Infinity
alert(Infinity); // Infinity

alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert('not a number' / 2 - 1); // NaN

// BigInt
// Normal Range : (2^53-1) to -(2^53-1) so BigInt is used for numbers beyond this range

const bigInt = 1234567890123456789012345678901234567890n;

//String

let str = 'Hello'; // Double quotes
let str2 = 'Single quotes are ok too'; // Single quotes
let phrase = `can embed another ${str}`; // Backticks

// Boolean (True or False)

let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")

// null : It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let age = null;

//undefined : value is not assigned

let height;
alert(height);

// objects:  are used to store collections of data and more complex entities.
// Symbols: symbol type is used to create unique identifiers for objects

//typeof operator : returns the type of the operand

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof 'foo'; // "string"
typeof Symbol('id'); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

/* Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.
The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". 
That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.*/
