import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Suppliers from "./pages/Suppliers";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";

// --- DATA ---
export const PRODUCTS = [
  { id: 1, name: "Corn (Maize)", category: "Grains", price: "₦185,000", unit: "100kg Bag", location: "Kaduna", img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg", desc: "Fresh high-yield variety, suitable for industrial processing." },
  { id: 2, name: "Milled Rice", category: "Grains", price: "₦95,000", unit: "50kg Bag", location: "Kebbi", img: "https://static.vecteezy.com/system/resources/thumbnails/001/899/049/small/close-up-of-milled-rice-in-bowls-free-photo.jpg", desc: "Aromatic local rice variety, freshly harvested." },
  { id: 3, name: "Brown Beans", category: "Legumes", price: "₦85,000", unit: "100kg Bag", location: "Kano", img: "https://media.licdn.com/dms/image/v2/D4D12AQHyGyt50Ze1fQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697615006865?e=2147483647&v=beta&t=cNTjH4kow_KEfbFDo6Rwh7pctX8g-dN0lTqqdYt2C5I", desc: "High protein content, neatly sorted." },
  { id: 4, name: "Yam Tubers", category: "Tubers", price: "₦3,500", unit: "Tuber", location: "Nasarawa", img: "https://media.post.rvohealth.io/wp-content/uploads/2023/09/whole-and-halved-raw-african-yam-1296x728-header.jpg", desc: "Large, healthy tubers, cured for longevity." },
  { id: 5, name: "Irish Potato", category: "Tubers", price: "₦4,500", unit: "25kg Basket", location: "Plateau", img: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg", desc: "Firm and fresh, ideal for chips and mash." },
  { id: 6, name: "Sweet Potato", category: "Tubers", price: "₦3,000", unit: "25kg Basket", location: "Benue", img: "https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_640.jpg", desc: "Sweet variety, rich in vitamins." },
  { id: 7, name: "Millet", category: "Grains", price: "₦40,000", unit: "100kg Bag", location: "Jigawa", img: "https://media.istockphoto.com/id/1096039106/photo/millet-groats-in-spoon-above-bowl-top-view.jpg?s=612x612&w=0&k=20&c=An8LgpCXIzEg99-RPL76CpIj70h-Ks5uaIZ-rYHVRjA=", desc: "Dried grain, perfect for local beverages and flour." },
  { id: 8, name: "Avocado", category: "Fruits", price: "₦1,500", unit: "kg", location: "Ondo", img: "https://static.vecteezy.com/system/resources/thumbnails/054/419/918/small/fresh-avocados-on-a-green-backdrop-showcasing-ripe-fruit-ready-for-culinary-use-free-photo.jpeg", desc: "Organic and ready for export standards." },
  { id: 9, name: "Cocoa Beans", category: "Cash Crop", price: "₦1,200,000", unit: "Metric Ton", location: "Ondo", img: "https://t4.ftcdn.net/jpg/02/65/58/57/360_F_265585735_1gvwhTlFl738FxgMHsWr4btg1ywItrzk.jpg", desc: "Premium fermentation quality." },
  { id: 10, name: "Cassava", category: "Tubers", price: "₦45,000", unit: "Ton", location: "Benue", img: "https://cdn.britannica.com/68/140368-050-C1B8D613/tubers.jpg", desc: "High starch content variety." },
  { id: 11, name: "Sesame Seeds", category: "Seeds", price: "₦880,000", unit: "Metric Ton", location: "Jigawa", img: "https://plus.unsplash.com/premium_photo-1674654419404-667fcdd0fe13?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VzYW1lJTIwc2VlZHN8ZW58MHx8MHx8fDA%3D", desc: "99.9% purity, oil-extraction grade." },
  { id: 12, name: "Groundnut", category: "Legumes", price: "₦150,000", unit: "100kg Bag", location: "Kano", img: "https://motheragrifood.com/wp-content/uploads/2024/01/Groundnut-Seeds-2-min.jpg", desc: "Dried and ready for oil processing." },
  { id: 13, name: "Fresh Tomatoes", category: "Vegetables", price: "₦25,000", unit: "Basket", location: "Kano", img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg", desc: "Freshly harvested, high acidity for paste." },
  { id: 14, name: "Chilli Pepper", category: "Vegetables", price: "₦30,000", unit: "Basket", location: "Kaduna", img: "https://images.unsplash.com/photo-1567539549213-cc1697632146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyfGVufDB8fDB8fHww", desc: "Spicy grade, dried options available." },
];

// --- ROUTER LOGIC ---
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
    const style = document.createElement('style');
    style.innerHTML = globalCss;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="app-container">
      <Navbar navigate={navigate} page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <div className={`page-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`}>
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

// --- GLOBAL CSS (Blue & Lemon Theme) ---
const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap');
  
  :root {
    --bg-primary: #050505;
    --bg-secondary: #0F1115;
    --bg-surface: #161B22;
    --accent-blue: #2563EB; /* Primary Blue */
    --accent-lemon: #DFFF00; /* Secondary Lemon */
    --text-primary: #F0F0F0;
    --text-secondary: #8B949E;
    --border-color: rgba(255,255,255,0.08);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { 
    font-family: 'Inter', sans-serif; 
    background: var(--bg-primary); 
    color: var(--text-primary); 
    line-height: 1.5; 
    -webkit-font-smoothing: antialiased; 
    overflow-x: hidden;
  }
  
  .app-container { min-height: 100vh; display: flex; flex-direction: column; position: relative; }
  main { flex: 1; position: relative; z-index: 1; }
  img { max-width: 100%; display: block; }
  
  /* Animations */
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
  
  .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
  .reveal.active { opacity: 1; transform: translateY(0); }

  .page-wrapper { transition: opacity 0.4s ease, transform 0.4s ease; }
  .fade-in { opacity: 1; transform: translateY(0); }
  .fade-out { opacity: 0; transform: translateY(20px); }

  /* Layout Utilities */
  .container { max-width: 1400px; margin: 0 auto; padding: 0 24px; }
  
  h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: -0.03em; line-height: 0.95; }
  h1 { font-size: clamp(3.5rem, 10vw, 7rem); margin-bottom: 24px; }
  h2 { font-size: clamp(2.5rem, 6vw, 4.5rem); }
  
  .btn-primary {
    background: var(--accent-blue); color: #fff; border: none; padding: 18px 36px;
    font-weight: 700; border-radius: 50px; cursor: pointer; font-size: 0.9rem;
    transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 8px;
    text-transform: uppercase; letter-spacing: 1px;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(37, 99, 235, 0.4); }
  
  .btn-ghost { background: transparent; border: 1px solid var(--border-color); padding: 18px 36px; font-weight: 600; border-radius: 50px; cursor: pointer; color: var(--text-primary); transition: all 0.3s; }
  .btn-ghost:hover { background: rgba(255,255,255,0.05); border-color: var(--text-primary); }

  /* Card System - Increased Padding */
  .product-card { 
    background: var(--bg-surface); border-radius: 24px; overflow: hidden; cursor: pointer; 
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
    border: 1px solid var(--border-color);
  }
  .product-card:hover { transform: translateY(-10px); border-color: rgba(255,255,255,0.2); }
  .card-image { height: 300px; background-size: cover; background-position: center; transition: transform 0.6s ease; filter: brightness(0.9); }
  .product-card:hover .card-image { transform: scale(1.05); filter: brightness(1); }
  
  .icon { width: 24px; height: 24px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }

  /* Drawer Overlay - Fixed Z-Index for Close Button */
  .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 200; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .drawer-overlay.open { opacity: 1; pointer-events: all; }
  
  .drawer-content { 
    position: fixed; top: 0; right: 0; width: 100%; max-width: 550px; height: 100%; background: var(--bg-secondary); 
    z-index: 201; transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
    border-left: 1px solid var(--border-color); display: flex; flex-direction: column;
  }
  .drawer-overlay.open .drawer-content { transform: translateX(0); }

  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
  }
`;