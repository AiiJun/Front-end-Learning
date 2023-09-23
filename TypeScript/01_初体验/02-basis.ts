// 声明一个变量a,同时指定它的类型为number
let a: number;
// a 的类型设置为了number,在以后的使用过程中a的值只能是数字
a = 18;
// a = 'hello'; // 报错原因是因为变量a的类型为number,不能复制字符串   不能将类型“string”分配给类型“number”。
let b: string;
b = 'hello';
// b = 18; // 不能将类型“string”分配给类型“number”。

// 声明玩变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行的,TS可以自动对变量进行类型检测
let c = false;
c = true;

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, '456')); // '123456'

//                                 函数的返回值是一个number
function sum(a: number, b: number): number {
    return a + b;
    // return a + 'hello'; //不能将类型“string”分配给类型“number”。
}

let res = sum(123, 456);
// sum(123,'456'); // 类型“string”的参数不能赋给类型“number”的参数。
// sum(123, 456, 789); // 应有 2 个参数，但获得 3 个。
// sum(123); // 应有 2 个参数，但获得 1 个。