<template>
    <div>
      <div>原始数组: {{ list }}</div>
      <div>计算后的数组: {{ computedList }}</div>
      <button @click="addFn">修改</button>
    </div>
  </template>
  
  <script setup>
    // const 计算属性 = computed(() => {
    //      return 计算返回的结果
    // })
    import { ref, computed } from 'vue'
    const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
    console.log(list)
    console.log(list.value)
  
    // 基于list派生一个计算属性, 从list中过滤出 > 2
    const computedList = computed(() => {
      return list.value.filter(item => item > 2)
    })
  
    // 定义一个修改数组的方法
    const addFn = () => {
      list.value.push(666)
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>