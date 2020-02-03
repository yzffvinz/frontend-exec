/* 基本操作 */
let set = new Set();
let set1 = new Set([1, 2, 3, 3, 5]);

/* 增删 */
set.add(1);
set.add(1);
set.add(2);
set.add(3);
console.log(set);
set.delete(2);
console.log(set);

/* 清空 */
set1.clear();
console.log(set1);

/* 有没有 */
set.has(1);
set.has(2);

/* 数量 */
set.size;

/* 遍历 */
set.forEach(item, index, set => console.log(item, index, set));
for(let item of set) console.log(item);

/* 转数组 */
Array.from(...set);
console.log([...set]);