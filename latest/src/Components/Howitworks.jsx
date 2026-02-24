const STEPS = [
  {
    step: "01",
    title: "Source from Farmers",
    desc: "We partner directly with local farmers across Nepal's 7 provinces to source the freshest produce.",
    icon: "🌾",
  },
  {
    step: "02",
    title: "Quality Control",
    desc: "Every product undergoes rigorous quality checks to meet national and international standards.",
    icon: "✅",
  },
  {
    step: "03",
    title: "Processing & Packaging",
    desc: "Modern processing facilities ensure freshness and hygiene are maintained throughout.",
    icon: "📦",
  },
  {
    step: "04",
    title: "Market Delivery",
    desc: "Efficient logistics network delivers products to markets, retailers, and directly to consumers.",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ color: "#4caf50", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            The Process
          </div>
          <h2 style={{
            fontSize: 42, fontWeight: 800, color: "#1a3326",
            fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 16,
          }}>
            How It Works
          </h2>
          <p style={{ color: "#555", fontSize: 18, fontStyle: "italic" }}>
            "Empowering Agriculture, Enriching Lives"
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, position: "relative" }}>
          {/* Connecting Line */}
          <div style={{
            position: "absolute", top: 60, left: "12%", right: "12%",
            height: 2,
            background: "linear-gradient(90deg, #4caf50, #81c784, #4caf50, #81c784)",
            zIndex: 0,
          }} />

          {STEPS.map((step, i) => (
            <div key={step.step} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              {/* Icon Circle */}
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                margin: "0 auto 24px",
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #2d7a3a, #4caf50)"
                  : "linear-gradient(135deg, #1a4d2e, #2d7a3a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32,
                boxShadow: "0 8px 24px rgba(45,122,58,0.3)",
                border: "4px solid #fff",
              }}>
                {step.icon}
              </div>

              {/* Step Number */}
              <div style={{
                position: "absolute", top: -8, right: "20%",
                background: "#fff", border: "2px solid #e8f5e9",
                color: "#2d7a3a", fontWeight: 800, fontSize: 13,
                borderRadius: 50, width: 28, height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {step.step}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a3326", marginBottom: 10 }}>
                {step.title}
              </h3>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}