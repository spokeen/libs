const reverse =require('lodash').reverse;

let arr =  [1,2,3,4,5];
let temp =reverse(arr);
console.log(arr); // [ 5, 4, 3, 2, 1 ]
console.log(temp); // [ 5, 4, 3, 2, 1 ]
arr[4] =  6;
console.log(arr); // [ 5, 4, 3, 2, 6 ]
console.log(temp); // [ 5, 4, 3, 2, 6 ]