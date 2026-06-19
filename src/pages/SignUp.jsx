// SignUp.jsx
import React, { useState } from "react";

export default function SignUp({ navigate, product }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  
  if (!product) return (
    <main className="pt-32 text-center min-h-screen">
      <h2 className="text-2xl font-bold">No product selected</h2>
      <button className="mt-5 bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition uppercase text-sm tracking-wider" onClick={() => navigate('marketplace')}>Back to Marketplace</button>
    </main>
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="pt-32 pb-20 flex justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-6">
        <div className="flex gap-4 bg-gray-50 p-5 rounded-2xl mb-10 border border-gray-100">
          <div className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url(${product.img})` }} />
          <div>
            <span className="text-gray-500 text-xs font-semibold tracking-wider">ESCROW TARGET</span>
            <h4 className="text-lg font-bold my-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{product.name}</h4>
            <span className="text-blue-600 font-bold text-sm">{product.quantity}</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Buyer Registration</h2>
        <p className="text-gray-500 mb-8">Create an account to secure your escrow order.</p>

        <form onSubmit={(e) => { e.preventDefault(); navigate("payment"); }}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-600">Full Name / Company</label>
            <input name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-blue-500 transition" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-600">Email Address</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-blue-500 transition" />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm text-gray-600">Phone Number</label>
            <input name="phone" type="tel" placeholder="+234 ..." value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-blue-500 transition" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-full hover:bg-blue-700 transition shadow-lg uppercase text-sm tracking-wider">Proceed to Escrow Deposit</button>
        </form>
      </div>
    </main>
  );
}