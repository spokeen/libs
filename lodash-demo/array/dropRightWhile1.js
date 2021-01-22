const dropRightWhile = require('lodash').dropRightWhile;

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  let temp = dropRightWhile(users, (o) => {
      return !o.active;
  })

  console.log(temp); // [ { user: 'barney', active: true } ]