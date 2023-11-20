import { Route, Routes } from 'react-router-dom';
import { Posts } from '.';
import { Profile } from './Profile';
import { ProtectedLayout } from '../../../components/ProtectedLayout';

const mainRoutes = [
  {
    id: '1',
    path: '',
    title: 'Posts',
  },
  {
    id: '2',
    path: 'Profile',
    title: 'Profile',
  },
];

export function MainRouter() {
  return (
    <Routes>
      <Route path="/*" element={<ProtectedLayout routes={mainRoutes} />}>
        <Route index element={<Posts />} />
        <Route path="Profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
