// Payment.jsx
import React from "react";
import { Icon } from "../components/Icons";

export default function Payment({ navigate, product }) {
  const order = product || { name: "Product", quantity: "N/A" };
  const whatsappNumber = "2348000000000";
  const message = `Hello Laicos, I want to initiate an escrow order for: ${order.name} (${order.quantity}).`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="pt-32 pb-20 flex justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-6">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Escrow Deposit</h2>
        <p className="text-gray-500 mb-8">Funds are held securely until you confirm delivery.</p>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
            <span className="text-gray-500">Commodity</span>
            <span className="font-semibold text-gray-900">{order.name}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-500">Export Quantity</span>
            <span className="text-lg font-bold text-blue-600 text-right">{order.quantity}</span>
          </div>

          {/* Trust Letter Notice */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3 mb-6">
            <Icon name="fileCheck" style={{ width: 24, height: 24, stroke: '#2563EB' }} />
            <p className="text-sm text-blue-700 font-medium">A Trust Letter will be issued to both parties upon successful deposit confirming funds are safe.</p>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-full hover:bg-blue-700 transition shadow-lg uppercase text-sm tracking-wider mb-4">
            Deposit to Escrow
          </button>

          <div className="text-center my-4 text-gray-400 text-xs">OR INITIATE VIA</div>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full flex items-center justify-center gap-2 bg-transparent text-green-600 border border-green-500 font-semibold py-4 rounded-full hover:bg-green-50 transition uppercase text-sm tracking-wider"
          >
            <Icon name="chat" style={{ width: 18, height: 18, stroke: '#16a34a' }} /> Contact Agent
          </a>
        </div>
      </div>
    </main>
  );
}