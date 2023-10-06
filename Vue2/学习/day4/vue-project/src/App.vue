<template>
  <div class="app">
    <BaseInput v-model="inp"></BaseInput>
  </div>
</template>

<script>
import BaseInput from './components/BaseInput.vue'
export default {
  data() {
    return {
      inp: '',
    }
  },
  components: {
    BaseInput,
  },
}
</script>

<style>
</style>