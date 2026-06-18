import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

export default function Marketplace({ startOrder }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = [
    { name: "All", icon: "globe" },
    { name: "Grains", icon: "wheat" },
    { name: "Tubers", icon: "root" },
    { name: "Spices", icon: "pepper" },
    { name: "Cash Crops", icon: "cocoa" },
    { name: "Oil Seeds", icon: "nut" },
  ];

  const tickerItems = [
    { icon: "wheat", label: "Maize", trend: "▲ 2.3%", color: "text-green-600" },
    { icon: "nut", label: "Soybeans", trend: "▼ 1.1%", color: "text-red-500" },
    { icon: "cocoa", label: "Cocoa", trend: "▲ 4.8%", color: "text-green-600" },
    { icon: "pepper", label: "Ginger", trend: "▲ 0.9%", color: "text-green-600" },
    { icon: "wheat", label: "Rice", trend: "▲ 1.7%", color: "text-green-600" },
  ];

  const stats = [
    { value: "120+", label: "Active Listings" },
    { value: "45+", label: "Verified Suppliers" },
    { value: "₦2.4B", label: "Monthly Volume" },
    { value: "36", label: "States Covered" },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const categoryMatch = activeCategory === "All" || p.category === activeCategory;
      const searchMatch = p.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [query, activeCategory]);

  const featured = PRODUCTS.slice(0, 3);

  return (
    <main className="bg-white text-gray-900 min-h-screen pb-20">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span data-aos="fade-down" className="px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-sm font-medium text-blue-600 inline-block">
            VERIFIED COMMODITY EXCHANGE
          </span>
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none my-5 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Trade Agricultural <span className="text-blue-600">Commodities</span><br /> With Confidence
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="max-w-2xl mx-auto text-gray-500 text-lg">
            Discover verified suppliers, transparent pricing, and premium agricultural products across Nigeria.
          </p>
          <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4 justify-center mt-8 flex-wrap">
            <button className="bg-[#DFFF00] text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider">
              Browse Market
            </button>
            <button className="bg-transparent text-gray-900 border border-gray-300 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition uppercase text-sm tracking-wider">
              Become Supplier
            </button>
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden py-5 border-y border-gray-100 whitespace-nowrap">
        <div className="flex gap-12 animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
              <Icon name={item.icon} style={{ width: 16, height: 16 }} />
              {item.label} <span className={item.color}>{item.trend}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div data-aos="fade-up" data-aos-delay={i * 100} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition" key={s.label}>
            <h2 className="text-4xl font-bold text-blue-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</h2>
            <p className="text-gray-500 mt-2">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold tracking-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Commodities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="h-96 rounded-3xl bg-cover bg-center overflow-hidden cursor-pointer relative group"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => setSelected(item)}
            >
              <div className="h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-[#DFFF00] text-sm font-semibold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-3xl font-bold text-white mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.name}</h3>
                <strong className="text-xl text-white block mt-2">{item.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-8">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className={`bg-white border rounded-3xl p-8 flex flex-col items-center gap-3 transition cursor-pointer ${activeCategory === cat.name ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <Icon name={cat.icon} style={{ width: 28, height: 28, color: activeCategory === cat.name ? '#2563EB' : '#6b7280' }} />
              <p className="font-semibold text-gray-700">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div data-aos="fade-up" className="max-w-2xl mx-auto bg-gray-50 flex gap-3 items-center p-4 px-6 rounded-full border border-gray-200 focus-within:border-blue-500 transition">
          <Icon name="search" style={{ width: 18, height: 18, color: '#9ca3af' }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commodities..."
            className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Updated Mobile Grid to 2 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer transition hover:shadow-xl hover:-translate-y-2 group"
              key={product.id}
              onClick={() => setSelected(product)}
            >
              <div
                className="h-40 md:h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.img})` }}
              />
              <div className="p-3 md:p-6">
                <span className="text-blue-600 text-xs md:text-sm font-semibold">{product.category}</span>
                <h3 className="text-base md:text-xl font-bold text-gray-900 mt-1 md:mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{product.name}</h3>
                <strong className="text-sm md:text-lg text-gray-700 block mt-1 md:mt-2">{product.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-5" onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-md bg-white border border-gray-200 rounded-3xl overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 w-10 h-10 rounded-full border-none bg-black/50 text-white cursor-pointer z-10 hover:rotate-90 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img src={selected.img} alt={selected.name} className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">{selected.category}</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{selected.name}</h2>
              <div className="my-4 text-3xl font-bold text-blue-600">{selected.price}</div>
              <p className="text-gray-500">{selected.desc}</p>
              <div className="flex items-center gap-2 mt-4 text-gray-500">
                <Icon name="mapPin" style={{ width: 16, height: 16 }} />
                <span>{selected.location}</span>
              </div>
              <button
                className="w-full mt-6 bg-[#DFFF00] text-gray-900 font-bold py-3 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider"
                onClick={() => startOrder(selected)}
              >
                Initiate Order
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}