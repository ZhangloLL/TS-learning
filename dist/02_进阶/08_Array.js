"use strict";
/**
 * s数组对象是单独的变量名存储一系列的值
 * Array对象的构造函数接收数据大小的值,初始化的数组列表,元素使用都好分割值
 */
let site1 = 'baidu';
let site2 = 'google';
let site3 = 'micrisoft';
let sites;
sites = ['baidu', 'google', 'micrisoft'];
let arr_sites = new Array(3);
for (let i = 0; i < arr_sites.length; i++) {
    arr_sites[i] = sites[i];
    console.log(arr_sites[i]);
}
// 数组结构
let arr_num = [12, 123];
let [x, y] = arr_num;
console.log(x, y);
// 循环遍历
let item;
for (item in arr_sites) { //获取得是索引
    console.log(arr_sites[item]);
}
