let countPromise = new Promise(resolve => {
  resolve(2);
});

countPromise
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return new Promise(resolve => {
      setTimeout(() => resolve(num + 5), 1000);
    });
  })
  .then(num => console.log(num));
