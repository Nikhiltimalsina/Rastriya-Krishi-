import { useState } from "react";

const GREEN = "#2d7a3a";
const DARK  = "#1a3326";
const LIGHT = "#f0faf2";

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Merriweather Sans', 'Segoe UI', sans-serif; }

  .r-tab { cursor: pointer; padding: 10px 20px; border-radius: 30px; border: 1.5px solid #ddd;
    font-size: 13px; font-weight: 700; transition: all .2s; background: #fff; color: #555;
    font-family: 'Merriweather Sans', sans-serif; white-space: nowrap; }
  .r-tab.active { background: ${GREEN}; color: #fff; border-color: ${GREEN}; }
  .r-tab:hover:not(.active) { border-color: ${GREEN}; color: ${GREEN}; }

  .blog-card { background:#fff; border-radius:18px; overflow:hidden; border:1px solid #e8f5e9;
    box-shadow:0 4px 20px rgba(0,0,0,0.07); transition:transform .25s,box-shadow .25s; cursor:pointer; }
  .blog-card:hover { transform:translateY(-6px); box-shadow:0 16px 44px rgba(0,0,0,0.12); }

  .notice-row { display:flex; gap:16px; align-items:flex-start; padding:20px 24px;
    border-radius:14px; border:1px solid #e8f5e9; background:#fff; transition:all .2s; cursor:pointer; }
  .notice-row:hover { background:${LIGHT}; border-color:#a5d6a7; }

  .career-card { background:#fff; border-radius:20px; padding:28px 32px; border:1px solid #e8f5e9;
    box-shadow:0 4px 20px rgba(0,0,0,0.06); transition:all .25s; }
  .career-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.11); border-color:#a5d6a7; }

  .download-row { display:flex; gap:16px; align-items:center; padding:18px 24px;
    border-radius:14px; border:1px solid #e8f5e9; background:#fff; transition:all .2s; }
  .download-row:hover { background:${LIGHT}; border-color:#a5d6a7; }
`;

const TABS = ["Blogs", "Farmers Empowerment Program", "CSR Activities", "Training Activities", "Notices", "Career", "Grievance", "Downloads"];

/* ─── DATA ─── */
const BLOGS = [
  {
    title: "राष्ट्रिय कृषि कम्पनीद्वारा जनकपुरमा कृषि रूपान्तरण कार्यक्रम",
    category: "Programs", date: "Sep 22, 2024",
    excerpt: "Rastriya Krishi Company successfully organized an agriculture transformation and empowerment program in Janakpur, reaching hundreds of local farmers.",
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/09/cropped-Janakpur-Participants-300x157.jpg",
    lang: "NP",
  },
  {
    title: "The Importance of Crop Diversification",
    category: "Agriculture", date: "Jul 31, 2024",
    excerpt: "Crop diversification is the practice of growing a variety of crops on a farm rather than relying on a single crop, offering numerous benefits.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=240&fit=crop",
    lang: "EN",
  },
  {
    title: "How to Grow Your Own Vegetables?",
    category: "Gardening", date: "Jul 31, 2024",
    excerpt: "Growing your own vegetables is a rewarding way to enjoy fresh, organic produce right from your backyard or balcony — cost-effective and satisfying.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=240&fit=crop",
    lang: "EN",
  },
  {
    title: "Tips for Home Composting",
    category: "Sustainability", date: "Jul 31, 2024",
    excerpt: "Home composting is an effective way to recycle organic waste and create nutrient-rich soil for your garden, reducing waste sent to landfills.",
    img: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400&h=240&fit=crop",
    lang: "EN",
  },
  {
    title: "The Benefits of Sustainable Agriculture",
    category: "Sustainability", date: "Jul 31, 2024",
    excerpt: "Sustainable agriculture is a farming approach that focuses on producing food using techniques that protect the environment, public health, and animal welfare.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=240&fit=crop",
    lang: "EN",
  },
];

const NOTICES = [
  { title: "Vacancy Announcement — Field Officer (Multiple Provinces)", date: "Feb 2025", type: "Career", urgent: true },
  { title: "Board Meeting Agenda — Q1 2025", date: "Jan 2025", type: "Governance", urgent: false },
  { title: "Farmers Registration Open — Spring Season 2025", date: "Jan 2025", type: "Program", urgent: true },
  { title: "Annual General Meeting Notice 2024", date: "Dec 2024", type: "Governance", urgent: false },
  { title: "Procurement Tender — Agri Equipment", date: "Nov 2024", type: "Tender", urgent: false },
  { title: "Training Program Registration — Organic Farming", date: "Oct 2024", type: "Training", urgent: false },
];

const CAREERS = [
  { title: "Field Agriculture Officer", dept: "Operations", location: "Multiple Provinces", type: "Full Time", deadline: "Mar 2025" },
  { title: "Marketing & Communications Executive", dept: "Marketing", location: "Kathmandu HQ", type: "Full Time", deadline: "Mar 2025" },
  { title: "Finance & Accounts Officer", dept: "Finance", location: "Kathmandu HQ", type: "Full Time", deadline: "Feb 2025" },
  { title: "IT Support Specialist", dept: "Technology", location: "Kathmandu HQ", type: "Full Time", deadline: "Feb 2025" },
];

const DOWNLOADS = [
  { name: "Company Profile 2024", size: "2.4 MB", type: "PDF", icon: "📄" },
  { name: "Annual Report 2023-24", size: "5.8 MB", type: "PDF", icon: "📊" },
  { name: "Farmers Empowerment Program Brochure", size: "1.2 MB", type: "PDF", icon: "📋" },
  { name: "Product Catalog — Fresh Produce", size: "3.1 MB", type: "PDF", icon: "🌾" },
  { name: "Training Calendar 2025", size: "0.8 MB", type: "PDF", icon: "📅" },
  { name: "CSR Activities Report 2024", size: "2.0 MB", type: "PDF", icon: "🤝" },
  { name: "Organogram Chart", size: "0.5 MB", type: "PDF", icon: "🏢" },
  { name: "Grievance Policy Document", size: "0.3 MB", type: "PDF", icon: "📝" },
];

/* ─── Hero ─── */
function Hero({ active }) {
  const map = {
    "Blogs": "Insights, stories, and updates from the world of Nepalese agriculture.",
    "Farmers Empowerment Program": "Our flagship program transforming the lives of farming families across Nepal.",
    "CSR Activities": "Our commitment to communities, environment, and sustainable development.",
    "Training Activities": "Skill-building programs empowering farmers and agri-professionals.",
    "Notices": "Official announcements, tenders, and important updates.",
    "Career": "Join our mission — build a career that makes a real difference.",
    "Grievance": "We listen. Share your concerns and we will respond with care.",
    "Downloads": "Access our reports, brochures, and important documents.",
  };
  return (
    <section style={{ background: "linear-gradient(135deg,#1a4d2e 0%,#2d7a3a 55%,#43a047 100%)", padding: "90px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -50, left: "6%", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Resources</div>
        <h1 style={{ fontSize: 54, fontWeight: 900, color: "#fff", fontFamily: "'Playfair Display', serif", lineHeight: 1.15, marginBottom: 18 }}>{active}</h1>
        <p style={{ color: "#b2dfb8", fontSize: 17, maxWidth: 580, margin: "0 auto", lineHeight: 1.8 }}>{map[active]}</p>
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
            <button key={t} className={`r-tab${active === t ? " active" : ""}`} onClick={() => setActive(t)}>{t}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Sections ─── */
function BlogsSection() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", "Programs", "Agriculture", "Gardening", "Sustainability"];
  const filtered = BLOGS.filter(b =>
    (cat === "All" || b.category === cat) &&
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      {/* Search & filter */}
      <div style={{ display: "flex", gap: 16, marginBottom: 48, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍  Search blogs…"
          style={{ flex: 1, minWidth: 200, padding: "12px 18px", border: "1.5px solid #e0e0e0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none" }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: "8px 18px", borderRadius: 30, border: "1.5px solid", borderColor: cat === c ? GREEN : "#ddd", background: cat === c ? GREEN : "#fff", color: cat === c ? "#fff" : "#555", fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all .2s", fontFamily: "inherit" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {filtered.map(b => (
          <article key={b.title} className="blog-card">
            <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
              <img src={b.img} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=240&fit=crop"; }} />
              {b.lang === "NP" && (
                <div style={{ position: "absolute", top: 12, right: 12, background: "#ff7043", color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 50 }}>नेपाली</div>
              )}
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ background: LIGHT, color: GREEN, borderRadius: 50, padding: "4px 12px", fontSize: 11, fontWeight: 700, border: "1px solid #c8e6c9" }}>{b.category}</span>
                <span style={{ color: "#999", fontSize: 12 }}>{b.date}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, lineHeight: 1.45, marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>{b.title}</h3>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{b.excerpt}</p>
              <a href="#" style={{ color: GREEN, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Read More →</a>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>No blogs found matching your search.</div>
      )}
    </div>
  );
}

function ProgramSection({ type }) {
  const data = {
    "Farmers Empowerment Program": {
      icon: "👨‍🌾", color: "#e8f5e9",
      intro: "Our flagship Farmers Empowerment Program is the cornerstone of Rastriya Krishi's social mission. Since inception, we have reached over 5,000 farming families across all 7 provinces of Nepal, providing them with the knowledge, tools, and market access to transform their livelihoods.",
      highlights: [
        { icon: "📚", title: "Training & Education", text: "Modern agricultural techniques, soil management, and crop planning workshops conducted at village level." },
        { icon: "💰", title: "Financial Inclusion", text: "Connecting farmers to micro-credit, insurance, and savings programs tailored for the agri sector." },
        { icon: "🔗", title: "Market Linkages", text: "Direct farm-to-market connections eliminating middlemen and ensuring fair prices for farmers." },
        { icon: "🌱", title: "Input Support", text: "Subsidized access to quality seeds, fertilizers, and agricultural inputs for enrolled farmers." },
        { icon: "📱", title: "Digital Tools", text: "Mobile apps and digital platforms to access market prices, weather data, and expert advice." },
        { icon: "🤝", title: "Cooperative Building", text: "Formation and strengthening of farmer cooperatives for collective bargaining and resource sharing." },
      ],
      stats: [{ v: "5000+", l: "Farmers Enrolled" }, { v: "7", l: "Provinces" }, { v: "100+", l: "Villages" }, { v: "10+", l: "Years Running" }],
      gallery: [
        "https://rastriyakrishi.com.np/wp-content/uploads/2024/09/cropped-Janakpur-Participants-300x157.jpg",
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=240&fit=crop",
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=240&fit=crop",
      ],
    },
    "CSR Activities": {
      icon: "🌍", color: "#e0f7fa",
      intro: "At Rastriya Krishi, Corporate Social Responsibility is not an afterthought — it is embedded in our DNA. Our CSR activities focus on environmental sustainability, rural community development, education support, and health & nutrition programs.",
      highlights: [
        { icon: "🌳", title: "Tree Plantation Drives", text: "Annual plantation campaigns across all provinces, planting thousands of trees to restore green cover." },
        { icon: "🏫", title: "Education Support", text: "Scholarships and school support programs for children of farmer families in rural areas." },
        { icon: "💧", title: "Water & Sanitation", text: "Irrigation infrastructure and clean water projects benefiting farming communities." },
        { icon: "♻️", title: "Waste Management", text: "Organic waste composting programs turning agricultural waste into valuable inputs." },
        { icon: "🏥", title: "Health Camps", text: "Free medical check-up camps for farmers and their families in remote areas." },
        { icon: "👩‍🦱", title: "Women Empowerment", text: "Special programs focused on empowering women farmers with training and business support." },
      ],
      stats: [{ v: "10000+", l: "Trees Planted" }, { v: "500+", l: "Women Empowered" }, { v: "50+", l: "Communities" }, { v: "25+", l: "CSR Events" }],
      gallery: [
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=240&fit=crop",
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b7?w=400&h=240&fit=crop",
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=240&fit=crop",
      ],
    },
    "Training Activities": {
      icon: "🎓", color: "#f3e5f5",
      intro: "Knowledge is the most powerful tool a farmer can have. Our Training Activities division runs year-round programs designed to upskill farmers, agri-entrepreneurs, and agricultural professionals across Nepal.",
      highlights: [
        { icon: "🌾", title: "Modern Farming Techniques", text: "Hands-on training in scientific farming, crop rotation, and yield optimization." },
        { icon: "🧪", title: "Soil Testing & Analysis", text: "Practical training on soil testing, interpretation, and soil health improvement." },
        { icon: "💧", title: "Irrigation Management", text: "Drip irrigation, rainwater harvesting, and efficient water use techniques." },
        { icon: "🐄", title: "Animal Husbandry", text: "Livestock care, dairy farming, and integrated farming system training." },
        { icon: "📦", title: "Post-Harvest Management", text: "Proper storage, grading, packaging, and value addition techniques." },
        { icon: "💼", title: "Agri Business Skills", text: "Business planning, costing, marketing, and financial management for farmers." },
      ],
      stats: [{ v: "200+", l: "Trainings Held" }, { v: "8000+", l: "Participants" }, { v: "50+", l: "Expert Trainers" }, { v: "12", l: "Training Modules" }],
      gallery: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=240&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=240&fit=crop",
      ],
    },
  };

  const d = data[type];
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      {/* Intro */}
      <div style={{ background: `linear-gradient(135deg,${d.color},#fff)`, borderRadius: 24, padding: "52px 56px", marginBottom: 64, border: "1px solid #e0e0e0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, alignItems: "flex-start" }}>
          <div style={{ width: 80, height: 80, borderRadius: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            {d.icon}
          </div>
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>{type}</h2>
            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85 }}>{d.intro}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 64 }}>
        {d.stats.map(s => (
          <div key={s.l} style={{ background: "linear-gradient(135deg,#f0faf2,#e8f5e9)", borderRadius: 18, padding: "28px", textAlign: "center", border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: GREEN, fontFamily: "'Playfair Display', serif" }}>{s.v}</div>
            <div style={{ color: "#555", fontSize: 13, fontWeight: 600, marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Key Activities</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif" }}>What We Do</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 64 }}>
        {d.highlights.map(h => (
          <div key={h.title} style={{ background: "#fff", borderRadius: 18, padding: "30px 26px", border: "1px solid #e8f5e9", boxShadow: "0 4px 18px rgba(0,0,0,0.06)", transition: "all .2s" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, border: "1px solid #c8e6c9" }}>{h.icon}</div>
            <h4 style={{ color: DARK, fontWeight: 700, fontSize: 16, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>{h.title}</h4>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75 }}>{h.text}</p>
          </div>
        ))}
      </div>

      {/* Photo gallery */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <h3 style={{ fontSize: 30, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif" }}>Gallery</h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 52 }}>
        {d.gallery.map((img, i) => (
          <div key={i} style={{ borderRadius: 16, overflow: "hidden", height: 200 }}>
            <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=240&fit=crop"; }} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#1a4d2e,#2d7a3a)", borderRadius: 22, padding: "44px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
        <div>
          <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>Want to Participate?</h3>
          <p style={{ color: "#b2dfb8", fontSize: 15, lineHeight: 1.7 }}>Register your interest or contact us to learn more about upcoming {type.toLowerCase()} sessions.</p>
        </div>
        <a href="mailto:info@rastriyakrishi.com.np" style={{ background: "#fff", color: GREEN, padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
          Contact Us →
        </a>
      </div>
    </div>
  );
}

function NoticesSection() {
  const types = ["Career", "Governance", "Program", "Training", "Tender"];
  const colors = { Career: "#e8f5e9", Governance: "#e3f2fd", Program: "#fff8e1", Training: "#f3e5f5", Tender: "#fce4ec" };
  const textColors = { Career: GREEN, Governance: "#1565c0", Program: "#f57f17", Training: "#6a1b9a", Tender: "#c62828" };
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Official</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif" }}>Notices & Announcements</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {NOTICES.map((n, i) => (
          <div key={i} className="notice-row">
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: n.urgent ? "#f44336" : "#c8e6c9", flexShrink: 0, marginTop: 4 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: DARK, fontSize: 15, marginBottom: 4 }}>{n.title}</div>
              <div style={{ color: "#999", fontSize: 12 }}>{n.date}</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
              {n.urgent && <span style={{ background: "#ffebee", color: "#c62828", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, border: "1px solid #ffcdd2" }}>Urgent</span>}
              <span style={{ background: colors[n.type], color: textColors[n.type], fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 50 }}>{n.type}</span>
              <a href="#" style={{ color: GREEN, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>View →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CareerSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Join Our Team</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Current Openings</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>Build a career that makes a real difference in the lives of Nepal's farmers and communities.</p>
      </div>

      {/* Why work with us */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 56 }}>
        {[
          { icon: "🌱", title: "Meaningful Work", text: "Impact thousands of farmers daily." },
          { icon: "📈", title: "Growth", text: "Fast-growing company with real career paths." },
          { icon: "🤝", title: "Great Culture", text: "Collaborative, supportive team environment." },
          { icon: "💰", title: "Fair Pay", text: "Competitive salaries and benefits." },
        ].map(w => (
          <div key={w.title} style={{ background: LIGHT, borderRadius: 18, padding: "24px 20px", textAlign: "center", border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>{w.icon}</div>
            <div style={{ fontWeight: 700, color: DARK, fontSize: 15, marginBottom: 6 }}>{w.title}</div>
            <div style={{ color: "#777", fontSize: 13 }}>{w.text}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {CAREERS.map((c, i) => (
          <div key={i} className="career-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ color: DARK, fontSize: 19, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>{c.title}</h3>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[{ icon: "🏢", v: c.dept }, { icon: "📍", v: c.location }, { icon: "💼", v: c.type }, { icon: "⏰", v: `Deadline: ${c.deadline}` }].map(t => (
                    <span key={t.v} style={{ display: "flex", alignItems: "center", gap: 5, color: "#666", fontSize: 13 }}>
                      <span>{t.icon}</span> {t.v}
                    </span>
                  ))}
                </div>
              </div>
              <a href="mailto:info@rastriyakrishi.com.np" style={{ background: "linear-gradient(135deg,#2d7a3a,#4caf50)", color: "#fff", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14, flexShrink: 0, boxShadow: "0 4px 16px rgba(45,122,58,0.25)" }}>
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, background: "#f8fffe", borderRadius: 20, padding: "36px 40px", border: "1px solid #e8f5e9", textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8 }}>
          Don't see a role that fits? Send your CV to{" "}
          <a href="mailto:info@rastriyakrishi.com.np" style={{ color: GREEN, fontWeight: 700, textDecoration: "none" }}>info@rastriyakrishi.com.np</a>
          {" "}and we'll keep you in mind for future openings.
        </p>
      </div>
    </div>
  );
}

function GrievanceSection() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", details: "", anonymous: false });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>We Listen</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Grievance Portal</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
          Your concerns matter. We treat every grievance seriously and commit to responding within 5 business days. You may submit anonymously.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 52 }}>
        {[
          { icon: "🔒", title: "Confidential", text: "Your submission is treated with complete confidentiality." },
          { icon: "⚡", title: "5-Day Response", text: "We commit to responding within 5 business days." },
          { icon: "👤", title: "Anonymous Option", text: "You may choose to submit without revealing your identity." },
        ].map(g => (
          <div key={g.title} style={{ background: LIGHT, borderRadius: 16, padding: "24px 20px", textAlign: "center", border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>{g.icon}</div>
            <div style={{ fontWeight: 700, color: DARK, fontSize: 15, marginBottom: 6 }}>{g.title}</div>
            <div style={{ color: "#777", fontSize: 13, lineHeight: 1.6 }}>{g.text}</div>
          </div>
        ))}
      </div>

      {sent ? (
        <div style={{ background: "linear-gradient(135deg,#e8f5e9,#f0faf2)", border: "1px solid #c8e6c9", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
          <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: GREEN, fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>Grievance Submitted</h3>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8 }}>Thank you for reaching out. Our team will review your submission and respond within 5 business days.</p>
          <button onClick={() => { setSent(false); setForm({ name: "", contact: "", subject: "", details: "", anonymous: false }); }} style={{ marginTop: 24, background: GREEN, color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, fontWeight: 700, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>Submit Another</button>
        </div>
      ) : (
        <div style={{ background: "#fff", borderRadius: 24, padding: "52px 48px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: "1px solid #e8f5e9" }}>
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={handleChange} style={{ width: 18, height: 18, accentColor: GREEN }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#555" }}>Submit Anonymously</span>
            </label>
            {!form.anonymous && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[{ l: "Full Name *", n: "name", p: "Your name", req: true }, { l: "Phone / Email *", n: "contact", p: "Contact info", req: true }].map(f => (
                  <div key={f.n}>
                    <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: DARK, marginBottom: 8 }}>{f.l}</label>
                    <input name={f.n} value={form[f.n]} onChange={handleChange} placeholder={f.p} required={f.req} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0e0e0", borderRadius: 10, fontSize: 15, fontFamily: "inherit", outline: "none" }} />
                  </div>
                ))}
              </div>
            )}
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: DARK, marginBottom: 8 }}>Subject *</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject of your grievance" required style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0e0e0", borderRadius: 10, fontSize: 15, fontFamily: "inherit", outline: "none" }} />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: DARK, marginBottom: 8 }}>Details *</label>
              <textarea name="details" value={form.details} onChange={handleChange} placeholder="Please describe your grievance in detail…" required rows={6} style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e0e0e0", borderRadius: 10, fontSize: 15, fontFamily: "inherit", resize: "vertical", lineHeight: 1.6, outline: "none" }} />
            </div>
            <button type="submit" style={{ background: "linear-gradient(135deg,#2d7a3a,#4caf50)", color: "#fff", border: "none", padding: "16px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 24px rgba(45,122,58,0.3)", fontFamily: "inherit" }}>
              Submit Grievance →
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function DownloadsSection() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Documents</div>
        <h2 style={{ fontSize: 42, fontWeight: 800, color: DARK, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Downloads</h2>
        <p style={{ color: "#666", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>Access our official documents, reports, brochures, and resources.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {DOWNLOADS.map((d, i) => (
          <div key={i} className="download-row">
            <div style={{ width: 48, height: 48, borderRadius: 12, background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, border: "1px solid #c8e6c9" }}>{d.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: DARK, fontSize: 15 }}>{d.name}</div>
              <div style={{ color: "#999", fontSize: 12, marginTop: 3 }}>{d.type} · {d.size}</div>
            </div>
            <a href="mailto:info@rastriyakrishi.com.np" style={{ background: "linear-gradient(135deg,#2d7a3a,#4caf50)", color: "#fff", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 13, flexShrink: 0, boxShadow: "0 4px 12px rgba(45,122,58,0.2)" }}>
              ⬇ Download
            </a>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, background: "#fff8e1", borderRadius: 16, padding: "20px 28px", border: "1px solid #ffe082", display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ fontSize: 24 }}>📬</span>
        <p style={{ color: "#795548", fontSize: 14, lineHeight: 1.6 }}>
          Can't find what you're looking for? Email us at <strong>info@rastriyakrishi.com.np</strong> and we'll send you the required document directly.
        </p>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [active, setActive] = useState(TABS[0]);
  const section = {
    "Blogs": <BlogsSection />,
    "Farmers Empowerment Program": <ProgramSection type="Farmers Empowerment Program" />,
    "CSR Activities": <ProgramSection type="CSR Activities" />,
    "Training Activities": <ProgramSection type="Training Activities" />,
    "Notices": <NoticesSection />,
    "Career": <CareerSection />,
    "Grievance": <GrievanceSection />,
    "Downloads": <DownloadsSection />,
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