import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import News from "./views/News.vue";
import NewsPage from "./views/NewsPage.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Contact from "./views/Contact.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/news",
      name: "news",
      components: {
        header: AppHeader,
        default: News,
        footer: AppFooter
      }
    },
    {
      path: "/news/:id",
      name: "news-page",
      components: {
        header: AppHeader,
        default: NewsPage,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
