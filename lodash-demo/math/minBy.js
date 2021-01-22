const minBy = require('lodash').minBy;

let arr = [1,2,3,2,1];

let temp = minBy(arr, (ele) => {
    if(ele === 3) return 0;
    return ele;
});

console.log(temp); // 3