/* 诞生 */
let map = new Map();
let map1 = new Map([
    [-1, -1],
    [0, 2]
]);
/* 增删取清空 */
map.set(1, 1);
map.set(2, 2);
map.set(3, 3);
map.set(map1, 2);
map.get(map1);
map.delete(map1);
map1.clear();

/* 某个键值是否存在 */
map.has(map1);
map.has(1);

/* 大小 */
map.size

/* 遍历 */
// forEach(value, key, map)
// for (let [key, value] of map) {}
