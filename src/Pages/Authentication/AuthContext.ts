import { createContext, useContext } from 'react';

export type UserProps = {
  id: string;
  name: string;
  isAuth: boolean;
};

type AuthContextValuesProps = {
  user: UserProps | null;
};

export const AuthContextValues = createContext<AuthContextValuesProps>(
  {} as AuthContextValuesProps
);

export function useAuthContextValues() {
  return useContext(AuthContextValues);
}

type AuthContextActionsProps = {
  login(user: UserProps): void;
  logout(): void;
};

export const AuthContextActions = createContext<AuthContextActionsProps>(
  {} as AuthContextActionsProps
);

export function useAuthContextActions() {
  return useContext(AuthContextActions);
}
