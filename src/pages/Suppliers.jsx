import React from 'react';

const FARMER_BG = "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2400&auto=format&fit=crop";

export default function Suppliers() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${FARMER_BG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Verification & Supplier Network</h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-gray-200 mb-8">Use our verified network of big cooperations, or bring your own farmer. We monitor the whole process to ensure standard requirements are met.</p>
          <button data-aos="fade-up" data-aos-delay="200" className="bg-[#DFFF00] text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider">Request Verification</button>
        </div>
      </section>

      {/* SERVICES SPLIT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Option 1 */}
          <div data-aos="fade-right" className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <span className="text-blue-600 font-semibold text-xs tracking-widest">OPTION 1</span>
            <h3 className="text-2xl font-bold mt-4 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Use Our Verified Cooperations</h3>
            <p className="text-gray-500 mb-8">Connect with our pre-vetted network of large-scale farmers and cooperatives. We have already confirmed their genuineness, necessary documentation, and capacity to meet high-volume export standards.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> 100% Genuine Farms & Cooperatives</li>
              <li className="flex items-center gap-3 text-gray-700"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> Pre-checked Legal Papers & Right Documentation</li>
              <li className="flex items-center gap-3 text-gray-700"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> Instant Escrow Integration</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div data-aos="fade-left" className="bg-blue-600 p-10 rounded-3xl border border-blue-600 text-white">
            <span className="text-[#DFFF00] font-semibold text-xs tracking-widest">OPTION 2 (PREMIUM)</span>
            <h3 className="text-2xl font-bold mt-4 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Verify Your Own Farmer</h3>
            <p className="text-blue-100 mb-8">Already have a farmer in mind but confused about trust? We provide a paid verification service. We send our agents to the farm to give you a live video call update on crop quality, check their requirements, and monitor the transaction.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-blue-50"><span className="w-2 h-2 bg-[#DFFF00] rounded-full"></span> Live Video Call Updates Directly From the Farm</li>
              <li className="flex items-center gap-3 text-blue-50"><span className="w-2 h-2 bg-[#DFFF00] rounded-full"></span> Standard & Documentation Checks</li>
              <li className="flex items-center gap-3 text-blue-50"><span className="w-2 h-2 bg-[#DFFF00] rounded-full"></span> Monitored Logistics & Delivery Reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="max-w-xl mx-auto px-6 w-full">
          <h2 data-aos="fade-up" className="text-center text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Submit for Verification</h2>
          <form data-aos="fade-up" data-aos-delay="100" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Business / Farm Name</label>
              <input type="text" placeholder="e.g., Northern Grains Ltd" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Location</label>
              <input type="text" placeholder="State / City" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-gray-700">Service Required</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition bg-white">
                <option>Join Verified Network (Farmer)</option>
                <option>Verify My Own Farmer (Buyer - Paid Service)</option>
              </select>
            </div>
            <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition uppercase text-sm tracking-wider">Submit Application</button>
          </form>
        </div>
      </section>
    </main>
  );
}