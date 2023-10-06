<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model.trim="editValue" ref="inp" @keyup.enter="add" />
      <button @click="add">确认</button>
      <button @click="back">返回</button>
    </div>

    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大标题",
      isShowEdit: false,
      editValue: ""
    };
  },
  methods: {
    handleEdit() {
      // 1.显示输入框 (异步dom更新)
      this.isShowEdit = true;
      // 2.让输入框获取焦点
      // console.log(this.$refs.inp); // this.$refs.inp == undefined
      // this.$refs.inp.focus()
      this.$nextTick(() => {
        console.log(this.$refs.inp); // this.$refs.inp == undefined
        this.$refs.inp.focus();
      });

      // setTimeout(() => {
      //   console.log(this.$refs.inp); // this.$refs.inp == undefined
      //   this.$refs.inp.focus();
      // }, 1000);
    },
    add() {
      if (this.editValue.trim() === "") {
        return;
      }
      this.title = this.editValue;
      this.isShowEdit = false;
      this.editValue = "";
    },
    back() {
      this.isShowEdit = false;
    }
  }
};
</script>

<style>
</style>