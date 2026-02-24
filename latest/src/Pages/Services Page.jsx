import { useState } from "react";

const SERVICES = [
  {
    icon: "🎓",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
    title: "Training & Technical Assistance",
    tagline: "Knowledge that transforms livelihoods",
    desc: "We empower farmers with modern agricultural techniques through hands-on workshops, field demonstrations, and expert consultations. Our certified agronomists provide personalized support to help you maximize yield sustainably.",
    features: ["Soil health assessment", "Crop planning & rotation", "Pest & disease management", "Modern irrigation techniques", "Post-harvest handling"],
    stat: { value: "200+", label: "Programs annually" },
    color: "#2d7a3a",
    bg: "#e8f5e9",
  },
  {
    icon: "🌿",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
    title: "Agrotourism",
    tagline: "Connecting people with the land",
    desc: "We design immersive farm experience programs that bring urban communities closer to agriculture. From guided farm walks to harvest festivals, our agrotourism initiatives create additional income streams for our farmers.",
    features: ["Guided farm tours", "Harvest experiences", "Farm-to-table events", "Educational programs", "Cultural immersion"],
    stat: { value: "30+", label: "Partner farms" },
    color: "#388e3c",
    bg: "#f0faf2",
  },
  {
    icon: "🤝",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
    title: "Market Linkages",
    tagline: "Fair prices, direct connections",
    desc: "We eliminate unnecessary middlemen by directly connecting our farmers with buyers — from local markets to supermarket chains, restaurants, and export partners. Transparent pricing and guaranteed offtake agreements protect farmer income.",
    features: ["Direct buyer connections", "Price transparency", "Offtake agreements", "Export assistance", "Digital marketplace"],
    stat: { value: "500+", label: "Buyers connected" },
    color: "#1565c0",
    bg: "#e3f2fd",
  },
  {
    icon: "♻️",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop",
    title: "Sustainable Practices",
    tagline: "Farming in harmony with nature",
    desc: "Our sustainability programs help farmers transition to eco-friendly methods without sacrificing yield. We promote organic certification, water conservation, and biodiversity practices that protect Nepal's fertile land for future generations.",
    features: ["Organic certification support", "Water conservation methods", "Natural pest control", "Biodiversity farming", "Carbon footprint reduction"],
    stat: { value: "1,200+", label: "Farmers certified" },
    color: "#6a1b9a",
    bg: "#f3e5f5",
  },
  {
    icon: "🗑️",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
    title: "Waste Management",
    tagline: "Turning waste into wealth",
    desc: "Our innovative waste management solutions convert agricultural byproducts into valuable resources. From composting programs to biogas installations, we help farmers create circular economies that reduce costs and protect the environment.",
    features: ["Composting systems", "Biogas plant support", "Vermicomposting", "Crop residue utilization", "Liquid fertilizer production"],
    stat: { value: "50T+", label: "Waste recycled monthly" },
    color: "#bf360c",
    bg: "#fbe9e7",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ fontFamily: "'Merriweather Sans', 'Segoe UI', sans-serif", color: "#1a2e1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{
        background: "linear-gradient(135deg, #1a4d2e, #2d7a3a)",
        padding: "100px 24px 80px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            What We Offer
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 20, lineHeight: 1.15 }}>
            Our Services
          </h1>
          <p style={{ color: "#a5d6a7", fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Comprehensive support for Nepalese farmers — from training and market access to sustainability and waste management.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section style={{ padding: "80px 24px 100px", background: "#f8fffe" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1.1fr" : "1.1fr 1fr",
                  gap: 48, alignItems: "center",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    borderRadius: 24, overflow: "hidden",
                    height: 360, boxShadow: "0 16px 60px rgba(0,0,0,0.12)",
                    position: "relative",
                    transform: hovered === i ? "scale(1.02)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Stat overlay */}
                  <div style={{
                    position: "absolute", bottom: 20, left: 20,
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: 14, padding: "14px 20px",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: svc.color, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>
                      {svc.stat.value}
                    </div>
                    <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{svc.stat.label}</div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: svc.bg, borderRadius: 50,
                    padding: "6px 16px", marginBottom: 20,
                  }}>
                    <span style={{ fontSize: 18 }}>{svc.icon}</span>
                    <span style={{ color: svc.color, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                      {svc.tagline}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: 34, fontWeight: 800, color: "#1a3326",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.2, marginBottom: 16,
                  }}>
                    {svc.title}
                  </h2>
                  <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                    {svc.desc}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    {svc.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: svc.bg, display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, fontSize: 13,
                        }}>
                          <span style={{ color: svc.color }}>✓</span>
                        </div>
                        <span style={{ color: "#444", fontSize: 15 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActiveService(svc)}
                    style={{
                      background: svc.color, color: "#fff",
                      border: "none", padding: "14px 32px", borderRadius: 12,
                      fontWeight: 700, fontSize: 15, cursor: "pointer",
                      fontFamily: "inherit", transition: "transform 0.2s, box-shadow 0.2s",
                      boxShadow: `0 8px 24px ${svc.color}40`,
                    }}
                    onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.target.style.transform = ""; }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "0 24px 100px", background: "#f8fffe" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #1a4d2e, #2d7a3a)",
            borderRadius: 28, padding: "72px 48px",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: 36, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>
                Ready to Get Started?
              </h3>
              <p style={{ color: "#a5d6a7", fontSize: 17, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.75 }}>
                Contact us today and one of our agricultural experts will help you find the right service for your farming needs.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/contact" style={{
                  background: "#fff", color: "#2d7a3a",
                  padding: "16px 40px", borderRadius: 12,
                  textDecoration: "none", fontWeight: 700, fontSize: 15,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}>
                  Contact Us
                </a>
                <a href="tel:015922911" style={{
                  background: "transparent", color: "#fff",
                  padding: "16px 40px", borderRadius: 12,
                  textDecoration: "none", fontWeight: 700, fontSize: 15,
                  border: "2px solid rgba(255,255,255,0.4)",
                }}>
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE MODAL ─── */}
      {activeService && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.75)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            style={{
              background: "#fff", borderRadius: 24,
              maxWidth: 700, width: "100%",
              maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ height: 260, overflow: "hidden", borderRadius: "24px 24px 0 0", position: "relative" }}>
              <img src={activeService.img} alt={activeService.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <button
                onClick={() => setActiveService(null)}
                style={{
                  position: "absolute", top: 16, right: 16,
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(0,0,0,0.4)", border: "none",
                  color: "#fff", fontSize: 16, cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: "36px 40px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: activeService.bg, borderRadius: 50,
                padding: "5px 14px", marginBottom: 16,
              }}>
                <span style={{ fontSize: 16 }}>{activeService.icon}</span>
                <span style={{ color: activeService.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                  {activeService.tagline}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a3326", fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>
                {activeService.title}
              </h2>
              <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>{activeService.desc}</p>

              <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1a3326", marginBottom: 16 }}>What's Included:</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {activeService.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: activeService.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: activeService.color, fontSize: 13 }}>✓</span>
                    </div>
                    <span style={{ color: "#444", fontSize: 15 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                style={{
                  display: "block", textAlign: "center",
                  background: activeService.color, color: "#fff",
                  padding: "16px", borderRadius: 12,
                  textDecoration: "none", fontWeight: 700, fontSize: 16,
                }}
              >
                Request This Service →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}