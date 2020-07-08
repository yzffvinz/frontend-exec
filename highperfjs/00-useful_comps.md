## 函数

### 计时器

```js
// 执行timer次callback函数，计算使用的时间
function timer(callback, times) {
    times = times || 1;
    var start = new Date().getTime();
    for (var i = 0; i < times; i++) {
        callback();
    }
    var end = new Date().getTime();
    console.log(end - start);
}
```

