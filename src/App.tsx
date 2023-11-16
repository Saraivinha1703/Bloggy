import { Route, Routes } from 'react-router-dom';
import { HelloWorld } from './Pages/Base/HelloWorld';
import { SignIn } from './Pages/Authentication/SignIn';
import { AuthProvider } from './Pages/Authentication/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Welcome } from './Pages/Base/Welcome';
import { Nested } from './Pages/Base/Welcome/Nested';
import { AnotherNested } from './Pages/Base/Welcome/AnotherNested';
import { ProtectedLayout } from './components/ProtectedLayout';

const mainRoutes = [
  {
    id: '1',
    path: '/dashboard/welcome',
    title: 'Welcome',
  },
  {
    id: '2',
    path: '/dashboard/nested',
    title: 'Nested',
  },
  {
    id: '3',
    path: '/dashboard/anotherNested',
    title: 'Another Nested',
  },
];

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HelloWorld />
            </ProtectedRoute>
          }
        />

        <Route path="/Auth" element={<SignIn />} />
        <Route
          path="/Dashboard"
          element={<ProtectedLayout routes={mainRoutes} />}
        >
          <Route path="Welcome" element={<Welcome />} />
          <Route path="Nested" element={<Nested />} />
          <Route path="AnotherNested" element={<AnotherNested />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
