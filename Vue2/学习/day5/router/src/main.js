import Vue from "vue";
import App from "./App.vue";
import router from './router/index'
// import Find from "./views/Find.vue";
// import My from "./views/My.vue";
// import Friend from "./views/Friend.vue";

// // 路由的使用步骤 5 + 2
// // 5个基础步骤
// // 1.下载 v3.6.5
// // 2.引入
// // 3.安装注册 Vue.use
// // 4.创建路由对象
// // 5.注入到new Vue中, 建立关联

// // 2个核心步骤
// // 1.建组件, 配规则
// // 2.准备导航链接, 配置路由出口(匹配的组件展示的位置)
// import VueRouter from "vue-router";
// Vue.use(VueRouter); // VueRouter插件初始化

// const router = new VueRouter({
//   // routes路由规则们
//   // route 一条路由规则{ path: 路径, component: 组件 }
//   routes: [
//     { path: "/find", component: Find },
//     { path: "/my", component: My },
//     { path: "/friend", component: Friend },
//   ],
// });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router, // 可以简写
}).$mount("#app");
