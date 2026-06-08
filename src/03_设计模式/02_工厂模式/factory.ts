// 定义产品接口
interface Product{
    name: string;
    price: number;
    getDescription(): string;
}

// 具体产品
class ElectronicProduct implements Product{
    constructor(
        public name: string,
        public price: number,
        public warranty: number
    ){}

    getDescription(): string {
        return `${this.name} - ￥${this.price} (保修${this.warranty} 年)`
    }
}

// 具体产品
class ClothingProduct implements Product{
    constructor(
        public name: string,
        public price: number,
        public size: string
    ){}

    getDescription(): string {
        return `${this.name} - ￥${this.price}(尺码：${this.size})`;
    }
}

// 工厂类
class ProductFactory{
    static create<T extends Product>(
        type: new(...args: any[]) => T,
        ...args: any[]
    ): T{
        return new type(...args)
    }
}

const laptop = ProductFactory.create(ElectronicProduct,'笔记本电脑',5999, 2);
const shirt = ProductFactory.create(ElectronicProduct, "T恤",100,"L");

console.log(laptop.getDescription());
console.log(shirt.getDescription());