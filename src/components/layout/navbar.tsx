"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
} from 'lucide-react';

// --- DATA ---
const NAV_DATA = [
  { title: "Home", link: "/home", submenu: [] },
  {
    title: "About Us",
    link: "/about-us",
    submenu: [
      { title: "Our Story", link: "/about-us/our-story" },
      { title: "Mission/Vision", link: "/about-us/mission-vision" },
      { title: "Team/Farmers", link: "/about-us/team-farmers" }
    ]
  },
  {
    title: "Farming Practice",
    link: "/farming-practice",
    submenu: [
      {
        title: "Crop Farming",
        link: "/farming-practice/crop-farming",
        submenu: [
          { title: "Cocoa Farming", link: "/farming-practice/crop-farming/cocoa" },
          { title: "Cashew Farming", link: "/farming-practice/crop-farming/cashew" }
        ]
      },
      { title: "Sustainable Farming", link: "/farming-practice/sustainable-farming" },
      { title: "Organic Farming", link: "/farming-practice/organic-farming" },
      { title: "Farming Calendar", link: "/farming-practice/farming-calendar" }
    ]
  },
  {
    title: "Products",
    link: "/products",
    submenu: [
      { title: "Cocoa Beans", link: "/products/cocoa-beans" },
      { title: "Cashew Nuts", link: "/products/cashew-nuts" },
      { title: "Quality & Grading", link: "/products/quality-grading" },
      { title: "Packaging", link: "/products/packaging-bulk-orders" }
    ]
  },
  {
    title: "Services",
    link: "/services",
    submenu: [
      { title: "Consultations", link: "/services/consultations-workshops" },
      { title: "Farm Tours", link: "/services/farm-tours" }
    ]
  },
  { title: "Bid/Reservation", link: "/bid-reservation", submenu: [] },
  { title: "Knowledge/Blog", link: "/blog", submenu: [] },
];


type MenuItem = {
  title: string;
  link: string;
  submenu?: MenuItem[];
};

const Dropdown = ({ item, depth = 0 }: { item: MenuItem; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSub = item.submenu && item.submenu.length > 0;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 py-4 px-3 text-sm font-medium hover:text-[#D4A373] transition-colors">
        {item.title}
        {hasSub && <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      
      <AnimatePresence>
        {isOpen && hasSub && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute left-0 top-full min-w-[200px] bg-white/90 backdrop-blur-md shadow-xl border border-white/20 rounded-xl overflow-hidden z-50`}
          >
            {item.submenu?.map((sub, idx) => (
              <div key={idx} className="relative group/sub">
                <a 
                  href={sub.link}
                  className="block px-4 py-3 text-sm text-[#4A3728] hover:bg-[#D4A373]/10 hover:text-[#8B5E3C] transition-all"
                >
                  {sub.title}
                </a>
                {sub.submenu && (
                  <div className="pl-4 pb-2">
                    {sub.submenu.map((s, i) => (
                      <a key={i} href={s.link} className="block py-1 text-xs text-[#6A6B4E] hover:text-[#2D4F1E] pl-2 border-l border-[#D4A373]">
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div>
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#8B5E3C] to-[#2D4F1E] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">B</div>
            <span className="font-extrabold text-xl tracking-tight uppercase">Bluewave</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {NAV_DATA.map((item, idx) => <Dropdown key={idx} item={item} />)}
            <button className="ml-4 px-6 py-2.5 bg-[#8B5E3C] text-white rounded-full font-semibold hover:bg-[#6F4A30] transition-all shadow-md active:scale-95">
              Get Started
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="text-[#8B5E3C]" />
          </button>
        </div>
      </nav>

      {/* --- MOBILE NAV --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-[110] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-xl">MENU</span>
              <X onClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto">
              {NAV_DATA.map((item, i) => (
                <div key={i}>
                  <a href={item.link} className="text-2xl font-bold hover:text-[#D4A373]">{item.title}</a>
                  {item.submenu.map((s, j) => (
                    <a key={j} href={s.link} className="block mt-2 ml-4 text-gray-500">{s.title}</a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

     );
}
