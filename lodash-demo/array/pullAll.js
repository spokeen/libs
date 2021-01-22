const pullAll = require('lodash').pullAll;

let arr = [1,2,3,4,5];

let temp = pullAll(arr, [1,2,3]);
console.log(temp); // [ 4, 5 ]

temp = pullAll(arr, ['1','2','3']);
console.log(temp);// [ 4, 5 ]