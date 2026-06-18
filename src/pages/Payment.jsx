 

export default function Payment({ navigate, product }) {
  const order = product || { name: "Product", price: "N/A" };
  const whatsappNumber = "2348000000000";
  const message = `Hello Laicos, I want to order: ${order.name} (${order.price}).`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="pt-32 pb-20 flex justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-6">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Checkout</h2>
        <p className="text-gray-500 mb-8">Complete your transaction.</p>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
            <span className="text-gray-500">Product</span>
            <span className="font-semibold text-gray-900">{order.name}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-500">Total</span>
            <span className="text-2xl font-bold text-blue-600">{order.price}</span>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-full hover:bg-blue-700 transition shadow-lg uppercase text-sm tracking-wider mb-4">
            Pay with Card
          </button>

          <div className="text-center my-4 text-gray-400 text-xs">OR</div>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full flex items-center justify-center gap-2 bg-transparent text-green-600 border border-green-500 font-semibold py-4 rounded-full hover:bg-green-50 transition uppercase text-sm tracking-wider"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}