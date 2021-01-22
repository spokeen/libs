const chunk = require('lodash').chunk;

let arr = [1,2,3,4,5,6];
let temp = chunk(arr, 4);
console.log(temp);