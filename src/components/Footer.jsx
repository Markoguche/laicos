 

export default function Footer({ navigate }) {
  return (
    <footer className="bg-gray-50 text-gray-500 pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="text-gray-900 text-xl font-bold mb-2 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-blue-600">◈</span> LAICOS
          </h3>
          <p className="text-sm">Nigeria's premier agricultural infrastructure.</p>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm">Platform</h4>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate("marketplace")}>Marketplace</li>
            <li className="cursor-pointer hover:text-blue-600 transition">Logistics</li>
            <li className="cursor-pointer hover:text-blue-600 transition">Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate("suppliers")}>Suppliers</li>
            <li className="cursor-pointer hover:text-blue-600 transition">Careers</li>
            <li className="cursor-pointer hover:text-blue-600 transition">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-blue-600 transition">Privacy</li>
            <li className="cursor-pointer hover:text-blue-600 transition">Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-16 pt-8 text-center text-xs text-gray-400">
        © 2026 Laicos Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}