import React, { useEffect } from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

export default function Home({ navigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const homeProducts = PRODUCTS.slice(0, 4);

  return (
    <main style={{paddingTop: '100px'}}>
      
      {/* HERO (Kept Original) */}
      <section className="hero-editorial">
        <div className="hero-text">
          <h1 className="reveal">
            The Future<br />
            of <span style={{color: 'var(--accent-blue)'}}>Agriculture</span>
          </h1>
          <p className="reveal reveal-delay-1" style={{maxWidth: '500px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px'}}>
            A unified ecosystem connecting verified suppliers with institutional buyers. Transparent, efficient, and built for scale.
          </p>
          <div className="reveal reveal-delay-2 hero-actions">
            <button className="btn-primary" onClick={() => navigate("marketplace")}>
              Explore Products <Icon name="arrowRight" style={{width: 16, height: 16, stroke: '#fff'}} />
            </button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>
        
        <div className="hero-visual reveal">
           <div className="collage-grid">
             {homeProducts.map((p, i) => (
               <div key={p.id} className={`collage-item item-${i}`} style={{backgroundImage: `url(${p.img})`}} />
             ))}
           </div>
        </div>
        
        <style jsx>{`
          .hero-editorial { min-height: 90vh; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; padding: 0 40px; margin-bottom: 100px; }
          .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
          .collage-grid { display: grid; grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(4, 100px); gap: 16px; }
          .collage-item { border-radius: 20px; background-size: cover; background-position: center; border: 1px solid var(--border-color); transition: transform 0.5s ease; }
          .collage-item:hover { transform: scale(1.05); z-index: 2; }
          .item-0 { grid-column: 1 / 6; grid-row: 1 / 4; }
          .item-1 { grid-column: 6 / 9; grid-row: 1 / 3; }
          .item-2 { grid-column: 3 / 6; grid-row: 4 / 5; }
          .item-3 { grid-column: 6 / 9; grid-row: 3 / 5; }
          @media (max-width: 900px) {
            .hero-editorial { grid-template-columns: 1fr; min-height: auto; padding: 40px 20px; gap: 40px; }
            .hero-text { text-align: center; }
            .hero-actions { justify-content: center; }
            .collage-grid { grid-template-rows: repeat(2, 150px); }
            .item-0 { grid-column: 1 / 7; grid-row: 1 / 2; }
            .item-1 { grid-column: 7 / 9; grid-row: 1 / 2; display: none; }
            .item-2 { display: none; }
            .item-3 { grid-column: 1 / 9; grid-row: 2 / 3; }
          }
        `}</style>
      </section>

      {/* FEATURED LISTINGS (Kept Original) */}
      <section className="container" style={{marginBottom: '120px'}}>
        <div className="section-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px'}}>
          <div className="reveal">
            <span style={{color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px'}}>MARKETPLACE</span>
            <h2 style={{fontSize: '3rem', marginTop: '8px'}}>Trending Now.</h2>
          </div>
          <button className="btn-ghost reveal" onClick={() => navigate("marketplace")}>View All</button>
        </div>

        <div className="bento-grid">
          {PRODUCTS.slice(0, 5).map((p, i) => (
            <div 
              key={p.id} 
              className={`product-card reveal bento-item-${i}`} 
              style={{transitionDelay: `${i * 0.1}s`}}
              onClick={() => navigate("marketplace")}
            >
              <div className="card-image" style={{backgroundImage: `url(${p.img})`}} />
              <div className="card-body" style={{padding: '24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h4 style={{fontSize: '1.2rem'}}>{p.name}</h4>
                  <span style={{color: 'var(--accent-lemon)', fontWeight: 700}}>{p.price}</span>
                </div>
                <div style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px'}}>{p.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 300px); gap: 20px; }
          .bento-item-0 { grid-column: span 2; grid-row: span 2; }
          .bento-item-0 .card-image { height: 100%; }
          @media (max-width: 900px) {
            .bento-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
            .bento-item-0 { grid-column: span 2; }
            .bento-item-0 .card-image { height: 400px; }
          }
          @media (max-width: 600px) { .bento-grid { grid-template-columns: 1fr; } .bento-item-0 { grid-column: span 1; } }
        `}</style>
      </section>

      {/* FACILITATING SUCCESS (REDESIGNED) */}
      <section className="container" style={{marginBottom: '150px'}}>
        <div className="reveal" style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2>Bridging The Gap</h2>
          <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)'}}>
            We stand in the center, ensuring trust and success for both parties.
          </p>
        </div>
        
        <div className="bridge-container">
          {/* Farmer Side */}
          <div className="bridge-card reveal">
            <div className="avatar-grid">
              <img src="https://i.pravatar.cc/150?img=12" className="avatar" alt="Farmer" />
              <img src="https://i.pravatar.cc/150?img=33" className="avatar" alt="Farmer" />
            </div>
            <h3 style={{marginTop: '20px'}}>Local Farmers</h3>
            <p style={{color: '#888', margin: '12px 0 24px', fontSize: '0.9rem'}}>
              "Access to big markets used to be a dream. Laicos made it a reality."
            </p>
            <div className="tags-wrap">
              <span className="tag-pill">Verified</span>
              <span className="tag-pill">Ready</span>
            </div>
          </div>

          {/* Center Connection */}
          <div className="center-connection reveal">
            <div className="line-dot"></div>
            <div className="center-logo">
              <span style={{color: '#000'}}>◈</span>
            </div>
            <div className="line-dot"></div>
          </div>

          {/* Buyer Side */}
          <div className="bridge-card buyer-card reveal">
            <div className="avatar-grid">
              <img src="https://i.pravatar.cc/150?img=68" className="avatar" alt="Buyer" />
              <img src="https://i.pravatar.cc/150?img=60" className="avatar" alt="Buyer" />
            </div>
            <h3 style={{marginTop: '20px'}}>Global Buyers</h3>
            <p style={{color: '#888', margin: '12px 0 24px', fontSize: '0.9rem'}}>
              "We finally have a transparent way to source from Nigeria."
            </p>
            <div className="tags-wrap">
              <span className="tag-pill blue">Secure</span>
              <span className="tag-pill blue">Fast</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bridge-container { display: grid; grid-template-columns: 1fr 0.5fr 1fr; gap: 20px; align-items: center; }
          
          .bridge-card { background: #0A0A0A; padding: 40px 24px; border-radius: 24px; text-align: center; border: 1px solid rgba(255,255,255,0.05); }
          .buyer-card { background: linear-gradient(135deg, #0A0A0A, #081020); border-color: rgba(37,99,235,0.2); }
          
          .avatar-grid { display: flex; justify-content: center; border-radius: 50%; margin-bottom: 8px; }
          .avatar { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #000; margin: 0 -6px; object-fit: cover; }
          .avatar:first-child { z-index: 1; }
          .avatar:last-child { z-index: 0; opacity: 0.8; }
          
          .tags-wrap { display: flex; gap: 8px; justify-content: center; }
          .tag-pill { background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; color: #fff; font-weight: 600; }
          .tag-pill.blue { background: rgba(37,99,235,0.15); color: var(--accent-blue); }
          
          .center-connection { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; }
          .line-dot { width: 2px; height: 40px; background: rgba(255,255,255,0.1); }
          .center-logo { 
            width: 60px; height: 60px; background: var(--accent-lemon); border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 10px 0;
            box-shadow: 0 0 30px rgba(223,255,0,0.2);
          }
          
          @media (max-width: 900px) {
            .bridge-container { grid-template-columns: 1fr; gap: 40px; }
            .center-connection { transform: rotate(90deg); width: 100%; margin: 20px 0; }
          }
        `}</style>
      </section>

      {/* FOR BUYERS */}
      <section className="container" style={{marginBottom: '150px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
          <div className="reveal">
            <span style={{color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px'}}>FOR BUYERS</span>
            <h2 style={{marginTop: '16px'}}>Source With Confidence.</h2>
            <p style={{color: 'var(--text-secondary)', margin: '24px 0 32px', lineHeight: 1.8}}>
              Whether you are a multinational corporation in Lagos or a processing plant in Europe, 
              Laicos ensures you get the quality you pay for. We handle verification, logistics coordination, 
              and quality assurance.
            </p>
            <button className="btn-primary" onClick={() => navigate("marketplace")}>Explore Marketplace</button>
          </div>
          <div className="reveal" style={{textAlign: 'right'}}>
             <div className="split-img-grid">
               <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop" style={{width: '60%', borderRadius: '20px', border: '4px solid var(--bg-primary)'}} />
               <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=800&auto=format&fit=crop" style={{width: '60%', borderRadius: '20px', marginTop: '-40%', marginLeft: '20%', border: '4px solid var(--bg-primary)'}} />
             </div>
          </div>
        </div>
        <style jsx>{`
          .split-img-grid { position: relative; }
          img { box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
          @media (max-width: 900px) { div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; } .split-img-grid { margin-top: 40px; text-align: center; } }
        `}</style>
      </section>

      {/* FOR FARMERS (Button Fix Applied) */}
      <section className="section-dark" style={{padding: '100px 0', background: 'var(--bg-secondary)', marginBottom: '100px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
            <div className="reveal" style={{order: 2}}>
              <span style={{color: 'var(--accent-lemon)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px'}}>FOR FARMERS</span>
              <h2 style={{marginTop: '16px'}}>Join Our Trusted Network.</h2>
              <p style={{color: 'var(--text-secondary)', margin: '24px 0 32px', lineHeight: 1.8}}>
                Stop chasing buyers. Register with Laicos, get verified, and let us connect you to 
                big corporations and foreign export opportunities. We bridge the gap so you can focus on farming.
              </p>
              {/* FIX: Used inline style or class defined in Global CSS. Assuming global class exists, but adding fallback style object */}
              <button 
                className="btn-lemon" 
                onClick={() => navigate("suppliers")}
                style={{ background: 'var(--accent-lemon)', color: '#000', border: 'none', padding: '18px 36px', fontWeight: 700, borderRadius: '50px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}
              >
                Register Your Farm
              </button>
            </div>
            <div className="reveal" style={{order: 1}}>
              <div style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 60px rgba(37, 99, 235, 0.1)'}}>
                 <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop" style={{width: '100%', display: 'block'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container" style={{marginBottom: '150px', textAlign: 'center'}}>
        <div className="reveal" style={{marginBottom: '60px'}}>
          <h2>How We Facilitate Trade</h2>
        </div>
        
        <div className="steps-grid">
          {[
            { step: "01", title: "Discovery", desc: "Find products or register your farm." },
            { step: "02", title: "Verification", desc: "We verify quality and supplier identity." },
            { step: "03", title: "Connection", desc: "Direct negotiation facilitated by us." },
            { step: "04", title: "Fulfillment", desc: "Secure payment and logistics handling." },
          ].map((item, i) => (
            <div key={i} className="step-card reveal" style={{transitionDelay: `${i * 0.1}s`}}>
              <span className="step-num">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .step-card { background: var(--bg-surface); padding: 32px; border-radius: 20px; text-align: left; border: 1px solid var(--border-color); transition: transform 0.3s; }
          .step-card:hover { transform: translateY(-5px); border-color: var(--accent-blue); }
          .step-num { display: block; color: var(--accent-blue); font-weight: 800; font-size: 1.5rem; margin-bottom: 16px; font-family: 'Space Grotesk'; }
          h4 { margin-bottom: 8px; }
          p { font-size: 0.9rem; color: var(--text-secondary); }
          @media (max-width: 900px) { .steps-grid { grid-template-columns: 1fr 1fr; } }
          @media (max-width: 600px) { .steps-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* MISSION */}
      <section className="container" style={{marginBottom: '120px', textAlign: 'center'}}>
        <div className="reveal" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{marginBottom: '24px'}}>Built for the <span style={{fontStyle: 'italic', fontWeight: 300}}>modern</span> supply chain.</h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8}}>
            We are eliminating inefficiencies in the Nigerian agricultural supply chain. 
            Our platform provides a transparent, secure, and accessible marketplace for all stakeholders, 
            driving economic prosperity across Africa.
          </p>
        </div>
      </section>
    </main>
  );
}