import { Route, Routes } from 'react-router-dom';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { AuthRoutesNames } from './AuthRoutes';

export function AuthRouter() {
  return (
    <Routes>
      <Route path={AuthRoutesNames.root} element={<SignIn />} />
      <Route path={AuthRoutesNames.signUp} element={<SignUp />} />
    </Routes>
  );
}
