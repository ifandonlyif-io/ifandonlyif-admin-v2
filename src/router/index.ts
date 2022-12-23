import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/ReportProjectListView.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../views/ReportProjectListView.vue"),
  },
  {
    path: "/verified",
    name: "Verified-Reports",
    component: () => import("../views/VerifiedProjectViewList.vue"),
  },
  {
    path: "/report/:id",
    name: "ReportProject",
    component: () => import("../views/ReportProjectView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
