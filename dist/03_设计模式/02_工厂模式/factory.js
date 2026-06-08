"use strict";
// 具体产品
class ElectronicProduct {
    constructor(name, price, warranty) {
        this.name = name;
        this.price = price;
        this.warranty = warranty;
    }
    getDescription() {
        return `${this.name} - ￥${this.price} (保修${this.warranty} 年)`;
    }
}
// 具体产品
class ClothingProduct {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
    getDescription() {
        return `${this.name} - ￥${this.price}(尺码：${this.size})`;
    }
}
// 工厂类
class ProductFactory {
    static create(type, ...args) {
        return new type(...args);
    }
}
const laptop = ProductFactory.create(ElectronicProduct, '笔记本电脑', 5999, 2);
const shirt = ProductFactory.create(ElectronicProduct, "T恤", 100, "L");
console.log(laptop.getDescription());
console.log(shirt.getDescription());
