// class User {
//   static staticMethod() {
//     console.log(User === this);
//   }
// }

// User.staticMethod();

class User {}
User.staticMethod = function () {
  console.log(this === User);
};

User.staticMethod();
