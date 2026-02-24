export default function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #0d3320 0%, #1a4d2e 30%, #2d7a3a 60%, #e8963a 100%)",
      minHeight: "92vh", display: "flex", alignItems: "center",
    }}>
      {/* Decorative Circles - Green and Orange */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, background: "rgba(76,175,80,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -150, left: -80, width: 400, height: 400, background: "rgba(232,150,58,0.1)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "15%", width: 200, height: 200, background: "rgba(255,255,255,0.03)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "10%", width: 150, height: 150, background: "rgba(232,150,58,0.06)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "80px 24px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 60, alignItems: "center", width: "100%", position: "relative", zIndex: 1,
      }}>
        {/* Left Content */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, rgba(45,122,58,0.3), rgba(232,150,58,0.2))", border: "1px solid rgba(232,150,58,0.4)",
            borderRadius: 50, padding: "6px 16px", marginBottom: 24,
            color: "#e8963a", fontSize: 13, fontWeight: 600,
          }}>
            🌿 From Soil To Success
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#fff",
            lineHeight: 1.15, marginBottom: 24,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Transforming Nepal's<br />
            <span style={{ color: "#e8963a" }}>Agricultural</span><br />
            Landscape
          </h1>

          <p style={{ color: "#b2dfdb", fontSize: 18, lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>
            Rastriya Krishi Company Nepal Limited is dedicated to empowering farmers, integrating sustainable practices, and delivering fresh, high-quality produce directly to your doorstep.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#products" style={{
              background: "linear-gradient(135deg, #e8963a, #f39c12, #4caf50)",
              color: "#fff", padding: "14px 32px", borderRadius: 10,
              textDecoration: "none", fontWeight: 700, fontSize: 16,
              boxShadow: "0 8px 24px rgba(232,150,58,0.4)",
            }}>
              Explore Products
            </a>
            <a href="#services" style={{
              border: "2px solid #e8963a", color: "#e8963a",
              padding: "14px 32px", borderRadius: 10, textDecoration: "none",
              fontWeight: 600, fontSize: 16, backdropFilter: "blur(4px)",
            }}>
              Our Services →
            </a>
          </div>

          {/* Mini Stats */}
          <div style={{
            display: "flex", gap: 40, marginTop: 56,
            paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)",
          }}>
            {[["5000+", "Farmers"], ["7", "Provinces"], ["50+", "Products"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: "#e8963a", fontSize: 28, fontWeight: 800, fontFamily: "serif" }}>{n}</div>
                <div style={{ color: "#80cbc4", fontSize: 13, fontWeight: 500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div style={{ position: "relative" }}>
          <div style={{
            borderRadius: 24, overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <img
              src="https://rastriyakrishi.com.np/wp-content/uploads/2024/09/5-1024x585.png"
              alt="Rastriya Krishi Farm"
              style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=420&fit=crop"; }}
            />
          </div>

          {/* Floating Badge */}
          <div style={{
            position: "absolute", bottom: -20, left: -20,
            background: "linear-gradient(135deg, #fff, #fff3e0)", borderRadius: 16, padding: "16px 20px",
            boxShadow: "0 8px 32px rgba(232,150,58,0.3)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 48, height: 48, background: "linear-gradient(135deg, #e8963a, #f39c12)", borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
            }}>🌾</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e8963a" }}>100% Fresh</div>
              <div style={{ fontSize: 12, color: "#666" }}>Farm to Table</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
