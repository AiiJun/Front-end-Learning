<script setup>
import { computed, ref, watch } from 'vue'
const state = ref({ count: 100, age: 20 })
const message = '这是一个数字'
const array = ref([1, 2, 3, 4, 5, 6, 7, 8])

const changeCount = (n) => {
  state.value.count += n
}

const newArray = computed(() => {
  return array.value.filter(item => item > 2)
})

setTimeout(() => {
  array.value.push(9, 10, 11)
}, 3000);

watch(state, (newValue, oldValue) => {
  console.log(`旧值为${oldValue}`, `新值为${newValue}`);
}, {
  // deep: true,
  immediate: true
})
</script>

<template>
  <button @click="changeCount(-1)">-</button>
  <div>{{ message }}</div>
  <div>{{ state.count }}</div>
  <button @click="changeCount(1)">+</button>

  <div>
    <div>{{ array }}</div>
    <div>{{ newArray }}</div>
  </div>
</template>

<style scoped></style>
