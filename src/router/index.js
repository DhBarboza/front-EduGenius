import { createWebHistory, createRouter } from "vue-router";
import SubjectSelection from "/src/components/SubjectSelection.vue";
import RegisterContent from "/src/components/RegisterContent.vue";
import TeacherLogin from "/src/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "SubjectSelection",
    component: SubjectSelection,
  },
  {
    path: "/registerContent",
    name: "RegisterContent",
    component: RegisterContent,
  },
  {
    path: "/login",
    name: "ShowContent",
    component: TeacherLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;