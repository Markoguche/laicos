import { useState, useEffect } from 'react';
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

export default function Marketplace() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  
  // Re-trigger animations on filter change
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, [filter]);

  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="market-hero">
        <div className="container">
          <h1 className="reveal">Discover Products</h1>
          <p className="reveal reveal-delay-1">Browse verified listings from across the nation.</p>
          <div className="search-bar reveal reveal-delay-2">
            <Icon name="search" style={{width: 20, height: 20, stroke: '#666'}} />
            <input placeholder="Search for Maize, Rice, Cocoa..." />
            <button className="btn-primary">Search</button>
          </div>
        </div>
        <style jsx>{`
          .market-hero { min-height: 50vh; background: white; padding: 120px 0 60px; display: flex; align-items: center; }
          .search-bar { display: flex; align-items: center; gap: 12px; background: #F5F0E8; padding: 8px 16px; border-radius: 12px; max-width: 600px; margin-top: 24px; }
          input { flex: 1; background: transparent; border: none; font-size: 1rem; padding: 8px 0; outline: none; }
        `}</style>
      </section>

      {/* SECTION 2: GRID */}
      <section className="product-grid-section">
        <div className="container">
          <div className="grid-header">
            <h3 className="reveal">Live Listings</h3>
            <div className="filters reveal">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setFilter(cat)} className={filter === cat ? "active" : ""}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="product-grid">
            {filteredProducts.map((p, i) => (
              <div key={p.id} className="product-card reveal" style={{transitionDelay: `${i * 0.05}s`}} onClick={() => setActive(p)}>
                <div className="card-image-wrap">
                  <div className="card-image" style={{ backgroundImage: `url(${p.img})` }} />
                </div>
                <div className="card-body">
                  <span className="card-category">{p.category}</span>
                  <h4>{p.name}</h4>
                  <div className="card-price">{p.price} <span>per {p.unit}</span></div>
                  <div className="card-meta">
                    <Icon name="mapPin" style={{width: 14, height: 14, stroke: '#999'}} />
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .product-grid-section { min-height: 100vh; padding: 60px 0; background: #F5F0E8; }
          .grid-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 20px; flex-wrap: wrap; gap: 16px; }
          .filters button { background: none; border: none; padding: 8px 16px; cursor: pointer; font-weight: 600; color: rgba(0,0,0,0.4); transition: all 0.2s; }
          .filters button.active { color: #0D1B0F; border-bottom: 2px solid #4CAF50; }
          .card-image-wrap { overflow: hidden; }
          
          @media (max-width: 600px) { .filters { width: 100%; overflow-x: auto; white-space: nowrap; padding-bottom: 8px; } }
        `}</style>
      </section>

      {/* MODAL */}
      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActive(null)}>×</button>
            <div className="modal-image" style={{ backgroundImage: `url(${active.img})` }} />
            <div className="modal-body">
              <h2>{active.name}</h2>
              <span className="tag">{active.category}</span>
              <p className="price">{active.price} <span>/ {active.unit}</span></p>
              <p className="desc">{active.desc}</p>
              <div className="location">Located in: <strong>{active.location}</strong></div>
              <button className="btn-full">Initiate Order</button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 24px; animation: fadeInUp 0.3s ease; }
        .modal-content { background: white; width: 100%; max-width: 500px; border-radius: 24px; overflow: hidden; position: relative; max-height: 90vh; overflow-y: auto; animation: scaleIn 0.3s ease; }
        .modal-image { height: 250px; background-size: cover; background-position: center; }
        .modal-body { padding: 32px; }
        .modal-body .price { font-size: 1.5rem; font-weight: 800; margin: 16px 0; }
        .close-btn { position: absolute; top: 16px; right: 16px; width: 32px; height: 32px; border-radius: 50%; background: white; border: none; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; z-index: 10; }
        .btn-full { width: 100%; background: #0D1B0F; color: white; border: none; padding: 16px; border-radius: 12px; font-weight: 600; cursor: pointer; margin-top: 24px; font-size: 1rem; }
        .location { margin-top: 16px; font-size: 0.9rem; color: #666; }
      `}</style>
    </main>
  );
}