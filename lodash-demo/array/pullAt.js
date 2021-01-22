const pullAt = require('lodash').pullAt;

let arr = [1,2,3,4,5];
let temp = pullAt(arr, 1,2,3);
console.log(temp); // [ 2, 3, 4 ]
console.log(arr); // [ 1, 5 ]
arr =  [1,2,3,4,5];
temp = pullAt(arr, [1,2,3]);
console.log(temp); // [ 2, 3, 4 ]