import { useState } from "react";

const CATEGORIES = ["All", "Farming Tips", "Market Insights", "Sustainability", "Success Stories", "Announcements"];

const BLOG_POSTS = [
  {
    id: 1,
    slug: "modern-techniques-rice-farming",
    title: "Modern Techniques Transforming Rice Farming in Nepal",
    excerpt: "Discover how our farmers in Chitwan are adopting precision agriculture and drone technology to boost rice yields by up to 40% while using less water.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&h=450&fit=crop",
    category: "Farming Tips",
    author: { name: "Dr. Ramesh Thapa", role: "Chief Agronomist", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face" },
    date: "May 15, 2025",
    readTime: "5 min read",
    tags: ["Rice", "Precision Farming", "Technology"],
    featured: true,
  },
  {
    id: 2,
    slug: "organic-certification-guide",
    title: "A Complete Guide to Organic Certification for Nepalese Farmers",
    excerpt: "Step-by-step guidance on obtaining organic certification, from soil testing to record-keeping requirements and how Rastriya Krishi supports you through the process.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&h=450&fit=crop",
    category: "Farming Tips",
    author: { name: "Sunita Adhikari", role: "Sustainability Consultant", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=60&h=60&fit=crop&crop=face" },
    date: "May 8, 2025",
    readTime: "8 min read",
    tags: ["Organic", "Certification", "Sustainability"],
  },
  {
    id: 3,
    slug: "vegetable-prices-spring-2025",
    title: "Spring 2025 Vegetable Price Trends: What Farmers Need to Know",
    excerpt: "An in-depth analysis of market prices for key vegetables this spring, with forecasts for the coming months and tips on timing your harvest for maximum profit.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=450&fit=crop",
    category: "Market Insights",
    author: { name: "Bikash Pradhan", role: "Market Analyst", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" },
    date: "Apr 28, 2025",
    readTime: "6 min read",
    tags: ["Market Prices", "Vegetables", "Planning"],
  },
  {
    id: 4,
    slug: "mushroom-cultivation-success",
    title: "From Zero to 50kg Per Week: Kamala's Mushroom Cultivation Journey",
    excerpt: "How a single mother from Lamjung transformed her livelihood through our mushroom cultivation training, now supplying restaurants in Pokhara and Kathmandu.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=450&fit=crop",
    category: "Success Stories",
    author: { name: "Priya Sharma", role: "Content Writer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" },
    date: "Apr 20, 2025",
    readTime: "4 min read",
    tags: ["Mushroom", "Empowerment", "Women"],
  },
  {
    id: 5,
    slug: "compost-soil-health",
    title: "Building Soil Health Through Composting: Practical Methods for Farmers",
    excerpt: "Healthy soil is the foundation of sustainable farming. Learn the best composting methods adapted for Nepalese climate conditions and soil types.",
    img: "https://images.unsplash.com/photo-1533062618053-d51e617307ec?w=700&h=450&fit=crop",
    category: "Sustainability",
    author: { name: "Dr. Ramesh Thapa", role: "Chief Agronomist", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face" },
    date: "Apr 10, 2025",
    readTime: "7 min read",
    tags: ["Compost", "Soil Health", "Organic"],
  },
  {
    id: 6,
    slug: "annual-agri-fair-2025",
    title: "Rastriya Krishi to Participate in National Agriculture Fair 2025",
    excerpt: "We are excited to announce our participation in this year's National Agriculture Fair in Kathmandu. Visit our stall to explore new products and programs.",
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=700&h=450&fit=crop",
    category: "Announcements",
    author: { name: "Communications Team", role: "PR & Marketing", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face" },
    date: "Apr 2, 2025",
    readTime: "2 min read",
    tags: ["Events", "Fair", "Announcement"],
  },
];

const CATEGORY_COLORS = {
  "Farming Tips": { bg: "#e8f5e9", color: "#2d7a3a" },
  "Market Insights": { bg: "#e3f2fd", color: "#1565c0" },
  "Sustainability": { bg: "#f3e5f5", color: "#6a1b9a" },
  "Success Stories": { bg: "#fff3e0", color: "#e65100" },
  "Announcements": { bg: "#fce4ec", color: "#c62828" },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = BLOG_POSTS.find(p => p.featured);
  const filtered = BLOG_POSTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch && !p.featured;
  });

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
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#a5d6a7", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Insights & Stories
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 20, lineHeight: 1.15 }}>
            Our Blog
          </h1>
          <p style={{ color: "#a5d6a7", fontSize: 18, maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Expert farming tips, market insights, sustainability practices, and inspiring farmer success stories from across Nepal.
          </p>

          {/* Search */}
          <div style={{ maxWidth: 480, margin: "0 auto", position: "relative" }}>
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "16px 24px 16px 52px",
                borderRadius: 50, border: "none",
                fontSize: 15, background: "rgba(255,255,255,0.95)",
                color: "#1a2e1a", outline: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            />
            <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", fontSize: 18 }}>🔍</div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      {featured && (activeCategory === "All" || activeCategory === featured.category) && !search && (
        <section style={{ padding: "72px 24px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ color: "#4caf50", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              Featured Article
            </div>
            <a href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                display: "grid", gridTemplateColumns: "1.2fr 1fr",
                borderRadius: 28, overflow: "hidden",
                boxShadow: "0 12px 60px rgba(0,0,0,0.1)",
                border: "1px solid #f0f0f0",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 80px rgba(0,0,0,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 12px 60px rgba(0,0,0,0.1)"; }}
              >
                <div style={{ height: 420, overflow: "hidden" }}>
                  <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "48px 44px", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <CategoryBadge cat={featured.category} />
                  <h2 style={{
                    fontSize: 28, fontWeight: 800, color: "#1a3326",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.3, marginTop: 16, marginBottom: 16,
                  }}>
                    {featured.title}
                  </h2>
                  <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{featured.excerpt}</p>
                  <AuthorRow author={featured.author} date={featured.date} readTime={featured.readTime} />
                  <span style={{
                    display: "inline-block", marginTop: 24,
                    background: "linear-gradient(135deg, #2d7a3a, #4caf50)",
                    color: "#fff", padding: "12px 28px", borderRadius: 10,
                    fontWeight: 700, fontSize: 14, alignSelf: "flex-start",
                  }}>
                    Read Article →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* ─── MAIN BLOG LIST ─── */}
      <section style={{ padding: "72px 24px 100px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Category Filters */}
          <div style={{ display: "flex", gap: 10, marginBottom: 52, flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 20px", borderRadius: 50,
                  border: "1.5px solid",
                  borderColor: activeCategory === cat ? "#2d7a3a" : "#d0e8d8",
                  background: activeCategory === cat ? "#2d7a3a" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#555",
                  fontWeight: 600, fontSize: 13, cursor: "pointer",
                  transition: "all 0.2s", fontFamily: "inherit",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 24px", color: "#888" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
              <div style={{ fontSize: 18, fontWeight: 600 }}>No articles found.</div>
              <div style={{ marginTop: 8, fontSize: 14 }}>Try a different category or search term.</div>
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section style={{ padding: "0 24px 100px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #1a4d2e, #2d7a3a)",
            borderRadius: 28, padding: "64px 48px",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📧</div>
              <h3 style={{ fontSize: 32, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>
                Stay Updated
              </h3>
              <p style={{ color: "#a5d6a7", fontSize: 16, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.75 }}>
                Subscribe to our newsletter for the latest farming tips, market insights, and Rastriya Krishi news.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 480, margin: "0 auto", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    flex: 1, minWidth: 200, padding: "14px 20px",
                    borderRadius: 10, border: "none", fontSize: 15,
                    outline: "none", fontFamily: "inherit",
                  }}
                />
                <button style={{
                  background: "#4caf50", color: "#fff", border: "none",
                  padding: "14px 28px", borderRadius: 10, fontWeight: 700,
                  fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.target.style.background = "#388e3c"}
                  onMouseLeave={e => e.target.style.background = "#4caf50"}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryBadge({ cat }) {
  const style = CATEGORY_COLORS[cat] || { bg: "#f0faf2", color: "#2d7a3a" };
  return (
    <span style={{
      background: style.bg, color: style.color,
      fontSize: 11, fontWeight: 700, padding: "4px 12px",
      borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.8,
      display: "inline-block",
    }}>
      {cat}
    </span>
  );
}

function AuthorRow({ author, date, readTime }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img src={author.avatar} alt={author.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1a3326" }}>{author.name}</div>
        <div style={{ fontSize: 12, color: "#888" }}>{author.role} · {date} · {readTime}</div>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        style={{
          background: "#fff", borderRadius: 20, overflow: "hidden",
          border: "1px solid #e8f5e9",
          boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.1)" : "0 4px 20px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-8px)" : "none",
          transition: "all 0.3s",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div style={{ height: 220, overflow: "hidden" }}>
          <img
            src={post.img}
            alt={post.title}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: "28px 28px 32px" }}>
          <CategoryBadge cat={post.category} />
          <h3 style={{
            fontSize: 19, fontWeight: 800, color: "#1a3326",
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.35, marginTop: 14, marginBottom: 12,
          }}>
            {post.title}
          </h3>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
            {post.excerpt.slice(0, 110)}…
          </p>

          <AuthorRow author={post.author} date={post.date} readTime={post.readTime} />

          {/* Tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 18 }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                background: "#f0faf2", color: "#555", fontSize: 11,
                padding: "3px 10px", borderRadius: 20, fontWeight: 500,
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}