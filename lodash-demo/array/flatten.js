const flatten = require('lodash').flatten;

let arr = [1, [3, [4,5]], 6];

let temp = flatten(arr);
console.log(temp);  // [ 1, 3, [ 4, 5 ], 6 ]