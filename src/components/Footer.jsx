import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-lighter)', padding: '5px 12px', borderRadius: '12px', border: '1px solid var(--glass-border)', gap: '8px' }}>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--secondary)' }}>OUT</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)' }}>VOX</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>SOLUTION</span>
              </div>
            </Link>
            <p style={{ marginBottom: '20px' }}>
              Professional telecalling, customer support, and web solutions designed to help your business grow faster.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>
                Fb
              </a>
              <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>
                Tw
              </a>
              <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>
                Ig
              </a>
              <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>
                In
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Telecalling Services</Link></li>
              <li><Link to="/services">E-commerce Support</Link></li>
              <li><Link to="/services">Web Design & Dev</Link></li>
              <li><Link to="/services">Lead Generation</Link></li>
              <li><Link to="/services">24/7 Customer Care</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>+91 8296748983</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>preetham@outvoxsolution.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Outvox Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
