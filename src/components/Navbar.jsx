import React from 'react';

export default function Navbar({ navigate, page, menuOpen, setMenuOpen }) {
  return (
    <nav className="main-nav">
      <div className="nav-inner">
        <button className="logo" onClick={() => navigate("home")}>
          <span className="logo-icon">◈</span> LAICOS
        </button>
        
        <div className="nav-links">
          <button onClick={() => navigate("home")} className={page === "home" ? "active" : ""}>Home</button>
          <button onClick={() => navigate("marketplace")} className={page === "marketplace" ? "active" : ""}>Marketplace</button>
          <button onClick={() => navigate("suppliers")} className={page === "suppliers" ? "active" : ""}>Network</button>
        </div>

        <div className="nav-actions">
          <button className="btn-primary" onClick={() => navigate("marketplace")}>Start Trading</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => { navigate("home"); setMenuOpen(false); }}>Home</button>
          <button onClick={() => { navigate("marketplace"); setMenuOpen(false); }}>Marketplace</button>
          <button onClick={() => { navigate("suppliers"); setMenuOpen(false); }}>Network</button>
        </div>
      )}
      
      <style jsx>{`
        .main-nav { 
          position: fixed; top: 20px; left: 20px; right: 20px; z-index: 100; 
          background: rgba(15, 15, 15, 0.8); backdrop-filter: blur(20px); 
          border: 1px solid rgba(255,255,255,0.05); border-radius: 50px; 
        }
        .nav-inner { 
          max-width: 1400px; margin: 0 auto; height: 60px; display: flex; align-items: center; padding: 0 24px; 
          position: relative; /* For absolute positioning of hamburger */
        }
        .logo { font-family: 'Space Grotesk', sans-serif; font-weight: 800; font-size: 1.2rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 8px; color: #fff; z-index: 2; }
        .logo-icon { color: var(--accent-blue); }
        
        .nav-links { margin-left: auto; display: flex; gap: 32px; }
        .nav-links button { background: none; border: none; padding: 8px 0; cursor: pointer; font-weight: 500; color: rgba(255,255,255,0.5); transition: color 0.2s; font-size: 0.9rem; }
        .nav-links button.active, .nav-links button:hover { color: #fff; }
        
        .nav-actions { margin-left: 32px; }
        .btn-primary { padding: 10px 20px; font-size: 0.8rem; border-radius: 50px; }
        
        /* Mobile Fix: Hamburger to the right */
        .hamburger { 
          display: none; background: none; border: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px; 
          position: absolute; right: 24px; top: 50%; transform: translateY(-50%); 
        }
        .hamburger span { width: 24px; height: 2px; background: #fff; border-radius: 2px; }
        
        .mobile-menu { position: absolute; top: 60px; left: 0; right: 0; background: #000; padding: 24px; display: flex; flex-direction: column; gap: 16px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; z-index: -1; }
        .mobile-menu button { border: none; background: none; text-align: left; padding: 8px 0; font-size: 1.1rem; cursor: pointer; color: #fff; }

        @media (max-width: 900px) {
          .nav-links, .nav-actions { display: none; }
          .hamburger { display: flex; }
          .main-nav { top: 10px; left: 10px; right: 10px; border-radius: 20px; }
        }
      `}</style>
    </nav>
  );
}