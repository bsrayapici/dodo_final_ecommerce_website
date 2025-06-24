import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Eğer anasayfadaysak hiç gösterme
  if (location.pathname === '/') return null;

  // Sayfa adları için mapping
  const routeNames = {
    shop: 'Shop',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    pages: 'Pages',
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4 px-4 md:px-20">
      <Link 
        to="/" 
        className="font-bold text-[#252B42] hover:text-[#2DC071] transition-colors"
      >
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-400 font-bold">{displayName}</span>
            ) : (
              <Link 
                to={routeTo} 
                className="font-bold text-[#252B42] hover:text-[#2DC071] transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;