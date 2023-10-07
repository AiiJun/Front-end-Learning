<template>
  <div class="app">
    <!-- <div class="base-chart-box">
      这是一个捣乱的盒子
    </div>-->
    <h1 v-color="color1">自定义指令1</h1>
    <h1 v-color="color2">自定义指令2</h1>
    <input type="text" name id ref="inp" v-focus />
    <div class="box" v-loading="isLoading">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <!-- <div class="right">
            <img :src="item.img" alt="">
          </div>-->
        </li>
      </ul>
    </div>
    <BaseChart></BaseChart>
    <div class="box2" v-loading="isLoading2"></div>
  </div>
</template>
<script>
// 安装axios =>  yarn add axios
import axios from "axios";
import BaseChart from "./components/BaseChart.vue";
export default {
  components: {
    BaseChart
  },
  // mounted() {
  //   this.$refs.inp.focus();
  // }
  async created() {
    // 1.发送请求获取数据
    const res = await axios.get("http://hmajax.itheima.net/api/news");
    // console.log(res);
    setTimeout(() => {
      // 2.更新到list中, 用于页面渲染 v-for
      this.list = res.data.data;
      this.isLoading = false;
    }, 2000);
  },
  data() {
    return {
      color1: "red",
      color2: "green",
      list: [],
      isLoading: true,
      isLoading2:true
    };
  },
  // 2. 局部注册指令
  directives: {
    // 指令名: 指令的配置项
    focus: {
      inserted(el) {
        el.focus();
      }
    },
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑
      inserted(el, binding) {
        // console.log(el,binding.value);
        // binding.value 就是指令的值
        // el.style.color = "red";
        el.style.color = binding.value;
      },
      // 2.update指令的值修改的时候触发, 提供值变化后, dom更新的逻辑
      update(el, binding) {
        console.log("指令的值修改了");
        el.style.color = binding.value;
      }
    },
    loading: {
      inserted(el, binding) {
        console.log(binding);
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
      update(el, binding) {
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      }
    }
  }
};
</script>

<style>
li {
  list-style: none;
}

/* 伪类 - 蒙层效果 */
.loading:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url("./loading.gif") no-repeat center;
}

.base-chart-box {
  width: 200px;
  height: 100px;
}
.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}

.box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
}
</style>