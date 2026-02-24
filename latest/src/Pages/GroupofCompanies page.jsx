import { useState } from "react";

const GREEN = "#2d7a3a";
const DARK  = "#1a3326";
const LIGHT = "#f0faf2";

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Merriweather Sans', 'Segoe UI', sans-serif; }

  .gc-tab { cursor: pointer; padding: 10px 24px; border-radius: 30px; border: 1.5px solid #ddd;
    font-size: 13px; font-weight: 700; transition: all .2s; background: #fff; color: #555;
    font-family: 'Merriweather Sans', sans-serif; white-space: nowrap; }
  .gc-tab.active { background: ${GREEN}; color: #fff; border-color: ${GREEN}; }
  .gc-tab:hover:not(.active) { border-color: ${GREEN}; color: ${GREEN}; }

  .company-card { background:#fff; border-radius:22px; overflow:hidden;
    border:1px solid #e8f5e9; box-shadow:0 4px 24px rgba(0,0,0,0.07);
    transition:transform .25s, box-shadow .25s; }
  .company-card:hover { transform:translateY(-7px); box-shadow:0 20px 52px rgba(0,0,0,0.13); }

  .highlight-row { display:flex; gap:16px; align-items:flex-start; padding:20px 24px;
    border-radius:14px; border:1px solid #e8f5e9; background:#fff; transition:all .2s; }
  .highlight-row:hover { background:${LIGHT}; border-color:#a5d6a7; }
`;

const TABS = ["Parent Company", "Associate Company", "Subsidiary Companies", "Investor Company"];

/* ─── Data ─── */
const PARENT = {
  name: "Rastriya Krishi Company Nepal Limited",
  tagline: "From Soil To Success",
  founded: "2014",
  reg: "Registered under Company Act, Nepal",
  intro: "Rastriya Krishi Company Nepal Limited (RKCNL) is the parent company of the group, established with the vision of transforming Nepal's agricultural landscape. As a registered agricultural enterprise, RKCNL leads the group's strategic direction, policy-making, and overall governance.",
  services: [
    { icon: "🌾", title: "Fresh Produce Distribution", text: "Supplying premium quality vegetables, fruits, and groceries directly to consumers and markets." },
    { icon: "🔬", title: "Agricultural Inputs", text: "Providing quality seeds, fertilizers, and tools to farmers across all 7 provinces." },
    { icon: "📦", title: "Value-Added Products", text: "Processing and packaging agricultural produce for higher value and longer shelf life." },
    { icon: "🎓", title: "Training & Development", text: "Running farmer empowerment programs, workshops, and skill development sessions." },
    { icon: "🔗", title: "Market Linkages", text: "Connecting farmers with buyers, retailers, and export markets." },
    { icon: "💻", title: "AgriTech Solutions", text: "Integrating technology into farming practices for improved efficiency." },
  ],
  stats: [
    { v: "10+", l: "Years Active" },
    { v: "5000+", l: "Farmers Empowered" },
    { v: "7", l: "Provinces" },
    { v: "50+", l: "Products" },
  ],
};

const ASSOCIATE = [
  {
    name: "Krishi Agro Processing Pvt. Ltd.",
    sector: "Agro Processing",
    icon: "🏭",
    color: "#e3f2fd",
    accent: "#1565c0",
    desc: "Specializes in the processing, packaging, and value addition of raw agricultural produce into market-ready products. Operates modern processing facilities ensuring quality and hygiene standards.",
    highlights: ["Food Processing & Packaging", "Quality Assurance & Testing", "Cold Storage Solutions", "Export-Grade Processing"],
  },
  {
    name: "Krishi Logistics Nepal Pvt. Ltd.",
    sector: "Logistics & Supply Chain",
    icon: "🚚",
    color: "#fff8e1",
    accent: "#f57f17",
    desc: "Handles end-to-end agricultural logistics — from farm pickup to last-mile delivery. Operates a fleet of refrigerated vehicles ensuring freshness of produce across Nepal.",
    highlights: ["Farm-to-Market Delivery", "Refrigerated Transport", "Warehouse Management", "Last-Mile Distribution"],
  },
  {
    name: "Krishi Finance & Investment Ltd.",
    sector: "Finance",
    icon: "💰",
    color: "#fce4ec",
    accent: "#c62828",
    desc: "Provides financial services, micro-credit, and investment facilitation for farmers and agricultural enterprises. Focused on improving access to capital for Nepal's farming community.",
    highlights: ["Farmer Micro-Credit", "Agricultural Investment", "Insurance Products", "Financial Literacy"],
  },
];

const SUBSIDIARIES = [
  {
    name: "Krishi Seeds Nepal",
    type: "Wholly Owned Subsidiary",
    sector: "Seeds & Inputs",
    icon: "🌱",
    color: "#e8f5e9",
    desc: "Focused on research, development, and distribution of high-quality certified seeds suited for Nepal's diverse agro-climatic zones.",
  },
  {
    name: "Krishi Organic Nepal",
    type: "Wholly Owned Subsidiary",
    sector: "Organic Farming",
    icon: "🌿",
    color: "#f1f8e9",
    desc: "Dedicated to promoting and scaling organic farming practices, certification, and organic product distribution across Nepal.",
  },
  {
    name: "Krishi Digital Solutions",
    type: "Wholly Owned Subsidiary",
    sector: "AgriTech",
    icon: "📱",
    color: "#e8eaf6",
    desc: "Develops digital tools, mobile apps, and technology platforms to modernize farming, market access, and supply chain management.",
  },
  {
    name: "Krishi Retail Stores Pvt. Ltd.",
    type: "Wholly Owned Subsidiary",
    sector: "Retail",
    icon: "🏪",
    color: "#fce4ec",
    desc: "Operates a chain of agricultural retail stores across Nepal, providing farmers with quality inputs and consumers with fresh produce.",
  },
];

const INVESTORS = [
  {
    name: "Agricultural Development Bank",
    type: "Strategic Investor",
    icon: "🏦",
    color: "#e3f2fd",
    desc: "Providing institutional financing and strategic support to scale agricultural operations and farmer outreach programs.",
    contribution: "Financial & Strategic Support",
  },
  {
    name: "Nepal Investment & Growth Fund",
    type: "Private Equity Investor",
    icon: "📈",
    color: "#f3e5f5",
    desc: "A private equity fund focused on high-growth agribusiness investments that drive rural economic development in Nepal.",
    contribution: "Growth Capital",
  },
  {
    name: "International Agriculture Partners",
    type: "International Investor",
    icon: "🌍",
    color: "#e0f7fa",
    desc: "International agricultural development partners providing capital, technical expertise, and global market access.",
    contribution: "Technical & Capital Support",
  },
];

/* ─── Hero ─── */
function Hero({ active }) {
  const map = {
    "Parent Company": "The foundation and driving force behind the Rastriya Krishi Group.",
    "Associate Company": "Strategic partners extending our reach across Nepal's agricultural value chain.",
    "Subsidiary Companies": "Specialized entities operating under the Rastriya Krishi umbrella.",
    "Investor Company": "Visionary investors fueling the growth of Nepal's agricultural sector.",
  };
  return (
    <section style={{ background: "linear-gradient(135deg,#1a4d2e 0%,#2d7a3a 60%,#388e3c 100%)", padding: "90px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -50, left: "8%", width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Groups of Companies</div>
        <h1 style={{ fontSize: 54, fontWeight: 900, color: "#fff", fontFamily: "'Playfair Display', serif", lineHeight: 1.15, marginBottom: 18 }}>{active}</h1>
        <p style={{ color: "#b2dfb8", fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>{map[active]}</p>
      </div>
    </section>
  );
}

function TabBar({ active, setActive }) {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e8f5e9", position: "sticky", top: 72, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 10, padding: "14px 0", width: "max-content" }}>
          {TABS.map(t => (
            <button key={t} className={`gc-tab${active === t ? " active" : ""}`} onClick={() => setActive(t)}>{t}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Sections ─── */
function ParentSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      {/* Company Identity */}
      <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 28, padding: "60px 64px", marginBottom: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 52, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{ width: 140, height: 140, borderRadius: 24, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, border: "2px solid rgba(255,255,255,0.2)" }}>
            🏢
          </div>
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ background: "#4caf50", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50 }}>Parent Company</span>
              <span style={{ background: "rgba(255,255,255,0.15)", color: "#a5d6a7", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50 }}>Est. {PARENT.founded}</span>
            </div>
            <h2 style={{ color: "#fff", fontSize: 32, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 10 }}>{PARENT.name}</h2>
            <p style={{ color: "#81c784", fontSize: 18, fontWeight: 700, fontStyle: "italic", marginBottom: 16 }}>"{PARENT.tagline}"</p>
            <p style={{ color: "#b2dfb8", fontSize: 15, lineHeight: 1.8 }}>{PARENT.intro}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 64 }}>
        {PARENT.stats.map(s => (
          <div key={s.l} style={{ background: "linear-gradient(135deg,#f0faf2,#e8f5e9)", borderRadius: 18, padding: "28px", textAlign: "center", border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: GREEN, fontFamily: "'Playfair Display', serif" }}>{s.v}</div>
            <div style={{ color: "#555", fontSize: 13, fontWeight: 600, marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif" }}>Core Activities</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {PARENT.services.map(s => (
          <div key={s.title} className="company-card" style={{ padding: "32px 28px" }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 18, border: "1px solid #c8e6c9" }}>
              {s.icon}
            </div>
            <h4 style={{ color: DARK, fontWeight: 700, fontSize: 16, fontFamily: "'Playfair Display', serif", marginBottom: 10 }}>{s.title}</h4>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75 }}>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssociateSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Strategic Partners</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Associate Companies</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Our associate companies extend our agricultural value chain with specialized expertise across processing, logistics, and financial services.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {ASSOCIATE.map((c, i) => (
          <div key={c.name} className="company-card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "280px 1fr" : "1fr 280px", overflow: "hidden" }}>
            {i % 2 !== 0 && (
              <div style={{ padding: "44px 48px" }}>
                <span style={{ background: LIGHT, color: GREEN, fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50, display: "inline-block", marginBottom: 16, border: "1px solid #c8e6c9" }}>Associate Company</span>
                <h3 style={{ color: DARK, fontSize: 24, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>{c.name}</h3>
                <p style={{ color: "#888", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{c.sector}</p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{c.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.highlights.map(h => (
                    <div key={h} className="highlight-row" style={{ padding: "10px 16px" }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 16 }}>✓</span>
                      <span style={{ color: "#444", fontSize: 14, fontWeight: 500 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ background: `linear-gradient(135deg,${c.color},#fff)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48, gap: 20 }}>
              <div style={{ fontSize: 80 }}>{c.icon}</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#888", fontWeight: 600, marginBottom: 4 }}>Sector</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: c.accent }}>{c.sector}</div>
              </div>
            </div>
            {i % 2 === 0 && (
              <div style={{ padding: "44px 48px" }}>
                <span style={{ background: LIGHT, color: GREEN, fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50, display: "inline-block", marginBottom: 16, border: "1px solid #c8e6c9" }}>Associate Company</span>
                <h3 style={{ color: DARK, fontSize: 24, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>{c.name}</h3>
                <p style={{ color: "#888", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{c.sector}</p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{c.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.highlights.map(h => (
                    <div key={h} className="highlight-row" style={{ padding: "10px 16px" }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 16 }}>✓</span>
                      <span style={{ color: "#444", fontSize: 14, fontWeight: 500 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SubsidiarySection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Our Group</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Subsidiary Companies</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Wholly-owned subsidiaries that operate specialized businesses within the Rastriya Krishi ecosystem.
        </p>
      </div>
      {/* Group structure visual */}
      <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 24, padding: "36px 48px", marginBottom: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <div>
          <div style={{ color: "#a5d6a7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Group Structure</div>
          <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>Rastriya Krishi Company Nepal Limited</h3>
          <p style={{ color: "#b2dfb8", fontSize: 14, marginTop: 6 }}>100% Ownership of all Subsidiary Companies</p>
        </div>
        <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
          {SUBSIDIARIES.map(s => (
            <div key={s.name} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ fontSize: 28 }}>{s.icon}</div>
              <div style={{ color: "#a5d6a7", fontSize: 11, fontWeight: 600, marginTop: 6, maxWidth: 80 }}>{s.sector}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 28 }}>
        {SUBSIDIARIES.map(c => (
          <div key={c.name} className="company-card">
            <div style={{ height: 140, background: `linear-gradient(135deg,${c.color},#fff)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>
              {c.icon}
            </div>
            <div style={{ padding: "28px 32px 36px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ background: LIGHT, color: GREEN, fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 50, border: "1px solid #c8e6c9" }}>{c.type}</span>
                <span style={{ background: "#fff3e0", color: "#e65100", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 50, border: "1px solid #ffe0b2" }}>{c.sector}</span>
              </div>
              <h3 style={{ color: DARK, fontSize: 20, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>{c.name}</h3>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.8 }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestorSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Our Backers</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Investor Companies</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Strategic investors who share our vision for a thriving agricultural Nepal and contribute capital, expertise, and networks.
        </p>
      </div>

      {/* Why invest banner */}
      <div style={{ background: LIGHT, borderRadius: 24, padding: "48px 52px", marginBottom: 52, border: "1px solid #c8e6c9" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Why Invest With Us</div>
            <h3 style={{ fontSize: 30, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Strong Returns with Meaningful Impact</h3>
            <p style={{ color: "#555", fontSize: 15, lineHeight: 1.85 }}>
              Investing in Rastriya Krishi means participating in Nepal's fastest-growing sector while creating real, measurable impact for thousands of farming families across the country.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "📈", label: "Growing Market", text: "Nepal's agri sector expanding rapidly" },
              { icon: "🛡️", label: "Low Risk", text: "Diversified revenue across provinces" },
              { icon: "🌍", label: "ESG Aligned", text: "Strong social & environmental returns" },
              { icon: "🤝", label: "Proven Team", text: "10+ years of operational excellence" },
            ].map(p => (
              <div key={p.label} style={{ background: "#fff", borderRadius: 14, padding: "18px", border: "1px solid #e8f5e9" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontWeight: 700, color: DARK, fontSize: 14, marginBottom: 4 }}>{p.label}</div>
                <div style={{ color: "#888", fontSize: 12, lineHeight: 1.5 }}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {INVESTORS.map(inv => (
          <div key={inv.name} className="company-card" style={{ display: "grid", gridTemplateColumns: "200px 1fr", overflow: "hidden" }}>
            <div style={{ background: `linear-gradient(135deg,${inv.color},#fff)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 36, gap: 12 }}>
              <div style={{ fontSize: 60 }}>{inv.icon}</div>
              <div style={{ background: "#fff", borderRadius: 50, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: GREEN, border: "1px solid #c8e6c9", textAlign: "center" }}>{inv.type}</div>
            </div>
            <div style={{ padding: "36px 40px" }}>
              <h3 style={{ color: DARK, fontSize: 22, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 10 }}>{inv.name}</h3>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{inv.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: LIGHT, borderRadius: 10, padding: "12px 18px", border: "1px solid #c8e6c9", display: "inline-flex" }}>
                <span style={{ fontSize: 16 }}>💼</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: GREEN }}>Contribution: {inv.contribution}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 52, background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 24, padding: "48px 52px", textAlign: "center" }}>
        <h3 style={{ color: "#fff", fontSize: 28, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>Interested in Investing?</h3>
        <p style={{ color: "#b2dfb8", fontSize: 16, marginBottom: 28, lineHeight: 1.8 }}>We welcome strategic investors who share our mission. Reach out to explore partnership opportunities.</p>
        <a href="mailto:info@rastriyakrishi.com.np" style={{ background: "#fff", color: GREEN, padding: "14px 36px", borderRadius: 10, textDecoration: "none", fontWeight: 800, fontSize: 15, boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "inline-block" }}>
          Contact Us →
        </a>
      </div>
    </div>
  );
}

export default function GroupsOfCompaniesPage() {
  const [active, setActive] = useState(TABS[0]);
  const section = {
    "Parent Company": <ParentSection />,
    "Associate Company": <AssociateSection />,
    "Subsidiary Companies": <SubsidiarySection />,
    "Investor Company": <InvestorSection />,
  }[active];

  return (
    <div style={{ fontFamily: "'Merriweather Sans','Segoe UI',sans-serif", color: "#1a2e1a", background: "#fafffe", minHeight: "100vh" }}>
      <style>{S}</style>
      <Hero active={active} />
      <TabBar active={active} setActive={setActive} />
      <main style={{ minHeight: 500 }}>{section}</main>
    </div>
  );
}