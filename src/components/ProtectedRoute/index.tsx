import { Navigate } from 'react-router-dom';
import { useAuthContextValues } from '../../Pages/Authentication/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuthContextValues();
  if (!user || !user.isAuth) {
    // user is not authenticated
    return <Navigate to="/Auth" />;
  }

  return children;
};
