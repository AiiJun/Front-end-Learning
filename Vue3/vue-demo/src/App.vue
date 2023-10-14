<script setup>
import { storeToRefs } from 'pinia';
import Son1Com from '@/components/son1-com.vue'
import Son2Com from '@/components/son2-com.vue'
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from '@/store/channel'
const counterStore = useCounterStore()
const channelStore = useChannelStore()
// console.log(counterStore)

// 此时, 直接结构, 不处理, 数据会丢失响应式
const { count, msg } = storeToRefs(counterStore)
const { channelList } = storeToRefs(channelStore)
const { getList } = channelStore
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ msg }} - {{ count }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
/* li {
  list-style: none;
} */
</style>
