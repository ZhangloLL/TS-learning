interface Observer{
    update(message: string): void;
}

interface Subject{
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class MessageCenter implements Subject{
    private observers: Observer[] = [];
    private message: string = "";

    attach(observer: Observer): void{
        this.observers.push(observer)
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if( index > -1){
            this.observers.splice(index, 1);
        }
    }
    
    notify(): void {
        for( const observer of this.observers){
            observer.update(this.message);
        }
    }

    publish(message: string): void{
        this.message = message;
        console.log("发布信息：" + message);
        this.notify();
    }
}

// 观察者
class UserObserver implements Observer{
    constructor(public name: string){}

    update(message: string): void {
        console.log(`[${this.name}] 收到消息: ${message}`);
    }
}

// 使用观察者模式
const center = new MessageCenter();

const user1 = new UserObserver("用户A");
const user2 = new UserObserver("用户B");

center.attach(user1);
center.attach(user2);

center.publish("新功能上线了！");