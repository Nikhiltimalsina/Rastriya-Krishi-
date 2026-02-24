import { useState, useEffect } from "react";

const PRODUCT_CATEGORIES = [
  {
    id: "fresh",
    label: "Fresh Produce",
    icon: "🥬",
    color: "#e8963a",
    bg: "#fff3e0",
    desc: "Farm-fresh vegetables, fruits, and herbs sourced directly from our network of certified farmers.",
  },
  {
    id: "inputs",
    label: "Agricultural Inputs",
    icon: "🌱",
    color: "#2d7a3a",
    bg: "#e8f5e9",
    desc: "Premium seeds, fertilizers, pesticides, and farming machinery for modern agricultural needs.",
  },
  {
    id: "value",
    label: "Value-Added Products",
    icon: "🫙",
    color: "#d35400",
    bg: "#fdf2f1",
    desc: "Processed and packaged products including organic compost, mushroom products, and traditional pickles.",
  },
];

const PRODUCTS = [
  // Fresh Produce
  { id: 1, category: "fresh", name: "Fresh Tomatoes", price: "Rs. 80/kg", unit: "per kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop", badge: "Organic", origin: "Chitwan", desc: "Sun-ripened hybrid tomatoes grown without chemical pesticides. Rich in lycopene and antioxidants.", stock: "In Stock" },
  { id: 2, category: "fresh", name: "Green Vegetables Bundle", price: "Rs. 120/bundle", unit: "per bundle", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop", badge: "Fresh", origin: "Pokhara", desc: "Seasonal mixed greens bundle including spinach, fenugreek, and coriander.", stock: "In Stock" },
  { id: 3, category: "fresh", name: "Premium Ginger", price: "Rs. 200/kg", unit: "per kg", img: "https://images.unsplash.com/photo-1615485500704-8e3b5610c7a0?w=400&h=400&fit=crop", badge: "Export Quality", origin: "Ilam", desc: "Aromatic highland ginger from the hills of Ilam — ideal for culinary and medicinal use.", stock: "In Stock" },
  { id: 4, category: "fresh", name: "Fresh Mushrooms", price: "Rs. 350/kg", unit: "per kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop", badge: "Farm Fresh", origin: "Lamjung", desc: "Oyster and button mushrooms cultivated using our proven organic methods.", stock: "Limited" },
  { id: 5, category: "fresh", name: "Seasonal Fruits Basket", price: "Rs. 500/basket", unit: "per basket", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop", badge: "Seasonal", origin: "Tarai", desc: "Curated basket of 5–6 seasonal fruits, perfect for gifting or daily nutrition.", stock: "In Stock" },
  { id: 6, category: "fresh", name: "Turmeric (Raw)", price: "Rs. 180/kg", unit: "per kg", img: "https://images.unsplash.com/photo-1615485291234-9d694218aeb0?w=400&h=400&fit=crop", badge: "Organic", origin: "Palpa", desc: "High-curcumin raw turmeric from organic farms in Palpa. Excellent for cooking and health.", stock: "In Stock" },

  // Agricultural Inputs
  { id: 7, category: "inputs", name: "Hybrid Tomato Seeds", price: "Rs. 450/pack", unit: "per 10g pack", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", badge: "Certified", origin: "Quality Assured", desc: "High-germination hybrid tomato seeds with 90%+ germination rate. Resistant to common diseases.", stock: "In Stock" },
  { id: 8, category: "inputs", name: "Organic NPK Fertilizer", price: "Rs. 1,200/50kg", unit: "per 50kg bag", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop", badge: "Eco-Friendly", origin: "Manufactured", desc: "Balanced N-P-K formulation enriched with micronutrients for all crops. Safe for organic farming.", stock: "In Stock" },
  { id: 9, category: "inputs", name: "Drip Irrigation Kit", price: "Rs. 8,500/set", unit: "per 1 ropani set", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop", badge: "Water Saving", origin: "Quality Assured", desc: "Complete drip irrigation system for 1 ropani. Reduces water usage by 60% compared to flood irrigation.", stock: "In Stock" },
  { id: 10, category: "inputs", name: "Neem-Based Pesticide", price: "Rs. 650/liter", unit: "per liter", img: "https://images.unsplash.com/photo-1533062618053-d51e617307ec?w=400&h=400&fit=crop", badge: "Natural", origin: "Manufactured", desc: "100% natural neem extract pesticide safe for organic farming and human consumption.", stock: "In Stock" },
  { id: 11, category: "inputs", name: "Power Tiller (Rental)", price: "Rs. 1,500/day", unit: "per day", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop", badge: "Rental Available", origin: "Nationwide", desc: "Modern power tillers available for daily rental through our farm mechanization program.", stock: "Book Ahead" },
  { id: 12, category: "inputs", name: "Vegetable Seedling Tray", price: "Rs. 25/tray", unit: "per tray (98 cells)", img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&h=400&fit=crop", badge: "Quality", origin: "Manufactured", desc: "Durable 98-cell seedling trays for professional nursery propagation. UV stabilized plastic.", stock: "In Stock" },

  // Value-Added Products
  { id: 13, category: "value", name: "Organic Compost Fertilizer", price: "Rs. 800/25kg", unit: "per 25kg bag", img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop", badge: "Certified Organic", origin: "Our Production", desc: "Rich vermicompost and composted farm waste — certified organic and packed with beneficial microorganisms.", stock: "In Stock" },
  { id: 14, category: "value", name: "Dried Mushroom Pack", price: "Rs. 1,800/kg", unit: "per kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop", badge: "Premium", origin: "Our Production", desc: "Sun-dried oyster and shiitake mushrooms — concentrated flavor, long shelf life, export quality.", stock: "In Stock" },
  { id: 15, category: "value", name: "Achar (Mixed Pickle)", price: "Rs. 350/500g", unit: "per 500g jar", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", badge: "Traditional Recipe", origin: "Our Production", desc: "Traditional Nepali mixed pickle made from seasonal vegetables with authentic spices. No preservatives.", stock: "In Stock" },
  { id: 16, category: "value", name: "Turmeric Powder", price: "Rs. 450/500g", unit: "per 500g pack", img: "https://images.unsplash.com/photo-1615485291234-9d694218aeb0?w=400&h=400&fit=crop", badge: "Pure & Natural", origin: "Our Production", desc: "100% pure turmeric powder processed from organically grown raw turmeric. High curcumin content.", stock: "In Stock" },
  { id: 17, category: "value", name: "Ginger Honey", price: "Rs. 650/350ml", unit: "per 350ml jar", img: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=400&h=400&fit=crop", badge: "Natural", origin: "Our Production", desc: "Raw mountain honey infused with highland ginger — perfect for immunity and wellness.", stock: "Limited" },
  { id: 18, category: "value", name: "Liquid Bio-Fertilizer", price: "Rs. 550/liter", unit: "per liter", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", badge: "Eco-Friendly", origin: "Our Production", desc: "Live microbial liquid fertilizer that enhances root development and improves soil health organically.", stock: "In Stock" },
];

const BADGE_COLORS = {
  "Organic":          { bg: "#fff3e0", color: "#e8963a" },
  "Fresh":            { bg: "#e3f2fd", color: "#1565c0" },
  "Export Quality":   { bg: "#fff3e0", color: "#d35400" },
  "Farm Fresh":       { bg: "#fff3e0", color: "#e8963a" },
  "Seasonal":         { bg: "#f3e5f5", color: "#6a1b9a" },
  "Certified":        { bg: "#fff8e1", color: "#f57f17" },
  "Eco-Friendly":     { bg: "#e8f5e9", color: "#2d7a3a" },
  "Water Saving":     { bg: "#e3f2fd", color: "#1565c0" },
  "Natural":          { bg: "#fff3e0", color: "#e8963a" },
  "Rental Available": { bg: "#fce4ec", color: "#c62828" },
  "Quality":          { bg: "#f5f5f5", color: "#555"    },
  "Certified Organic":{ bg: "#e8f5e9", color: "#2d7a3a" },
  "Premium":          { bg: "#fff8e1", color: "#f57f17" },
  "Traditional Recipe":{ bg: "#fbe9e7", color: "#bf360c" },
  "Pure & Natural":   { bg: "#fff3e0", color: "#d35400" },
  "Limited":          { bg: "#fce4ec", color: "#c62828" },
};

/* Map navbar label → category id */
const LABEL_TO_ID = {
  "Fresh Produce":       "fresh",
  "Agricultural Inputs": "inputs",
  "Value-Added Products":"value",
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("fresh");
  const [enquiry, setEnquiry]               = useState(null);
  const [hovered, setHovered]               = useState(null);

  /* ── Read hash on mount AND whenever it changes (back/forward nav) ── */
  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      const validIds = PRODUCT_CATEGORIES.map(c => c.id);
      if (validIds.includes(hash)) setActiveCategory(hash);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  /* ── Keep URL hash in sync when tab clicked internally ── */
  const handleTabClick = (id) => {
    setActiveCategory(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const filtered  = PRODUCTS.filter(p => p.category === activeCategory);
  const activeCat = PRODUCT_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div id="products" style={{ fontFamily: "'Merriweather Sans', 'Segoe UI', sans-serif", color: "#1a2e1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Merriweather+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{
        background: "linear-gradient(135deg, #1a4d2e, #2d7a3a, #e8963a)",
        padding: "100px 24px 80px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(232,150,58,0.2)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "#e8963a", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            What We Grow & Offer
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", marginBottom: 20, lineHeight: 1.15 }}>
            Our Products
          </h1>
          <p style={{ color: "#ffe0b2", fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Quality agricultural products sourced from our trusted Nepalese farmer network — fresh, certified, and fairly priced.
          </p>
          {/* Quick jump pills in hero */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                style={{
                  background: activeCategory === cat.id ? "#e8963a" : "rgba(255,255,255,0.15)",
                  color: activeCategory === cat.id ? "#fff" : "#fff",
                  border: "none", borderRadius: 50,
                  padding: "8px 20px", fontSize: 13, fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section style={{
        background: "#fff", padding: "0 24px",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky", top: 72, zIndex: 100,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 0 }}>
          {PRODUCT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              style={{
                padding: "20px 32px",
                border: "none",
                borderBottom: activeCategory === cat.id ? `3px solid ${cat.color}` : "3px solid transparent",
                background: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 10,
                color: activeCategory === cat.id ? cat.color : "#777",
                fontWeight: activeCategory === cat.id ? 700 : 500,
                fontSize: 15, fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: 20 }}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section style={{ padding: "60px 24px 100px", background: "#fffbf5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Category Header */}
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: activeCat.bg, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, border: `1px solid ${activeCat.color}30`,
                }}>
                  {activeCat.icon}
                </div>
                <h2 style={{ fontSize: 30, fontWeight: 800, color: "#1a3326", fontFamily: "'Playfair Display', serif" }}>
                  {activeCat.label}
                </h2>
              </div>
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, maxWidth: 600 }}>{activeCat.desc}</p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #fff3e0, #fff8e1)", border: "1px solid #ffe0b2",
              borderRadius: 12, padding: "12px 20px",
              display: "flex", alignItems: "center", gap: 8,
              color: "#e8963a", fontWeight: 600, fontSize: 14,
              flexShrink: 0,
            }}>
              <span>🌿</span> {filtered.length} Products Available
            </div>
          </div>

          {/* Products Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {filtered.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#fff", borderRadius: 20, overflow: "hidden",
                  border: "1px solid #fff3e0",
                  boxShadow: hovered === product.id ? "0 20px 60px rgba(232,150,58,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
                  transform: hovered === product.id ? "translateY(-8px)" : "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transform: hovered === product.id ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: (BADGE_COLORS[product.badge] || { bg: "#fff" }).bg,
                    color: (BADGE_COLORS[product.badge] || { color: "#333" }).color,
                    fontSize: 11, fontWeight: 700, padding: "4px 10px",
                    borderRadius: 20, letterSpacing: 0.5,
                  }}>
                    {product.badge}
                  </div>
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: product.stock === "In Stock" ? "rgba(232,150,58,0.9)" : product.stock === "Limited" ? "rgba(230,81,0,0.9)" : "rgba(100,100,100,0.9)",
                    color: "#fff", fontSize: 11, fontWeight: 600,
                    padding: "4px 10px", borderRadius: 20,
                  }}>
                    {product.stock}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ fontSize: 11, color: "#999", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                    <span>📍</span> {product.origin}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a3326", marginBottom: 10, lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>
                    {product.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: activeCat.color }}>{product.price}</div>
                      <div style={{ fontSize: 11, color: "#aaa" }}>{product.unit}</div>
                    </div>
                    <button
                      onClick={() => setEnquiry(product)}
                      style={{
                        background: activeCat.bg, color: activeCat.color,
                        border: `1.5px solid ${activeCat.color}40`,
                        padding: "10px 20px", borderRadius: 10,
                        fontWeight: 700, fontSize: 13, cursor: "pointer",
                        fontFamily: "inherit", transition: "all 0.2s", flexShrink: 0,
                      }}
                      onMouseEnter={e => { e.target.style.background = activeCat.color; e.target.style.color = "#fff"; }}
                      onMouseLeave={e => { e.target.style.background = activeCat.bg; e.target.style.color = activeCat.color; }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENQUIRY MODAL ─── */}
      {enquiry && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={() => setEnquiry(null)}
        >
          <div
            style={{ background: "#fff", borderRadius: 24, maxWidth: 480, width: "100%", padding: "40px", boxShadow: "0 24px 80px rgba(232,150,58,0.3)" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "center" }}>
              <img src={enquiry.img} alt={enquiry.name} style={{ width: 70, height: 70, borderRadius: 12, objectFit: "cover" }} />
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a3326" }}>{enquiry.name}</h3>
                <div style={{ color: "#e8963a", fontWeight: 700, fontSize: 16 }}>{enquiry.price}</div>
              </div>
            </div>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              To order or get more information about this product, please contact us:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:015922911" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #e8963a, #f39c12)", color: "#fff", padding: "14px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
                📞 Call: 01-5922911
              </a>
              <a href="mailto:info@rastriyakrishi.com.np" style={{ display: "block", textAlign: "center", background: "#fff3e0", color: "#e8963a", border: "1.5px solid #ffe0b2", padding: "14px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
                ✉️ Email Us
              </a>
              <button onClick={() => setEnquiry(null)} style={{ background: "none", border: "none", color: "#999", fontFamily: "inherit", fontSize: 14, cursor: "pointer", marginTop: 4 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
