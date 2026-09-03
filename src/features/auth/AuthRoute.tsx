import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { PATHS } from "../../shared/constants/paths";

interface AuthRouteProps {
  children: ReactNode;
  requiresAuth: boolean;
}

export const AuthRoute = ({ children, requiresAuth }: AuthRouteProps) => {
  const isAuthenticated = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) => state.auth.isAuthenticated,
  );

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to={PATHS.route.login} replace />;
  }

  if (!requiresAuth && isAuthenticated) {
    return <Navigate to={PATHS.route.home} replace />;
  }

  return children;
};
