const { fromJS } = require("immutable");
const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

console.log(nested2.getIn(["a", "b", "d"])); // 6

const nested3 = nested2.updateIn(["a", "b", "d"], (value) => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn(["a", "b", "c"], (list) => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }

// First consider:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
obj1 !== obj2; // two different instances are always not equal with ===

const { Map, is } = require("immutable");
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
map1 !== map2; // two different instances are not reference-equal
console.log(map1.equals(map2)); // but are value-equal if they have the same values
console.log(is(map1, map2)); // alternatively can use the is() function
