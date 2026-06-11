class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // Built in methods will use this as constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 20, 30, 100, 200);
console.log(arr.isEmpty());
let new_arr = arr.pop();

console.log(new_arr.isEmpty());
