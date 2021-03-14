const student = require('../src/student');


test("get a student", () => {
    // toEqual 测试对象是否相等
    expect(student('dd',23)).toEqual({
        name: 'dd',
        age: 23
    })
})