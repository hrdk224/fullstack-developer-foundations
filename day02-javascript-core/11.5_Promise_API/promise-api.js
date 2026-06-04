/* Promise.all
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(console.log);

let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
  .then(responses => {
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
    return responses;
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => console.log(user)));

  Promise.allSettled

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
];
Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == 'rejected') {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});

Promise.race


Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000),
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);

 Promise.any 
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ouch!')), 1000),
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000),
  ),
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});

Promise.resolve
*/
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}
