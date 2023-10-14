import { defineStore } from "pinia"
import { ref } from "vue"
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
    // 声明数据
    const channelList = ref([])
    // 声明操作数据的方法
    const getList = async () => {
        const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
        // console.log(data.channels)
        channelList.value = data.channels
    }
    // 声明getters相关

    return {
        channelList,
        getList
    }
}, {
    // persist: true // 开启当前模块的持久化
    persist: {
        key: 'iKunChannel' // 修改本地存储的唯一标识
    }
})