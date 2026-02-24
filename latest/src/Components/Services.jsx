import { Link } from "react-router-dom";

const SERVICES = [
  {
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/08/Training-and-Technical-Assistance.png",
    title: "Training & Technical Assistance",
    desc: "Empowering farmers with modern techniques and expert agricultural knowledge.",
  },
  {
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/08/Agrotourism.png",
    title: "Agrotourism",
    desc: "Connecting urban communities with the roots of agriculture through immersive farm experiences.",
  },
  {
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/08/Market-Linkages-1.png",
    title: "Market Linkages",
    desc: "Bridging the gap between farmers and markets for fair pricing and wider reach.",
  },
  {
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/08/Sustainable-Practices-1.png",
    title: "Sustainable Practices",
    desc: "Promoting eco-friendly farming methods that preserve soil health for future generations.",
  },
  {
    img: "https://rastriyakrishi.com.np/wp-content/uploads/2024/08/Waste-Management-1.png",
    title: "Waste Management",
    desc: "Innovative solutions to convert agricultural waste into valuable resources.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: "#e8963a", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            What We Offer
          </div>
          <h2 style={{
            fontSize: 42, fontWeight: 800, color: "#1a3326",
            fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 16,
          }}>
            Our Services
          </h2>
          <p style={{ color: "#666", fontSize: 17, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            We offer comprehensive training, technical assistance, agritourism experiences, market linkages, sustainable practices, and waste management solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff", borderRadius: 16, overflow: "hidden",
                border: "1px solid #fff3e0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                transition: "all 0.3s", cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(232,150,58,0.2)";
                e.currentTarget.style.borderColor = "#e8963a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "#fff3e0";
              }}
            >
              <div style={{ height: 140, overflow: "hidden", background: "#fff3e0" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 16 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a3326", marginBottom: 8, lineHeight: 1.4 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 12, color: "#777", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link to="/services" style={{
            background: "linear-gradient(135deg, #e8963a, #f39c12, #2d7a3a)",
            color: "#fff", padding: "14px 36px", borderRadius: 10,
            textDecoration: "none", fontWeight: 700, fontSize: 15,
            boxShadow: "0 8px 24px rgba(232,150,58,0.4)",
          }}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
