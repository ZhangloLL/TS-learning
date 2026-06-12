"use strict";
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
// 创建生成器实例
let gen = numberGenerator();
console.log(gen.next().value); // { value: 1, done: false }
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//无限生产器
function* infiniteGenerator() {
    let n = 1;
    while (true) {
        yield n++;
    }
}
let infiniteGen = infiniteGenerator();
console.log(infiniteGen.next().value); // 1
console.log(infiniteGen.next().value);
console.log(infiniteGen.next().value);
// 委托生成器
// 第一个生成器
// 第一个生成器
function* gen1() {
    yield 1;
    yield 2;
}
// 第二个生成器
function* gen2() {
    yield 3;
    yield 4;
}
// 组合生成器：使用 yield* 委托
function* combined() {
    yield* gen1(); // 委托给 gen1
    yield* gen2(); // 委托给 gen2
}
// 正确遍历组合生成器
for (const value of combined()) {
    console.log(value);
}
