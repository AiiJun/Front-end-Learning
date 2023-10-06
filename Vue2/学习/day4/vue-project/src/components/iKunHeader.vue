<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>iKun记事本-组件版</h1>
    <input placeholder="请输入任务" class="new-todo" v-model="name" @keyup.enter="handleAdd"/>
    <button class="add" @click="handleAdd">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods:{
    handleAdd(){
        // if(!this.name){
        //     alert('请输入任务')
        //     return
        // }
        if(this.name.trim() === ''){
            return
        }
        this.$emit('AddItem',this.name)
        this.name = ''
    }
  }
};
</script>

<style>
</style>