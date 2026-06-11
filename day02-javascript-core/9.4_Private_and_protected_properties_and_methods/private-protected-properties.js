class CoffeeMachine {
  brand = 'Premium Brew'; // Public: accessible anywhere
  _power = 100; // Protected: (_) convention only; Inhertiable
  #waterAmount = 0; // Private: # language enforced
  constructor(power) {
    this.power = power;
  }
  // getters & setter for Private data
  get waterAmount() {
    return this.#waterAmount;
  }
  set waterAmount(value) {
    if (value >= 0) this.#waterAmount = value;
  }

  // Private method
  #boil() {
    console.log('boiling...');
  }

  makeCoffee() {
    this.#boil();
    console.log('Coffee is ready!');
  }
}

class MegaMachine extends CoffeeMachine {
  boost() {
    this._power += 50;
  } // OK: Can access parent's protected fields
  test() {
    /* this.#waterAmount */
  } // Error: Cannot access parent's private fields
}

//Usage
const machine = new CoffeeMachine(100);
machine.waterAmount = 200; // OK (uses setter)
machine.makeCoffee(); // OK (public interface)

// machine.#waterAmount = 500; // Syntax Error (Private)
// machine['#waterAmount'];    //  undefined (Bracket notation fails)
