const Immutable = require('seamless-immutable');

let arr = Immutable([1,2,3]);

// arr.push(4);
console.log(arr); // [ 1, 2, 3 ]

let temp = arr.asMutable();

temp.push(4); // [ 1, 2, 3, 4 ]
console.log(temp);