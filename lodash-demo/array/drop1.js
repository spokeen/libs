const drop = require('lodash').drop;

let arr = [1,2,3,4];
let temp = drop(arr, 2);
console.log(temp); // [ 3, 4 ]