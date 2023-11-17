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
    <div className="h-screen bg-zinc-200">
      <nav className="flex justify-evenly p-5 bg-gradient-to-t from-purple-600 to-purple-400 shadow-md shadow-black/20 transition-all duration-300 hover:bg-gradient-to-tr hover:shadow-lg">
        {routes.map(route => {
          return (
            <Link
              className="text-2xl font-light text-violet-100 hover:text-[1.65rem] transition-all duration-200"
              key={route.id}
              to={route.path}
            >
              {route.title}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};
