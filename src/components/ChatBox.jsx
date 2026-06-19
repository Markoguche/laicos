import React, { useState } from "react";
import { Icon } from "./Icons";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "seller", text: "Hello! I represent the verified cooperative for Cocoa. How can I assist you today?" },
    { sender: "buyer", text: "Hi, I saw your listing for the 2,000 bags of cocoa. Are they fully fermented?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { sender: "buyer", text: input }]);
    setInput("");
    
    // Simulated seller response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "seller", text: "Yes, completely fermented and sun-dried. We have the documentation ready. We can proceed securely via Laicos Escrow." }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div data-aos="zoom-in" className="w-[340px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
            <div>
              <h4 className="font-bold text-sm">Cocoa Cooperative</h4>
              <span className="text-[10px] flex items-center gap-1 text-blue-100 mt-1">
                <Icon name="eye" style={{ width: 12, height: 12 }} /> Monitored by Laicos for Fraud Prevention
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center transition">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "buyer" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.sender === "buyer" ? "bg-blue-600 text-white rounded-br-none" : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Fraud Notice */}
          <div className="bg-blue-50 border-t border-blue-100 px-4 py-2 text-center">
            <p className="text-[10px] text-blue-700 font-medium">Do not transfer money outside the platform. All payments must go through Laicos Escrow.</p>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-gray-200 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button type="submit" className="bg-[#DFFF00] text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-[#C7E600] transition shadow-md">
              <Icon name="arrowRight" style={{ width: 16, height: 16 }} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform text-white relative"
        >
          <Icon name="chat" style={{ width: 28, height: 28 }} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#DFFF00] rounded-full border-2 border-white"></span>
        </button>
      )}
    </div>
  );
}