const endsWith = require('lodash').endsWith;

let str = 'abcabccc';

let temp = endsWith(str, 'cc');
console.log(temp); // true

temp = endsWith(str, 'cc', 4);
console.log(temp); // false