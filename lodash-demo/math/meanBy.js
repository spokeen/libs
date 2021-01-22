const meanBy = require('lodash').meanBy;

let arr = [1,2,3,2,1];

let temp = meanBy(arr, (ele) => {
    return ele * 10;
})
console.log(temp); // 18