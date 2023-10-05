<template>
  <div class="APP">
    <div class="box" @click="fn"></div>
  </div>
</template>

<script>
// 导出的是当前组件的配置项
// 里面可以提供 data(特殊) methods watch 生命周期钩子
export default{
  created(){
    console.log('我是created');
  },
  methods:{
    fn(){
      console.log('我被点击啦');
    }
  }
}
</script>

<style lang="less">
/**
  让style支持less
  1.给style加上 lang="less"
  2.安装依赖包 less less-loader
    npm i -D less less-loader
*/
  .APP{
    display: flex;
    width: 400px;
    height: 400px;
    background-color: #ebf;
    justify-content: center;
    align-items: center;
      .box{
        width: 100px;
        height: 100px;
        background-color: #fff;
      }
  }
</style>