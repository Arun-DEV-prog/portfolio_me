import { createBrowserRouter } from "react-router";
import HomeLayout from "../component/HomeLayout/HomeLayout";
import Root from "../component/root/Root";
import ProjectDetail from "../component/ProjectsSection/ProjectDetail";
import ProjectsSection from "../component/ProjectsSection/ProjectsSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetail,
      },
    ],
  },
]);
