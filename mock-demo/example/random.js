const Mock = require('mockjs');


let Random = Mock.Random;


let email = Random.email(); // email() 称为占位符
console.log(email); // z.chbj@rbrywza.lk


console.log(Mock.mock({
    email: '@email' // @email 占位符字面形式
}))


// 扩展占位符

Random.extend({
    dd: function() {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
});

console.log(Random.dd());
console.log(Mock.mock({email: '@dd'}));