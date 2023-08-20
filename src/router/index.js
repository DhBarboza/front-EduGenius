import { createWebHistory, createRouter } from "vue-router";
import SubjectSelection from "/src/components/SubjectSelection.vue";
import ShowContent from "/src/components/ShowContent.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;