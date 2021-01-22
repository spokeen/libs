const findLastIndex = require('lodash').findLastIndex;

let arr  = [ 1, 2,3,4,4,5];

let temp = findLastIndex(arr , (ele) => {
    return ele <6;
})
console.log(temp); // 5


temp = findLastIndex(arr , (ele) => {
    return ele < 6
}, 4)

console.log(temp); // 4