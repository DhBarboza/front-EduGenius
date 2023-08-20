import { createWebHistory, createRouter } from "vue-router";
import RegisterContent from "/src/components/RegisterContent.vue";
import TeacherLogin from "/src/components/Login.vue";
import ShowContent from "/src/components/ShowContent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ShowContent,
  },
  {
    path: "/registerContent",
    name: "RegisterContent",
    component: RegisterContent,
  },
  {
    path: "/login",
    name: "TeacherLogin",
    component: TeacherLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;