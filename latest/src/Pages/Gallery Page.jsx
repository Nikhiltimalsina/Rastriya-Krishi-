export default function GalleryPage() {
  return (
    <div style={{ fontFamily: "'Merriweather Sans', 'Segoe UI', sans-serif", color: "#1a2e1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1a4d2e, #2d7a3a)",
        padding: "100px 24px 80px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Our Work
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 20, lineHeight: 1.15 }}>
            Gallery
          </h1>
          <p style={{ color: "#a5d6a7", fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Explore moments from our farms, events, and farmer stories.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "80px 24px 100px", background: "#f8fffe" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: 24 
          }}>
            {[
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
            ].map((src, i) => (
              <div key={i} style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}>
                <img 
                  src={src} 
                  alt={`Gallery ${i + 1}`} 
                  style={{ width: "100%", height: 280, objectFit: "cover" }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
