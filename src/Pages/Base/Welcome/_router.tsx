import { Route, Routes } from 'react-router-dom';
import { Welcome } from '.';
import { Nested } from './Nested';
import { AnotherNested } from './AnotherNested';
import { ProtectedLayout } from '../../../components/ProtectedLayout';

const mainRoutes = [
  {
    id: '1',
    path: '',
    title: 'Welcome',
  },
  {
    id: '2',
    path: 'Nested',
    title: 'Nested',
  },
  {
    id: '3',
    path: 'AnotherNested',
    title: 'Another Nested',
  },
];

export function WelcomeRouter() {
  return (
    <Routes>
      <Route path="/*" element={<ProtectedLayout routes={mainRoutes} />}>
        <Route index element={<Welcome />} />
        <Route path="Nested" element={<Nested />} />
        <Route path="AnotherNested" element={<AnotherNested />} />
      </Route>
    </Routes>
  );
}
