const sum = require('../src/sum');

test('add 1 + 2 to equal 3', () => {
    // toBe 严格相等
    expect(sum(1,2)).toBe(3);
})
