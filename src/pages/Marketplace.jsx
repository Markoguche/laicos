import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

export default function Marketplace({ startOrder }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, [filter, searchQuery]);

  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="market-hero">
        <div className="container">
          <h1 className="reveal">Discover Products</h1>
          <p className="reveal reveal-delay-1">Browse verified listings from across the nation.</p>
          <div className="search-bar reveal reveal-delay-2">
            <Icon name="search" style={{width: 20, height: 20, stroke: '#666'}} />
            <input 
              placeholder="Search for product or location..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>
        <style jsx>{`
          .market-hero { min-height: 50vh; background: white; padding: 120px 0 60px; display: flex; align-items: center; }
          .search-bar { display: flex; align-items: center; gap: 12px; background: #F5F0E8; padding: 8px 16px; border-radius: 12px; max-width: 600px; margin-top: 24px; }
          input { flex: 1; background: transparent; border: none; font-size: 1rem; padding: 8px 0; outline: none; }
          @media (max-width: 600px) { .btn-primary { display: none; } }
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
          
          {filteredProducts.length === 0 ? (
            <div style={{textAlign: 'center', padding: '40px'}}>No products found matching your criteria.</div>
          ) : (
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
          )}
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

      {/* MODAL - COMPACT MOBILE VIEW */}
      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActive(null)}>×</button>
            <div className="modal-image" style={{ backgroundImage: `url(${active.img})` }} />
            <div className="modal-body">
              <span className="tag">{active.category}</span>
              <h2 className="modal-title">{active.name}</h2>
              <div className="price">{active.price} <span>/ {active.unit}</span></div>
              <p className="desc">{active.desc}</p>
              <div className="location">
                <Icon name="mapPin" style={{width: 14, height: 14, stroke: '#999', verticalAlign: 'middle', marginRight: '4px'}} />
                {active.location}
              </div>
              
              <button className="btn-full" onClick={() => startOrder(active)}>
                Initiate Order
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        /* Modal Layout */
        .modal-overlay { 
          position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); 
          z-index: 200; display: flex; align-items: center; justify-content: center; padding: 16px; 
        }
        .modal-content { 
          background: white; width: 100%; max-width: 450px; border-radius: 20px; 
          overflow: hidden; position: relative; max-height: 85vh; display: flex; flex-direction: column; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .modal-image { 
          height: 180px; width: 100%; background-size: cover; background-position: center; flex-shrink: 0; 
        }
        
        .modal-body { padding: 20px; overflow-y: auto; flex: 1; }
        
        .modal-title { font-size: 1.4rem; margin: 8px 0; font-family: 'Space Grotesk', sans-serif; }
        .modal-body .price { font-size: 1.2rem; font-weight: 800; margin-bottom: 12px; color: #0D1B0F; }
        .modal-body .desc { font-size: 0.9rem; line-height: 1.5; color: #555; margin-bottom: 12px; }
        .location { margin-bottom: 16px; font-size: 0.85rem; color: #666; }
        
        .close-btn { 
          position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; 
          border-radius: 50%; background: rgba(0,0,0,0.4); color: white; border: none; 
          cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; 
          z-index: 10; backdrop-filter: blur(4px); 
        }
        
        .btn-full { 
          width: 100%; background: #4CAF50; color: white; border: none; padding: 14px; 
          border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; 
          transition: background 0.2s, transform 0.1s; 
        }
        .btn-full:active { transform: scale(0.98); }

        /* Mobile Specifics - Very Compact */
        @media (max-width: 600px) {
          .modal-content { max-height: 90vh; border-radius: 16px; }
          .modal-image { height: 120px; } /* Smaller image */
          .modal-body { padding: 16px; }
          .modal-title { font-size: 1.2rem; margin: 4px 0; }
          .modal-body .price { font-size: 1.1rem; margin-bottom: 8px; }
          .modal-body .desc { font-size: 0.85rem; margin-bottom: 8px; line-height: 1.4; }
          .location { margin-bottom: 12px; }
        }
      `}</style>
    </main>
  );
}