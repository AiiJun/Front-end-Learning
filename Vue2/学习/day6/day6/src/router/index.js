import Home from "@/views/Home";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
    { path: "*", component: NotFound},
  ],
  // hash路由(默认) 例如:http://localhost:8080/#/home
  // history路由(默认) 例如:http://localhost:8080/home(以后上线需要服务端支持)
  // 一旦采用了 history 模式, 地址栏就没有 #, 需要后端配合
  mode:"history"
});

export default router;
