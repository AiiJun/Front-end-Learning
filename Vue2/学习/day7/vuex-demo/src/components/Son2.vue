<template>
  <div class="box">
    <h2>Son2 子组件</h2>从vuex中获取的值:
    <label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeCountAction(999)">一秒后改成999</button>
    <button @click="$store.commit('subCount', 100)">值 - 100</button>
    <div>{{ filterList }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <div>{{ user.userInfo.name }}</div>
    <button @click="setUser({name: 'danang', age: 20})">更新个人信息</button>
    <button @click="setUserAction({name: 'danang', age: 20})">一秒后更新个人信息</button>

    <div>{{ setting }}</div>
    <button @click="setTheme('orange')">更新setting</button>
    <div>user模块的数据: {{ userInfo }}</div>
    <div>setting模块的数据: {{ theme }} - {{ desc }}</div>
    <hr>
    <!-- 访问模块中的getters -->
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // mapMutations和mapActions 都是映射方法
    // 全局级别的映射
    ...mapMutations(['subCount']),
    ...mapActions(['changeCountAction']),

    // 分模块的映射
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser']),
    ...mapActions('user', ['setUserAction'])

    // handleSub (n) {
    //   // this.$store.commit('Count', n)
    //   this.subCount(n)
    // }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
