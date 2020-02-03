/*  Number对象的方法  */
/* !important  */
console.error('比较使用整数分，不用小数元');
// Number的parse
Number('2');
new Number('2');
Number.parseInt('2');
Number.parseFloat('2.3');
// 新运算符
let pow = (-2) ** 3;
// Number常用方法
// 保留小数
(2).toFixed(2);
//
(2658).toPrecision(2);
// Math
Math.pow(2, 3);
Math.round(.6);     //四舍五入
Math.ceil(.6);      // 进位
Math.floor(1.6);    // 抹零
Math.trunc(2.3321312);  // 直接移走
Math.abs(-6);
Math.random();          // 大于等于0，小于1
Math.sqrt(25);


// Number不常用的方法属性
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

Number.isSafeInteger(2 ** 53)
Number.isNaN(NaN);
Number.isFinite(Infinity);