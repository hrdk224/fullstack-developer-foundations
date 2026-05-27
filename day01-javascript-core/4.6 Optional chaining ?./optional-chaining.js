/* Optional Chaining (?.)

provides a safe way to access nested object properties, call methods, or 
lookup keys even if an intermediate property is null or undefined.

Instead of throwing a catastrophic runtime error and halting your script, 
it immediately stops execution (short-circuits) and gracefully returns undefined.

*/

//Safe Property Access (obj?.prop)

let user1 = { address: { street: 'Main St' } };
let user2 = {};

console.log(user1?.address?.street);
console.log(user2?.address?.street); // undefined

//Safe Method Calls (obj.method?.())

let adminUser = {
  showDashboard() {
    console.log('Welcome aboard');
  },
};
let guestUser = {};

adminUser?.showDashboard?.();
guestUser?.showDashboard?.();

// Safe Bracket Notation (obj?.[key])

let key = 'username';
let activeUser = { username: 'Alice' };
let deletedUser = null;

console.log(activeUser?.[key]); // Alice
console.log(deletedUser?.[key]); // undefined

/*Short-Circuit Evaluation
If the expression to the left of ?. is nullish, nothing to the right will ever execute.

JavaScript
let user = null;
let counter = 0;

// Because 'user' is null, counter++ is completely skipped
user?.sayHi(counter++); 

console.log(counter); // 0
❌ Cannot be used for Writing (Left-hand side)
Optional chaining is read-only. You cannot use it to assign values.

JavaScript
let user = null;

user?.name = "John"; // ❌ SyntaxError: Invalid left-hand side in assignment
⚠️ A Variable Must Be Declared
?. only protects against missing properties, not missing root variables. The base variable must exist in the scope.

JavaScript
// If 'guest' was never declared anywhere with let, const, or var:
guest?.name; // ❌ ReferenceError: guest is not defined */
