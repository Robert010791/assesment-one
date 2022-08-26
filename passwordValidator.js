const { TransformStreamDefaultController } = require('node:stream/web');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  'Welcome to the password validator! Please enter your password:',
  function (input) {
    //this line checks if the password is less than 10 characters long
    if (input.length < 10) {
      console.log('Password is too short');

      //this line checks if the password is over 20 characters long
    } else if (input.length > 20) {
      console.log('Password is too long');

      //this line checks for a number
    } else if (/\d/.test(input) === false) {
      console.log('Password requires at least one number');

      //this line check for a lowercase letter
    } else if (/[a-z]/.test(input) === false) {
      console.log('Password requires at least one letter');

      //this line checks for a capital letter
    } else if (/[A-Z]/.test(input) === false) {
      console.log('Password requires at least one uppercase letter');

      //this line logs an accepted password^^
    } else console.log('Password is accepted');

    // This line closes the connection to the command line interface.
    reader.close();
  }
);
