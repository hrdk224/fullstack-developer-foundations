/*class ValidatorError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Validator Error';
  }
}

class PropertyRequiredError extends ValidatorError {
  constructor(property) {
    super(`Missing required field:${property}`);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}

try {
  throw new PropertyRequiredError('The age is old');
} catch (err) {
  console.log(err instanceof PropertyRequiredError);
  console.log(err instanceof ValidatorError);
  console.log(err.property);
}
*/
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
let err = new FormatError('formatting error');

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (because inherits from SyntaxError)
