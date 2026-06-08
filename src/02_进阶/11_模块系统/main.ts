// 命名导入：从模块导入指定的内容
import { name, age, greet } from "./user";

// 默认导入：导入模块的默认导出
import { User } from "./user";

// 全部导入
import * as UserModule from "./user"

// 重命名导入：避免命名冲突
import { greet as sayHello } from "./user";

// 使用导入的内容
console.log(greet("world"));
console.log(sayHello("TypeSript"));