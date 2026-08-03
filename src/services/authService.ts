import { auth } from './firebaseService';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

const mapAuthErrorMessage = (error: unknown): string => {
  if (!(error instanceof Error)) {
    return 'An unknown authentication error occurred.';
  }

  const message = error.message || 'An authentication error occurred.';

  if (message.includes('auth/email-already-in-use')) {
    return 'This email is already in use. Please use a different email or log in.';
  }

  if (message.includes('auth/invalid-email')) {
    return 'The email address is invalid. Please enter a valid email.';
  }

  if (message.includes('auth/weak-password')) {
    return 'The password is too weak. Please choose a stronger password.';
  }

  if (message.includes('auth/user-not-found')) {
    return 'No account found with this email. Please register first.';
  }

  if (message.includes('auth/wrong-password')) {
    return 'The password is incorrect. Please try again.';
  }

  if (message.includes('auth/too-many-requests')) {
    return 'Too many failed login attempts. Please wait and try again later.';
  }

  if (message.includes('auth/network-request-failed')) {
    return 'Network error. Please check your connection and try again.';
  }

  return message;
};

export async function registerUser(email: string, password: string): Promise<User> {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw new Error(mapAuthErrorMessage(error));
  }
}

export async function loginUser(email: string, password: string): Promise<User> {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw new Error(mapAuthErrorMessage(error));
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Failed to sign out: ${error.message}`
        : 'Failed to sign out.'
    );
  }
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
