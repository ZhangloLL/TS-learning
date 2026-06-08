"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 命名导入：从模块导入指定的内容
const user_1 = require("./user");
// 重命名导入：避免命名冲突
const user_2 = require("./user");
// 使用导入的内容
console.log((0, user_1.greet)("world"));
console.log((0, user_2.greet)("TypeSript"));
