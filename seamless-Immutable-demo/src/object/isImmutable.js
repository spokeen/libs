let Immutable  = require('seamless-immutable');

let obj = Immutable({a:1});

let temp = Immutable.isImmutable(obj);
console.log(temp);  // true


let ff = obj.asMutable();

temp = Immutable.isImmutable(ff);
console.log(temp);  // false