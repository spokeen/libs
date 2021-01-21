let Immutable  = require('seamless-immutable');

let obj = Immutable({
    name: 'dd',
    more: {
        color: 'red'
    }
})

let temp = obj.without('name');
console.log(temp); // { more: { color: 'red' } }

obj = Immutable({
    name: 'dd',
    more: {
        color: 'red'
    }
})
temp = obj.without(['more', 'color']);
console.log(temp); // { name: 'dd' }


obj = Immutable({
    name: 'dd',
    more: {
        color: 'red'
    }
})
temp = obj.without(['more', 'name']);
console.log(temp); // {}

obj = Immutable({
    name: 'dd',
    more: {
        color: 'red'
    },
    cc: 'cc'
})
temp = obj.without((value, key) => {
    return key === 'name' || value === 'cc'
});
console.log(temp); // { more: { color: 'red' } }
