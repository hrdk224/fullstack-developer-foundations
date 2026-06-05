/* Task 1
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch(alert);

Task 2

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let repsonse = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Enter a name?', 'iliakan');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // loop continues after the alert
        console.log('No such user, please reenter.');
      } else {
        // unknown error, rethrow
        throw err;
      }
    }
  }
  console.log(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

Task 3

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(console.log);
}
f();

Task 4

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resultsCount = 0;
    let hasError = false;
    promises.forEach((promises, index) => {
      promises
        .then(result => {
          if (hasError) {
            return;
            results[index] = result;
            resultsCount++;
            if (results.length == promises.length) {
              resolve(results);
            }
          }
        })
        .catch(error => {
          if (hasError) return;
          hasError = true;
          reject(error);
        });
    });
  });
}
*/
