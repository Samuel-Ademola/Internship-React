import { useAuthViewModel } from './useAuthViewModel';

export function AuthView() {
  const {
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
  } = useAuthViewModel();

  const submitLabel = mode === 'login' ? 'Login' : 'Create Account';
  const toggleLabel = mode === 'login' ? 'Need an account?' : 'Already have an account?';

  return (
    <section className="auth-page">
      <div className="auth-card auth-card--wide">
        <div className="auth-card__heading">
          <p className="page-eyebrow">Welcome</p>
          <h1 className="auth-title">{submitLabel}</h1>
          <p className="auth-subtitle">Sign in to manage your favourites and search movies.</p>
        </div>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            void handleSubmit();
          }}
        >
          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-email">
              Email
            </label>
            <input
              className="auth-input"
              id="auth-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-password">
              Password
            </label>
            <input
              className="auth-input"
              id="auth-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
            />
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : submitLabel}
          </button>
        </form>

        <button className="auth-toggle" type="button" onClick={toggleMode} disabled={loading}>
          {toggleLabel}
        </button>
      </div>
    </section>
  );
}

export default AuthView;
