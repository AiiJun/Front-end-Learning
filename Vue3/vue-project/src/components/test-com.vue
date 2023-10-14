<template>
    <div>
        我是用于测试得组件 - {{ count }}
    </div>
  </template>
  
  <script setup>
  const count = 999
const sayHi = () => {
    console.log('打招呼')
}
  defineExpose({
    count,
    sayHi
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>