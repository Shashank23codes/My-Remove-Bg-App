import React from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <header>
      <nav className="container">
        <div className="logo" onClick={() => onNavigate('home')}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a7 7 0 1 0-12 5" />
            <path d="M12 9v10" />
            <path d="M9 16l3 3 3-3" />
          </svg>
          SkyFlow
        </div>
        <div className="nav-links">
          <button className={`nav-link ${activePage === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>Home</button>
          <button className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`} onClick={() => onNavigate('gallery')}>Library</button>
          <button className={`nav-link ${activePage === 'figma' ? 'active' : ''}`} onClick={() => onNavigate('figma')}>Figma</button>
        </div>
        <button className="ios-btn btn-primary" onClick={() => onNavigate('studio')}>Launch Studio</button>
      </nav>
    </header>
  );
};

export default Navbar;
