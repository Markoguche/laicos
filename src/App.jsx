import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Suppliers from "./pages/Suppliers";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";

export const PRODUCTS = [
  { id: 1, name: "Corn (Maize)", category: "Grains", price: "₦185,000", unit: "100kg Bag", location: "Kaduna", img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg", desc: "Fresh high-yield variety, suitable for industrial processing." },
  { id: 2, name: "Milled Rice", category: "Grains", price: "₦95,000", unit: "50kg Bag", location: "Kebbi", img: "https://i.pinimg.com/1200x/91/4c/05/914c05d452a85067f99e756005592091.jpg", desc: "Aromatic local rice variety, freshly harvested." },
  { id: 3, name: "Fresh Cabbage", category: "Spices", price: "₦12,000", unit: "Crate", location: "Plateau", img: "https://i.pinimg.com/1200x/db/7c/ea/db7ceabc94a645947be78a4662afc870.jpg", desc: "Crunchy and fresh, farm-direct." },
  { id: 4, name: "Carrots", category: "Spices", price: "₦18,000", unit: "50kg Bag", location: "Plateau", img: "https://i.pinimg.com/736x/87/d1/7d/87d17df88ef690e66234157f1cce8c61.jpg", desc: "Bright orange, rich in vitamins." },
  { id: 5, name: "Irish Potato", category: "Tubers", price: "₦4,500", unit: "25kg Basket", location: "Plateau", img: "https://i.pinimg.com/736x/aa/46/6e/aa466e03eafad85e650142f4d1078637.jpg", desc: "Firm and fresh, ideal for chips and mash." },
  { id: 6, name: "Red Onions", category: "Spices", price: "₦25,000", unit: "50kg Bag", location: "Kano", img: "https://i.pinimg.com/736x/80/50/c3/8050c322143dbb2ab94f3114c09420fb.jpg", desc: "Freshly harvested, pungent and flavorful." },
  { id: 7, name: "Banana", category: "Cash Crops", price: "₦10,000", unit: "Bunch", location: "Ondo", img: "https://i.pinimg.com/736x/06/53/13/0653136ae829a2060f300544583141c4.jpg", desc: "Organic and ready for market." },
  { id: 8, name: "Groundnut", category: "Oil Seeds", price: "₦150,000", unit: "100kg Bag", location: "Kano", img: "https://i.pinimg.com/736x/a5/db/b8/a5dbb80201c876e78a5e5a0478351114.jpg", desc: "Dried and ready for oil processing." },
  { id: 9, name: "Chilli Pepper", category: "Spices", price: "₦30,000", unit: "Basket", location: "Kaduna", img: "https://i.pinimg.com/736x/72/04/9f/72049fd87df2326347e980f37259b320.jpg", desc: "Spicy grade, dried options available." },
  { id: 10, name: "Yam Tubers", category: "Tubers", price: "₦3,500", unit: "Tuber", location: "Nasarawa", img: "https://i.pinimg.com/736x/b9/81/f2/b981f25cf1b24a364cb1d106509d4758.jpg", desc: "Large, healthy tubers, cured for longevity." },
  { id: 11, name: "Cocoa Beans", category: "Cash Crops", price: "₦1,200,000", unit: "Metric Ton", location: "Ondo", img: "https://i.pinimg.com/736x/3a/68/c2/3a68c26f03215269d09abaecb7cce7d7.jpg", desc: "Premium fermentation quality." },
  { id: 12, name: "Palm Produce", category: "Oil Seeds", price: "₦80,000", unit: "200L Drum", location: "Akwa Ibom", img: "https://i.pinimg.com/736x/fa/f2/15/faf215e8c45b8bb264646115fb7e6fe5.jpg", desc: "Pure unadulterated palm oil and kernels." },
  { id: 13, name: "Sugarcane", category: "Cash Crops", price: "₦15,000", unit: "Ton", location: "Kwara", img: "https://i.pinimg.com/1200x/70/39/8c/70398cdbe7411ae86c704680c4414e78.jpg", desc: "High sugar content, freshly cut." },
  // Added New Products
  { id: 14, name: "Wheat", category: "Grains", price: "₦65,000", unit: "100kg Bag", location: "Kano", img: "https://i.pinimg.com/736x/3b/be/90/3bbe90572b71c634cea4a3ff56b2e06d.jpg", desc: "Premium milling wheat, high yield." },
  { id: 15, name: "Plantain", category: "Cash Crops", price: "₦18,000", unit: "Bunch", location: "Cross River", img: "https://i.pinimg.com/736x/5c/9a/91/5c9a911d267017e573192741845b7c78.jpg", desc: "Freshly harvested, ripe and unripe available." },
  { id: 16, name: "Cotton", category: "Cash Crops", price: "₦350,000", unit: "Metric Ton", location: "Zamfara", img: "https://i.pinimg.com/1200x/bd/e8/6b/bde86b2c208bdf3897b372430fbc5d55.jpg", desc: "High-grade raw cotton for textiles." }
];

const useRouter = (initialPage = "home") => {
  const [page, setPage] = useState(initialPage);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = (newPage) => {
    setIsAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      window.scrollTo(0, 0);
      setIsAnimating(false);
    }, 400);
  };
  return { page, navigate, isAnimating };
};

export default function App() {
  const { page, navigate, isAnimating } = useRouter("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState(null);

  const startOrder = (product) => {
    setOrderProduct(product);
    navigate("signup");
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee { animation: marquee 25s linear infinite; }
    `;
    document.head.appendChild(style);

    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#111827";
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-white text-gray-900 scroll-smooth">
      <Navbar navigate={navigate} page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <div className={`flex-1 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {page === "home" && <Home navigate={navigate} />}
        {page === "marketplace" && <Marketplace startOrder={startOrder} />}
        {page === "suppliers" && <Suppliers />}
        {page === "signup" && <SignUp navigate={navigate} product={orderProduct} />}
        {page === "payment" && <Payment navigate={navigate} product={orderProduct} />}
      </div>
      
      <Footer navigate={navigate} />
    </div>
  );
}