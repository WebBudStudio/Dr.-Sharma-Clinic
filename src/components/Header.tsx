import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="container">
          <a href="tel:+91XXXXXXXXXX">📞 +91 XXXXX XXXXX</a>
          <span className="location">📍 Connaught Place, Delhi</span>
          <span>Mon–Sat: 10AM–7PM</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="nav-logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 8v16M12 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4 1.8-4 4 1.8 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 22l4-4M22 22l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Dr. Sharma Clinic
          </Link>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="nav-cta">Book Appointment</Link>
            </li>
          </ul>

          <button 
            className={`nav-toggle ${menuOpen ? 'open' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
