let Immutable  = require('seamless-immutable');


let obj = Immutable({
    name: 'dd',
    more: {
        color: 'red'
    }
});

let temp = obj.getIn(['more', 'color']);
console.log(temp); // red

let arr = Immutable([1,[2,333]]);

temp = arr.getIn([1,1]); // 333
console.log(temp);
