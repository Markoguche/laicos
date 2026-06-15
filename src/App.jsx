import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Suppliers from "./pages/Suppliers";

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
    }, 300); // Match CSS transition duration
  };

  return { page, navigate, isAnimating };
};

export default function App() {
  const { page, navigate, isAnimating } = useRouter("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
        {page === "marketplace" && <Marketplace />}
        {page === "suppliers" && <Suppliers />}
      </div>
      
      <Footer navigate={navigate} />
    </div>
  );
}

// --- GLOBAL CSS & ANIMATIONS ---
const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; background: #F5F0E8; color: #0D1B0F; line-height: 1.5; -webkit-font-smoothing: antialiased; }
  .app-container { min-height: 100vh; display: flex; flex-direction: column; }
  main { flex: 1; }
  img { max-width: 100%; display: block; }
  
  /* Animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }
  .reveal.active { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* Page Transitions */
  .page-wrapper { transition: opacity 0.3s ease, transform 0.3s ease; }
  .fade-in { opacity: 1; transform: translateY(0); }
  .fade-out { opacity: 0; transform: translateY(10px); }

  /* Layout Utilities */
  .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
  .text-center { text-align: center; }
  
  h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; }
  h1 { font-size: clamp(3rem, 6vw, 5rem); margin-bottom: 24px; }
  h2 { font-size: clamp(2rem, 4vw, 3.5rem); margin-bottom: 32px; }
  
  .btn-primary {
    background: #4CAF50; color: white; border: none; padding: 16px 32px;
    font-weight: 600; border-radius: 12px; cursor: pointer; font-size: 1rem;
    transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2); }
  
  .btn-outline { background: transparent; border: 2px solid rgba(0,0,0,0.1); padding: 14px 32px; font-weight: 600; border-radius: 12px; cursor: pointer; background: white; }
  
  .tag { display: inline-block; background: white; padding: 8px 16px; border-radius: 100px; font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
  .tag-light { background: rgba(0,0,0,0.05); color: #0D1B0F; font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; display: inline-block; padding: 8px 16px; border-radius: 4px; }

  /* Product Grid */
  .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
  .product-card { background: white; border-radius: 20px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
  .product-card:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
  .card-image { height: 200px; background-size: cover; background-position: center; transition: transform 0.5s ease; }
  .product-card:hover .card-image { transform: scale(1.05); }
  .card-body { padding: 24px; position: relative; overflow: hidden; }
  .card-category { font-size: 0.8rem; font-weight: 600; color: #4CAF50; text-transform: uppercase; letter-spacing: 1px; }
  .card-price { font-size: 1.2rem; font-weight: 800; margin-top: 8px; }
  .card-price span { font-size: 0.9rem; font-weight: 400; color: rgba(0,0,0,0.5); }
  .card-meta { margin-top: 12px; font-size: 0.9rem; color: rgba(0,0,0,0.5); display: flex; align-items: center; gap: 6px; }
  
  .icon { width: 24px; height: 24px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }

  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    .btn-primary { padding: 12px 24px; width: 100%; justify-content: center; }
  }
`;