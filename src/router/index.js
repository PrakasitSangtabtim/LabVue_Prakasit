import Vue from "vue";
import Router from "vue-router";

import home from "../components/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/Contact",
      component: () => import("../components/Contact.vue")
    },
    {
      path: "/Project",
      component: () => import("../components/Project.vue")
    },
    {
      path: "/Profile",
      component: () => import("../components/Profile.vue")
    }
  ]
});
