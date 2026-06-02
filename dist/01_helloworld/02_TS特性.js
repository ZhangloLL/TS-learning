"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
// 静态类型
let username = '张三';
let age = 30;
console.log(`用户名: ${username}, 年龄: ${age}`);
// 类型推断
username = '李四'; // TypeScript 会自动推断为 string 类型
console.log(`新的用户名: ${username}`);
console.log(typeof username); // 输出: string
class Student {
    constructor(p_username, age) {
        this.p_username = p_username;
        this.age = age;
    }
    greet() {
        console.log("hello my name is " + this.p_username);
    }
}
const student = new Student("张三", 20);
student.greet(); // 输出: hello my name is 张三
let nameOrAge = "Alice";
console.log(`姓名或年龄: ${nameOrAge}`);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(`喜欢的颜色: ${Color[favoriteColor]}`); // 输出: 喜欢的颜色: Greent
// 元组，元组的数据类型和长度是固定的
let p_alice = ["Alice", 30];
// p_alice[0] = 123; // 修改元组中的值
console.log(`姓名: ${p_alice[0]}, 年龄: ${p_alice[1]}`);
// 访问控制修饰符,ts提供了三种访问控制修饰符：public、private和protected
class Person2 {
    constructor(p_username, age) {
        this.p_username = p_username;
        this.age = age;
    }
}
// 抽象类
class Animal {
}
class Dog extends Animal {
    makeSount() {
        console.log("汪汪");
    }
}
const dahuang = new Dog();
dahuang.makeSount(); // 输出: 汪汪
// 泛型, 支持在类、接口和函数中使用参数化类型
function identity(value) {
    return value;
}
let num = identity(42);
console.log(`数字: ${num}`); // 输出: 数字: 42
// 模块和命名空间,使用import和export来导入和导出模块
function add(a, b) {
    return a + b;
}
// 类型守卫
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
printId("abc123"); // 输出: ABC123
// 可选链和空值合并运算符,可选链运算符（?.）允许我们在访问对象属性时，如果该属性不存在或为 null/undefined，则返回 undefined 而不是抛出错误。
let zhangsan = { name: "张三", address: { city: "北京" } };
console.log(zhangsan?.address?.city); // 输出: 北京
let value = null;
console.log(value ?? "默认值"); // 输出: 默认值
