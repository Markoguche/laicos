// Payment.jsx
import React from "react";

export default function Payment({ navigate, product }) {
  const order = product || { name: "Product", price: "N/A" };
  const whatsappNumber = "2348000000000";
  const message = `Hello Laicos, I want to order: ${order.name} (${order.price}).`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{paddingTop: '120px', paddingBottom: '80px', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '100%', maxWidth: '500px', padding: '0 24px'}}>
        <h2 style={{marginBottom: '8px'}}>Checkout</h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '32px'}}>Complete your transaction.</p>

        <div style={{background: 'var(--bg-surface)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border-color)'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px'}}>
            <span style={{color: 'var(--text-secondary)'}}>Product</span>
            <span style={{fontWeight: 600}}>{order.name}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <span style={{color: 'var(--text-secondary)'}}>Total</span>
            <span style={{fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-primary)'}}>{order.price}</span>
          </div>

          <button className="btn-primary" style={{width: '100%', justifyContent: 'center', marginBottom: '16px'}}>
            Pay with Card
          </button>

          <div style={{textAlign: 'center', margin: '16px 0', color: 'var(--text-secondary)', fontSize: '0.8rem'}}>OR</div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', borderColor: '#25D366', color: '#25D366'}}>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}