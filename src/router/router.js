import VueRouter from "vue-router";
import Vue from "vue";
import Login from '../views/authorization/Login'
import Home from '../views/Home'
import Logout from '../views/authorization/Logout'
import Users from '../views/admin/Users'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      { path: "/login", name: 'login', component: Login },
      {path: "/", name: "home", component: Home},
      {path: '/logout', name: 'logout', component: Logout},
      {path: '/users', name: 'users', component: Users}
    ],
  });

  export default router