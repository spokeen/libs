let dropWhile = require('lodash').dropWhile;

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  let temp = dropWhile(users, (o) => {
      return o.active;
  })

  console.log(temp); // [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]