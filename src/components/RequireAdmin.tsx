import { Navigate } from "react-router-dom";

export default function RequireAdmin({ children }: { children: JSX.Element }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
