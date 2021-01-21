const Immutable = require('seamless-immutable');

let arr = Immutable(['a', 'v']);

let temp = arr.asObject((ele) => {
    return [ele, ele];
});

console.log(temp); // { a: 'a', v: 'v' }