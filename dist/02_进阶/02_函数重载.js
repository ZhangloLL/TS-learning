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
class Calculator {
    add(a, b) {
        return a + b;
    }
}
let calc = new Calculator();
console.log(calc.add(5, 10)); // 输出: 15
console.log(calc.add("Type", "Script")); // 输出: "TypeScript"
console.log(calc.add(5, "10")); // 输出: "510" (number 和 string 进行加法运算时，number 会被转换为 string)
// 构造函数重载
class Person {
    constructor(p_name, p_age) {
        this.p_name = p_name;
        this.p_age = p_age || 0;
    }
}
let person1 = new Person("Alice");
let person2 = new Person("Bob", 30);
console.log(JSON.stringify(person1)); // 输出: Person { p_name: 'Alice', p_age: 0 }
console.log(JSON.stringify(person2)); // 输出: Person { p_name: 'Bob', p_age: 30 }
function process(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    return value.toUpperCase();
}
let numResult = process(5); // 输出: 10
let strResult = process("hello"); // 输出: "HELLO"
console.log(numResult); // 输出: 10
console.log(strResult); // 输出: "HELLO"
