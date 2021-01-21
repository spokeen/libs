let Immutable  = require('seamless-immutable');

let up = (e) => {
    return e+1
}
let  obj = Immutable({a:'aaa', b: {c: 'c'}});
let temp = obj.updateIn(['b', 'c'], up);
console.log(temp);//  { a: 'aaa', b: { c: 'c1' } }