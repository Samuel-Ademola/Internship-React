import { useState } from 'react';
import { createAuthModel, login, register, type AuthModel } from './AuthModel';
import type { AuthMode } from '../../types/auth';

export const useAuthViewModel = () => {
  const [model] = useState<AuthModel>(() => createAuthModel());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'login' ? 'register' : 'login'));
    setError(null);
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password);
      }

      setPassword('');
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Authentication failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    model,
    email,
    password,
    mode,
    loading,
    error,
    setEmail,
    setPassword,
    toggleMode,
    handleSubmit,
  };
};
