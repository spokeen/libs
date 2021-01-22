const flattenDepth = require('lodash').flattenDepth;


let arr = [1, [2, [3,4]], 5];
let temp = flattenDepth(arr , 2);
console.log(temp); // [ 1, 2, 3, 4, 5 ]

temp = flattenDepth(arr);
console.log(temp); // [ 1, 2, [ 3, 4 ], 5 ]