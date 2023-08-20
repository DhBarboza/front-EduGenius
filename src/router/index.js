import { createWebHistory, createRouter } from "vue-router";
import SubjectSelection from "/src/components/SubjectSelection.vue";
import RegisterContent from "/src/components/RegisterContent.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;