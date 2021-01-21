let Immutable  = require('seamless-immutable');

let obj = Immutable({
    name: 'dd'
})


let temp = obj.merge({
    age: 20
})

console.log(obj); // { name: 'dd' }
console.log(temp); // { name: 'dd', age: 20 }


temp = Immutable.merge(obj, {
    age: 30
})

console.log(temp); // { name: 'dd', age: 30 }


temp = obj.merge([{age: 30}, {color: 'red'}]);

console.log(temp); // { name: 'dd', age: 30, color: 'red' }

let aa = {
    aa:'1213'
};
temp = obj.merge([{age: 30}, {color: 'red', cc:aa }]);
aa.aa = 'asdas';
console.log(aa); // { aa: 'asdas' }
console.log(temp); // { name: 'dd', age: 30, color: 'red', cc: { aa: '1213' } }
temp.cc.aa = 'ttttt';
console.log(temp);

let bb = {bb:'bbbb'}
temp = obj.merge([{age: 30}, {color: 'red', cc:bb }], {deep: true});
bb.bb = 'asdas2222';
console.log(bb); // { bb: 'asdas2222' }
console.log(temp); // { name: 'dd', age: 30, color: 'red', cc: { bb: 'bbbb' } }
temp.cc.bb = '123123';
console.log(temp); // { name: 'dd', age: 30, color: 'red', cc: { bb: 'bbbb' } }