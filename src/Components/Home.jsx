import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import globe from '/assets/globe.webp';
import About from './About';

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">Nexgen<span>Nextopia</span></div>
        
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul onClick={() => setMenuOpen(false)}> {/* Auto-close on click */}
            <li><Link to="#" onClick={() => { setShowAbout(false); setShowProfile(false); }}>Home</Link></li>
            <li><Link to="#" onClick={() => { setShowAbout(true); setShowProfile(false); }}>About</Link></li>
            <li><Link to="#" onClick={() => { setShowProfile(true); setShowAbout(false); }}>Profile</Link></li>
            <div className="auth-buttons">
              <button className="login">Log In</button>
              <button className="signup">Create a free account</button>
            </div>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {showProfile ? (
          <UserProfile />
        ) : showAbout ? (
         <About/>
        ) : (
          <div className="hero-content">
            <div className="hero-text">
              <h1><span>Hire</span> the next generation developer</h1>
              <p>We help companies hire top developers.</p>
              <button className="cta-button">Start a free trial</button>
            </div>
            <div className="hero-image">
              <img src={globe} alt="Digital Globe" />
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 NexgenNextopia | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
