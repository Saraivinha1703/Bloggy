import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContextValues } from '../../Pages/Authentication/AuthContext';
import { Link } from 'react-router-dom';

type ProtectedLayoutProps = {
  routes: { id: string; path: string; title: string }[];
};

export const ProtectedLayout = ({ routes }: ProtectedLayoutProps) => {
  const { user } = useAuthContextValues();
  if (!user || !user.isAuth) {
    // user is not authenticated
    return <Navigate to="/Auth" />;
  }

  return (
    <div>
      <nav className="flex justify-evenly p-3 bg-zinc-300">
        {routes.map(route => {
          return (
            <Link key={route.id} to={route.path}>
              {route.title}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};
