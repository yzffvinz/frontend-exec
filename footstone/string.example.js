/* 字符串常用函数等 */
'xjnklmeinvdalkdsad'.includes('meinv');
'slp-test'.startsWith('slp');
'name.php'.endsWith('.php');
'*'.repeat(1000);

'9.1'.padStart(8);
'9.1'.padEnd(8, '0');
'a'.padStart(3, '123456789');
'a'.padEnd(3, '123456789');
// 一直有的
const numberSeq = '01234567890123456789ABCDabcd';
numberSeq.charAt(1);
numberSeq.indexOf('0');
numberSeq.indexOf('0123456789');
numberSeq.slice(1, 2);
numberSeq.slice(-2, -1);
numberSeq.split();
numberSeq.split('');
numberSeq.split('', 3);
numberSeq.subStr(5, 3);
numberSeq.subStr(5);
numberSeq.subStr(5);
numberSeq.substring(1, 4);
numberSeq.toLowerCase();
numberSeq.toUpperCase();