"use strict";
class MessageCenter {
    constructor() {
        this.observers = [];
        this.message = "";
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }
    publish(message) {
        this.message = message;
        console.log("发布信息：" + message);
        this.notify();
    }
}
// 观察者
class UserObserver {
    constructor(name) {
        this.name = name;
    }
    update(message) {
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
