import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import "./registerServiceWorker";

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.post('/get-user')
    .then(res => {
      if (res.data.error) {
        console.error(res.data.error);
        next({
          path: '/login',
          query: {redirect: to.fullPath || '/'},
          error: res.data.error
        })
      } else {
        Vue.prototype.$user = res.data;
        next();
      }
    })
    .catch(err => {
      next({
        path: '/login',
        query: {redirect: to.fullPath},
        error: err
      })
    })
  } else {
    next() // make sure to always call next()!
  }
})

Vue.prototype.$axios = axios;

Vue.use(Argon);
Vue.use(BootstrapVue)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
