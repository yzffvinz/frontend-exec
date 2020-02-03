let spl = title => {
    let halfLine = '-'.repeat(20);
    console.log(`${halfLine}${title}${halfLine}`);
};

let testNull = name => {
    console.log(name);
}
/* null */
spl('Object对象的原型');
console.log(Object.prototype.__proto__);
spl('Array对象的原型');
console.log(Array.prototype.__proto__);
spl('传入null');
testNull(null);

/* undefined */
spl('不传');
testNull();
spl('未定义');
let undef;
console.log(undef);
spl('对象未定义键值');
let obj = {
    // name: 'lll',
    age: 16
};
console.log(obj.name);
spl('无return的函数');
let returnUndef = () => {};
console.log(returnUndef());