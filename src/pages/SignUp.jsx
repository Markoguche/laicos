import React, { useState } from "react";
import { Icon } from "../components/Icons";

export default function SignUp({ navigate, product }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  // Handle case where user refreshes or lands directly
  if (!product) {
    return (
      <main className="auth-page">
        <div className="auth-container" style={{textAlign: 'center'}}>
          <h2>No Product Selected</h2>
          <p style={{marginTop: 16, color: '#666'}}>Please select a product from the marketplace to start an order.</p>
          <button className="btn-primary" style={{marginTop: 24}} onClick={() => navigate("marketplace")}>
            Go to Marketplace
          </button>
        </div>
      </main>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signed up:", form);
    navigate("payment");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        
        {/* NEW: COMPACT PRODUCT BANNER */}
        <div className="product-banner">
          <div className="banner-img" style={{ backgroundImage: `url(${product.img})` }} />
          <div className="banner-details">
            <span className="banner-label">Ordering:</span>
            <h4>{product.name}</h4>
            <div className="banner-price">{product.price} <span>/ {product.unit}</span></div>
          </div>
        </div>

        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Sign up to secure your order.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone" type="tel" placeholder="+234 ..." value={form.phone} onChange={handleChange} required />
          </div>
          
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '16px'}}>
            Continue to Payment <Icon name="arrowRight" style={{width: 16, height: 16, stroke: '#fff'}} />
          </button>
        </form>
      </div>

      <style jsx>{`
        .auth-page { min-height: 100vh; background: #F5F0E8; display: flex; align-items: center; justify-content: center; padding: 80px 24px; }
        .auth-container { background: white; width: 100%; max-width: 450px; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        
        /* Product Banner Styles */
        .product-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          background: #fff;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
        }
        .banner-img {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }
        .banner-details { flex: 1; min-width: 0; }
        .banner-label { font-size: 0.75rem; text-transform: uppercase; color: #888; letter-spacing: 0.5px; font-weight: 600; }
        .banner-details h4 { font-size: 1.1rem; margin: 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .banner-price { font-weight: 700; color: #4CAF50; font-size: 0.95rem; }
        .banner-price span { font-weight: 400; color: #888; font-size: 0.8rem; }

        .auth-header { padding: 24px 24px 0; text-align: center; }
        .auth-header h2 { margin-bottom: 4px; font-size: 1.5rem; }
        .auth-header p { color: #666; font-size: 0.9rem; }
        
        .auth-form { padding: 24px; }
        .form-group { margin-bottom: 16px; text-align: left; }
        .form-group label { display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.85rem; color: #444; }
        .form-group input { width: 100%; padding: 12px 16px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; font-size: 1rem; outline: none; transition: border-color 0.2s; background: #fafafa; }
        .form-group input:focus { border-color: #4CAF50; background: #fff; }
      `}</style>
    </main>
  );
}