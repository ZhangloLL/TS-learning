"use strict";
// 私有化构造函数，通过将构造函数设为private，防止外部使用new创建实例
class Singleton {
    // 私有构造函数，防止外部实例化
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    // 设置数据
    setData(data) {
        Singleton._data = data;
    }
    // 获取数据
    getData() {
        return Singleton._data;
    }
}
Singleton._data = "";
// 测试单例模式
const instance1 = Singleton.getInstance();
instance1.setData("hello");
const instance2 = Singleton.getInstance();
instance2.setData("world");
console.log("是同一个实例: " + (instance1 === instance2));
console.log("数据：" + instance2.getData());
