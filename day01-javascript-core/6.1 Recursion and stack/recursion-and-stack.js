/* Task 1

function sumTo(n) {
  let sum = 0;
  if (n == 1) {
    return sum + 1;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(100));

Task 2


function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

Task 3
Slow for 77
function fib(n) {
  if (n == 1) {
    return 1;
  } else if (n == 0) {
    return 0;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757



function fib(n) {
  let a = 1;
  let b = 1;
  let c = 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757


Task 4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let current = list;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}
printList(list);

//recursive

function printList(list) {

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);

Task 5
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);
