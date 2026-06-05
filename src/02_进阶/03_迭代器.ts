// 默认
let arr = [1,2,3,4,5];
for (let _i = 0; _i < arr.length; _i++) {
    let item = arr[_i];
    console.log(item);
}
// 字符串
let hello1 = 'hello';
for (let _i = 0; _i < hello1.length; _i++) {
    let item = hello1[_i];
    console.log(item);
}
//自定义可迭代对象
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator](){
        return {
            current: this.from,
            last: this.to,
            next: function(){
                if(this.current <= this.last){
                    return {done: false, value: this.current++};
                }
            }
        }
    }
}