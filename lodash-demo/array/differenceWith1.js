const differenceWith = require('lodash').differenceWith;
const isEqual = require('lodash').isEqual;


let arr = [1,2,3];
let arr2 = [1,2];

let temp = differenceWith(arr, arr2, isEqual);

console.log(temp); // [ 3 ]