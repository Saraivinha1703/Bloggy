import { Route, Routes } from 'react-router-dom';
import { HelloWorld } from './HelloWorld';
import { WelcomeRouter } from './Welcome/_router';

export function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
      <Route path="/Welcome/*" element={<WelcomeRouter />} />
    </Routes>
  );
}
