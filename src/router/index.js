import Vue from "vue";
import Router from "vue-router";

import Home from "/src/pages/home/index.vue";
import Blog from "/src/pages/blog/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
  ],
});
