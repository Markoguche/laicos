import React from "react";
import { Icon } from "../components/Icons";

export default function Payment({ navigate, product }) {
  // Default product if state is lost
  const order = product || { name: "Selected Product", price: "N/A", unit: "" };
  
  const whatsappNumber = "2348000000000"; // Replace with actual business number
  const message = `Hello Laicos, I want to order: ${order.name} (${order.price}). Please assist with the process.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="payment-page">
      <div className="payment-container">
        <div className="order-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Product</span>
            <strong>{order.name}</strong>
          </div>
          <div className="summary-row">
            <span>Price</span>
            <strong>{order.price} / {order.unit}</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>{order.price}</strong>
          </div>
        </div>

        <div className="payment-actions">
          <h2>Secure Checkout</h2>
          <p style={{marginBottom: '24px', opacity: 0.7}}>Complete your transaction securely.</p>

          <button className="btn-primary" style={{width: '100%', marginBottom: '16px'}}>
            Pay Now with Card
          </button>

          <div className="divider"><span>OR</span></div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Icon name="chat" style={{width: 20, height: 20, stroke: '#fff', fill: '#fff'}} />
            Order via WhatsApp
          </a>
          
          <p className="helper-text">Prefer human interaction? Chat with our agents directly to customize your order.</p>
        </div>
      </div>

      <style jsx>{`
        .payment-page { min-height: 100vh; background: #0D1B0F; display: flex; align-items: center; justify-content: center; padding: 100px 24px; color: white; }
        .payment-container { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 900px; width: 100%; }
        
        .order-summary-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 32px; border-radius: 20px; }
        .order-summary-card h3 { margin-bottom: 24px; font-size: 1.2rem; opacity: 0.8; }
        .summary-row { display: flex; justify-content: space-between; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .summary-row.total { border-bottom: none; font-size: 1.2rem; color: #4CAF50; }
        
        .payment-actions { background: white; color: #0D1B0F; padding: 48px; border-radius: 20px; }
        
        .divider { display: flex; align-items: center; margin: 24px 0; color: #ccc; font-size: 0.8rem; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #eee; }
        .divider span { padding: 0 12px; }
        
        .btn-whatsapp { 
          display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 16px; 
          background: #25D366; color: white; border-radius: 12px; font-weight: 600; text-decoration: none; transition: transform 0.2s; 
        }
        .btn-whatsapp:hover { transform: translateY(-2px); }
        
        .helper-text { margin-top: 16px; font-size: 0.85rem; text-align: center; color: #666; }

        @media (max-width: 768px) {
          .payment-container { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}