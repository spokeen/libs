const escapeRegExp = require('lodash').escapeRegExp;

let str = '[lodash](https://lodash.com/)';

let temp = escapeRegExp(str);
console.log(temp); // \[lodash\]\(https://lodash\.com/\)