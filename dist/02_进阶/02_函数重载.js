"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 输出: 3
console.log(add("Hello, ", "world!")); // 输出: "Hello, world!"
// 实现
function greet(name, age) {
    if (age !== undefined) {
        return `Hello, ${name}! You are ${age}.`;
    }
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // 输出: "Hello, Alice!"
console.log(greet("Bob", 30)); // 输出: "Hello, Bob! You are 30."
