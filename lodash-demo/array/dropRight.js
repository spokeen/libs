let dropRight = require('lodash').dropRight;
let arr = [1,2,3,4,5,6];

let temp = dropRight(arr);
console.log(temp); //[ 1, 2, 3, 4, 5 ]

temp = dropRight(arr, 5);
console.log(temp); // [ 1 ]
