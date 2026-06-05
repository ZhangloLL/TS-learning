function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2)); // 输出: 3
console.log(add("Hello, ", "world!")); // 输出: "Hello, world!"

// 多参数重载
function greet(name: string): string;
function greet(name: string, age: number): string;

// 实现
function greet(name: any, age?: any): any{
    if (age !== undefined) {
        return `Hello, ${name}! You are ${age}.`;
    }
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // 输出: "Hello, Alice!"
console.log(greet("Bob", 30)); // 输出: "Hello, Bob! You are 30."

class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}
let calc = new Calculator();
console.log(calc.add(5, 10)); // 输出: 15
console.log(calc.add("Type", "Script")); // 输出: "TypeScript"
console.log(calc.add(5, "10")); // 输出: "510" (number 和 string 进行加法运算时，number 会被转换为 string)

// 构造函数重载
class Person {
    p_name: string;
    p_age: number;

    constructor(p_name: string);
    constructor(p_name: string, p_age: number);
    constructor(p_name: any, p_age?: any) {
        this.p_name = p_name;
        this.p_age = p_age || 0;
    }
}
let person1 = new Person("Alice");
let person2 = new Person("Bob", 30);
console.log(JSON.stringify(person1)); // 输出: Person { p_name: 'Alice', p_age: 0 }
console.log(JSON.stringify(person2)); // 输出: Person { p_name: 'Bob', p_age: 30 }

// 重载与联合类型
function process(value: number): number;
function process(value: string): string;
function process(value: any): any {
    if (typeof value === "number"){
        return value * 2;
    }
    return value.toUpperCase();
}
let numResult: number = process(5); // 输出: 10
let strResult: string = process("hello"); // 输出: "HELLO"

console.log(numResult); // 输出: 10
console.log(strResult); // 输出: "HELLO"