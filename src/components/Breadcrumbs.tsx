import { Link, useLocation } from 'react-router-dom';

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/auth': 'Login',
  '/favourites': 'Favourites',
  '/profile': 'Profile',
};

function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join('/')}`;
    return {
      path,
      label: routeLabels[path] ?? part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    };
  });

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link className="breadcrumbs__link" to="/">
        Home
      </Link>
      {crumbs.map((crumb, index) => (
        <span key={crumb.path} className="breadcrumbs__item">
          <span className="breadcrumbs__separator">/</span>
          {index === crumbs.length - 1 ? (
            <span className="breadcrumbs__current">{crumb.label}</span>
          ) : (
            <Link className="breadcrumbs__link" to={crumb.path}>
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
