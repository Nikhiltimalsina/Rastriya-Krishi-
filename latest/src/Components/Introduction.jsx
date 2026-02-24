export default function Introduction() {
  return (
    <section id="introduction" style={{ padding: "100px 24px", background: "#fafffe" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        {/* Text Content */}
        <div>
          <div style={{ color: "#4caf50", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Our Story
          </div>
          <h2 style={{
            fontSize: 42, fontWeight: 800, color: "#1a3326",
            lineHeight: 1.25, marginBottom: 24,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Introduction
          </h2>
          <p style={{ color: "#555", fontSize: 17, lineHeight: 1.9, marginBottom: 24 }}>
            Mr. Bishal Humagain, the founder of Rastriya Krishi Company Nepal Limited, established the company with the ambitious vision of transforming Nepal's agricultural landscape. This vision is encapsulated in the initiative{" "}
            <strong style={{ color: "#2d7a3a" }}>"From Soil To Success,"</strong>{" "}
            which emphasizes the potential of agriculture as the cornerstone of Nepal's economic independence, sovereignty, and dignity.
          </p>
          <a
            href="/about"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "#e8963a", fontWeight: 700, fontSize: 15, textDecoration: "none",
              borderBottom: "2px solid #e8963a", paddingBottom: 4,
            }}
          >
            Read More About Us →
          </a>
        </div>

        {/* Image */}
        <div style={{ position: "relative" }}>
          <img
            src="https://rastriyakrishi.com.np/wp-content/uploads/2024/09/5-1024x585.png"
            alt="Introduction"
            style={{
              width: "100%", borderRadius: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              objectFit: "cover", height: 380,
            }}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=380&fit=crop"; }}
          />
          {/* Decorative Icon */}
          <div style={{
            position: "absolute", top: -24, right: -24,
            width: 100, height: 100,
            background: "linear-gradient(135deg, #4caf50, #2d7a3a)",
            borderRadius: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 44, boxShadow: "0 8px 24px rgba(76,175,80,0.3)",
          }}>
            🏆
          </div>
        </div>
      </div>
    </section>
  );
}
