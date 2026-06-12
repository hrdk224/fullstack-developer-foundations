function processData() {
  try {
    console.log('Working!');
    or;
    return 'Success';
  } catch (err) {
    console.log('Handling error..');
  } finally {
    console.log('1. This always runs, even with the return above');
  }

  console.log('This will never run because of the return statement ');
}

processData();
