const countBy = require('lodash').countBy;

let arr = [1,2,3,4,5,6,7,6,6];

let temp = countBy(arr, (ele) => {
    return ele;
})
console.log(temp); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 3, '7': 1 }


let arr2 = [1,2,2];

temp = countBy(arr2, (ele) => {
    return 9;
})
console.log(temp); // { '9': 3 }


let arr3 = ['one', 'two', 'three'];
 temp = countBy(arr3, 'length');
console.log(temp); // { '3': 2, '5': 1 }
