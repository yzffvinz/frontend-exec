let spl = title => {
    let halfLine = '-'.repeat(20);
    console.log(`${halfLine}${title}${halfLine}`);
};

// 基本语法
spl('基本语法');
let name1 = '小明';
let name2= '小亮'
let rps = (name) => {
    let rpsCode = (Math.random() * 100 | 0) % 3;
    return rpsCode === 0 ? '剪刀' : rpsCode === 1 ? '石头' : '布';
};
console.log(`你好呀，我叫${name1}，剪刀石头布:${rps(name1)}`);
console.log(`你好呀，我叫${name2}，剪刀石头布:${rps(name2)}`);

// 嵌套模板
spl('嵌套模板');
let friends = [
    {
        name: '小日',
        age: 3
    },
    {
        name: '小月',
        age: 7
    },
    {
        name: '小日月',
        age: 10
    },
    {
        name: '小明',
        age: 21
    }
];
console.log(`${name1}的朋友有:${friends.map(item=>`
    姓名:${item.name.padStart(4, '　')} | 年龄:${item.age.toString().padStart(3, ' ')}`)}`);

// 自定义方式
spl('自定义方式');
let age = 20;
let custom = doIt`我叫${name1},今年${age}岁`;
function doIt(strings, ...params) {
    console.log(strings);
    console.log(params);
    return strings[0] + '宇智波·' + params[0] + strings[1] + params[1] + '公' + strings[2];
}
console.log(custom);










