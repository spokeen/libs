

const fetchData = require('../src/promise');



beforeEach(() => {
    console.log('start');
  });
  
afterEach(() => {
    console.log('end');
  });
  
test('the resolve is 1', () => {
    function callback(data) {
        console.log('doing')
        expect(data).toBe(1);
    }

 return fetchData().then(callback);
})
