import type { User } from 'firebase/auth';

export type AuthContextValue = {
  user: User | null;
  authLoading: boolean;
  logout: () => Promise<void>;
};

export type AuthMode = 'login' | 'register';

export type AuthModel = {
  title: string;
};
