const nth = require('lodash').nth;

let arr = [1,2,3,4];
let temp = nth(arr, 2);
console.log(temp); // 3

temp = nth(arr, -2);
console.log(temp); // 3
