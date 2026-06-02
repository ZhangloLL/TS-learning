const hello: string = "Hello, TypeScript!";
console.log(hello);
// 类型断言
let str = '1';
let ste2: number = <number> <any> str;
console.log(ste2);

// 类型推断
let num = 2;
console.log(num);
// num = "12"; 编译错误

let one = 1;
let world = "world";
console.log(one + world); // 输出 "1world"