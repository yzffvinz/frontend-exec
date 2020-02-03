/* 展开运算符(谁前面有)...就展开谁) */
let func1 = (x, y, z) => x + y + z;
console.log(func1(...[1, 2, 3]));

/* 合并数组 */
let fruits = ['苹果', '香蕉', '梨'];
let vegetables = ['土豆', '洋芋'];
let produre = [...fruits, ...vegetables];
console.log(produre);

/* 散的聚集 */
let func2 = (...args) => {
    console.log(args);
}
func2(1, 2, 3);

/* 转换为普通数组 */
[...document.querySelectorAll('li')];
[...document.getElementsByTagName('li')];

/* 使用一些math函数 */
Math.min(...[1, 3, 4, 5], 1);