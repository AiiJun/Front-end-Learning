<template>
  <div class="my-tag">
    <input
      v-focus
      v-if="isEdit"
      class="input"
      type="text"
      placeholder="输入标签"
      @keyup.enter="handleEdit"
      @blur="isEdit = false"
      :value="value"
    />
    <div v-else class="text" @dblclick="handleClick">{{value}}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    handleClick() {
      // 双击后, 切换到显示状态
      this.isEdit = true;
      // // 等dom更新完了之后再获取到焦点
      // this.$nextTick(() => {
      //   // 立即获取到焦点
      //   this.$refs.inp.focus();
      // });
    },
    handleEdit(e){
      // e.target是触发事件的标签信息
      // console.log(e.target.value);
      // console.log('回车');
      // 子传父, 将回车时, [输入框的内容] 提交给父组件更新
      // 由于父组件是v-model, 触发事件, 需要触发 input事件

      // 非空处理
      if(e.target.value.trim() === ''){
        return
      }
      this.$emit('input',e.target.value)
    // 提交完成, 关闭输入状态
      this.isEdit = false
    }
  }
};
</script>

<style lang="less">
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>