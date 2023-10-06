<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 头部区域 -->
    <iKunHeader @AddItem="Add"></iKunHeader>
    <!-- 主体区域 -->
    <iKunMain :list="list" @delById="delItemById"></iKunMain>
    <!-- 底部区域 -->
    <iKunFooter :list="list" @clear="clear"></iKunFooter>
  </section>
</template>

<script>
import iKunHeader from "./components/iKunHeader.vue";
import iKunMain from "./components/iKunMain.vue";
import iKunFooter from "./components/iKunFooter.vue";
export default {
  components: {
    iKunHeader,
    iKunMain,
    iKunFooter
  },
  data() {
    const defaultList = [
      {
        id: 1,
        name: "唱"
      },
      {
        id: 2,
        name: "跳"
      },
      {
        id: 3,
        name: "RAP"
      },
      {
        id: 4,
        name: "篮球"
      }
    ];
    return {
      list: JSON.parse(localStorage.getItem("list")) || defaultList
    };
  },
  methods: {
    delItemById(e) {
      // console.log(e);
      this.list = e;
    },
    Add(name) {
      // console.log(name);
      this.list.push({
        id: +new Date(),
        name
      });
    },
    clear(e) {
      this.list = e;
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem("list", JSON.stringify(this.list));
      }
    }
  }
};
</script>

<style>
</style>
