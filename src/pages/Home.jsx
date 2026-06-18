import React from "react";
import { PRODUCTS } from "../App";
import { Icon } from "../components/Icons";

const AvatarIcon = ({ color = "#6b7280" }) => (
  <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center -mx-1.5 shadow-sm">
    <Icon name="user" style={{ width: 20, height: 20, stroke: color }} />
  </div>
);

export default function Home({ navigate }) {
  const homeProducts = PRODUCTS.slice(0, 4);

  return (
    <main className="pt-24">
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 md:px-10 mb-24">
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Future<br />of <span className="text-blue-600">Agriculture</span>
          </h1>
          <p className="max-w-md text-lg text-gray-500 mb-10">
            A unified ecosystem connecting verified suppliers with institutional buyers. Transparent, efficient, and built for scale.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg uppercase text-sm tracking-wider flex items-center gap-2" onClick={() => navigate("marketplace")}>
              Explore Products <Icon name="arrowRight" style={{ width: 16, height: 16, stroke: '#fff' }} />
            </button>
            <button className="bg-transparent text-gray-900 border border-gray-300 font-semibold py-4 px-8 rounded-full hover:bg-gray-50 transition uppercase text-sm tracking-wider">Learn More</button>
          </div>
        </div>
        
        <div data-aos="fade-left" className="grid grid-cols-8 grid-rows-4 gap-4 h-[500px]">
          <div className="col-span-5 row-span-3 rounded-3xl bg-cover bg-center border border-gray-100 hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${homeProducts[0].img})` }}></div>
          <div className="col-span-3 row-span-2 rounded-3xl bg-cover bg-center border border-gray-100 hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${homeProducts[1].img})` }}></div>
          <div className="hidden md:block col-span-3 row-span-1 rounded-3xl bg-cover bg-center border border-gray-100" style={{ backgroundImage: `url(${homeProducts[2].img})` }}></div>
          <div className="col-span-3 row-span-2 rounded-3xl bg-cover bg-center border border-gray-100 hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${homeProducts[3].img})` }}></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex justify-between items-end mb-10">
          <div data-aos="fade-up">
            <span className="text-blue-600 font-semibold text-xs tracking-widest">MARKETPLACE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Trending Now.</h2>
          </div>
          <button className="bg-transparent text-gray-900 border border-gray-300 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition uppercase text-sm tracking-wider" onClick={() => navigate("marketplace")}>View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[620px]">
          {PRODUCTS.slice(0, 5).map((p, i) => (
            <div 
              key={p.id} 
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2 transition group ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => navigate("marketplace")}
            >
              <div className={`bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${i === 0 ? 'h-[450px] md:h-[500px]' : 'h-48'}`} style={{ backgroundImage: `url(${p.img})` }} />
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h4>
                  <span className="text-[#DFFF00] font-bold bg-gray-900 px-2 py-1 rounded text-xs">{p.price}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">{p.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Bridging The Gap</h2>
          <p className="max-w-xl mx-auto text-gray-500 mt-4">We stand in the center, ensuring trust and success for both parties.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <div data-aos="fade-right" className="bg-gray-50 p-10 rounded-3xl text-center border border-gray-100">
            <div className="flex justify-center mb-2">
              <AvatarIcon color="#6b7280" />
              <AvatarIcon color="#6b7280" />
            </div>
            <h3 className="text-xl font-bold mt-5">Local Farmers</h3>
            <p className="text-gray-500 my-3 text-sm">"Access to big markets used to be a dream. Laicos made it a reality."</p>
            <div className="flex gap-2 justify-center">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Verified</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Ready</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex flex-col items-center justify-center h-full md:rotate-0 rotate-90">
            <div className="w-0.5 h-10 bg-gray-200"></div>
            <div className="w-16 h-16 bg-[#DFFF00] rounded-full flex items-center justify-center text-2xl my-3 shadow-md">◈</div>
            <div className="w-0.5 h-10 bg-gray-200"></div>
          </div>

          <div data-aos="fade-left" className="bg-blue-50 p-10 rounded-3xl text-center border border-blue-100">
            <div className="flex justify-center mb-2">
              <AvatarIcon color="#2563EB" />
              <AvatarIcon color="#2563EB" />
            </div>
            <h3 className="text-xl font-bold mt-5">Global Buyers</h3>
            <p className="text-gray-500 my-3 text-sm">"We finally have a transparent way to source from Nigeria."</p>
            <div className="flex gap-2 justify-center">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Secure</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Fast</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="text-blue-600 font-semibold text-xs tracking-widest">FOR BUYERS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Source With Confidence.</h2>
            <p className="text-gray-500 my-6 leading-relaxed">
              Whether you are a multinational corporation in Lagos or a processing plant in Europe, 
              Laicos ensures you get the quality you pay for. We handle verification, logistics coordination, 
              and quality assurance.
            </p>
            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg uppercase text-sm tracking-wider" onClick={() => navigate("marketplace")}>Explore Marketplace</button>
          </div>
          <div data-aos="fade-left" className="text-right">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop" className="w-3/5 rounded-3xl border-4 border-white shadow-lg inline-block" alt="Buyer" />
              <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=800&auto=format&fit=crop" className="w-3/5 rounded-3xl border-4 border-white shadow-lg inline-block -mt-20 ml-10" alt="Buyer 2" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-left" className="md:order-2">
            <span className="text-[#DFFF00] font-semibold text-xs tracking-widest">FOR FARMERS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Join Our Trusted Network.</h2>
            <p className="text-blue-100 my-6 leading-relaxed">
              Stop chasing buyers. Register with Laicos, get verified, and let us connect you to 
              big corporations and foreign export opportunities. We bridge the gap so you can focus on farming.
            </p>
            <button className="bg-[#DFFF00] text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider" onClick={() => navigate("suppliers")}>
              Register Your Farm
            </button>
          </div>
          <div data-aos="fade-right" className="md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop" className="w-full block" alt="Farmer" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How We Facilitate Trade</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { step: "01", title: "Discovery", desc: "Find products or register your farm." },
            { step: "02", title: "Verification", desc: "We verify quality and supplier identity." },
            { step: "03", title: "Connection", desc: "Direct negotiation facilitated by us." },
            { step: "04", title: "Fulfillment", desc: "Secure payment and logistics handling." },
          ].map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-gray-50 p-8 rounded-3xl text-left border border-gray-100 hover:border-blue-500 transition">
              <span className="block text-blue-600 font-extrabold text-2xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.step}</span>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <div data-aos="zoom-in" className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Built for the <span className="italic font-light">modern</span> supply chain.</h2>
          <p className="text-gray-500 text-xl leading-relaxed">
            We are eliminating inefficiencies in the Nigerian agricultural supply chain. 
            Our platform provides a transparent, secure, and accessible marketplace for all stakeholders, 
            driving economic prosperity across Africa.
          </p>
        </div>
      </section>
    </main>
  );
}