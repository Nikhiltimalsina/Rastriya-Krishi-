const BLOGS = [
  {
    title: "Sustainable Farming Practices for Modern Nepal",
    date: "February 10, 2025",
    category: "Sustainability",
    excerpt: "Exploring how Nepalese farmers are adopting eco-friendly practices to improve yield while protecting the environment.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=240&fit=crop",
  },
  {
    title: "Farmers Empowerment Program: 2024 Impact Report",
    date: "January 22, 2025",
    category: "Programs",
    excerpt: "A look at how our flagship empowerment program has transformed the lives of over 5,000 farming families across Nepal.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=240&fit=crop",
  },
  {
    title: "From Soil to Market: The Agritourism Revolution",
    date: "December 15, 2024",
    category: "Agrotourism",
    excerpt: "How agritourism is creating new revenue streams for farmers while educating urban populations about food origins.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=240&fit=crop",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" style={{ padding: "100px 24px", background: "#f8fffe" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
          <div>
            <div style={{ color: "#4caf50", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              Latest Updates
            </div>
            <h2 style={{
              fontSize: 42, fontWeight: 800, color: "#1a3326",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}>
              Our Latest Blogs
            </h2>
          </div>
          <a href="/resources/blogs" style={{
            color: "#e8963a", fontWeight: 700, fontSize: 15,
            textDecoration: "none", borderBottom: "2px solid #e8963a", paddingBottom: 3,
          }}>
            View All Blogs →
          </a>
        </div>

        {/* Blog Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {BLOGS.map((b) => (
            <article
              key={b.title}
              style={{
                background: "#fff", borderRadius: 16, overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                transition: "all 0.3s", border: "1px solid #e8f5e9",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
              }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: "hidden" }}>
                <img
                  src={b.img}
                  alt={b.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{
                    background: "#fff3e0", color: "#e8963a",
                    borderRadius: 50, padding: "4px 12px",
                    fontSize: 12, fontWeight: 700,
                  }}>
                    {b.category}
                  </span>
                  <span style={{ color: "#999", fontSize: 12 }}>{b.date}</span>
                </div>
                <h3 style={{
                  fontSize: 17, fontWeight: 700, color: "#1a3326",
                  lineHeight: 1.4, marginBottom: 12,
                }}>
                  {b.title}
                </h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  {b.excerpt}
                </p>
                <a href="/resources/blogs" style={{ color: "#e8963a", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
