<!-- <script>
export default {
  // setup
  // 1.执行时机, 比beforeCreate还要早
  // 2.setup函数中, 获取不到this(this是undefined)
  // 3.数据 和 函数, 需要在 setup 最后 return, 才能在模板中应用
  //     问题: 每次都要 return, 好麻烦?
  // 4.通过 setup 语法糖简化代码
  setup () {
    console.log('setup函数', this)
    // 数据
    const message = '第一天学习Vue3'
    // 函数
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate函数')
  }
}
</script> -->

<script setup>
// setup
  const message = 'Learn Vue3'
  const logMessage = () => {
    console.log(message);
  }

  // 1.reactive: 接受一个对象类型的数据, 返回一个响应式的对象
// import { reactive } from 'vue'
// const state = reactive({
//   count: 100
// })
// const setCount = (step) => {
//   state.count = state.count + step
// }

// 2.ref: 接受简单类型或者对象类型的数据传入并返回一个响应式的对象
// 本质: 是在原有传入数据的基础上, 外层包了一层对象, 包成了复杂类型
// 底层: 包成复杂类型之后, 再借助 reactive 实现的响应式
// 注意点: 
//      1.访问数据, 需要通过.value
//      2.在template中, .value不需要加(帮我们扒了一层)

// 以后声明数据, 同意使用 ref => 统一了编码规范
import { ref } from 'vue'
// const count = ref(0)
const count = ref({
  name:'zs',
  num: 1
})
console.log(count)
const setCount = () => {
  count.value.num++
  count.value.name = 'LS'
}

</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">点击打印</button>
  <div>
    <!-- <div>{{ state.count }}</div>
    <button @click="setCount(1)">+1</button>
    <button @click="setCount(-1)">-1</button> -->
    <div>{{ count }}</div>
    <button @click="setCount">+1</button>
  </div>
</template>