<template>
  <div class="my-tag">
    <input
      v-focus
      class="input"
      type="text"
      placeholder="输入标签"
      v-if="isEdit"
      @blur="isEdit = false"
      @keyup.enter="Edit"
      :value="value"
    />
    <div class="text" @dblclick="handleClick" v-else :value="value">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: "MyTag",
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
      this.isEdit = true;
    },
    Edit(e) {
      if (e.target.value.trim() === "") {
        return alert("标签不能为空");
      }
      this.$emit("input", e.target.value);
      this.isEdit = false;
    }
  }
};
</script>

<style lang="less" scoped>
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