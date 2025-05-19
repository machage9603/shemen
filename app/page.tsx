"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Apply background image to the body element
    document.body.style.backgroundImage = "url('bgnow.jpeg')";

    // Clean up on unmount
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <header>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              <img src="logo.png" alt="Logo" className="logo-image" />
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Navigation links - will be controlled by CSS based on screen size and menu state */}
          <nav className={isMenuOpen ? "active" : ""}>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="content">
          <h1>COMING SOON</h1>
          <p className="subtitle">We are currently working on our website</p>
          <p className="subtitle subtitle-last">
            Be the first to know when we go live
          </p>

          <div className="form">
            <div className="input-group">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter your Email" />
            </div>
            <button className="sign-up">SEND</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/company/shemen-edge-consultancy/"
            className="social-icon"
          >
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/shemenedge" className="social-icon">
            <XIcon />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link
            href="https://www.instagram.com/shemen_edge/"
            className="social-icon"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// Minimal social media icons
const LinkedInIcon: FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

const XIcon: FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

const InstagramIcon: FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
};
