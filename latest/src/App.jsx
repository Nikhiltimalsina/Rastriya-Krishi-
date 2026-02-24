import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Existing Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";

// Home page sections
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Introduction from "./Components/Introduction";
import MissionVision from "./Components/Missionvision";
import Services from "./Components/Services";
import Products from "./Components/Products";
import HowItWorks from "./Components/Howitworks";
import Blogs from "./Components/Blogs";

// Pages (note: file names have spaces)
import ServicesPage from "./Pages/Services Page.jsx";
import ProductsPage from "./Pages/Products Page.jsx";
import GalleryPage from "./Pages/Gallery Page.jsx";
import ContactPage from "./Pages/ContactUs Page.jsx";
import BlogPage from "./Pages/Blog Page.jsx";
import AboutUsPage from "./Pages/AboutUs Page.jsx";
import GroupofCompaniesPage from "./Pages/GroupofCompanies page.jsx";
import ResourcesPage from "./Pages/Resources.jsx";

// Placeholder pages for sub-navigation
function AboutMissionVision() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Mission & Vision</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function AboutObjectives() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Objectives</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function AboutOrganogram() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Organogram</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function AboutBoard() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Board of Directors</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function AboutManagement() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Management Team</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function AboutProvinceLeaders() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Province Leaders</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ProductsFreshProduce() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Fresh Produce</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ProductsAgriculturalInputs() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Agricultural Inputs</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ProductsValueAdded() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Value-Added Products</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function CompaniesParent() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Parent Company</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function CompaniesAssociate() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Associate Company</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function CompaniesSubsidiary() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Subsidiary Companies</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function CompaniesInvestor() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Investor Company</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesBlogs() {
  return <BlogPage />;
}

function ResourcesFarmers() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Farmers Empowerment Program</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesCSR() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>CSR Activities</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesTraining() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Training Activities</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesNotices() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Notices</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesCareer() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Career</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesGrievance() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Grievance</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

function ResourcesDownloads() {
  return (
    <div style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1a3326" }}>Downloads</h1>
      <p style={{ color: "#666", fontSize: 18, marginTop: 20 }}>Coming soon...</p>
    </div>
  );
}

// ── Home Page ──────────────────────────────────────────────
function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Introduction />
      <MissionVision />
      <Services />
      <Products />
      <HowItWorks />
      <Blogs />
    </>
  );
}

// ── App ────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    // Global reset
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "'Merriweather Sans', sans-serif";
    document.body.style.overflowX = "hidden";
    document.body.style.boxSizing = "border-box";

    // CSS custom properties — Orange & Green theme
    document.documentElement.style.setProperty("--primary-orange", "#FF6B35");
    document.documentElement.style.setProperty("--secondary-green", "#2E7D32");
    document.documentElement.style.setProperty("--light-green", "#4CAF50");
    document.documentElement.style.setProperty("--dark-green", "#1B5E20");
    document.documentElement.style.setProperty("--accent-orange", "#FF8C42");
  }, []);

  return (
    <Router>
      <div
        style={{
          "--primary-orange": "#FF6B35",
          "--secondary-green": "#2E7D32",
          "--light-green": "#4CAF50",
          "--dark-green": "#1B5E20",
          "--accent-orange": "#FF8C42",
        }}
      >
        {/* Navbar appears on every page */}
        <Navbar />

        <Routes>
          {/* ── Home ── */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* ── About Us ── */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about/mission-vision" element={<AboutUsPage />} />
          <Route path="/about/objectives" element={<AboutUsPage />} />
          <Route path="/about/organogram" element={<AboutUsPage />} />
          <Route path="/about/board" element={<AboutUsPage />} />
          <Route path="/about/management" element={<AboutUsPage />} />
          <Route path="/about/province-leaders" element={<AboutUsPage />} />

          {/* ── Services ── */}
          <Route path="/services" element={<ServicesPage />} />

          {/* ── Products ── */}
          <Route path="/products" element={<ProductsPage />} />
<Route path="/products/fresh-produce" element={<ProductsPage />} />
          <Route path="/products/agricultural-inputs" element={<ProductsPage />} />
          <Route path="/products/value-added" element={<ProductsPage />} />

          {/* ── Groups of Companies ── */}
          <Route path="/companies" element={<GroupofCompaniesPage />} />
          <Route path="/companies/parent" element={<GroupofCompaniesPage />} />
          <Route path="/companies/associate" element={<GroupofCompaniesPage />} />
          <Route path="/companies/subsidiary" element={<GroupofCompaniesPage />} />
          <Route path="/companies/investor" element={<GroupofCompaniesPage />} />

          {/* ── Gallery ── */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* ── Contact ── */}
          <Route path="/contact" element={<ContactPage />} />

{/* ── Resources ── */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blogs" element={<ResourcesPage />} />
          <Route path="/resources/farmers" element={<ResourcesFarmers />} />
          <Route path="/resources/csr" element={<ResourcesCSR />} />
          <Route path="/resources/training" element={<ResourcesTraining />} />
          <Route path="/resources/notices" element={<ResourcesNotices />} />
          <Route path="/resources/career" element={<ResourcesCareer />} />
          <Route path="/resources/grievance" element={<ResourcesGrievance />} />
          <Route path="/resources/downloads" element={<ResourcesDownloads />} />

          {/* ── Blog (listing) ── */}
          <Route path="/blog" element={<BlogPage />} />

          {/* ── 404 fallback ── */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

// ── 404 Page ───────────────────────────────────────────────
function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 24px",
        fontFamily: "'Merriweather Sans', sans-serif",
      }}
    >
      <div style={{ fontSize: 72, marginBottom: 20 }}>🌿</div>
      <h1
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#1a3326",
          fontFamily: "'Playfair Display', serif",
          marginBottom: 16,
        }}
      >
        404 — Page Not Found
      </h1>
      <p style={{ color: "#666", fontSize: 17, maxWidth: 420, lineHeight: 1.75, marginBottom: 36 }}>
        Looks like this page has been harvested. Let's get you back to fertile ground.
      </p>
      <a
        href="/"
        style={{
          background: "linear-gradient(135deg, #2d7a3a, #4caf50)",
          color: "#fff",
          padding: "14px 36px",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 15,
          boxShadow: "0 8px 24px rgba(45,122,58,0.3)",
        }}
      >
        Back to Home
      </a>
    </div>
  );
}