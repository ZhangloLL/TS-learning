// Promise 三个状态 pending fulfilled rejected
// Promise 解决了回调地狱的问题
// Promise 是一个类，构造函数接受一个函数作为参数，这个函数有两个参数 resolve 和 reject
// resolve 用于将 Promise 状态从 pending 变为 fulfilled，reject 用于将 Promise 状态从 pending 变为 rejected
let promise = new Promise<string>((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("成功了");
    } else {
        reject("失败了");
    }
});
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});


// 链式调用
let promise1 = Promise.resolve(1)
    .then((value) => {
        console.log(value);
        return value + 1;
    }).then((value) => {
        console.log(value);
        return value + 1;
    }).then((value) => {
        console.log(value);
        return value + 1;
    });
console.log(promise1);

// Promise.all
let  p1 = Promise.resolve(1);
let  p2 = Promise.resolve(2);
let  p3 = Promise.resolve(3);

// Promise.all 等待所有 Promise 都完成后才会执行 then 方法，如果有一个 Promise 失败了，就会执行 catch 方法
Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
    console.log(values.reduce((acc, value) => acc + value, 0));
}).catch((error) => {    
    console.log(error);
});
// promise race
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4");
    }, 1000);
});
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p5");
    }, 500);
});
Promise.race([p4, p5]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});

// Promise.allSettled 等待所有 Promise 都完成后才会执行 then 方法，不管是成功还是失败
Promise.allSettled([p1, p2, p3, p4, p5]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
});

// 类型注解
function getUser(): Promise<{ id: number; name: string}>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "张三" });
        }, 1000);
    });
}
getUser().then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
});