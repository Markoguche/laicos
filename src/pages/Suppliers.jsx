import React, { useEffect } from 'react';

const FARMER_BG = "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2400&auto=format&fit=crop";

export default function Suppliers() {
  return (
    <main className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${FARMER_BG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Become a Supplier</h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-gray-200 mb-8">Connect with buyers across Nigeria.</p>
          <button data-aos="fade-up" data-aos-delay="200" className="bg-[#DFFF00] text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider">Register Now</button>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="max-w-xl mx-auto px-6 w-full">
          <h2 data-aos="fade-up" className="text-center text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Join the Network</h2>
          <form data-aos="fade-up" data-aos-delay="100" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Business Name</label>
              <input type="text" placeholder="e.g., Northern Grains Ltd" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Location</label>
              <input type="text" placeholder="State / City" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Primary Products</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition bg-white">
                <option>Select Category</option>
                <option>Grains</option>
                <option>Tubers</option>
              </select>
            </div>
            <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition uppercase text-sm tracking-wider">Submit Application</button>
          </form>
        </div>
      </section>
    </main>
  );
}