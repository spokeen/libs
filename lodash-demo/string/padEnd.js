const padEnd = require('lodash').padEnd;

let str = 'abc';
let temp = padEnd(str, 8, '*?=');
console.log(temp); // abc*?=*?