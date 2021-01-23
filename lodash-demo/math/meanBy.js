const meanBy = require('lodash').meanBy;

let arr = [1,2,3,2,1];

let temp = meanBy(arr, (ele) => {
    return ele * 10;
})
console.log(temp); // 18

let arr2 = [{
    age: 22
}, {
    age :40
}, {
    age: 23
}];

temp = meanBy(arr2, (ele) => {
    return ele.age;
});
console.log(temp); // 28.333