<template>
  <div>
    <input :value="value" @input="handleInput" type="text" placeholder="input封装输入框组件, 利用v-model简化代码" />
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods:{
    handleInput(e){
      // console.log(e.target.value);
      this.$emit('input',e.target.value)
    }
  }
};
</script>

<style>
input{
  width: 100%;
}
</style>