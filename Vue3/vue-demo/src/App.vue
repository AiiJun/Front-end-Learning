<script setup>
import Son1Com from '@/components/son1-com.vue'
import Son2Com from '@/components/son2-com.vue'
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from '@/store/channel'
const counterStore = useCounterStore()
const channelStore = useChannelStore()
// console.log(counterStore)
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ counterStore.msg }} - {{ counterStore.count }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
/* li {
  list-style: none;
} */
</style>
