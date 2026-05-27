/** Object-to-primitive conversion is an automatic process where JavaScript
 *  converts an object into a primitive value (string, number, or boolean) using built-in methods
 *  whenever that object is used in mathematical operations, string concatenations, or comparisons. */

let wallet = {
  currency: 'USD',
  amount: 150,

  [Symbol.toPrimitive](hint) {
    return hint === 'string'
      ? `Wallet: ${this.amount} ${this.currency}`
      : this.amount;
  },
};
// 1. Hint: "string" (Expects text output)
console.log(String(wallet));

// 2. Hint: "number" (expects mathematical value)
console.log(wallet * 2);

// 3. Hint: "default" (Unsure of type , falls back to number logic)
console.log(wallet + 50);
