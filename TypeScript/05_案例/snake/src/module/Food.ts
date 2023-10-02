// 定义食物类Food
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    // HTMLElement不能使用document.getElementsByClassName(), 得换成getElementById()

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        // 在document.getElementById()后面加上一个' ! '表示获取到值不会为空
        this.element = document.getElementById('food')!;
        // 生成一个随机的位置
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px'; // X
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px'; // Y
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {

        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格, 一格的大小就是10, 所以就要求食物的坐标必须是整10
        let left = Math.round(Math.random() * 29) * 10; // X
        let top = Math.round(Math.random() * 29) * 10; // Y

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px'
    }
}

// 测试X、Y的坐标值获取
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;

/**
 * 当浏览器提示Uncaught ReferenceError: exports is not defined,
 * 检查tsconfig.json文件里面的属性, module和target
 * 此时报错是因为将module的属性值写成了'commonjs', 将commonjs改成ES2015就好了
 */