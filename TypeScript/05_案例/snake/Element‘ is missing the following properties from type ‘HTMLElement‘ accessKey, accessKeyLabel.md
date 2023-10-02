#### `Typescript`在TS文件中使用document.getElementsByClassName报错：

`Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 116 more.`

![image-20231002180103896](E:\图片\typora\image-20231002180103896.png)

#### 分析与解决：

ts在使用document.getElementsByClassName，document.querySelector的时候，获取到的节点类型都是Element类型，而innerText，innerHTML，以及document.write，document.createElement,document.getElementById都是只能在HTMLElement类型上进行使用的。

查阅TS对应源码：lib.dom.d.ts

```tsx
 getElementById(elementId: string): HTMLElement | null;
    /** Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes. */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
```

如果要得到HTMLElement类型可以使用document.getElementById，此时就可以正常使用了。
如我的源码food这个类声明的ele的类型是：HEMLElement类型，所有不能用getElementsByClassName。否则类型不匹配就会报错。

修改：<div class="food">改成 <div id="food">

this.ele = document.getElementsByClassName("food")[0]!;

改成：this.ele = document.getElementById("food")!;

```html
      <div id="food">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        </div>
 
//index.ts
//来一个食物类，代表div 方块
class Food {
    ele: HTMLElement;
    constructor() {
        this.ele = document.getElementById("food")!;
    }
}
```

