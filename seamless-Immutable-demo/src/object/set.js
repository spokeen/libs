let Immutable  = require('seamless-immutable');

let obj = Immutable({
    name: 'dd',
    age: 20
})


let temp = obj.set('name', 'ddddd');
console.log(temp); // { name: 'ddddd', age: 20 }

temp = obj.set('color', 'zzz');
console.log(temp); // { name: 'dd', age: 20, color: 'zzz' }