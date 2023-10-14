<script setup>
import Son1Com from '@/components/son1-com.vue'
import Son2Com from '@/components/son2-com.vue'
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
console.log(counterStore)
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ counterStore.msg }} - {{ counterStore.count }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
  </div>
</template>

<style scoped>

</style>
