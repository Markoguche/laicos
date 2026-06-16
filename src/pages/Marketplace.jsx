import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

export default function Marketplace({ startOrder }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, [filter, searchQuery]);

  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{paddingTop: '100px'}}>
      {/* HERO */}
      <section className="container" style={{marginBottom: '60px'}}>
        <div className="reveal" style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{fontSize: '4rem'}}>The Marketplace</h1>
          <p style={{color: 'var(--text-secondary)', marginTop: '16px'}}>Verified produce. Instant access.</p>
        </div>

        <div className="search-controls reveal">
          <div className="search-input-wrap">
            <Icon name="search" style={{width: 20, height: 20, stroke: '#555'}} />
            <input placeholder="Search commodities..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="filter-pills">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={filter === cat ? "active-pill" : "pill-inactive"}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .search-controls { display: flex; gap: 24px; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 40px; border-bottom: 1px solid var(--border-color); padding-bottom: 30px; }
          .search-input-wrap { display: flex; align-items: center; gap: 12px; background: #111; padding: 12px 24px; border-radius: 50px; border: 1px solid var(--border-color); flex: 1; max-width: 400px; }
          input { background: transparent; border: none; font-size: 1rem; color: #fff; outline: none; width: 100%; }
          .filter-pills { display: flex; gap: 8px; flex-wrap: wrap; }
          
          .pill-inactive { 
            background: transparent; 
            border: 1px solid var(--border-color); 
            padding: 8px 20px; 
            border-radius: 20px; 
            color: #ffffff;
            cursor: pointer; 
            transition: all 0.2s; 
            font-size: 0.9rem; 
          }
          .pill-inactive:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
          
          .active-pill { 
            background: var(--accent-blue); 
            color: #fff; 
            border: 1px solid var(--accent-blue);
            padding: 8px 20px; 
            border-radius: 20px; 
            cursor: pointer; 
            font-size: 0.9rem; 
            font-weight: 600;
          }
        `}</style>
      </section>

      {/* GRID */}
      <section className="container">
        <div className="product-grid-2026">
          {filteredProducts.map((p, i) => (
            <div key={p.id} className="product-card reveal" style={{transitionDelay: `${i * 0.05}s`}} onClick={() => setActive(p)}>
              <div className="card-image" style={{ backgroundImage: `url(${p.img})`, height: '250px' }} />
              <div style={{padding: '30px'}}>
                <span style={{color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'}}>{p.category}</span>
                <h4 style={{marginTop: '8px'}}>{p.name}</h4>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px'}}>
                  <span style={{fontSize: '1.1rem', fontWeight: 700}}>{p.price}</span>
                  <span style={{color: 'var(--accent-lemon)', fontSize: '0.8rem'}}>View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .product-grid-2026 { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        `}</style>
      </section>

      {/* DRAWER (Product Detail) - FIXED HEIGHT */}
      <div className={`drawer-overlay ${active ? 'open' : ''}`} onClick={() => setActive(null)}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          {active && (
            <>
              <div className="drawer-scroll-area">
                <div className="drawer-header" style={{backgroundImage: `url(${active.img})`}}>
                  <button className="close-icon" onClick={() => setActive(null)}>✕</button>
                </div>
                
                <div className="drawer-body">
                  <span style={{color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'}}>{active.category}</span>
                  <h2 style={{marginTop: '16px', fontSize: '2.5rem'}}>{active.name}</h2>
                  
                  <div style={{margin: '24px 0', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px'}}>
                    <span style={{display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem'}}>Price per unit</span>
                    <span style={{fontSize: '2rem', fontWeight: 700, color: 'var(--accent-lemon)'}}>{active.price}</span>
                  </div>

                  <p style={{color: 'var(--text-secondary)', lineHeight: 1.8}}>{active.desc}</p>
                  
                  <div style={{marginTop: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)'}}>
                    <Icon name="mapPin" style={{width:16, height:16}} /> {active.location}
                  </div>
                </div>
              </div>

              <div className="drawer-footer">
                  <button className="btn-primary" style={{width: '100%', justifyContent: 'center'}} onClick={() => startOrder(active)}>
                    Initiate Order
                  </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .drawer-scroll-area { flex: 1; overflow-y: auto; }
        
        /* FIX: Reduced Height to 200px */
        .drawer-header { 
          height: 200px; 
          width: 100%; 
          background-size: cover; 
          background-position: center; 
          position: relative; 
          flex-shrink: 0;
        }
        
        .close-icon { 
          position: absolute; 
          top: 20px; 
          right: 20px; 
          background: rgba(0,0,0,0.6); 
          border: 1px solid rgba(255,255,255,0.1); 
          color: white; 
          width: 40px; 
          height: 40px; 
          border-radius: 50%; 
          cursor: pointer; 
          z-index: 300; 
        }
        
        .drawer-body { padding: 40px; }
        
        .drawer-footer { 
          padding: 20px 40px; 
          background: rgba(15, 15, 15, 0.9); 
          backdrop-filter: blur(10px); 
          border-top: 1px solid var(--border-color); 
          flex-shrink: 0; 
        }

        /* Mobile Optimization */
        @media (max-width: 600px) {
          .drawer-header { height: 160px; } /* Even smaller on mobile */
          .drawer-body { padding: 24px; }
          .drawer-footer { padding: 16px 24px; }
          h2 { font-size: 1.8rem; }
        }
      `}</style>
    </main>
  );
}