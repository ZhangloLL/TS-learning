"use strict";
// Promise 三个状态 pending fulfilled rejected
// Promise 解决了回调地狱的问题
// Promise 是一个类，构造函数接受一个函数作为参数，这个函数有两个参数 resolve 和 reject
// resolve 用于将 Promise 状态从 pending 变为 fulfilled，reject 用于将 Promise 状态从 pending 变为 rejected
let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("成功了");
    }
    else {
        reject("失败了");
    }
});
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
