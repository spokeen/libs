const differenceWith = require('lodash').differenceWith;
const isEqual = require('lodash').isEqual;


let arr = [1,2,3],
arr2 = [2,3];
let temp = differenceWith(arr, arr2, isEqual);
console.log(temp); // [ 1 ]

let arr3 = [{a:1}, {a:3}],
arr4 = [{a:1}];

temp = differenceWith(arr3, arr4, isEqual);
console.log(temp); // [ { a: 3 } ]

let arr5 = [{a:1.1}, {a:2.1}],
arr6 = [{arr: 1.2}];

temp = differenceWith(arr5, arr6, Math.floor);
console.log(temp); // [ { a: 1.1 }, { a: 2.1 } ]