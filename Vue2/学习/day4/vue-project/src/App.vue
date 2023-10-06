<template>
  <div class="app">
    <h4>父组件 -- <button @click="handleGet">获取组件实例</button></h4>
    <BaseForm ref="baseForm"></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
    handleGet(){
      // console.log(this.$refs.baseForm.getFormData());
      // this.$refs.baseForm.resetFormData()
    }
  }
}
</script>

<style>
</style>