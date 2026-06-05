"use strict";
// Number，Number是引用数值类型，如果一个参数值不能转换为一个数字则会返回NaN
// 区别与number，其为原始数据类型，存储数值。
let numliteral = 51;
let numObject = new Number(42);
console.log(typeof numliteral);
console.log(typeof numObject);
console.log("最大值：" + Number.MAX_VALUE);
console.log("最小值：" + Number.MIN_VALUE);
console.log("负无穷：" + Number.NEGATIVE_INFINITY);
console.log("最大值：" + Number.POSITIVE_INFINITY);
//  NaN实例
let month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("month is " + month);
}
else {
    console.log("input right month value");
}
// Number对象方法
let num1 = new Number(12);
console.log(num1.toExponential()); //科学计数法
console.log(typeof (num1.toFixed())); //转换为字符串
console.log(num1.toString(2)); //转换为2进制
console.log(num1.toString(8)); //转换为8进制
console.log(num1.valueOf()); //返回原始字数值
/**
 * Number 对象的使用建议
在 TypeScript 中，通常更推荐使用基本的 number 类型，而不是 Number 对象。原因如下：

性能：基本类型更轻量，性能更好。
类型一致性：TypeScript 的类型系统更倾向于基本类型，使用 Number 对象可能导致意外的类型不匹配。
最佳实践：基本类型的 number 更符合 TypeScript 的最佳实践，避免了对象包装带来的不必要复杂性。
如果确实需要使用 Number 对象的特定方法，可以通过 valueOf() 方法将 Number 对象转换为基本的 number 类型。

总之，TypeScript 更推荐使用基本类型 number 而不是 Number 对象，以保持代码的简洁、高效和一致性。
 *
 */ 
