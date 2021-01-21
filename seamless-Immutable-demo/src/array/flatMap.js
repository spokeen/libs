const Immutable = require('seamless-immutable');

let arr = Immutable([1,2,3,4]);

let temp = arr.flatMap((ele) => {
    return  [ele, ele, ele];
})

console.log(temp); // [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4 ]

temp = arr.map((ele) => {
    return  [ele, ele, ele];
})

console.log(temp); // [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ], [ 4, 4, 4 ] ]

temp = arr.flatMap((ele) => {
    return  [[ele, ele, ele]];
})
console.log(temp); // [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ], [ 4, 4, 4 ] ]