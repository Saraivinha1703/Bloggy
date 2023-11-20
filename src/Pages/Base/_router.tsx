import { Route, Routes } from 'react-router-dom';
import { HelloWorld } from './HelloWorld';
import { MainRouter } from './Welcome/_router';

export function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
      <Route path="/Main/*" element={<MainRouter />} />
    </Routes>
  );
}
