import { useState } from "react";

/* ─── shared design tokens ─── */
const GREEN = "#2d7a3a";
const DARK  = "#1a3326";
const LIGHT = "#f0faf2";

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Merriweather Sans', 'Segoe UI', sans-serif; }

  .au-tab { cursor: pointer; padding: 10px 22px; border-radius: 30px; border: 1.5px solid #ddd;
    font-size: 13px; font-weight: 700; transition: all .2s; background: #fff; color: #555;
    font-family: 'Merriweather Sans', sans-serif; white-space: nowrap; }
  .au-tab.active { background: ${GREEN}; color: #fff; border-color: ${GREEN}; }
  .au-tab:hover:not(.active) { border-color: ${GREEN}; color: ${GREEN}; }

  .card-hover { transition: transform .25s, box-shadow .25s; }
  .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.12) !important; }

  .obj-item { display: flex; gap: 18px; align-items: flex-start; padding: 24px 28px;
    background: #fff; border-radius: 16px; border: 1px solid #e8f5e9;
    transition: all .2s; }
  .obj-item:hover { background: ${LIGHT}; border-color: #a5d6a7; transform: translateX(6px); }

  .person-card { background:#fff; border-radius:20px; overflow:hidden;
    box-shadow:0 4px 24px rgba(0,0,0,0.07); border:1px solid #e8f5e9;
    transition: transform .25s, box-shadow .25s; }
  .person-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,0.13); }
  .person-card img { width:100%; height:220px; object-fit:cover; background:#e8f5e9; }

  .province-row { display:flex; gap:14px; align-items:center; padding:18px 24px;
    background:#fff; border-radius:14px; border:1px solid #e8f5e9;
    transition:all .2s; }
  .province-row:hover { background:${LIGHT}; border-color:#a5d6a7; }

  .org-box { background:#fff; border:1.5px solid #c8e6c9; border-radius:14px; padding:16px 28px;
    text-align:center; font-weight:700; font-size:14px; color:${DARK};
    box-shadow:0 2px 12px rgba(45,122,58,0.08); min-width:160px; }
  .org-line { width:2px; height:32px; background:#c8e6c9; margin:0 auto; }
  .org-h-line { height:2px; background:#c8e6c9; flex:1; }
`;

/* ─── data ─── */
const OBJECTIVES = [
  { icon: "🌱", title: "Sustainable Agriculture", text: "Promote and implement sustainable agricultural practices that protect the environment while enhancing productivity." },
  { icon: "🤝", title: "Farmer Empowerment", text: "Empower farmers through training, technology access, and fair market linkages to improve their livelihoods." },
  { icon: "🔬", title: "Technology Integration", text: "Integrate modern agricultural technology and innovation into traditional farming systems across Nepal." },
  { icon: "🏪", title: "Market Linkages", text: "Establish efficient supply chain networks connecting farmers directly to consumers and markets." },
  { icon: "🌍", title: "Food Security", text: "Contribute to Nepal's food security by increasing agricultural productivity and reducing post-harvest losses." },
  { icon: "👥", title: "Community Development", text: "Support rural communities through CSR initiatives, training programs, and social development activities." },
  { icon: "💰", title: "Economic Growth", text: "Drive economic growth in Nepal's agricultural sector by creating employment and increasing export potential." },
  { icon: "🏆", title: "Quality Standards", text: "Maintain the highest quality standards from soil to shelf, ensuring safe and nutritious food for all." },
];

const BOARD = [
  { name: "Bishal Humagain", role: "Founder & Chairman", img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/07/Krishi_Logo-Tr.png", badge: "Founder" },
  { name: "Board Member", role: "Director", img: null, badge: "Director" },
  { name: "Board Member", role: "Director", img: null, badge: "Director" },
  { name: "Board Member", role: "Independent Director", img: null, badge: "Independent" },
];

const MANAGEMENT = [
  { name: "Chief Executive Officer", role: "CEO", dept: "Executive" },
  { name: "Chief Operations Officer", role: "COO", dept: "Operations" },
  { name: "Chief Financial Officer", role: "CFO", dept: "Finance" },
  { name: "Head of Agriculture", role: "Director", dept: "Agriculture" },
  { name: "Head of Marketing", role: "Director", dept: "Marketing" },
  { name: "Head of IT & Technology", role: "Director", dept: "Technology" },
];

const PROVINCES = [
  { no: 1, name: "Koshi Province", capital: "Biratnagar", leader: "Province Representative", color: "#e3f2fd" },
  { no: 2, name: "Madhesh Province", capital: "Janakpur", leader: "Province Representative", color: "#fce4ec" },
  { no: 3, name: "Bagmati Province", capital: "Hetauda", leader: "Province Representative", color: "#e8f5e9" },
  { no: 4, name: "Gandaki Province", capital: "Pokhara", leader: "Province Representative", color: "#fff8e1" },
  { no: 5, name: "Lumbini Province", capital: "Deukhuri", leader: "Province Representative", color: "#f3e5f5" },
  { no: 6, name: "Karnali Province", capital: "Birendranagar", leader: "Province Representative", color: "#e0f7fa" },
  { no: 7, name: "Sudurpashchim Province", capital: "Godawari", leader: "Province Representative", color: "#fff3e0" },
];

const TABS = [
  "We, Our Mission & Vision",
  "Objectives",
  "Organogram",
  "Board of Director",
  "Management Team",
  "Province Leaders",
];

/* ─── Hero ─── */
function Hero({ active }) {
  const subtitles = {
    "We, Our Mission & Vision": "Learn who we are, what drives us, and the vision guiding Nepal's agricultural future.",
    "Objectives": "The core goals that shape every decision we make at Rastriya Krishi.",
    "Organogram": "Our organizational structure built for efficiency, accountability, and growth.",
    "Board of Director": "The visionary leaders steering Rastriya Krishi towards a sustainable future.",
    "Management Team": "The dedicated professionals executing our mission on the ground every day.",
    "Province Leaders": "Our representatives working across all 7 provinces of Nepal.",
  };
  return (
    <section style={{ background: "linear-gradient(135deg, #1a4d2e 0%, #2d7a3a 60%, #4caf50 100%)", padding: "90px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", bottom: -40, left: "5%", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: "30%", left: "40%", width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.02)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>About Us</div>
        <h1 style={{ fontSize: 54, fontWeight: 900, color: "#fff", fontFamily: "'Playfair Display', serif", lineHeight: 1.15, marginBottom: 18 }}>
          {active}
        </h1>
        <p style={{ color: "#b2dfb8", fontSize: 17, maxWidth: 580, margin: "0 auto", lineHeight: 1.8 }}>
          {subtitles[active]}
        </p>
      </div>
    </section>
  );
}

/* ─── Tab Bar ─── */
function TabBar({ active, setActive }) {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e8f5e9", position: "sticky", top: 72, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 10, padding: "14px 0", width: "max-content" }}>
          {TABS.map(t => (
            <button key={t} className={`au-tab${active === t ? " active" : ""}`} onClick={() => setActive(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Sections ─── */
function MissionVisionSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      {/* Intro */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 96 }}>
        <div>
          <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Our Story</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", lineHeight: 1.25, marginBottom: 24 }}>
            Introduction
          </h2>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
            At <strong style={{ color: GREEN }}>Rastriya Krishi Company Nepal Limited</strong>, we are dedicated to promoting sustainable agricultural practices and providing fresh, high-quality vegetables, fruits, and grocery products directly to your doorstep.
          </p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.9, marginBottom: 28 }}>
            Mr. Bishal Humagain, our founder, established the company with the ambitious vision of transforming Nepal's agricultural landscape — encapsulated in the initiative <strong style={{ color: GREEN }}>"From Soil To Success."</strong>
          </p>
          <div style={{ display: "flex", gap: 32 }}>
            {[{ v: "10+", l: "Years" }, { v: "5000+", l: "Farmers" }, { v: "7", l: "Provinces" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 30, fontWeight: 800, color: GREEN, fontFamily: "'Playfair Display', serif" }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src="https://rastriyakrishi.com.np/wp-content/uploads/2024/09/5-1024x585.png"
            alt="Rastriya Krishi"
            style={{ width: "100%", borderRadius: 24, boxShadow: "0 24px 64px rgba(0,0,0,0.13)", height: 380, objectFit: "cover" }}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=380&fit=crop"; }}
          />
          <div style={{ position: "absolute", bottom: -20, left: -20, background: "linear-gradient(135deg,#2d7a3a,#4caf50)", borderRadius: 16, padding: "20px 24px", boxShadow: "0 8px 24px rgba(45,122,58,0.3)" }}>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>Est. 2014</div>
            <div style={{ color: "#a5d6a7", fontSize: 12, fontWeight: 600 }}>A Decade of Growth</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 28, padding: "72px 60px", position: "relative", overflow: "hidden", marginBottom: 80 }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Who We Are</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif" }}>Our Mission & Vision</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, position: "relative", zIndex: 1 }}>
          {[
            { title: "Our Mission", icon: "🎯", text: "To revolutionize agriculture by integrating sustainable practices, modern technology, and efficient market linkages. We aim to empower farmers, improve productivity, and ensure environmental sustainability." },
            { title: "Our Vision", icon: "🔭", text: "To be a leading agricultural enterprise that fosters sustainable agriculture, enhances food security, and supports rural development while contributing to the overall well-being of our community." },
          ].map(item => (
            <div key={item.title} className="card-hover" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 20, padding: "44px 40px" }}>
              <div style={{ fontSize: 52, marginBottom: 20 }}>{item.icon}</div>
              <h3 style={{ color: "#81c784", fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>{item.title}</h3>
              <p style={{ color: "#b2dfdb", fontSize: 16, lineHeight: 1.85 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>What We Stand For</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif" }}>Our Core Values</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {[
          { icon: "🌿", title: "Sustainability", text: "Environmental stewardship in every decision." },
          { icon: "💡", title: "Innovation", text: "Modern solutions for ancient challenges." },
          { icon: "🤝", title: "Integrity", text: "Honest and transparent in all dealings." },
          { icon: "🏘️", title: "Community", text: "Farmers and families always come first." },
        ].map(v => (
          <div key={v.title} className="card-hover" style={{ background: "#fff", borderRadius: 20, padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e8f5e9" }}>
            <div style={{ fontSize: 44, marginBottom: 16 }}>{v.icon}</div>
            <h4 style={{ color: DARK, fontWeight: 700, fontSize: 17, marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>{v.title}</h4>
            <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7 }}>{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ObjectivesSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>What We Aim To Achieve</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Our Objectives</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          These eight pillars define the foundation of our work and guide our efforts towards building a stronger agricultural Nepal.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {OBJECTIVES.map((obj, i) => (
          <div key={obj.title} className="obj-item">
            <div style={{ width: 52, height: 52, borderRadius: 14, background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0, border: "1px solid #c8e6c9" }}>
              {obj.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ background: GREEN, color: "#fff", borderRadius: 50, width: 22, height: 22, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <h4 style={{ color: DARK, fontWeight: 700, fontSize: 16 }}>{obj.title}</h4>
              </div>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75 }}>{obj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrganogramSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Structure</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Organizational Chart</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
          A clear governance structure ensures accountability, efficiency, and swift decision-making across all levels.
        </p>
      </div>

      {/* Chart */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {/* Top */}
        <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 16, padding: "18px 40px", color: "#fff", fontWeight: 800, fontSize: 15, textAlign: "center", boxShadow: "0 8px 24px rgba(45,122,58,0.35)" }}>
          Board of Directors
        </div>
        <div className="org-line" />
        <div style={{ background: "linear-gradient(135deg,#2d7a3a,#4caf50)", borderRadius: 16, padding: "16px 36px", color: "#fff", fontWeight: 700, fontSize: 14, textAlign: "center", boxShadow: "0 6px 20px rgba(45,122,58,0.25)" }}>
          Chief Executive Officer (CEO)
        </div>
        <div className="org-line" />

        {/* Level 3 */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 0, width: "100%" }}>
          {["Chief Operations Officer", "Chief Financial Officer", "Chief Agricultural Officer", "Head of Marketing"].map((role, i, arr) => (
            <div key={role} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", width: "100%", height: 2 }}>
                {i > 0 && <div className="org-h-line" />}
                <div style={{ width: 2, height: 32, background: "#c8e6c9" }} />
                {i < arr.length - 1 && <div className="org-h-line" />}
              </div>
              <div className="org-box" style={{ fontSize: 13 }}>{role}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, width: "100%", background: LIGHT, borderRadius: 20, padding: "36px 40px", border: "1px solid #c8e6c9" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div className="org-box" style={{ display: "inline-block", background: "linear-gradient(135deg,#e8f5e9,#f0faf2)" }}>Province Leaders (7 Provinces)</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 10 }}>
            {["P1 Koshi", "P2 Madhesh", "P3 Bagmati", "P4 Gandaki", "P5 Lumbini", "P6 Karnali", "P7 Sudur"].map(p => (
              <div key={p} style={{ background: "#fff", borderRadius: 10, padding: "12px 8px", textAlign: "center", fontSize: 12, fontWeight: 600, color: DARK, border: "1px solid #c8e6c9" }}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 48, background: "#fff8e1", borderRadius: 16, padding: "20px 28px", border: "1px solid #ffe082", display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ fontSize: 24 }}>📋</span>
        <p style={{ color: "#795548", fontSize: 14, lineHeight: 1.6 }}>
          The official detailed organogram is available for download. Contact our office at <strong>info@rastriyakrishi.com.np</strong> or call <strong>01-5922911</strong> to request the full organizational chart document.
        </p>
      </div>
    </div>
  );
}

function BoardSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Leadership</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Board of Directors</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 540, margin: "0 auto", lineHeight: 1.8 }}>
          Our board brings together experienced leaders committed to shaping the future of agriculture in Nepal.
        </p>
      </div>

      {/* Founder highlight */}
      <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 28, padding: "52px 60px", marginBottom: 48, display: "grid", gridTemplateColumns: "auto 1fr", gap: 52, alignItems: "center" }}>
        <div style={{ width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "3px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, flexShrink: 0 }}>
          👨‍💼
        </div>
        <div>
          <div style={{ background: "#4caf50", color: "#fff", borderRadius: 50, padding: "5px 16px", fontSize: 12, fontWeight: 700, display: "inline-block", marginBottom: 16 }}>Founder & Chairman</div>
          <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>Bishal Humagain</h3>
          <p style={{ color: "#b2dfb8", fontSize: 16, lineHeight: 1.8, maxWidth: 520 }}>
            The visionary founder of Rastriya Krishi Company Nepal Limited, Mr. Bishal Humagain established the company with the mission of transforming Nepal's agricultural landscape through the "From Soil To Success" initiative.
          </p>
        </div>
      </div>

      {/* Other board members */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {[
          { name: "Executive Director", dept: "Strategy & Planning", icon: "👩‍💼" },
          { name: "Independent Director", dept: "Finance & Audit", icon: "👨‍💼" },
          { name: "Independent Director", dept: "Agriculture & Policy", icon: "👩‍💼" },
        ].map((m, i) => (
          <div key={i} className="person-card">
            <div style={{ height: 180, background: "linear-gradient(135deg,#e8f5e9,#f0faf2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>
              {m.icon}
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ background: LIGHT, color: GREEN, borderRadius: 50, padding: "4px 14px", fontSize: 11, fontWeight: 700, display: "inline-block", marginBottom: 10, border: "1px solid #c8e6c9" }}>
                {m.dept}
              </div>
              <h4 style={{ color: DARK, fontWeight: 700, fontSize: 17, fontFamily: "'Playfair Display', serif" }}>{m.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagementSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Our Team</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Management Team</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Dedicated professionals driving our mission forward with passion, expertise, and a deep commitment to Nepal's farmers.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {MANAGEMENT.map((m, i) => (
          <div key={i} className="person-card">
            <div style={{ height: 200, background: `linear-gradient(135deg,${["#e8f5e9","#e3f2fd","#fce4ec","#fff8e1","#f3e5f5","#e0f7fa"][i % 6]},#f9f9f9)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>
              {["👨‍💼","👩‍💼","👨‍💼","👩‍🌾","👨‍💻","👩‍💼"][i]}
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ background: LIGHT, color: GREEN, borderRadius: 50, padding: "4px 14px", fontSize: 11, fontWeight: 700, display: "inline-block", marginBottom: 10, border: "1px solid #c8e6c9" }}>{m.dept}</div>
              <h4 style={{ color: DARK, fontWeight: 700, fontSize: 16, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>{m.name}</h4>
              <p style={{ color: "#888", fontSize: 13, fontWeight: 600 }}>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProvinceSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Nationwide Presence</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Province Leaders</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          Rastriya Krishi operates across all 7 provinces of Nepal, with dedicated leaders ensuring our mission reaches every corner of the country.
        </p>
      </div>

      {/* Stats bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 52 }}>
        {[{ icon: "🗺️", value: "7", label: "Provinces Covered" }, { icon: "🏘️", value: "77+", label: "Districts Reached" }, { icon: "👨‍🌾", value: "5000+", label: "Farmers Empowered" }].map(s => (
          <div key={s.label} style={{ background: "linear-gradient(135deg,#f0faf2,#e8f5e9)", borderRadius: 18, padding: "28px 24px", textAlign: "center", border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 34, fontWeight: 800, color: GREEN, fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
            <div style={{ color: "#555", fontSize: 13, fontWeight: 600, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {PROVINCES.map(p => (
          <div key={p.no} className="province-row">
            <div style={{ width: 44, height: 44, borderRadius: 12, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: DARK, flexShrink: 0, border: "1px solid #e0e0e0" }}>
              P{p.no}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: DARK, fontSize: 16 }}>{p.name}</div>
              <div style={{ color: "#888", fontSize: 13, marginTop: 2 }}>Capital: {p.capital}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, color: "#666", fontWeight: 500 }}>{p.leader}</div>
              <div style={{ background: LIGHT, color: GREEN, fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 50, border: "1px solid #c8e6c9", display: "inline-block", marginTop: 4 }}>Active</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function AboutUsPage() {
  const [active, setActive] = useState(TABS[0]);

  const section = {
    "We, Our Mission & Vision": <MissionVisionSection />,
    "Objectives": <ObjectivesSection />,
    "Organogram": <OrganogramSection />,
    "Board of Director": <BoardSection />,
    "Management Team": <ManagementSection />,
    "Province Leaders": <ProvinceSection />,
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