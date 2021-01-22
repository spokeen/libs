const dropRight = require('lodash').dropRight;

let arr = [1,2,3,4,5];

let temp = dropRight(arr, 3);
console.log(temp); // [ 1, 2 ]