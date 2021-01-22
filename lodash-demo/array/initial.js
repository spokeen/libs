const initial = require('lodash').initial;

let arr = [1,2,3,4];

let temp = initial(arr);
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(temp); // [ 1, 2, 3 ]