<template>
  <div class="App">
      <!-- 头部组件 -->
      <iKunHeader></iKunHeader>

      <!-- 主体组件 -->
      <iKunMain></iKunMain>
      
      <!-- 底部组件 -->
      <iKunFooter></iKunFooter>
  </div>
</template>

<script>
import iKunHeader from './components/iKunHeader.vue'
import iKunMain from './components/iKunMain.vue'
import iKunFooter from './components/iKunFooter.vue'
export default {
  components:{
    // '组件名': 组件对象
    iKunHeader: iKunHeader,
    iKunMain,
    iKunFooter,
  }
}
</script>

<style>
.App{
  width: 600px;
  height: 700px;
  background-color: #ebd;
  margin: 0 auto;
  padding: 20px;
}
</style>