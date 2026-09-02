import { createBrowserRouter, Outlet } from "react-router";

import { MainLayout } from "../../entities/MainLayout";
import { LoginPage } from "../../pages/LoginPage/index";
import { PATHS } from "../../shared/constants/paths";

export const routes = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      // {
      //   path: PATHS.route.home,
      //   element: <HomePage />,
      // },
      {
        path: PATHS.route.login,
        element: <LoginPage />,
      },
    ],
  },
]);
