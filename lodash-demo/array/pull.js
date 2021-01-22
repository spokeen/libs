const pull = require('lodash').pull;

let arr = [1,1,1,2,2,2,3,3,3,4,5];

let temp = pull(arr, [1,2,3]);
console.log(temp); // [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5 ]

temp = pull(arr, 1,2,3);
console.log(temp); // [ 4, 5 ]

temp = pull(arr, '1','2', '3');
console.log(temp); //[ 4, 5 ]