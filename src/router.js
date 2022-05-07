import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/examples",
    name: "examples-details",
    component: () => import("./components/ExamplesList")
  },
  {
    path: "/example/:id",
    name: "example-details",
    component: () => import("./components/Example")
  },
  {
    path: "/stacks",
    name: "stacks",
    component: () => import("./components/StacksList")
  },
  {
    path: "/stack/:id",
    name: "stack-details",
    component: () => import("./components/Stack")
  },
  {
    path: "/addstack",
    name: "add-stack",
    component: () => import("./components/StackAdd")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
