/*function printNumber(from, to) {
  let current = from;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}


function printNumber(from, to) {
  let current = from;
  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumber(3, 10);


let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}

*/
