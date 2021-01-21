let Immutable  = require('seamless-immutable');

let obj = Immutable({
    a: {
        b:'v'
    },
    c: 'c'
});

let temp = obj.replace({d: 'd'});
console.log(temp); // { d: 'd' }