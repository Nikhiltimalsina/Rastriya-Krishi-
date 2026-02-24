import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* GREEN AND ORANGE WAVE */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z"
            fill="#e8963a"
          />
          <path
            d="M0,20 C360,90 1080,90 1440,20 L1440,0 C1080,80 360,80 0,0 Z"
            fill="#2e7d32"
          />
          <path
            d="M0,40 C360,100 1080,100 1440,40 L1440,20 C1080,90 360,90 0,20 Z"
            fill="#1b5e20"
          />
        </svg>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          {/* LOGO */}
          <div className="footer-logo">
            <a href="https://rastriyakrishi.com.np">
              <img
                src="https://rastriyakrishi.com.np/wp-content/uploads/2024/07/Logo_long.jpg"
                alt="Rastriya Krishi Company Nepal Limited"
                style={{ height: 60, objectFit: "contain" }}
              />
            </a>
          </div>

          {/* COLUMN 1 */}
          <div className="footer-col">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/">About</a></li>
              <li><a href="/faqs/">FAQs</a></li>
              <li><a href="/services/">Services</a></li>
              <li><a href="/blogs/">Blogs</a></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <ul>
              <li><a href="/about-us/our-mission-vision/">Mission & Vision</a></li>
              <li><a href="/about-us/objectives/">Objectives</a></li>
              <li><a href="/about-us/organogram/">Organogram</a></li>
              <li><a href="/about-us/board-of-director/">Board of Directors</a></li>
              <li><a href="/about-us/management-team/">Management Team</a></li>
              <li><a href="/about-us/province-leaders/">Province Leaders</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-col">
            <ul>
              <li><a href="/products/fresh-produce/">Fresh Produce</a></li>
              <li><a href="/products/agricultural-inputs/">Agricultural Inputs</a></li>
              <li><a href="/products/value-added-products/">Value-Added Products</a></li>
              <li><a href="/notices/">Notices</a></li>
              <li><a href="/career/">Career</a></li>
              <li><a href="/downloads/">Downloads</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61564078713356&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/rastriya-krishi-company-nepali-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>

              <li href="/contact/">
                <span className="social-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e8963a"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                Email
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Rastriya Krishi Company Nepal Limited &copy; {year} All rights
          reserved. | Crafted by{" "}
          <a
            href="https://ppsoft.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            PP<span style={{ fontStyle: "italic" }}>soft</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
