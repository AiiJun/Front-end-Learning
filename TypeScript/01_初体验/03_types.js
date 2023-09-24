//  也可以直接使用字面量进行类型声明
var x;
x = 10;
// 可以使用 | 来链接多个类型 (联合类型)
var y;
y = 'male';
y = 'female';
var z;
z = true;
z = 'hello';
//any 便是的是任意类型,一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时,不建议使用any类型
// let d: any; // 显式
// 声明变量如果不指定类型,则TS解析器会自动判断变量的类型为any (隐式的any)
var d; // 隐式
d = 10;
d = 'hello';
// d = true;
// unknown 表示未知类型的值
var e;
e = 10;
e = 'hello';
e = true;
var s;
// d的类型是any,它可以赋值给任意变量
// s = d;
// unknown 实际上就是一个类型安全的any
// unknown 类型的变量,不能直接赋值给其他变量
// s = e; //不能将类型“unknown”分配给类型“string”。
// 进行类型判断,e 是 string 类型的可以赋值
if (typeof e === 'string') {
    s = e;
}
// 类型断言, 可以用来告诉解析器变量的实际类型
/**
 * 语法:
 * 变量 as 类型
 * <类型>变量
 */
s = e;
s = e;
// function fn(): void
function fn() { }
// function fm(): boolean
function fm() {
    return true;
}
// void 用来表示空,一函数为例,就表示没有返回值的函数
// function fo():void{
// return 123; //不能将类型“number”分配给类型“void”。
// return undefined; //var undefined
// return null; //不能将类型“null”分配给类型“void”。
// }
// never 表示永远不会返回结果
function fo() {
    throw new Error('报错了!');
}
// object 表示一个js对象
var o;
o = {};
o = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名:属性值,属性名:属性值}
// 在属性名后边加上?, 表示属性是可选的
var p;
// p = {}; //类型 "{}" 中缺少属性 "name"，但类型 "{ name: string; }" 中需要该属性。
p = { name: '高能英雄' };
p = { name: '高能英雄', age: 18 }; // 不能将类型“{ name: string; age: number; }”分配给类型“{ name: string; }”。对象字面量只能指定已知属性，并且“age”不在类型“{ name: string; }”中。
// [propName: string]: any 表示任意类型的属性
var v;
// v = { name: '低能超人', a: 1, b: 2, c: 3 }
v = { name: '低能超人', age: 18, sex: '男' };
/**
 * 设置函数结构的类型声明
 *         语法:(形参:类型,形参:类型...) =>返回值
 */
var r;
// r = function (n1: string, n2: string): number {
//     // return n1 + n2;
//     return 10;
// }
/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var j;
j = ['a', 'b', 'c'];
// number[] 表示数组数值
var f;
var g;
g = [1, 2, 3];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
var h;
h = ['hello', 123];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
};
// console.log(i.gender === Gender.Male);
// &表示同时
var a;
var k;
var l;
var m;
k = 2;
