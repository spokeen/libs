const max = require('lodash').max;

let temp = max([1,2,3,2]);
console.log(temp); // 3
temp = max([]);
console.log(temp); // undefined