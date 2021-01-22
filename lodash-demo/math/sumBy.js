const sumBy = require('lodash').sumBy;

let arr = [1,2,3,4];

let temp = sumBy(arr, (ele) => {
    if(ele < 5) {
        return 1;
    }
    return ele;
})

console.log(temp); // 4