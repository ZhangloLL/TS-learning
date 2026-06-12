"use strict";
// Promise基础
let promise = new Promise((resolve, reject) => {
    let success = false; // 模拟成功或失败
    if (success) {
        resolve("操作成功");
    }
    else {
        reject("操作失败");
    }
});
promise.then(result => {
    console.log(result); // 输出: 操作成功
}).catch(error => {
    console.error(error); // 输出: 操作失败
});
// async函数
async function greet() {
    return "Hello, World!";
}
greet().then(message => {
    console.log(message); // 输出: Hello, World!
}).catch(error => {
    console.error(error);
});
// 异步函数返回Promise
async function getData() {
    return { data: "这是一些数据" };
}
getData().then(result => {
    console.log(result); // 输出: { data: '这是一些数据' }
}).catch(error => {
    console.error(error);
});
// await用法
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve("完成"), ms);
    });
}
async function asyncFunction() {
    console.log("等待2秒...");
    const result = await delay(2000); // 可以拿到返回值 "完成"
    console.log("2秒后继续执行，结果是:", result);
}
asyncFunction(); // 调用函数
