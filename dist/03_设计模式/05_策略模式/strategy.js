"use strict";
class WechatPayStrategy {
    pay(amount) {
        console.log(`使用微信支付:${amount}`);
    }
}
class AlipayStrategy {
    pay(amount) {
        console.log(`使用支付宝支付:${amount}`);
    }
}
class CardPayStrategy {
    pay(amount) {
        console.log(`使用银行卡支付：${amount}`);
    }
}
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    pay(amount) {
        this.strategy.pay(amount);
    }
}
const context = new PaymentContext(new WechatPayStrategy());
context.pay(100);
context.setStrategy(new AlipayStrategy());
context.pay(200);
context.setStrategy(new CardPayStrategy());
context.pay(300);
