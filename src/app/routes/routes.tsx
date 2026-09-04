import { createHashRouter, Outlet } from "react-router";

import { MainLayout } from "../../widgets/MainLayout";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { PATHS } from "../../shared/constants/paths";
import { AuthRoute } from "../../features/auth";

export const routes = createHashRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: PATHS.route.home,
        element: (
          <AuthRoute requiresAuth>
            <HomePage />
          </AuthRoute>
        ),
      },
      {
        path: PATHS.route.login,
        element: (
          <AuthRoute requiresAuth={false}>
            <LoginPage />
          </AuthRoute>
        ),
      },
    ],
  },
]);
