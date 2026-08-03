import { useAuth } from '../../context/AuthContext';

function getInitials(name?: string | null): string {
  if (!name) {
    return 'U';
  }

  const source = name.includes('@') ? name.split('@')[0] : name;
  const tokens = source.trim().split(/[\s._-]+/).filter(Boolean);

  if (tokens.length >= 2) {
    return `${tokens[0][0]}${tokens[1][0]}`.toUpperCase();
  }

  return source.slice(0, 2).toUpperCase();
}

function ProfileView() {
  const { user } = useAuth();
  const displayName = user?.displayName ?? user?.email ?? 'User';
  const initials = getInitials(displayName);

  return (
    <section className="page-shell profile-page">
      <div className="page-header profile-header">
        <div>
          <p className="page-eyebrow">Account</p>
          <h1 className="page-title">Your profile</h1>
          <p className="page-copy">Manage your account details and keep track of your saved movies.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-card__header">
          <div className="profile-avatar">{initials}</div>
          <div>
            <p className="profile-welcome">Welcome back,</p>
            <h1>{displayName}</h1>
          </div>
        </div>

        <div className="profile-card__details">
          <p>
            <strong>Email:</strong> {user?.email ?? 'Not available'}
          </p>
          <p>
            <strong>User ID:</strong> {user?.uid ?? 'Not available'}
          </p>
        </div>

        <p className="profile-card__note">
          This profile page shows your authenticated user details and gives you a place to manage account-specific favourites.
        </p>
      </div>
    </section>
  );
}

export default ProfileView;
