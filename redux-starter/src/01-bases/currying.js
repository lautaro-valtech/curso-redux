import { compose, pipe } from 'lodash/fp';

const username = '    Harley    ';

const trim = (name) => name.trim();
const convertToUpper = (name) => name.toUpperCase();

// Currying
function generateMessage(message) {
  return function (name) {
    return `Hello ${name}, ${message}`;
  };
}

// It's the same as:
// const generateMessage = (message) => (name) => `Hello ${name}, ${message}`;

const newFunc = pipe(trim, convertToUpper, generateMessage('good morning!'));
// pipe function it's executed with the result of generateMessage function.
// Something like this: generateMessage('good morning')(name)

const result = newFunc(username);
