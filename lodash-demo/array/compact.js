const compact = require('lodash').compact;


let arr = [0, 1, false, 2, '', 3, undefined, 4, NaN, 5, null];
let temp = compact(arr);
console.log(temp); // [ 1, 2, 3, 4, 5 ]

let arr2 = [false, 0, '', undefined, NaN, null];

let temp2 = compact(arr2);
console.log(temp2); // []