import { useCallback, useMemo, useState } from 'react';
import {
  AuthContextActions,
  AuthContextValues,
  UserProps,
} from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>({
    id: '1',
    name: 'aaa',
    isAuth: true,
  });

  const login = useCallback(async (user: UserProps) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const contextValues = useMemo<UserProps | null>(() => user, [user]);

  return (
    <AuthContextValues.Provider value={{ user: contextValues }}>
      <AuthContextActions.Provider value={{ login, logout }}>
        {children}
      </AuthContextActions.Provider>
    </AuthContextValues.Provider>
  );
}
