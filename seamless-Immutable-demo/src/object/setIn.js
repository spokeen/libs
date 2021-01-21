let Immutable  = require('seamless-immutable');

let obj = Immutable({
    name: 'dd',
    age: 20,
    more: {
        color: 'red'
    }
})

let temp = obj.setIn(['more', 'color'], 'blue');

console.log(temp); // { name: 'dd', age: 20, more: { color: 'blue' } }


temp = obj.merge({more: {
    color: 'green'
}})
console.log(temp); // { name: 'dd', age: 20, more: { color: 'green' } }


let arr = Immutable([["one fish", "two fish"], ["red fish", "blue fish"]]);
temp = arr.setIn([1,1], 'green fish');
console.log(temp);  // [ [ 'one fish', 'two fish' ], [ 'red fish', 'green fish' ] ]