import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3><span className="logo-icon">◈</span> LAICOS</h3>
          <p>Nigeria's premier agricultural infrastructure.</p>
        </div>
        <div>
          <h4>Platform</h4>
          <ul><li onClick={() => navigate("marketplace")}>Marketplace</li><li>Logistics</li><li>Pricing</li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul><li onClick={() => navigate("suppliers")}>Suppliers</li><li>Careers</li><li>Contact</li></ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul><li>Privacy</li><li>Terms</li></ul>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Laicos Technologies. All Rights Reserved.</div>
      
      <style jsx>{`
        .main-footer { 
          background: #050510; /* Deep Blue/Black */
          color: rgba(255,255,255,0.6); 
          padding: 80px 24px 32px; 
          border-top: 1px solid rgba(37, 99, 235, 0.1);
        }
        .footer-grid { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr repeat(3, 1fr); gap: 48px; }
        .footer-brand h3 { color: white; font-size: 1.5rem; margin-bottom: 8px; font-family: 'Space Grotesk', sans-serif; }
        .logo-icon { color: var(--accent-lemon); /* Lemon Accent */ }
        .footer-grid h4 { color: white; font-size: 1rem; margin-bottom: 20px; font-weight: 600; }
        .footer-grid ul { list-style: none; }
        .footer-grid ul li { margin-bottom: 12px; cursor: pointer; transition: color 0.2s; font-size: 0.95rem; }
        .footer-grid ul li:hover { color: var(--accent-lemon); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.05); margin-top: 64px; padding-top: 32px; text-align: center; font-size: 0.85rem; color: rgba(255,255,255,0.4); }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </footer>
  );
}