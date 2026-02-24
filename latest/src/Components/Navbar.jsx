import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  {
    label: "About Us",
    sub: [
      { label: "We, Our Mission & Vision", path: "/about/mission-vision" },
      { label: "Objectives", path: "/about/objectives" },
      { label: "Organogram", path: "/about/organogram" },
      { label: "Board of Director", path: "/about/board" },
      { label: "Management Team", path: "/about/management" },
      { label: "Province Leaders", path: "/about/province-leaders" },
    ],
  },
  { label: "Services", path: "/services" },
  {
    label: "Products",
    sub: [
      { label: "Fresh Produce", path: "/products/fresh-produce" },
      { label: "Agricultural Inputs", path: "/products/agricultural-inputs" },
      { label: "Value-Added Products", path: "/products/value-added" },
    ],
  },
  {
    label: "Groups of Companies",
    sub: [
      { label: "Parent Company", path: "/companies/parent" },
      { label: "Associate Company", path: "/companies/associate" },
      { label: "Subsidiary Companies", path: "/companies/subsidiary" },
      { label: "Investor Company", path: "/companies/investor" },
    ],
  },
  { label: "Contact", path: "/contact" },
  {
    label: "Resources",
    sub: [
      { label: "Blogs", path: "/resources/blogs" },
      { label: "Farmers Empowerment Program", path: "/resources/farmers" },
      { label: "CSR Activities", path: "/resources/csr" },
      { label: "Training Activities", path: "/resources/training" },
      { label: "Notices", path: "/resources/notices" },
      { label: "Career", path: "/resources/career" },
      { label: "Grievance", path: "/resources/grievance" },
      { label: "Downloads", path: "/resources/downloads" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState("EN"); // State for Language Switcher

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div style={{ background: "#1a4d2e", color: "#d4edda", fontSize: "13px", padding: "8px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 24 }}>
            <span>📞 <a href="tel:015922911" style={{ color: "#d4edda", textDecoration: "none" }}>01-5922911</a></span>
            <span>✉️ <a href="mailto:info@rastriyakrishi.com.np" style={{ color: "#d4edda", textDecoration: "none" }}>info@rastriyakrishi.com.np</a></span>
          </div>
          
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 16, borderRight: "1px solid rgba(212, 237, 218, 0.3)", paddingRight: 20 }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#d4edda", textDecoration: "none" }}>Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#d4edda", textDecoration: "none" }}>LinkedIn</a>
            </div>

            {/* Language Switcher UI */}
            <div style={{ 
                display: "flex", 
                background: "rgba(255,255,255,0.1)", 
                borderRadius: "4px", 
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.2)"
            }}>
              <button 
                onClick={() => setLanguage("EN")}
                style={{
                  background: language === "EN" ? "#d4edda" : "transparent",
                  color: language === "EN" ? "#1a4d2e" : "#d4edda",
                  border: "none",
                  padding: "2px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("NE")}
                style={{
                  background: language === "NE" ? "#d4edda" : "transparent",
                  color: language === "NE" ? "#1a4d2e" : "#d4edda",
                  border: "none",
                  padding: "2px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                नेपा
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 0 #e8f5e9",
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          
          {/* Logo */}
          <Link to="/">
            <img
              src="https://rastriyakrishi.com.np/wp-content/uploads/2024/07/Logo_long.jpg"
              alt="Rastriya Krishi"
              style={{ height: 52, objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.path ? (
                  <Link 
                    to={link.path}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      padding: "8px 14px", fontSize: "14px", fontWeight: 600,
                      color: activeDropdown === link.label ? "#2d7a3a" : "#2c3e50",
                      borderRadius: 6, transition: "all 0.2s",
                      display: "flex", alignItems: "center", gap: 4,
                      fontFamily: "'Merriweather Sans', sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "8px 14px", fontSize: "14px", fontWeight: 600,
                    color: activeDropdown === link.label ? "#2d7a3a" : "#2c3e50",
                    borderRadius: 6, transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: 4,
                    fontFamily: "'Merriweather Sans', sans-serif",
                  }}>
                    {link.label} {link.sub && <span style={{ fontSize: 10 }}>▼</span>}
                  </button>
                )}

                {link.sub && activeDropdown === link.label && (
                  <div style={{
                    position: "absolute", top: "100%", left: 0, minWidth: 220,
                    background: "#fff", borderRadius: 10,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    padding: "8px 0", border: "1px solid #e8f5e9", zIndex: 100,
                  }}>
                    {link.sub.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        style={{
                          display: "block", padding: "9px 18px", fontSize: 13,
                          color: "#2c3e50", textDecoration: "none", fontWeight: 500,
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={e => { e.target.style.background = "#f0faf2"; e.target.style.color = "#2d7a3a"; e.target.style.paddingLeft = "24px"; }}
                        onMouseLeave={e => { e.target.style.background = ""; e.target.style.color = "#2c3e50"; e.target.style.paddingLeft = "18px"; }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link to="/products" style={{
            background: "linear-gradient(135deg, #e8963a, #f39c12, #2d7a3a)",
            color: "#fff", padding: "10px 22px", borderRadius: 8,
            textDecoration: "none", fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 12px rgba(232,150,58,0.4)",
          }}>
            Shop Now
          </Link>
        </div>
      </nav>
    </>
  );
}