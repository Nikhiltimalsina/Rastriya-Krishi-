const ITEMS = [
  {
    title: "Our Mission",
    icon: "🎯",
    text: "To revolutionize agriculture by integrating sustainable practices, modern technology, and efficient market linkages. We aim to empower farmers, improve productivity, and ensure environmental sustainability.",
  },
  {
    title: "Our Vision",
    icon: "🔭",
    text: "To be a leading agricultural enterprise that fosters sustainable agriculture, enhances food security, and supports rural development while contributing to the overall well-being of our community.",
  },
];

export default function MissionVision() {
  return (
    <section id="mission-vision" style={{
      padding: "100px 24px",
      background: "linear-gradient(135deg, #1a4d2e 0%, #2d7a3a 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background Decoration */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 600, height: 600,
        background: "rgba(255,255,255,0.03)",
        borderRadius: "50%",
        transform: "translate(200px,-200px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Who We Are
          </div>
          <h2 style={{
            fontSize: 42, fontWeight: 800, color: "#fff",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Our Mission & Vision
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 20, padding: "48px 40px",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
              <h3 style={{
                color: "#81c784", fontSize: 24, fontWeight: 700,
                marginBottom: 16, fontFamily: "'Playfair Display', Georgia, serif",
              }}>
                {item.title}
              </h3>
              <p style={{ color: "#b2dfdb", fontSize: 16, lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/about" style={{
            background: "linear-gradient(135deg, #e8963a, #f39c12)",
            color: "#fff",
            padding: "14px 36px", borderRadius: 10,
            textDecoration: "none", fontWeight: 700, fontSize: 15,
            boxShadow: "0 8px 24px rgba(232,150,58,0.4)",
          }}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
