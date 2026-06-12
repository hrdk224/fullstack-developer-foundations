class Person {
  constructor(name) {
    this.name = name;
  }
}
const loggerMixin = {
  log(message) {
    console.log(`[LOG]: ${message}`);
  },
};

const identityMixin = {
  __proto__: loggerMixin,
  introduce() {
    super.log(`My name is ${this.name}`);
  },
};

const eventMixin = {
  on(eventName, handler) {
    if (!this._handlers) this._handlers = {};
    if (!this._handlers[eventName]) this._handlers[eventName] = [];
    this._handlers[eventName].push(handler);
  },

  trigger(eventName, ...args) {
    if (!this.handlers?.[eventName]) return;
    this._handlers[eventName].forEach(handler => handler.apply(this, args));
  },
};

class User extends Person {
  login() {
    this.introduce();
    this.trigger('login', this.name);
  }
}

Object.assign(User.prototype, identityMixin, eventMixin);

const user = new User(' Alice');

user.on('login', name => {
  console.log(`Notification sent: ${name} logged in successfully`);
});

user.login();
