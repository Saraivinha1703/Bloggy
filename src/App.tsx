import { Route, Routes } from 'react-router-dom';
import { Provider } from 'urql';
import { HelloWorld } from './Pages/Base/HelloWorld';
import { AuthProvider } from './Pages/Authentication/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthRouter } from './Pages/Authentication/_router';
import { BaseRouter } from './Pages/Base/_router';
import { client } from './lib/client-urql';

function App() {
  return (
    <>
      <Provider value={client}>
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
      </Provider>
    </>
  );
}

export default App;
