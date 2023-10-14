<template>
    <div class="son"> 
        我是子组件 - {{ money }}
        <button @click="buy">花钱</button>
    </div>
</template>

<script setup>
// 主义: 由于写了 setup, 所以无法直接配置 props 选项
// 子组件
// 2. 通过 defineProps "编译器宏" 接受子组件传递的数据
// const props = defineProps({
//     money: Array
// }) 
const emit = defineEmits(['changeMoney'])
defineProps({
    money: Number
}) 
const buy = () => {
    // 需要emit去触发事件
    emit('changeMoney', 5)
}
</script>

<style scoped>
.son{
    border:1px solid #000;
    padding: 30px;
}
</style>