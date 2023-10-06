<template>
  <div class="app">
    <BaseSelect @change="selectId = $event" :cityId="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '101',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>