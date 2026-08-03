import { loginUser, logoutUser, registerUser } from '../../services/authService';
import type { User } from 'firebase/auth';

const normalizeEmail = (email: string): string => email.trim().toLowerCase();

const validateCredentials = (email: string, password: string): void => {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    throw new Error('Email is required.');
  }

  if (!password || password.trim().length === 0) {
    throw new Error('Password is required.');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }
};

export async function register(email: string, password: string): Promise<User> {
  validateCredentials(email, password);
  const normalizedEmail = normalizeEmail(email);
  return registerUser(normalizedEmail, password);
}

export async function login(email: string, password: string): Promise<User> {
  validateCredentials(email, password);
  const normalizedEmail = normalizeEmail(email);
  return loginUser(normalizedEmail, password);
}

export async function logout(): Promise<void> {
  return logoutUser();
}

export type AuthModel = {
  title: string;
};

export const createAuthModel = (): AuthModel => ({
  title: 'Auth',
});
