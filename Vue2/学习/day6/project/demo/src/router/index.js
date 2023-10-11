import ArticleVue from "@/views/Article.vue";
import ArticleDetailVue from "@/views/ArticleDetail.vue";
import CollectVue from "@/views/Collect.vue";
import LayoutVue from "@/views/Layout.vue";
import LikeVue from "@/views/Like.vue";
import UserVue from "@/views/User.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: LayoutVue,
      redirect: "/article",
      children: [
        { path: "/article", component: ArticleVue },
        { path: "/collect", component: CollectVue },
        { path: "/like", component: LikeVue },
        { path: "/user", component: UserVue },
      ],
    },
    { path: "/detail/:id", component: ArticleDetailVue },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
