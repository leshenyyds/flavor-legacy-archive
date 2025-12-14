import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Book, Hammer, Scroll, User, Map, MessageCircle, Shield, Info } from 'lucide-react';
import { NAV_LINKS } from '../assets/data/commonData';
import '../assets/css/Header.css';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home size={18} />;
      case 'Book': return <Book size={18} />;
      case 'Hammer': return <Hammer size={18} />;
      case 'Scroll': return <Scroll size={18} />;
      case 'User': return <User size={18} />;
      case 'Map': return <Map size={18} />;
      case 'MessageCircle': return <MessageCircle size={18} />;
      case 'Shield': return <Shield size={18} />;
      case 'Info': return <Info size={18} />;
      default: return <Home size={18} />;
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-content">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="logo-link">
               <div className="logo-icon">
                 遗
               </div>
               <div className="logo-text">
                 <span className="logo-title">舌尖非遗</span>
                 <span className="logo-subtitle">传统美食制作技艺与民俗文化馆</span>
               </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {getIcon(link.icon)}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-orange-200 text-primary'
                    : 'text-stone-700 hover:bg-orange-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {getIcon(link.icon)}
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

