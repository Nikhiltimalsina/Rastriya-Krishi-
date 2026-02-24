import { useState } from "react";

const OFFICES = [
  {
    city: "Head Office",
    address: "Kaushaltar, Madhyapur Thimi Municipality - 03, Bhaktapur",
    phone: "01-5922911",
    email: "info@rastriyakrishi.com.np",
    hours: "Sun – Fri: 10:00 AM – 5:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d85.3897!3d27.6793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1b1a1a1a1b%3A0x0!2sKaushaltar%2C%20Madhyapur%20Thimi%2C%20Bhaktapur!5e0!3m2!1sen!2snp!4v1716000000000!5m2!1sen!2snp",
  },
];

const TOPICS = [
  "General Inquiry",
  "Product Information",
  "Service Request",
  "Partnership Opportunity",
  "Farmer Registration",
  "Training Program",
  "Complaint / Feedback",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const office = OFFICES[0];

  return (
    <div style={{ fontFamily: "'Merriweather Sans', 'Segoe UI', sans-serif", color: "#1a2e1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input, textarea, select { outline: none; font-family: inherit; }
        input:focus, textarea:focus, select:focus { border-color: #4caf50 !important; box-shadow: 0 0 0 3px rgba(76,175,80,0.12) !important; }
      `}</style>

      {/* ─── PAGE HERO ─── */}
      <section style={{
        background: "linear-gradient(135deg, #1a4d2e 0%, #2d7a3a 100%)",
        padding: "100px 24px 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -60, left: "10%", width: 250, height: 250, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Get In Touch
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 20, lineHeight: 1.15 }}>
            Contact Us
          </h1>
          <p style={{ color: "#a5d6a7", fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Have a question, partnership idea, or want to join our farmer network? We're here to help — reach out anytime.
          </p>
        </div>
      </section>

      {/* ─── QUICK CONTACT STRIPS ─── */}
      <section style={{ background: "#fff", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", transform: "translateY(-40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: "📞", label: "Call Us", value: "01-5922911", sub: "Sun – Fri, 10AM–5PM", href: "tel:015922911", color: "#2d7a3a" },
              { icon: "✉️", label: "Email Us", value: "info@rastriyakrishi.com.np", sub: "We reply within 24 hours", href: "mailto:info@rastriyakrishi.com.np", color: "#1565c0" },
              { icon: "📍", label: "Visit Us", value: "Kaushaltar, Madhyapur Thimi, Bhaktapur", sub: "Sun – Fri, 10AM–5PM", href: "#map", color: "#c0392b" },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  background: "#fff", borderRadius: 20, padding: "32px 28px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                  textDecoration: "none", display: "flex", alignItems: "flex-start", gap: 18,
                  border: "1px solid #f0f0f0", transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(0,0,0,0.13)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.1)"; }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: item.color + "15",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1a3326", marginBottom: 4, wordBreak: "break-all" }}>{item.value}</div>
                  <div style={{ fontSize: 13, color: "#888" }}>{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "start" }}>

          {/* ── Form ── */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "48px 40px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a3326", fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>
              Send Us a Message
            </h2>
            <p style={{ color: "#888", fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>
              Fill out the form below and our team will get back to you within one business day.
            </p>

            {sent ? (
              <div style={{
                background: "linear-gradient(135deg, #e8f5e9, #f0faf2)",
                border: "1px solid #c8e6c9", borderRadius: 16,
                padding: "40px 32px", textAlign: "center",
              }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#2d7a3a", marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "#555", lineHeight: 1.7 }}>Thank you for reaching out. Our team will respond to you within 24 business hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", topic: "", message: "" }); }}
                  style={{ marginTop: 24, background: "#2d7a3a", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, fontWeight: 700, cursor: "pointer", fontSize: 14 }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="Full Name *" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  <Field label="Phone Number" name="phone" placeholder="+977 98XXXXXXXX" value={form.phone} onChange={handleChange} />
                </div>
                <Field label="Email Address *" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: "#1a3326", marginBottom: 8 }}>Subject / Topic *</label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%", padding: "13px 16px", borderRadius: 10,
                      border: "1.5px solid #e0e0e0", fontSize: 15, color: form.topic ? "#1a2e1a" : "#aaa",
                      background: "#fff", transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: "#1a3326", marginBottom: 8 }}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    style={{
                      width: "100%", padding: "13px 16px", borderRadius: 10,
                      border: "1.5px solid #e0e0e0", fontSize: 15, resize: "vertical",
                      lineHeight: 1.6, transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #2d7a3a, #4caf50)",
                    color: "#fff", border: "none", padding: "16px", borderRadius: 12,
                    fontWeight: 700, fontSize: 16, cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(45,122,58,0.3)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 32px rgba(45,122,58,0.4)"; }}
                  onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 8px 24px rgba(45,122,58,0.3)"; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* ── Office Info & Map ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Office Details Card */}
            <div style={{ background: "#fff", borderRadius: 24, padding: "36px 32px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a3326", fontFamily: "'Playfair Display', serif", marginBottom: 24 }}>
                Our Office
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { icon: "📍", label: "Address", value: office.address },
                  { icon: "📞", label: "Phone", value: office.phone, href: `tel:${office.phone.replace(/-/g, "")}` },
                  { icon: "✉️", label: "Email", value: office.email, href: `mailto:${office.email}` },
                  { icon: "🕐", label: "Office Hours", value: office.hours },
                ].map(row => (
                  <div key={row.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f0faf2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                      {row.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "#999", fontWeight: 600, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 }}>{row.label}</div>
                      {row.href
                        ? <a href={row.href} style={{ color: "#2d7a3a", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{row.value}</a>
                        : <div style={{ color: "#333", fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{row.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map — pinned to Rastriya Krishi Company Nepal Limited */}
            <div id="map" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", height: 320, position: "relative" }}>
              <iframe
                title="Rastriya Krishi Company Nepal Limited — H03, Kaushaltar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3783423697746!2d85.36408257505354!3d27.674699076201218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b004398aa49%3A0x8a6c6084d49fa9f2!2sRastriya%20Krishi%20Company%20Nepal%20Limited!5e0!3m2!1sen!2snp!4v1771866610814!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Fallback "Open in Maps" link */}
            <a
              href="https://maps.google.com/?q=Rastriya+Krishi+Company+Nepal+Limited,+Kaushaltar,+Madhyapur+Thimi,+Bhaktapur&ll=27.687754,85.385417"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#fff", borderRadius: 12, padding: "12px 20px",
                border: "1.5px solid #e0e0e0", textDecoration: "none",
                color: "#2d7a3a", fontWeight: 700, fontSize: 14,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#2d7a3a"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,122,58,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
            >
              📍 Open in Google Maps
            </a>

            {/* Social Links */}
            <div style={{ background: "linear-gradient(135deg, #1a4d2e, #2d7a3a)", borderRadius: 20, padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ color: "#a5d6a7", fontSize: 13, marginBottom: 4 }}>Follow us for updates</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Stay Connected</div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61564078713356" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/rastriya-krishi-company-nepali-limited/" },
                ].map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    background: "rgba(255,255,255,0.12)", color: "#fff",
                    padding: "10px 18px", borderRadius: 10, textDecoration: "none",
                    fontSize: 13, fontWeight: 600, transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.22)"}
                    onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.12)"}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

// Reusable field
function Field({ label, name, type = "text", placeholder, value, onChange, required }) {
  return (
    <div>
      <label style={{ display: "block", fontWeight: 600, fontSize: 14, color: "#1a3326", marginBottom: 8 }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: 10,
          border: "1.5px solid #e0e0e0", fontSize: 15,
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      />
    </div>
  );
}