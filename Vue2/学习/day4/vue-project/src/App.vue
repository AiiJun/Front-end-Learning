<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="changeCount"></BaseCount>
  </div>
</template>

<script>
import BaseCount from "./components/BaseCount.vue";
export default {
  components: {
    BaseCount
  },
  data() {
    return {
      count: 100
    };
  },
  methods: {
    changeCount(e) {
      this.count = e;
    }
  }
};
</script>

<style>
</style>