import React, { useState } from "react";
import { Icon } from "../components/Icons";

export default function SignUp({ navigate, product }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  if (!product) return (<main style={{paddingTop: '150px', textAlign: 'center'}}><h2>No product selected</h2><button className="btn-primary" style={{marginTop: '20px'}} onClick={() => navigate('marketplace')}>Back to Marketplace</button></main>);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main style={{paddingTop: '120px', paddingBottom: '80px', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '100%', maxWidth: '500px', padding: '0 24px'}}>
        
        {/* Product Summary Card */}
        <div style={{display: 'flex', gap: '20px', background: 'var(--bg-surface)', padding: '20px', borderRadius: '16px', marginBottom: '40px', border: '1px solid var(--border-color)'}}>
          <div style={{width: '80px', height: '80px', borderRadius: '12px', backgroundImage: `url(${product.img})`, backgroundSize: 'cover', flexShrink: 0}} />
          <div>
            <span style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>ORDERING</span>
            <h4 style={{margin: '4px 0'}}>{product.name}</h4>
            <span style={{color: 'var(--accent-primary)', fontWeight: 700}}>{product.price}</span>
          </div>
        </div>

        <h2 style={{marginBottom: '8px'}}>Create Account</h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '32px'}}>Sign up to secure your order.</p>

        <form onSubmit={() => navigate("payment")}>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Full Name</label>
            <input name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required style={inputStyle} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Email Address</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required style={inputStyle} />
          </div>
          <div className="form-group" style={{marginBottom: '32px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Phone Number</label>
            <input name="phone" type="tel" placeholder="+234 ..." value={form.phone} onChange={handleChange} required style={inputStyle} />
          </div>
          <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>Continue to Payment</button>
        </form>
      </div>
    </main>
  );
}

const inputStyle = {
  width: '100%', padding: '16px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s'
};