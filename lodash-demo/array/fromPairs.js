const fromPairs = require('lodash').fromPairs;

let arr = [['a', 2], ['b', 3]];

let temp = fromPairs(arr);
console.log(temp); // { a: 2, b: 3 }