import { hi } from './m1';


function sum(a: number, b: number): number {
    return a + b;
}

const obj = { name: "孙悟空", age: 1 }
console.log(obj);

obj.age = 18;
console.log(obj);



console.log(sum(123, 456));
console.log('这是一个测试');
console.log(hi);

let fn = (a: number, b: number) => a + b;
console.log(fn(77, 22));
fn(123, 456);


// console.log(Promise);
