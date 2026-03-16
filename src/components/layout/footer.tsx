"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MessageCircle, 
  Send,
  Linkedin,
  Twitter,
} from 'lucide-react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([{ type: 'bot', text: 'Hello! Welcome to Bluewave. How can I assist you with our farming products today?' }]);
  const [message, setMessage] = useState('');
  
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    setMessage('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Thank you for your inquiry. A representative will get back to you shortly!' }]);
    }, 1000);
  };


  return (
    <div>
    {/* --- FOOTER --- */}
      <footer className="bg-[#4A3728] text-white/90 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-white text-[#4A3728] rounded-lg flex items-center justify-center font-bold text-xl">B</div>
                <span className="font-extrabold text-2xl uppercase tracking-tighter">Bluewave</span>
              </div>
              <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
                Empowering the global supply chain through superior agricultural production and ethical trade partnerships.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#4A3728] transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#4A3728] transition-all"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white mb-2">Our Story</h4>
              <a href="#" className="text-sm hover:text-white transition-colors">Mission/Vision</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Team/Farmers</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Sustainability</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white mb-2">Products</h4>
              <a href="#" className="text-sm hover:text-white transition-colors">Cocoa Beans</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Cashew Nuts</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Quality Grading</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white mb-2">Resources</h4>
              <a href="#" className="text-sm hover:text-white transition-colors">Farm Calendar</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Bid Status</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Careers</a>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40 tracking-widest uppercase">
            <p>© 2026 BLUEWAVE MULTI BUSINESS ENTERPRISES. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Trade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- CHATBOT & WHATSAPP --- */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[200]">
        <a 
          href="https://wa.me/yournumber" 
          target="_blank"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.5 8.5 0 0 1 5.3 1.9L21 3Z"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path><path d="M9 14h6"></path></svg>
        </a>
        
        <div className="relative">
          <AnimatePresence>
            {isChatOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute bottom-20 right-0 w-[350px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden"
              >
                <div className="bg-[#8B5E3C] p-6 text-white flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">WaveBot</h4>
                    <p className="text-xs opacity-70">Typically replies instantly</p>
                  </div>
                  <X className="cursor-pointer" onClick={() => setIsChatOpen(false)} />
                </div>
                <div className="h-[300px] overflow-y-auto p-6 flex flex-col gap-4 bg-[#FEFAE0]/30">
                  {chatHistory.map((chat, i) => (
                    <div key={i} className={`max-w-[80%] p-3 rounded-2xl text-sm ${chat.type === 'user' ? 'bg-[#8B5E3C] text-white self-end rounded-tr-none' : 'bg-white border border-gray-100 self-start rounded-tl-none'}`}>
                      {chat.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask a question..." 
                    className="flex-1 bg-gray-50 px-4 py-2 rounded-xl outline-none text-sm" 
                  />
                  <button type="submit" className="p-2 bg-[#8B5E3C] text-white rounded-xl"><Send size={18} /></button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-16 h-16 bg-[#8B5E3C] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
          >
            {isChatOpen ? <X size={30} /> : <MessageCircle size={30} />}
          </button>
        </div>
      </div>

    </div>
     );
}

