import { createWebHistory, createRouter } from "vue-router";
import SubjectSelection from "/src/components/SubjectSelection.vue";
import ShowContent from "/src/components/ShowContent.vue";
import TeacherLogin from "/src/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "SubjectSelection",
    component: SubjectSelection,
  },
  {
    path: "/content",
    name: "ShowContent",
    component: ShowContent,
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