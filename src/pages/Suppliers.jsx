import { useEffect } from 'react';
import { Icon } from "../components/Icons";

const FARMER_BG = "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2400&auto=format&fit=crop";

export default function Suppliers() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="supplier-hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${FARMER_BG})` }} />
        <div className="hero-overlay" />
        <div className="hero-content text-center">
          <h1 className="reveal">Become a Supplier</h1>
          <p className="reveal reveal-delay-1">Connect with buyers across Nigeria.</p>
          <button className="btn-primary reveal reveal-delay-2">Register Now</button>
        </div>
        <style jsx>{`
          .supplier-hero { min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; color: white; }
          .hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; z-index: -2; }
          .hero-overlay { position: absolute; inset: 0; background: rgba(13,27,15,0.8); z-index: -1; }
          .hero-content { z-index: 1; max-width: 800px; padding: 0 24px; }
        `}</style>
      </section>

      {/* SECTION 2: FORM */}
      <section className="register-section">
        <div className="container small">
          <h2 className="text-center reveal">Join the Network</h2>
          <form className="register-form reveal reveal-delay-1">
            <div className="form-group">
              <label>Business Name</label>
              <input type="text" placeholder="e.g., Northern Grains Ltd" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="State / City" />
            </div>
            <div className="form-group">
              <label>Primary Products</label>
              <select><option>Select Category</option><option>Grains</option><option>Tubers</option></select>
            </div>
            <button type="button" className="btn-full">Submit Application</button>
          </form>
        </div>
        <style jsx>{`
          .register-section { min-height: 100vh; display: flex; align-items: center; background: #F5F0E8; padding: 80px 0; }
          .container.small { max-width: 600px; }
          .register-form { background: white; padding: 48px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin-top: 32px; }
          .form-group { margin-bottom: 20px; }
          .form-group label { display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9rem; }
          .form-group input, .form-group select { width: 100%; padding: 12px 16px; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; font-size: 1rem; outline: none; transition: border-color 0.3s; }
          .form-group input:focus { border-color: #4CAF50; }
          .btn-full { width: 100%; background: #4CAF50; color: white; border: none; padding: 16px; border-radius: 12px; font-weight: 600; cursor: pointer; margin-top: 8px; font-size: 1rem; transition: background 0.3s; }
          .btn-full:hover { background: #0D1B0F; }
        `}</style>
      </section>
    </main>
  );
}