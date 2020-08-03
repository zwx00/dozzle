import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import Switch from "buefy/dist/esm/switch";
// import store from "./store";
import config from "./store/config";
import App from "./App.vue";
import { Container, Settings, Index, Show, ContainerNotFound, PageNotFound } from "./pages";

import "./styles.scss";

const routes = [
  {
    path: "/",
    component: Index,
    name: "default",
  },
  {
    path: "/container/:id",
    component: Container,
    name: "container",
    props: true,
  },
  {
    path: "/container/*",
    component: ContainerNotFound,
    name: "container-not-found",
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
  },
  {
    path: "/show",
    component: Show,
    name: "show",
  },
  {
    path: "/*",
    component: PageNotFound,
    name: "page-not-found",
  },
];

const router = createRouter({
  history: createWebHistory(config.base + "/"),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
