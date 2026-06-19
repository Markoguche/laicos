 import logo from "../assets/logo.png";

export default function Navbar({ navigate, page, menuOpen, setMenuOpen }) {
  return (
    <nav className="fixed top-5 left-5 right-5 z-50 bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-sm">
      <div className="max-w-7xl mx-auto h-16 flex items-center px-6 relative">
        <button 
          className="font-bold text-xs flex items-center gap-2 text-gray-900 z-10" 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          onClick={() => navigate("home")}
        >
          <img src={logo} className="w-14 h-10" alt="Laicos Logo" />
        </button>
        
        <div className="hidden md:flex ml-auto gap-8 items-center">
          <button onClick={() => navigate("home")} className={`text-sm font-medium transition ${page === "home" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}`}>Home</button>
          <button onClick={() => navigate("marketplace")} className={`text-sm font-medium transition ${page === "marketplace" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}`}>Marketplace</button>
          <button onClick={() => navigate("suppliers")} className={`text-sm font-medium transition ${page === "suppliers" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}`}>Network</button>
        </div>

        <div className="hidden md:block ml-8">
          <button 
            className="bg-[#DFFF00] text-gray-900 font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#C7E600] transition uppercase tracking-wider"
            onClick={() => navigate("marketplace")}
          >
            Start Trading
          </button>
        </div>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-1 absolute right-6 top-1/2 -translate-y-1/2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-900 rounded"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border border-gray-100 shadow-lg rounded-b-3xl p-6 flex flex-col gap-4">
          <button onClick={() => { navigate("home"); setMenuOpen(false); }} className="text-left text-gray-700 font-medium hover:text-blue-600">Home</button>
          <button onClick={() => { navigate("marketplace"); setMenuOpen(false); }} className="text-left text-gray-700 font-medium hover:text-blue-600">Marketplace</button>
          <button onClick={() => { navigate("suppliers"); setMenuOpen(false); }} className="text-left text-gray-700 font-medium hover:text-blue-600">Network</button>
          <button 
            className="mt-2 bg-[#DFFF00] text-gray-900 font-bold text-sm px-5 py-3 rounded-full hover:bg-[#C7E600] transition uppercase tracking-wider"
            onClick={() => { navigate("marketplace"); setMenuOpen(false); }}
          >
            Start Trading
          </button>
        </div>
      )}
    </nav>
  );
}