const difference = require('lodash').difference;

let arr = ['a', 'b', 'c'];
let temp = difference(arr, 'a');
console.log(temp); // [ 'a', 'b', 'c' ]

temp = difference(arr, ['a']);
console.log(temp); // [ 'b', 'c' ]