import { Route, Routes } from 'react-router-dom';
import { HelloWorld } from './HelloWorld';
import { MainRouter } from './Main/_router';
import { BaseRoutesNames } from './BaseRoutes';

export function BaseRouter() {
  return (
    <Routes>
      <Route path={BaseRoutesNames.root} element={<HelloWorld />} />
      <Route path={BaseRoutesNames.main} element={<MainRouter />} />
    </Routes>
  );
}
