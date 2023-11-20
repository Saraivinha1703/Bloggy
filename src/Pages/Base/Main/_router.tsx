import { Route, Routes } from 'react-router-dom';
import { Posts } from '.';
import { Profile } from './Profile';
import { ProtectedLayout } from '../../../components/ProtectedLayout';
import { MainRoutesNames } from './MainRoutes';

const mainRoutes = [
  {
    id: '1',
    path: MainRoutesNames.root,
    title: 'Posts',
  },
  {
    id: '2',
    path: MainRoutesNames.profile,
    title: 'Profile',
  },
];

export function MainRouter() {
  return (
    <Routes>
      <Route
        path={MainRoutesNames.parent}
        element={<ProtectedLayout routes={mainRoutes} />}
      >
        <Route index element={<Posts />} />
        <Route path={MainRoutesNames.profile} element={<Profile />} />
      </Route>
    </Routes>
  );
}
