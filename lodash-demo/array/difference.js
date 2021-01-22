const difference = require('lodash').difference;

let arr = [1,2,2,33,4,4];

let temp = difference(arr);
console.log(temp)

let temp2 = difference(arr, [1,2]);
console.log(temp2);

let temp3 = difference(arr, 1,2);
console.log(temp3);