// 单个promise
let single = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.random() * 10 | 0;
            if (num % 2 === 0) {
                resolve(num);
            }
            reject(num);
        }, 500)
    }).then((num) => {
        console.log("Success: " + num + " is an even number");
    }).catch((num) => {
        console.log("Failed: " + num + " is an odd number");
    });
};

// 链式调用多个异步任务
let multi = () => {
    let sliceBread = (bread) => {
        return new Promise((resolve, reject) => {
            console.log('slicing...');
            setTimeout(resolve, 500, '切片的 ' + bread);
        });
    };
    let bakeBread = (bread) => {
        return new Promise((resolve, reject) => {
            console.log('baking...');
            setTimeout(resolve, 500, '烤过的 ' + bread);
        });
    };
    let butterBread = (bread) => {
        return new Promise((resolve, reject) => {
            console.log('buttering...');
            setTimeout(resolve, 500, '涂过黄油的 ' + bread);
        });
    };

    let killBread = (bread) => {
        return new Promise((resolve, reject) => {
            console.log('killing...');
            setTimeout(reject, 500, bread);
        });
    };

    let breadShop = new Promise((resolve, reject) => {
       resolve('面包');
    });

    breadShop
        .then(sliceBread)
        .then(bakeBread)
        .then(butterBread)
        .then(bakeBread)
        .then(butterBread)
        .then(sliceBread)
        .then(killBread)
        .then(result => {
            console.log('面包制作完成！请享用:')
            console.log('  '+ result);
        }).catch((bread) => {
            console.log('面包已被杀死！生前照片:');
            console.log('  ' + bread);
        });
};

// 并行执行promise
/* all */
let promiseAll = () => {
    let playerOne = (msg) => {
        return new Promise((resolve, reject) => {
            console.log('PlayerOne is moving... :' + msg + '...');
            setTimeout(resolve, 500, 'PlayerOne');
        });
    };
    let playerTwo = (msg) => {
        return new Promise((resolve, reject) => {
            console.log('PlayerTwo is moving... :' + msg + '...');
            setTimeout(resolve, 1000, 'PlayerTwo');
        });
    };
    let playerThree = (msg) => {
        return new Promise((resolve, reject) => {
            console.log('playerThree is moving... :' + msg + '...');
            setTimeout(resolve, 500, 'playerThree');
        });
    };
    let msg = '冲呀！A点集合！'
    Promise.all([playerOne(msg), playerTwo(msg), playerThree(msg)]).then(results => {
        console.log('Success: ' + results);
    }).catch(result => {
        console.log('任务失败: ' + result + '凉了');
    });
};
/* race */
let promiseRace = () => {
    let driverOne = () => {
        return new Promise((resolve, reject) => {
            console.log('driverOne starts up...');
            setTimeout(resolve, 1500, 'driverOne');
        });
    };
    let driverTwo = () => {
        return new Promise((resolve, reject) => {
            console.log('driverTwo starts up...');
            setTimeout(resolve, 1000, 'driverTwo');
        });
    };
    let driverThree = () => {
        return new Promise((resolve, reject) => {
            console.log('driverThree starts up...');
            setTimeout(resolve, 500, 'driverThree');
        });
    };

    Promise.race([driverOne(), driverTwo(), driverThree()])
        .then((winner) => {
            console.log('--------------------------------');
            console.log('冠军是 ' + winner);
        }).catch((wounded) => {
            console.log('--------------------------------');
            console.log('比赛中止！\n  因为' + wounded + ' 凉了');
        });
};
/*  es2018 promise-finally */
let finalPromise = () => {
    console.log('这里不支持，请到新版主流浏览器中执行');
    new Promise((resolve, reject) => {
        resolve(555);
        reject(666);
    }).then(msg => {
        console.log('finished: ' + msg)
    }).catch((msg) => {
        console.log('emit error: ' + msg);
    }).finally(msg => {
        console.log('have param? ' + msg);
        console.log('finally!');
    });
};

multi();
