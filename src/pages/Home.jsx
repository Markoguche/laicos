import { useEffect, useRef } from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

const YAM_HERO = "https://media.post.rvohealth.io/wp-content/uploads/2023/09/whole-and-halved-raw-african-yam-1296x728-header.jpg";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home({ navigate }) {
  useScrollReveal();
  const homeProducts = PRODUCTS.slice(0, 8);
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);

  // Wheat stalk canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth * 0.5 || 600;
      canvas.height = canvas.parentElement?.offsetHeight || 800;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 18;
    const stalks = Array.from({ length: COUNT }, (_, i) => ({
      x: 30 + (i / (COUNT - 1)) * (canvas.width - 60),
      h: 70 + Math.random() * 110,
      phase: Math.random() * Math.PI * 2,
      speed: 0.35 + Math.random() * 0.45,
      nodes: Math.floor(3 + Math.random() * 3),
    }));

    let t = 0;
    const draw = (s) => {
      const sway = Math.sin(t * s.speed + s.phase) * 7;
      const bY = canvas.height + 20;
      const tX = s.x + sway, tY = bY - s.h;
      ctx.beginPath();
      ctx.moveTo(s.x, bY);
      ctx.quadraticCurveTo(s.x + sway * 0.5, bY - s.h * 0.5, tX, tY);
      ctx.strokeStyle = 'rgba(76,175,80,0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();
      for (let n = 1; n <= s.nodes; n++) {
        const f = n / (s.nodes + 1);
        const nx = s.x + (tX - s.x) * f + sway * f * 0.5;
        const ny = bY - s.h * f;
        const ll = 14 - n * 2;
        const dir = n % 2 === 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.quadraticCurveTo(nx + dir * ll * 0.7, ny - ll * 0.4, nx + dir * ll, ny - ll * 0.1);
        ctx.strokeStyle = 'rgba(76,175,80,0.1)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.ellipse(tX, tY - 5, 2, 7, Math.sin(t * s.speed + s.phase) * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(76,175,80,0.2)';
      ctx.fill();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      stalks.forEach(draw);
      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // Floating particles
  useEffect(() => {
    const wrap = particlesRef.current;
    if (!wrap) return;
    const spawn = () => {
      const el = document.createElement('div');
      const size = (3 + Math.random() * 4) + 'px';
      Object.assign(el.style, {
        position: 'absolute',
        left: (10 + Math.random() * 80) + '%',
        bottom: '0',
        width: size,
        height: size,
        background: `rgba(76,175,80,${0.3 + Math.random() * 0.5})`,
        borderRadius: '50%',
        animation: `floatUp ${2.5 + Math.random() * 2}s ease-out both`,
        opacity: '0',
      });
      wrap.appendChild(el);
      setTimeout(() => el.parentElement && el.parentElement.removeChild(el), 4500);
    };
    const id = setInterval(spawn, 700);
    return () => clearInterval(id);
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCount = (el, target, prefix, suffix) => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 1800, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target < 10
          ? (eased * target).toFixed(1)
          : Math.round(eased * target).toLocaleString();
        el.textContent = prefix + val + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.h-stat-num').forEach(el => {
            animateCount(el,
              parseFloat(el.dataset.target),
              el.dataset.prefix,
              el.dataset.suffix
            );
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const section = document.querySelector('.hero-split');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* SECTION 1: WORLD-CLASS SPLIT HERO */}
      <section className="hero-split">
        <canvas ref={canvasRef} className="stalk-canvas" />

        <div className="hero-left">
          <div className="hero-bg-glow hero-bg-glow--main" />
          <div className="hero-bg-glow hero-bg-glow--sub" />

          <div className="hero-content-inner">
            <div className="tag-pill">
              <span className="dot-pulse" />
              Live marketplace — Nigeria
            </div>

            <h1>
              <span className="eyebrow">Where the harvest meets</span>
              Nigeria's <span className="highlight">Harvest,</span><br />
              Digitized.
            </h1>

            <p>Connecting verified suppliers with buyers for transparent, seamless agricultural trade across all 36 states.</p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate("marketplace")}>
                Explore Products
                <Icon name="arrowRight" style={{ width: 16, height: 16, stroke: '#fff' }} />
              </button>
              <button className="btn-ghost">How it works</button>
            </div>

            <div className="hero-stats">
              <div className="h-stat">
                <span className="h-stat-num" data-target="12400" data-prefix="" data-suffix="+">0</span>
                <span className="h-stat-label">Metric Tons</span>
              </div>
              <div className="h-stat">
                <span className="h-stat-num" data-target="2.4" data-prefix="₦" data-suffix="B">₦0</span>
                <span className="h-stat-label">Volume</span>
              </div>
              <div className="h-stat">
                <span className="h-stat-num" data-target="2840" data-prefix="" data-suffix="">0</span>
                <span className="h-stat-label">Suppliers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={YAM_HERO} alt="Fresh Nigerian Yams" className="hero-img" />
          <div className="img-overlay" />

          <div className="floating-badge badge-top">
            <div className="badge-icon">
              <Icon name="check" style={{ width: 18, height: 18, stroke: '#4CAF50' }} />
            </div>
            <div>
              <div className="badge-label">Verified suppliers</div>
              <div className="badge-val">2,840 active</div>
            </div>
          </div>

          <div className="floating-badge badge-bot">
            <div className="live-label">Live Prices</div>
            <div className="ticker-row">
              {[
                { crop: 'Yam', price: '₦48,200/t' },
                { crop: 'Maize', price: '₦19,500/t' },
                { crop: 'Cassava', price: '₦12,800/t' },
                { crop: 'Sorghum', price: '₦22,400/t' },
              ].map((item, i) => (
                <div key={i} className="ticker-group">
                  {i > 0 && <div className="ticker-div" />}
                  <div className="ticker-item">
                    <span className="ticker-crop">{item.crop}</span>
                    <span className="ticker-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={particlesRef} className="particles-wrap" />
        </div>

        <style jsx>{`
          .hero-split {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-top: 72px;
            position: relative;
            overflow: hidden;
          }
          .stalk-canvas {
            position: absolute;
            inset: 0;
            width: 50%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }
          .hero-left {
            background: #0D1B0F;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 52px;
            position: relative;
            overflow: hidden;
            z-index: 2;
          }
          .hero-bg-glow { position: absolute; border-radius: 50%; pointer-events: none; }
          .hero-bg-glow--main {
            width: 520px; height: 520px;
            background: radial-gradient(circle, rgba(76,175,80,0.12) 0%, transparent 70%);
            top: -120px; left: -120px;
          }
          .hero-bg-glow--sub {
            width: 220px; height: 220px;
            background: radial-gradient(circle, rgba(76,175,80,0.07) 0%, transparent 70%);
            bottom: 30px; right: -60px;
          }
          .hero-content-inner {
            position: relative;
            z-index: 3;
            color: white;
            max-width: 480px;
            animation: slideInLeft 0.9s ease both;
          }
          .tag-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(76,175,80,0.14);
            border: 0.5px solid rgba(76,175,80,0.38);
            color: #81C784;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 6px 14px;
            border-radius: 100px;
            margin-bottom: 28px;
            animation: fadeUp 0.8s ease both;
          }
          .dot-pulse {
            width: 7px; height: 7px;
            background: #4CAF50;
            border-radius: 50%;
            animation: pulse 1.8s ease-in-out infinite;
          }
          h1 {
            font-size: clamp(2.8rem, 5vw, 4.4rem);
            line-height: 1.02;
            margin: 0 0 20px;
            letter-spacing: -0.025em;
            animation: slideInLeft 0.9s 0.15s ease both;
          }
          .eyebrow {
            display: block;
            color: rgba(255,255,255,0.3);
            font-size: 0.55em;
            letter-spacing: 0.02em;
            font-weight: 400;
            margin-bottom: 4px;
          }
          .highlight { color: #4CAF50; position: relative; }
          .highlight::after {
            content: '';
            position: absolute;
            bottom: 4px; left: 0;
            height: 3px; width: 0;
            background: rgba(76,175,80,0.45);
            border-radius: 2px;
            animation: lineGrow 0.8s 1.1s ease forwards;
          }
          p {
            font-size: 1.05rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.52);
            margin: 0 0 36px;
            animation: fadeUp 0.9s 0.3s ease both;
          }
          .hero-actions {
            display: flex;
            align-items: center;
            gap: 14px;
            animation: fadeUp 0.9s 0.45s ease both;
          }
          .btn-ghost {
            display: inline-flex;
            align-items: center;
            background: transparent;
            color: rgba(255,255,255,0.5);
            border: 0.5px solid rgba(255,255,255,0.15);
            padding: 13px 22px;
            border-radius: 10px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s;
          }
          .btn-ghost:hover { color: white; border-color: rgba(255,255,255,0.38); }
          .hero-stats {
            display: flex;
            gap: 28px;
            margin-top: 44px;
            padding-top: 32px;
            border-top: 0.5px solid rgba(255,255,255,0.07);
            animation: fadeUp 0.9s 0.6s ease both;
          }
          .h-stat-num {
            display: block;
            font-size: 1.6rem;
            font-weight: 600;
            color: white;
            line-height: 1;
            margin-bottom: 4px;
          }
          .h-stat-label {
            font-size: 0.7rem;
            color: rgba(255,255,255,0.33);
            text-transform: uppercase;
            letter-spacing: 0.06em;
          }
          .hero-right { position: relative; overflow: hidden; background: #F5F0E8; }
          .hero-img {
            width: 100%; height: 100%;
            object-fit: cover;
            display: block;
            animation: scaleIn 1.1s 0.2s ease both;
            transition: transform 7s ease;
          }
          .hero-right:hover .hero-img { transform: scale(1.07); }
          .img-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(13,27,15,0.32) 0%, transparent 55%);
            z-index: 1;
          }
          .floating-badge {
            position: absolute;
            z-index: 5;
            background: rgba(13,27,15,0.86);
            border: 0.5px solid rgba(76,175,80,0.28);
            border-radius: 14px;
            padding: 14px 18px;
            color: white;
            backdrop-filter: blur(14px);
          }
          .badge-top {
            top: 28px; right: 28px;
            display: flex;
            align-items: center;
            gap: 12px;
            animation: fadeUp 0.9s 0.85s ease both;
          }
          .badge-icon {
            width: 38px; height: 38px;
            background: rgba(76,175,80,0.18);
            border-radius: 9px;
            display: flex; align-items: center; justify-content: center;
          }
          .badge-label { font-size: 0.68rem; color: rgba(255,255,255,0.45); margin-bottom: 3px; }
          .badge-val { font-size: 1rem; font-weight: 600; color: white; }
          .badge-bot { bottom: 28px; left: 28px; animation: fadeUp 0.9s 1s ease both; }
          .live-label {
            font-size: 0.65rem;
            color: rgba(255,255,255,0.38);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 10px;
          }
          .ticker-row { display: flex; align-items: center; }
          .ticker-group { display: flex; align-items: center; }
          .ticker-div { width: 0.5px; height: 28px; background: rgba(255,255,255,0.1); margin: 0 14px; }
          .ticker-crop { font-size: 0.66rem; color: rgba(255,255,255,0.45); display: block; margin-bottom: 2px; }
          .ticker-price { font-size: 0.86rem; font-weight: 600; color: #81C784; }
          .particles-wrap { position: absolute; inset: 0; pointer-events: none; z-index: 2; overflow: hidden; }

          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.94); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes lineGrow {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.6); opacity: 1; }
          }
          @keyframes floatUp {
            0% { opacity: 0; transform: translateY(0) scale(0.5); }
            20% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-100px) scale(1); }
          }

          @media (max-width: 900px) {
            .hero-split { grid-template-columns: 1fr; }
            .stalk-canvas { width: 100%; }
            .hero-left { min-height: 100vh; padding: 80px 28px; text-align: center; }
            .tag-pill { margin: 0 auto 28px; }
            .hero-actions { justify-content: center; }
            .hero-stats { justify-content: center; }
            .hero-right { display: none; }
            h1 { font-size: 3rem; }
          }
        `}</style>
      </section>

      {/* SECTION 2: PRODUCT GRID (8 Items) */}
      <section className="products-home-section">
        <div className="container">
          <div className="section-header-flex reveal">
            <div>
              <span className="tag-light">Marketplace</span>
              <h2>Featured Produce.</h2>
            </div>
            <button className="btn-outline" onClick={() => navigate("marketplace")}>
              View All Products
            </button>
          </div>
          <div className="home-product-grid">
            {homeProducts.map((p, i) => (
              <div key={p.id} className="product-card reveal" style={{transitionDelay: `${i * 0.05}s`}} onClick={() => navigate("marketplace")}>
                <div className="card-image-wrap">
                  <div className="card-image" style={{ backgroundImage: `url(${p.img})` }} />
                </div>
                <div className="card-body">
                  <span className="card-category">{p.category}</span>
                  <h4>{p.name}</h4>
                  <div className="card-price">{p.price}</div>
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
          .products-home-section { padding: 100px 0; background: #fff; }
          .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
          .home-product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
          .card-image-wrap { overflow: hidden; }
          @media (max-width: 1100px) { .home-product-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 600px) {
            .section-header-flex { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 32px; }
            .home-product-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="mission-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card reveal reveal-delay-1">
              <div className="mv-icon"><Icon name="target" style={{width:40, height:40, stroke:'#4CAF50'}} /></div>
              <h3>Our Mission</h3>
              <p>To eliminate inefficiencies in the Nigerian agricultural supply chain by providing a transparent, secure, and accessible marketplace for all stakeholders.</p>
            </div>
            <div className="mv-card highlight reveal reveal-delay-2">
              <div className="mv-icon"><Icon name="eye" style={{width:40, height:40, stroke:'#fff'}} /></div>
              <h3>Our Vision</h3>
              <p>A future where every farmer has equal access to markets, and every buyer can source with absolute confidence, driving economic prosperity across Africa.</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .mission-section { padding: 100px 0; background: #F5F0E8; }
          .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
          .mv-card { background: white; padding: 48px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s ease; }
          .mv-card:hover { transform: translateY(-10px); }
          .mv-card.highlight { background: #0D1B0F; color: white; }
          .mv-card.highlight p { color: rgba(255,255,255,0.8); }
          .mv-icon { margin-bottom: 24px; background: rgba(76,175,80,0.1); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
          .mv-card.highlight .mv-icon { background: rgba(255,255,255,0.1); }
          h3 { font-size: 1.8rem; margin-bottom: 16px; }
          p { font-size: 1.1rem; line-height: 1.7; opacity: 0.8; }
          @media (max-width: 768px) { .mv-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* SECTION 4: STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-header text-center reveal">
            <h2>Platform Impact</h2>
            <p style={{maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.7}}>
              Measured growth and trust built over the last fiscal year.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal reveal-delay-1"><h3>12.4k+</h3><span>Verified Metric Tons</span></div>
            <div className="stat-card reveal reveal-delay-2"><h3>₦2.4B</h3><span>Transaction Volume</span></div>
            <div className="stat-card reveal reveal-delay-3"><h3>36</h3><span>States Covered</span></div>
            <div className="stat-card reveal reveal-delay-4"><h3>98%</h3><span>Dispute Resolution</span></div>
          </div>
        </div>
        <style jsx>{`
          .stats-section { padding: 100px 0; background: white; }
          .stats-header { margin-bottom: 48px; }
          .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: center; }
          .stat-card { padding: 40px 20px; background: #F5F0E8; border-radius: 20px; transition: transform 0.3s; }
          .stat-card:hover { transform: translateY(-5px); background: #0D1B0F; color: white; }
          .stat-card:hover h3 { color: #4CAF50; }
          .stat-card h3 { font-size: 3rem; color: #0D1B0F; transition: color 0.3s; margin-bottom: 8px; }
          .stat-card span { font-size: 0.9rem; font-weight: 500; opacity: 0.8; }
          @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        `}</style>
      </section>

      {/* SECTION 5: CTA */}
      <section className="cta-section">
        <div className="container text-center reveal">
          <h2 style={{color: 'white'}}>Ready to Scale?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.8)' }}>Join the waitlist today and get early access to Nigeria's most advanced agricultural marketplace.</p>
          <div className="input-row">
            <input placeholder="Enter your business email" />
            <button className="btn-primary">Request Access</button>
          </div>
        </div>
        <style jsx>{`
          .cta-section { min-height: 60vh; display: flex; align-items: center; background: #0D1B0F; padding: 80px 0; position: relative; overflow: hidden; }
          .cta-section::before { content: ''; position: absolute; width: 600px; height: 600px; background: radial-gradient(#4CAF50 0%, transparent 70%); opacity: 0.1; top: -200px; right: -200px; }
          .input-row { display: flex; gap: 12px; max-width: 500px; margin: 0 auto; background: rgba(255,255,255,0.1); padding: 8px; border-radius: 12px; }
          input { flex: 1; background: transparent; border: none; outline: none; padding: 0 16px; color: white; font-size: 1rem; }
          input::placeholder { color: rgba(255,255,255,0.5); }
          @media (max-width: 600px) {
            .input-row { flex-direction: column; background: transparent; gap: 16px; }
            input { background: rgba(255,255,255,0.1); padding: 16px; border-radius: 12px; }
          }
        `}</style>
      </section>
    </main>
  );
}