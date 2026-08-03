import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import FavouritesView from './pages/Favourites/FavouritesView';
import HomeView from './pages/Home/HomeView';
import AuthView from './pages/Auth/AuthView';
import ProfileView from './pages/Profile/ProfileView';
import { useHomeViewModel } from './pages/Home/useHomeViewModel';
import { useAuth } from './context/AuthContext';

function App() {
  const location = useLocation();
  const { user, authLoading, logout } = useAuth();
  const {
    query,
    setQuery,
    movies,
    loading,
    error,
    handleSearch,
    loadInitialMovies,
    handleFavouriteClick,
  } = useHomeViewModel();

  useEffect(() => {
    if (location.pathname === '/') {
      setQuery('');
      void loadInitialMovies();
    }
  }, [location.pathname, loadInitialMovies, setQuery]);

  return (
    <div className="app-shell">
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        userEmail={user?.email ?? null}
        userName={user?.displayName ?? user?.email ?? null}
        logout={user ? logout : undefined}
      />

      <main className="app-content">
        <Breadcrumbs />
        {authLoading ? (
          <div className="page-loading">Loading authentication...</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <HomeView
                  movies={movies}
                  loading={loading}
                  error={error}
                  onFavouriteClick={handleFavouriteClick}
                />
              }
            />
            <Route
              path="/auth"
              element={user ? <Navigate to="/" replace /> : <AuthView />}
            />
            <Route
              path="/favourites"
              element={user ? <FavouritesView /> : <Navigate to="/auth" replace />}
            />
            <Route
              path="/profile"
              element={user ? <ProfileView /> : <Navigate to="/auth" replace />}
            />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
