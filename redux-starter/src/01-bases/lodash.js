import { compose, pipe } from 'lodash/fp';

const username = '    Harley    ';

const trim = (name) => name.trim();
const convertToUpper = (name) => name.toUpperCase();
const generateMessage = (name) => `Hello ${name}, Good morning!`;

// const newFunc = generateMessage(convertToUpper(trim(username)));
const newFunc = pipe(trim, convertToUpper, generateMessage);
const result = newFunc(username);
