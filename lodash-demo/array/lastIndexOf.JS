const lastIndexOf = require('lodash').lastIndexOf;

let arr = [1,4,3,4,4,4,4];

let temp = lastIndexOf(arr, 4);

console.log(temp); // 6

temp = lastIndexOf(arr, 4, 4);
console.log(temp); // 4