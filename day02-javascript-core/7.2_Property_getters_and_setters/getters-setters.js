/*let user = {
  name: 'John',
  surname: 'Smith',

  // GETTER: Synthesizes a value on the fly
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  // SETTER: Takes a value, splits it, and updates the real data
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};


console.log(user.fullName);
user.fullName = 'Hardik Kille';
console.log(user.fullName);


// Self Loop Crash
let user = {
  get name() {
    return this.name;
  },
  set name(value) {
    this.name = value;
  },
};

user.name = 'Alex';



// read only
let car = {
  brand: "Toyota"
};

Object.defineProperty(car, 'model', {
  get() {
    return "Corolla";
  }
});

car.model = "Camry";
console.log(car.model); // Corolla

// Write the missing setter code so that the temperature cannot be set below absolute zero (-273.15°C). If someone tries to set it lower, log a warning and don't update the value.


let thermometer = {
  _celsius: 20,

  get celsius() {
    return this._celsius;
  },

  set celsius(value) {
    if (value < -273.15) {
      return 'Warning: It cannot be updated';
    }
    return (this._celsius = value);
  },
};

thermometer.celsius = -300; // Should trigger warning
console.log(thermometer.celsius); // Should still output 20

// Fix this object. Right now, if I update width or height, the area does not update because it's fixed. Convert area into an accessor property so it always calculates the correct area dynamically.

// Fix this object format:
let rectangle = {
  width: 5,
  height: 10,
  get area() {
    return this.width * this.height;
  },
};

rectangle.width = 10;
console.log(rectangle.area); // Should automatically output 100
*/
