/**
 * TS的class，有field，constructor，method
 */
class Car{
    engine: string;
    
    constructor(engine: string){
        this.engine = engine;
    }

    disp(): void {
        console.log("发动机号:",this.engine);
    }
}

let jscar = new Car("jsV8发动机");

console.log("读取发动机：" + jscar.engine);

jscar.disp();

// 访问控制符
class Person_class{
    public name:string;
    protected age: number;
    private address: string;


    constructor(name: string, age: number, address:string){
        this.name = name;
        this.age = age;
        this.address = address
    }

    public introduce(): void{
        console.log("I'm "+ this.name + ",this year " + this.age);
    }

    public showAddress(): void{
        console.log("address is " + this.address);
    }
}
let zhangsan = new Person_class("张三",18,"China");
console.log(zhangsan.name);

zhangsan.introduce();
// zhangsan.address 错误
zhangsan.showAddress();

//多重继承
class Root{
    str: string = "";
}
class Child extends Root{

}

class Leaf extends Child{

}

let leaf = new Leaf();
leaf.str = "hello";
console.log("str value:" + leaf.str);

// 重写,子类可以重写（Override）父类的方法，即在子类中定义与父类同名的方法，实现自己的行为。
class PrinterClass{
    doPrint(): void{
        console.log("parent doprint method ");
    }
}

class StringPrinter extends PrinterClass{
    doPrint(): void {
        super.doPrint();

        console.log("child doPrint method ");
    }
}

let obj = new StringPrinter();
obj.doPrint();

// 静态程序
class StaticMem{
    static num: number;

    static disp(): void{
        console.log("num value is " + StaticMem.num);
    }
}

StaticMem.num = 20;
StaticMem.disp();

// instanceof,用于判断对象是否是某个类的实例
class Person_instanceof{}
let obj_1 = new Person_instanceof();
let isPerson = obj_1 instanceof Person_instanceof;
console.log(isPerson);

// 类实现接口
interface ILoan{
    interest: number; //利率
}
class AgriLoan implements ILoan{
    interest: number;
    rebate: number;

    constructor(interest: number, rebate: number){
        this.interest = interest;
        this.rebate = rebate;
    }
}
let loan = new AgriLoan(10,1);
console.log("利率：" + loan.interest + "%，回扣：" + loan.rebate);

// 抽象类，只能作为基类被子类继承，抽象类可以包含抽象方法，子类必须实现这些方法。
abstract class Animal{
    abstract makeSound(): void;

    move(): void{
        console.log("animal is moving ");
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log("dog is wow wow wow");
    }
}
let dog = new Dog();
dog.move();
dog.makeSound();