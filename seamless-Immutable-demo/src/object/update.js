let Immutable  = require('seamless-immutable');

let up = (e) => {
    return e+1
}
let  obj = Immutable({a:'aaa', b: {c: 'c'}});
let temp = obj.update('a', up);
console.log(temp);//  { a: 'aaa1' }

temp = obj.update(['b', 'c'], up);
console.log(temp); // { a: 'aaa', b: { c: 'c' }, 'b,c': NaN }


let up2 = (e1, e2) => {
    return e1 + e2;
}

temp = obj.update('a', up2, 222);
console.log(temp); // { a: 'aaa222', b: { c: 'c' } }