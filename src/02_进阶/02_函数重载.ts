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