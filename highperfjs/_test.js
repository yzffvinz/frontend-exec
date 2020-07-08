function timer(callback, times) {
    times = times || 1;
    var start = new Date().getTime();
    for (var i = 0; i < times; i++) {
        callback();
    }
    var end = new Date().getTime();
    console.log(end - start);
}

var obj = {
    a: 1
};
var a = 1;

function getObjData() {
    if (obj.a !== 1) {
        console.log(1);
    }
}

function getData() {
    if (a !== 1) {
        console.log(1);
    }
}
