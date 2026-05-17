import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Outvox Solution Logo" style={{ height: '40px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Outvox Solution</span>
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/contact" className="btn btn-primary nav-action" style={{ display: menuOpen ? 'inline-flex' : 'none' }} onClick={closeMenu}>
            <PhoneCall size={18} /> Let's Talk
          </Link>
        </div>

        <Link to="/contact" className="btn btn-primary nav-action" style={{ padding: '10px 24px', display: menuOpen ? 'none' : 'inline-flex' }}>
          <PhoneCall size={18} /> Let's Talk
        </Link>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
