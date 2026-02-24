const STATS = [
  { value: "10+", label: "Years of Experience", icon: "📅" },
  { value: "5000+", label: "Farmers Empowered", icon: "👨‍🌾" },
  { value: "7", label: "Provinces Covered", icon: "🗺️" },
  { value: "50+", label: "Products & Services", icon: "🌿" },
];

export default function Stats() {
  return (
    <section style={{ background: "#fff", padding: "60px 24px" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
      }}>
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background: "linear-gradient(135deg, #fff3e0, #fff8e1)",
              borderRadius: 16, padding: "32px 24px", textAlign: "center",
              border: "1px solid #ffe0b2", transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(232,150,58,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ fontSize: 40, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#e8963a", fontFamily: "'Playfair Display', Georgia, serif" }}>{s.value}</div>
            <div style={{ color: "#555", fontSize: 14, fontWeight: 500, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
