const drop= require('lodash').drop;

let arr = [1,2,3,4,5,6];
let temp = drop(arr);
console.log(temp); // [ 2, 3, 4, 5, 6 ]

temp = drop(arr, 4);
console.log(temp); //[ 5, 6 ]
