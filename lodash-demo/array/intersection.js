const intersection = require('lodash').intersection;

// 数学上的求交集

let arr = [1,2,3],
arr2 = [2,3,4];
let temp = intersection(arr, arr2);
console.log(temp); // [ 2, 3 ]