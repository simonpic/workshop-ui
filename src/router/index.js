import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Tickets from "../views/Tickets.vue";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true, layout: "authenticated" },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
    meta: { requiresAuth: true, layout: "authenticated" },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: { requiresAuth: true, layout: "authenticated" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false, layout: "unauthenticated" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
