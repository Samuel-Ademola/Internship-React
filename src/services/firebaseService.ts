import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  type DocumentData,
  type CollectionReference,
} from 'firebase/firestore';
import type { Movie } from './omdbMovieService';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
  throw new Error(
    'Missing Firebase configuration. Set VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID, and VITE_FIREBASE_APP_ID in your environment.'
  );
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

const formatMovie = (data: DocumentData): Movie => {
  const movie = data as Movie;

  if (!movie?.imdbID || !movie?.Title || !movie?.Year || !movie?.Type || !movie?.Poster) {
    throw new Error('Invalid favourite movie data received from Firebase.');
  }

  return movie;
};

const getFavouritesCollection = (userId: string) => {
  if (!userId || !userId.trim()) {
    throw new Error('Missing userId for favourite operation.');
  }

  return collection(doc(collection(db, 'users'), userId), 'favourites') as CollectionReference<Movie>;
};

export async function addFavourite(userId: string, movie: Movie): Promise<void> {
  if (!userId || !userId.trim()) {
    throw new Error('Missing userId for adding favourite movie.');
  }

  try {
    const favouritesCollection = getFavouritesCollection(userId);
    const favouriteDoc = doc(favouritesCollection, movie.imdbID);
    await setDoc(favouriteDoc, movie);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Failed to add favourite movie: ${error.message}`
        : 'Failed to add favourite movie.'
    );
  }
}

export async function removeFavourite(userId: string, imdbID: string): Promise<void> {
  if (!userId || !userId.trim()) {
    throw new Error('Missing userId for removing favourite movie.');
  }

  if (!imdbID) {
    throw new Error('Missing imdbID for favourite removal.');
  }

  try {
    const favouritesCollection = getFavouritesCollection(userId);
    const favouriteDoc = doc(favouritesCollection, imdbID);
    await deleteDoc(favouriteDoc);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Failed to remove favourite movie: ${error.message}`
        : 'Failed to remove favourite movie.'
    );
  }
}

export async function getFavourites(userId: string): Promise<Movie[]> {
  if (!userId || !userId.trim()) {
    throw new Error('Missing userId for loading favourite movies.');
  }

  try {
    const favouritesCollection = getFavouritesCollection(userId);
    const snapshot = await getDocs(favouritesCollection);
    return snapshot.docs.map((docSnapshot) => formatMovie(docSnapshot.data()));
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Failed to load favourite movies: ${error.message}`
        : 'Failed to load favourite movies.'
    );
  }
}
