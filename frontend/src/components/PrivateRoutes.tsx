import { Navigate, Outlet } from "react-router-dom";
import type { User } from "../../../src/db/schema";

type PrivateRoutesProps = {
  user: User | null;
};

/**
 * Protected routes wrapper that redirects unauthenticated users to login
 * @param {PrivateRoutesProps} props - Component props
 * @param {User | null} props.user - Currently authenticated user or null
 * @returns {JSX.Element} Outlet for child routes if authenticated, otherwise redirects to /login
 */
export default function PrivateRoutes({ user }: PrivateRoutesProps) {
  return user ? <Outlet /> : <Navigate to="/login" />;
}