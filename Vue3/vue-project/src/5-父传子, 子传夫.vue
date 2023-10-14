<template>
    <h3>
      父组件 - {{ money }}
      <button @click="getMoney">挣钱</button>
    </h3>
    <!-- 1.绑定属性 message -->
    <sonComVue :money="money" @changeMoney="changeFn"></sonComVue>
  </template>
  
  <script setup>
  // 父传子
  // 1.给子组件, 添加属性的方式传值
  // 2.在子组件中, 
  // 子传夫
  // 1.在子组件内部, emit触发事件(编译器宏获取emit)
  // 2.在父组件, 通过 @ 监听
  import sonComVue from '@/components/son-com.vue'
  import { ref } from 'vue'
  const money = ref(0)
  const getMoney = () => {
    money.value += 10
  }
  
  const changeFn = (newMoney) => {
    money.value -= newMoney
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>