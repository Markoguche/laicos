
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
          <button onClick={() => navigate("suppliers")} className={page === "suppliers" ? "active" : ""}>Suppliers</button>
        </div>


        <div className="nav-actions">
          <button className="btn-primary-sm" onClick={() => navigate("marketplace")}>Get Started</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'}} /><span style={{opacity: menuOpen ? 0 : 1}} /><span style={{transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'}} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => { navigate("home"); setMenuOpen(false); }}>Home</button>
          <button onClick={() => { navigate("marketplace"); setMenuOpen(false); }}>Marketplace</button>
          <button onClick={() => { navigate("suppliers"); setMenuOpen(false); }}>Suppliers</button>
        </div>
      )}
      
      <style jsx>{`
        .main-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 24px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; }
        .nav-inner { max-width: 1280px; margin: 0 auto; height: 72px; display: flex; align-items: center; }
        .logo { font-family: 'Space Grotesk', sans-serif; font-weight: 800; font-size: 1.5rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .logo-icon { color: #4CAF50; }
        .nav-links { margin-left: auto; display: flex; gap: 8px; }
        .nav-links button { background: none; border: none; padding: 8px 16px; cursor: pointer; font-weight: 500; color: rgba(0,0,0,0.6); transition: color 0.2s; }
        .nav-links button.active, .nav-links button:hover { color: #0D1B0F; }
        .nav-actions { margin-left: 24px; display: flex; gap: 12px; }
        .btn-primary-sm { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; }
        .hamburger { display: none; background: none; border: none; flex-direction: column; gap: 5px; cursor: pointer; margin-left: auto; padding: 5px; }
        .hamburger span { width: 25px; height: 2px; background: #0D1B0F; border-radius: 2px; transition: all 0.3s ease; }
        .mobile-menu { position: absolute; top: 72px; left: 0; right: 0; background: white; padding: 24px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); animation: slideInLeft 0.3s ease forwards; }
        .mobile-menu button { border: none; background: none; text-align: left; padding: 8px 0; font-size: 1.1rem; cursor: pointer; }
        
        @media (max-width: 900px) {
          .nav-links, .nav-actions { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
}