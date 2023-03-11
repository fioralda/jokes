import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";

type Props = {
  children: ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
