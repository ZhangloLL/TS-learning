interface PaymentStrategy{
    pay(amount: number): void;
}

class WechatPayStrategy implements PaymentStrategy{
    pay(amount: number): void{
        console.log(`使用微信支付:${amount}`);
    }
}

class AlipayStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`使用支付宝支付:${amount}`);
    }
}

class CardPayStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`使用银行卡支付：${amount}`);
    }
}

class PaymentContext{
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy): void{
        this.strategy = strategy
    }

    pay(amount: number):void{
        this.strategy.pay(amount);
    }
}

const context = new PaymentContext(new WechatPayStrategy());
context.pay(100);

context.setStrategy(new AlipayStrategy());
context.pay(200);

context.setStrategy(new CardPayStrategy());
context.pay(300);