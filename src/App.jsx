import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox"; // Import ChatBox
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Suppliers from "./pages/Suppliers";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";

export const PRODUCTS = [
  { id: 1, name: "Cashew Nuts", category: "Cash Crops", quantity: "10,000 Tons Available", location: "Oyo", img: "https://i.pinimg.com/736x/3b/fd/65/3bfd65b75dc2bac793546a70c6bc9a1c.jpg", desc: "Premium grade cashew nuts ready for export. Fully verified and escrow-protected." },
  { id: 2, name: "Palm Fruit & Oil", category: "Oil Seeds", quantity: "5,000 Metric Tons Available", location: "Akwa Ibom", img: "https://i.pinimg.com/1200x/7e/8c/f9/7e8cf96b27fd17cc25e0b9812bd14944.jpg", desc: "Fresh palm fruit and unadulterated red palm oil for large-scale industrial buyers." },
  { id: 3, name: "Ginger", category: "Spices", quantity: "100,000 Truckloads Available", location: "Kaduna", img: "https://i.pinimg.com/736x/27/4f/6d/274f6d321dca4a3e53d94cc1bbb3c818.jpg", desc: "Highly pungent, sun-dried ginger. Perfect for international spice markets." },
  { id: 4, name: "Cocoa Beans", category: "Cash Crops", quantity: "2,000 Bags Available", location: "Ondo", img: "https://i.pinimg.com/1200x/7e/e8/27/7ee82770c0e0c243fba0e28e9089ca33.jpg", desc: "Premium fermented cocoa beans, meeting all international export standards." },
  { id: 5, name: "Bell Peppers", category: "Vegetables", quantity: "1,500 Crates Available", location: "Plateau", img: "https://i.pinimg.com/736x/d1/7f/94/d17f940c810fe72f464ff0d5e9f0da16.jpg", desc: "Freshly harvested, vibrant bell peppers suitable for commercial food processing." },
  { id: 6, name: "Milled Rice", category: "Grains", quantity: "20,000 Bags Available", location: "Kebbi", img: "https://i.pinimg.com/1200x/f8/a1/6b/f8a16bf49f07b5d5735d1bb6be29c992.jpg", desc: "Aromatic, stone-free local rice. Fully sorted and bagged for wholesale." },
  { id: 7, name: "Fresh Tomatoes", category: "Vegetables", quantity: "50,000 Crates Available", location: "Kano", img: "https://i.pinimg.com/1200x/95/4e/1c/954e1c32735565cc98fac1b1a0b8db1e.jpg", desc: "High-yield variety tomatoes, ideal for industrial paste production." },
  { id: 8, name: "Plantain", category: "Cash Crops", quantity: "30,000 Bunches Available", location: "Cross River", img: "https://i.pinimg.com/736x/26/a9/2f/26a92facf46f3f9f5b132ce8df5d0cba.jpg", desc: "Mature, freshly harvested plantains available in ripe and unripe variants." },
  { id: 9, name: "Mangoes", category: "Fruits", quantity: "40,000 Tons Available", location: "Benue", img: "https://i.pinimg.com/736x/c5/91/c1/c591c1832812580f5aeb028c4956287a.jpg", desc: "Sweet, export-grade mangoes. Perfect for concentrate and juice production." },
  { id: 10, name: "Groundnut", category: "Oil Seeds", quantity: "15,000 Bags Available", location: "Kano", img: "https://i.pinimg.com/1200x/5c/15/94/5c1594a29369893cbc0c66de83e821ea.jpg", desc: "Dried, high-oil-content groundnuts, ready for industrial oil extraction." },
  { id: 11, name: "Potatoes", category: "Tubers", quantity: "25,000 Tons Available", location: "Plateau", img: "https://i.pinimg.com/736x/3a/ea/a0/3aeaa02d2a55990fb7524e87d71f2c54.jpg", desc: "Firm, disease-free Irish potatoes suitable for commercial snack production." },
  { id: 12, name: "Wheat", category: "Grains", quantity: "12,000 Bags Available", location: "Kano", img: "https://i.pinimg.com/736x/70/8d/4d/708d4dee56c06aa68468945cf65c1b43.jpg", desc: "Premium milling wheat, high yield, and protein content for industrial baking." },
  { id: 13, name: "Sesame Seeds", category: "Oil Seeds", quantity: "8,000 Tons Available", location: "Jigawa", img: "https://i.pinimg.com/736x/ba/b0/7f/bab07fc34f5de38a5314ea9e2e6d2d9d.jpg", desc: "99.9% purity, un-hulled sesame seeds, perfectly suited for oil extraction." },
  { id: 14, name: "Yam Tubers", category: "Tubers", quantity: "100,000 Tubers Available", location: "Nasarawa", img: "https://i.pinimg.com/736x/6e/5b/93/6e5b93320c702caaaaa86b934f69aea6.jpg", desc: "Large, cured yam tubers. Highly sought after for international diaspora markets." },
  { id: 15, name: "Soybeans", category: "Legumes", quantity: "18,000 Bags Available", location: "Benue", img: "https://i.pinimg.com/736x/52/e2/ac/52e2ac70299ccde740d44679783c1800.jpg", desc: "Non-GMO, high-protein soybeans for animal feed and oil processing." },
  { id: 16, name: "Coffee Beans", category: "Cash Crops", quantity: "6,000 Bags Available", location: "Taraba", img: "https://i.pinimg.com/1200x/e6/36/d9/e636d94135ff2b9b22c04edc53b4d848.jpg", desc: "Premium Arabica and Robusta coffee beans, expertly dried and sorted." },
  { id: 17, name: "Cotton", category: "Cash Crops", quantity: "4,000 Metric Tons Available", location: "Zamfara", img: "https://i.pinimg.com/736x/6c/e9/5e/6ce95e453fe4c18672ae19c52846ec9f.jpg", desc: "High-grade raw cotton, ginned and ready for international textile manufacturing." },
  { id: 18, name: "Dried Hibiscus", category: "Spices", quantity: "2,500 Tons Available", location: "Kano", img: "https://i.pinimg.com/1200x/84/c9/ad/84c9adaa719a2ed5cbc7a94118d9236d.jpg", desc: "Pharmaceutical-grade dried hibiscus flowers (Zobo), highly demanded in Europe." },
  { id: 19, name: "Cassava Starch", category: "Tubers", quantity: "9,000 Tons Available", location: "Ondo", img: "https://i.pinimg.com/736x/4a/7c/f0/4a7cf09020439fdd3caa1cf7e8233200.jpg", desc: "Industrial grade cassava starch, extracted and dried for commercial use." }
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
      <ChatBox /> {/* Added Global ChatBox */}
    </div>
  );
}