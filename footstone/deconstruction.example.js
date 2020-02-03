/* 对象解构 */
let { a1, b1 } = {
    a1: 1,
    b1: 2
};
/* 数组解构 */
let [a2, b2] = [3, 4];


/* 组合赋值 */
let { a3, b3, c: [c1, c2]} = obj = {
    a3: 1,
    b3: 2,
    c: ['c1', 'c2']
};
console.log(a3, b3, c1, c2);  // 1 2 "c1" "c2"
console.log(c);               // Uncaught ReferenceError: c is not defined

/*  默认值 */
let { a4, b4 = 'b' } = {
    a4: 1
};

