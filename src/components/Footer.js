import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-section footer-contact">
            <h2>CRICKO</h2>
            <br/>
            <p>
              Nagpur <br />
              Bumtibori <br />
              Maharashtra 441108 <br /><br />
              <strong>Phone:</strong> +91 835-400<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>

          <div className="footer-section footer-links">
            <br/>
            <h4>Useful Links</h4>
            <br/>
            <ul>
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">Tournaments</NavLink></li>
              <li><NavLink to="/blog" className="footer-link">LiveMatches</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">About</NavLink></li>
            </ul>
          </div>

          <div className="footer-section footer-social">
            <br/>
            <h4>Our Social Networks</h4>
            <br />
            <p>Thank you for visiting this website. Connect with me over socials.</p>
            <br />
            <div>
              <a href="https://www.facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CRICKO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
