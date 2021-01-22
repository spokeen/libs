const compact = require('lodash').compact;

let arr = [0, 1,'',2,false,3,null,4,undefined,5,NaN];
let temp = compact(arr);
console.log(temp); // [ 1, 2, 3, 4, 5 ]