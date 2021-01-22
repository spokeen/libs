const fill = require('lodash').fill;

let arr  = [1,2,3];
let temp = fill(arr, 'a');
console.log(arr); // [ 'a', 'a', 'a' ]
console.log(temp); // [ 'a', 'a', 'a' ]

fill(arr, 'b', 1);
console.log(arr); //[ 'a', 'b', 'b' ]

fill(arr, 'c', 1, 2);
console.log(arr); // [ 'a', 'c', 'b' ]