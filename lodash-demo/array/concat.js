const concat = require('lodash').concat;

let arr = [1,2,3];

let temp = concat(arr, ['a'], 'b','c');
console.log(temp); // [ 1, 2, 3, 'a', 'b', 'c' ]