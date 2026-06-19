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
          <span className="text-blue-600 font-semibold text-xs tracking-widest">OUR INFRASTRUCTURE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>More Than Just a Marketplace</h2>
          <p className="max-w-2xl mx-auto text-gray-500 mt-4">We provide end-to-end security for transactions involving millions of dollars and billions of naira.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "lock", title: "Secure Escrow Service", desc: "We hold the buyer's money safely. The farmer is only paid once the receiver confirms the service promised is rendered." },
            { icon: "eye", title: "Premium Farm Verification", desc: "Want to use your own farmer? We charge a fee to send agents to the farm for live video calls, checking papers and crop quality." },
            { icon: "chat", title: "Backend Monitored Chat", desc: "Buyers and farmers chat directly on our platform. Our backend monitors all conversations to avoid fraudulent activities." },
            { icon: "truck", title: "Vetted Logistics & Reports", desc: "We provide agricultural logistics companies, monitor them, and confirm goods arrived safely by giving a logistics report." },
          ].map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-500 transition group">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
                <Icon name={item.icon} style={{ width: 24, height: 24, stroke: '#2563EB', transition: 'stroke 0.3s' }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE ESCROW PROCESS */}
      <section className="bg-blue-600 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How Our Escrow Works</h2>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">A transparent process protecting both buyers and farmers for large-scale cash crops.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Agreement & Deposit", desc: "Buyer and farmer agree on terms (e.g., 2k bags of cocoa). Buyer deposits funds into Laicos Escrow. Both receive a Trust Letter confirming money is safe." },
              { step: "02", title: "Verification & Transit", desc: "Our agents verify the goods. We provide vetted logistics companies and monitor the crops moving from the farm to the buyer's destination." },
              { step: "03", title: "Delivery & Confirmation", desc: "Buyer inspects the delivery. If 100% accurate, the transaction is confirmed. If 50% of crops are defective, 50% is refunded to the buyer." },
              { step: "04", title: "Fund Release", desc: "Once confirmed, funds are instantly released to the farmer. Disputes are handled transparently by our team to ensure fairness." },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <span className="block text-[#DFFF00] font-extrabold text-2xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.step}</span>
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISPUTE RESOLUTION */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="text-blue-600 font-semibold text-xs tracking-widest">FAIR DISPUTE RESOLUTION</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>You Only Pay For What’s Delivered.</h2>
            <p className="text-gray-500 my-6 leading-relaxed">
              We remove the fear of international trade. If a buyer orders 100,000 truckloads of ginger and half are defective, we return half of the money to the buyer and pay the farmers the half that was delivered. 
              We issue a Trust Letter confirming your funds are safe and accessible when the transaction is complete.
            </p>
            <button className="bg-[#DFFF00] text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-[#C7E600] transition shadow-lg uppercase text-sm tracking-wider" onClick={() => navigate("marketplace")}>
              Start a Secure Trade
            </button>
          </div>
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
              <Icon name="scale" style={{ width: 32, height: 32, stroke: '#2563EB', margin: '0 auto' }} />
              <h4 className="text-lg font-bold mt-4">Balanced Protection</h4>
              <p className="text-gray-500 text-sm mt-2">Protecting overseas buyers from fraud while ensuring farmers get paid for their hard work.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center mt-12">
              <Icon name="fileCheck" style={{ width: 32, height: 32, stroke: '#2563EB', margin: '0 auto' }} />
              <h4 className="text-lg font-bold mt-4">Trust Letters</h4>
              <p className="text-gray-500 text-sm mt-2">Legal documentation issued to both parties confirming funds are safely held with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCALE */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <div data-aos="zoom-in" className="bg-gray-50 rounded-[3rem] p-16 border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Built for High-Volume Trade</h2>
          <p className="text-gray-500 text-xl leading-relaxed max-w-3xl mx-auto">
            From 2,000 bags of cocoa to 100,000 truckloads of ginger, cashew nuts, and palm oil. We facilitate cash crop transactions that draw in millions of dollars for wealthy individuals and large corporations abroad.
          </p>
        </div>
      </section>
    </main>
  );
}