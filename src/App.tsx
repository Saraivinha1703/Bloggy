import { Route, Routes } from 'react-router-dom';
import { HelloWorld } from './Pages/Base/HelloWorld';
import { AuthProvider } from './Pages/Authentication/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthRouter } from './Pages/Authentication/_router';
import { BaseRouter } from './Pages/Base/_router';

function App() {
  return (
    <>
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
          <Route path="/Auth/*" element={<AuthRouter />} />
          <Route path="/Base/*" element={<BaseRouter />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
