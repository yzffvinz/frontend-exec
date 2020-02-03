/* try-catch基本用法 */
let normalTryCatch = (twoDigits) => {
    try {
        if (!Number.isInteger(twoDigits)) throw '非合法整数';
        if (twoDigits < 10 || twoDigits > 99) throw '非两位数';
        console.log(twoDigits + '是个合法的两位数');
    } catch(err) {
        console.error('错误：' + err);
    } finally {
        console.log('over');
    }
};
normalTryCatch(100);