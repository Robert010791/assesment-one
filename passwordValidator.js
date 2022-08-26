const { TransformStreamDefaultController } = require('node:stream/web');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  'Welcome to the password validator! Please enter your password:',
  function (input) {
    if (input.length < 10) {
      console.log('Password is too short');
    } else if (input.length > 20) {
      console.log('Password is too long');
    } else if (/\d/.test(input) === false) {
      console.log('Password requires at least one number');
    } else if (/[a-z]/.test(input) === false) {
      console.log('Password requires at least one letter');
    } else if (/[A-Z]/.test(input) === false) {
      console.log('Password requires at least one uppercase letter');
    } else console.log('Password is accepted');

    // This line closes the connection to the command line interface.
    reader.close();
  }
);
