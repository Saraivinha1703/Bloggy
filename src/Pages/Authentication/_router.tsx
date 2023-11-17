import { Route, Routes } from 'react-router-dom';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
