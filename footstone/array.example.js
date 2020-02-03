let fruits = ['苹果', '荔枝', '车厘子', '李子', '香蕉', ['油桃', '毛桃']];
let spl = title => {
    let halfLine = '-'.repeat(20);
    console.log(`${halfLine}${title}${halfLine}`);
    console.log(fruits);
};
/* Array常用方法 */
spl('valueOf');
console.log(fruits.valueOf());
spl('toString');
console.log(fruits.toString());

/* 在末尾添加一个元素 */
spl('push');
fruits.push(['榴莲', '菠萝蜜']);
console.log(fruits);
fruits.push('榴莲', '菠萝蜜');
console.log(fruits);

/*  尾巴 */
spl('pop');
let tail = fruits.pop();
console.log(tail);
console.log(fruits);

/* 头 */
spl('shift');
let head = fruits.pop();
console.log(head);
console.log(fruits);

/* indexOf */
spl('indexOf');
fruits.push('李子');
console.log(fruits.indexOf('李子'));
console.log(fruits.lastIndexOf('李子'));
fruits.pop();

/* 一个索引位置删除多个(包含index, param2是数量) */
spl('splice');
console.log(fruits.length);
let removed2 = fruits.splice(1, 3);
console.log(removed2);
console.log(fruits);

/* 截取数组(左闭右开) */
spl('slice');
console.log(fruits.length);
let subArr = fruits.slice(1, 3);
console.log(subArr);
console.log(fruits);

spl('数组浅拷贝');
let arr_cp = fruits.slice();
arr_cp[0] = '烂苹果';
console.log(fruits);
arr_cp[2][0] = '烂油桃';
console.log(fruits);

spl('Array.of()')
console.log(Array.of(3));
console.log(Array.of([3, 4]));

/* 将对象转化为数组 */
spl('Array.from()');
// Array.from(document.querySelectorAll('li'));

/* Array.find */
spl('Array.find()');
console.log(fruits.find((item, index) => typeof item === 'object'));

/* 找到index */
fruits.push('苹果');
spl('Array.findIndex()');
console.log(fruits.findIndex(fruit => fruit === '苹果'));

/* Array.fill() */
spl('Array.fill()');
fruits.fill('芒果', 2, 3);
console.log(fruits);
fruits.fill('芒果', -1, null);
console.log(fruits);
fruits.fill('芒果', null, 4);
console.log(fruits);

/* Array.copyWithin() */
fruits = ['苹果', '荔枝', '车厘子', '李子', '香蕉'];
spl('Array.copyWithin()');
fruits.copyWithin(0, 3 , 5);
console.log(fruits);


/* Array.includes() */
spl('Array.includes()');
console.log(fruits.includes('车厘子'));
console.log(fruits.includes('西瓜'));

/* keys entries */
spl('entries  &  keys');
let entries = fruits.entries();
let keys = fruits.keys();
console.log(entries.next());
console.log(keys.next());
