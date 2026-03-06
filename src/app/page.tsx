"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring,
  useInView
} from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowRight, 
  MessageSquare, 
  Send, 
  Leaf, 
  Globe, 
  BarChart3, 
  Calendar,
  Twitter,
  Linkedin,
  Phone
} from 'lucide-react';

// --- Types & Data ---
type Theme = 'dark' | 'light';

interface SubMenuItem {
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

interface NavItemType {
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

interface ProductType {
  product_name: string;
  units_produced: number;
  units_reserved: number;
}

const navData = {
  navigation: [
    { title: "Home", link: "/home", submenu: [] },
    { 
      title: "About Us", 
      link: "/about-us", 
      submenu: [
        {title: "Our Story", link: "/about-us/our-story"},
        {title: "Mission/Vision", link: "/about-us/mission-vision"},
        {title: "Team/Farmers", link: "/about-us/team-farmers"}
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
            {title: "Cocoa Farming", link: "/farming-practice/crop-farming/cocoa"},
            {title: "Cashew Farming", link: "/farming-practice/crop-farming/cashew"}
          ]
        },
        {title: "Sustainable Farming", link: "/farming-practice/sustainable-farming"},
        {title: "Organic Farming", link: "/farming-practice/organic-farming"},
        {title: "Farming Calendar", link: "/farming-practice/farming-calendar"}
      ] 
    },
    { 
      title: "Products", 
      link: "/products", 
      submenu: [
        {title: "Cocoa Beans", link: "/products/cocoa-beans"},
        {title: "Cashew Nuts", link: "/products/cashew-nuts"},
        {title: "Quality Control", link: "/products/quality-grading"},
        {title: "Bulk Orders", link: "/products/packaging-bulk-orders"}
      ] 
    },
    { title: "Services", link: "/services", submenu: [{title: "Workshops", link: "/services/consultations-workshops"}, {title: "Farm Tours", link: "/services/farm-tours"}] },
    { title: "Bid Now", link: "/bid-reservation", submenu: [] },
    { title: "Blog", link: "/blog", submenu: [] },
    { title: "Contact", link: "/contact-us", submenu: [{title: "Map & Social", link: "/contact-us/form-map-social"}, {title: "Careers", link: "/contact-us/careers-volunteer"}] }
  ]
};

const metrics = {
  hectares_under_management: 15,
  annual_cocoa_yield: 200,
  annual_cashew_yield: 500,
  number_of_global_trade_partners: 4
};

const blogs = [
  { img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s", title: "The Future of Sustainable Cocoa", summary: "Exploring regenerative agriculture techniques that double yield while preserving topsoil.", timestamp: "2026-02-25T14:30:00Z" },
  { img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s", title: "Cashew Market Resilience", summary: "How direct-to-partner trading models are stabilizing prices for global investors.", timestamp: "2026-02-25T14:30:00Z" }
];

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&"
];

const calendarData = [
  { month_year: "052026", activities: ["Main Cocoa Harvest Peak", "Organic Fertilization Cycle"] },
  { month_year: "082026", activities: ["Cashew Pruning Phase", "Sustainable Irrigation Audit"] }
];

const productStatus = {
  products: [
    { product_name: "Cocoa", units_produced: 500000, units_reserved: 100000 },
    { product_name: "Cashew", units_produced: 250000, units_reserved: 50000 }
  ]
};

// --- Components ---

const ThemeToggle = ({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) => (
  <button 
    onClick={toggleTheme}
    className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
  >
    {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
  </button>
);

const NavItem = ({ item, theme }: { item: NavItemType; theme: Theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSub = item.submenu && item.submenu.length > 0;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 py-4 px-3 text-sm font-medium hover:text-green-500 transition-colors uppercase tracking-wider">
        {item.title}
        {hasSub && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      
      <AnimatePresence>
        {isOpen && hasSub && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full left-0 w-64 p-4 rounded-xl shadow-2xl backdrop-blur-xl border border-white/10 ${theme === 'dark' ? 'bg-neutral-900/90' : 'bg-white/90'}`}
          >
            {item.submenu?.map((sub, idx) => (
              <div key={idx} className="group/sub relative">
                <a href={sub.link} className="block py-2 px-3 rounded-lg hover:bg-green-500/10 hover:text-green-500 transition-all text-sm">
                  {sub.title}
                </a>
                {sub.submenu && (
                  <div className="ml-4 border-l border-green-500/20 pl-4 mt-1">
                    {sub.submenu.map((ss, sidx) => (
                      <a key={sidx} href={ss.link} className="block py-1 text-xs opacity-70 hover:opacity-100">{ss.title}</a>
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

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
};

const ProductGauge = ({ product }: { product: ProductType }) => {
  const percent = Math.round(((product.units_produced - product.units_reserved) / product.units_produced) * 100);
  return (
    <div className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="opacity-10" />
          <motion.circle 
            cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="8"
            strokeDasharray="282.7"
            initial={{ strokeDashoffset: 282.7 }}
            whileInView={{ strokeDashoffset: 282.7 - (282.7 * percent) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{percent}%</span>
          <span className="text-[10px] uppercase opacity-60">Available</span>
        </div>
      </div>
      <h4 className="mt-4 text-xl font-bold">{product.product_name}</h4>
      <p className="text-sm opacity-60 mt-1">Global Reserve Status</p>
    </div>
  );
};

const ChatBot = ({ theme }: { theme: Theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState([{ role: 'bot', text: 'Welcome to Bluewave AI. How can I assist your investment today?' }]);

  const handleSend = () => {
    if (!msg.trim()) return;
    setHistory([...history, { role: 'user', text: msg }, { role: 'bot', text: 'Thank you for your inquiry. A portfolio manager will contact you shortly.' }]);
    setMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`w-80 h-96 rounded-2xl shadow-2xl border flex flex-col overflow-hidden backdrop-blur-2xl ${theme === 'dark' ? 'bg-neutral-900 border-white/10' : 'bg-white border-black/10'}`}
          >
            <div className="p-4 bg-green-600 text-white font-bold flex justify-between items-center">
              <span>Bluewave Assistant</span>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {history.map((h, i) => (
                <div key={i} className={`flex ${h.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${h.role === 'user' ? 'bg-green-600 text-white' : (theme === 'dark' ? 'bg-white/10' : 'bg-black/5')}`}>
                    {h.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                value={msg} 
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about yields..." 
                className="flex-1 bg-transparent border border-white/20 rounded-lg px-3 py-2 outline-none focus:border-green-500 transition-colors"
              />
              <button onClick={handleSend} className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-700"><Send className="w-4 h-4" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-3">
        <a href="https://wa.me/1234567890" target="_blank" className="p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="p-4 bg-green-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mobileMenu, setMobileMenu] = useState(false);
  const containerRef = useRef(null);
  
  // Parallax stuff
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 18 || hour < 6 ? 'dark' : 'light');
  }, []);

  const themeClasses = theme === 'dark' 
    ? 'bg-neutral-950 text-white' 
    : 'bg-[#FDFBF7] text-neutral-900';

  const sections = [
    { bg: theme === 'dark' ? 'bg-[#1a120b]' : 'bg-[#f5ebe0]', title: "Legacy & Soil", content: "With over two decades of agricultural excellence, Bluewave isn't just a farm; it's a global supply chain powerhouse. We nurture the earth to provide the world with the finest Grade-A Cocoa and Cashew raw materials." },
    { bg: theme === 'dark' ? 'bg-[#0f1d13]' : 'bg-[#e8f3ea]', title: "Sustainable Tech", content: "Our integration of AI-driven soil monitoring and drone irrigation ensures that every hectare under our management produces maximum yield with minimum environmental footprint." },
    { bg: theme === 'dark' ? 'bg-[#1e1e1e]' : 'bg-white', title: "Investor Synergy", content: "We offer transparent tracking for our global trade partners, providing real-time data on crop health, harvest cycles, and reserve statuses for informed decision-making." }
  ];

  return (
    <div className={`${themeClasses} font-sans transition-colors duration-500 overflow-x-hidden selection:bg-green-500/30`}>
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-md ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center transform rotate-12">
              <Leaf className="text-white w-6 h-6 -rotate-12" />
            </div>
            <span className="text-2xl font-black tracking-tighter">BLUEWAVE</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {navData.navigation.map((item, i) => (
              <NavItem key={i} item={item} theme={theme} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <button className="hidden md:block bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              Partner with Us
            </button>
            <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2"><Menu /></button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-[100] bg-black text-white p-8 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between mb-12">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={() => setMobileMenu(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="space-y-6">
              {navData.navigation.map((item, i) => (
                <div key={i} className="space-y-2">
                  <a href={item.link} className="text-3xl font-bold block hover:text-green-500 transition-colors">{item.title}</a>
                  {item.submenu.map((s, si) => (
                    <a key={si} href={s.link} className="block text-lg opacity-60 pl-4">{s.title}</a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brown-600/20 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 font-bold text-sm mb-6 uppercase tracking-widest">
              Global Agricultural Enterprise
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              HARVESTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-700">THE FUTURE</span>
            </h1>
            <p className="text-xl opacity-70 mb-10 max-w-lg leading-relaxed">
              Bluewave Multi Business Enterprises bridges the gap between fertile African soils and the global demand for premium cocoa and cashew raw products.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform group">
                Explore Our Farms <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                Investor Relations
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 relative">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-80"
              >
                <source src="/Video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Floating Glass Cards */}
            <div className="absolute -bottom-10 -left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-xs uppercase opacity-60 mb-2">Purity Rating</p>
              <p className="text-2xl font-bold text-green-400">99.8% Grade A</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Metrics --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Hectares Managed", value: metrics.hectares_under_management, suffix: "k+", icon: Globe },
              { label: "Annual Cocoa Yield", value: metrics.annual_cocoa_yield, suffix: " MT", icon: BarChart3 },
              { label: "Annual Cashew Yield", value: metrics.annual_cashew_yield, suffix: " MT", icon: Leaf },
              { label: "Trade Partners", value: metrics.number_of_global_trade_partners, suffix: " continents", icon: Globe }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform">
                  <m.icon />
                </div>
                <div className="text-4xl font-black mb-2">
                  <CountUp end={m.value} />{m.suffix}
                </div>
                <p className="text-sm opacity-50 uppercase font-bold tracking-widest">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Narrative Sections --- */}
      {sections.map((sec, i) => (
        <section key={i} className={`py-32 px-6 ${sec.bg}`}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                {sec.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl opacity-70 leading-relaxed"
              >
                {sec.content}
              </motion.p>
              <button className="mt-8 text-green-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn more about our standards <ArrowRight />
              </button>
            </div>
            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
              <div className="aspect-square bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 relative shadow-2xl">
                <img 
                  src={images[i % 2]}
                  className="w-full h-full object-cover"
                  alt="Farm view"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- Bid & Availability Section --- */}
      <section className={`py-32 px-6 ${theme === 'dark' ? 'bg-[#211b11]' : 'bg-[#fffcf7]'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Current Availability</h2>
            <p className="opacity-60">Real-time inventory levels for our global commodities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {productStatus.products.map((p, i) => (
              <ProductGauge key={i} product={p} />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-xl hover:shadow-green-500/20 active:scale-95">
              BID FOR PRODUCTS NOW
            </button>
          </div>
        </div>
      </section>

      {/* --- Seasonal Calendar --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-green-900/10 border border-green-500/20 rounded-[3rem] p-12 relative overflow-hidden">
          <Calendar className="absolute top-10 right-10 w-40 h-40 text-green-500/5 -rotate-12" />
          <h2 className="text-4xl font-bold mb-12">Farm Operations Calendar</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {calendarData.map((cal, i) => (
              <div key={i} className="space-y-4">
                <div className="text-green-500 font-bold text-2xl">
                  {new Date(
                    Number(cal.month_year.substring(2)),
                    Number(cal.month_year.substring(0, 2)) - 1
                  ).toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
                <ul className="space-y-3">
                  {cal.activities.map((act, ai) => (
                    <li key={ai} className="flex items-center gap-3 opacity-80">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-white text-black px-8 py-3 rounded-full font-bold">Full Season Overview</button>
        </div>
      </section>

      {/* --- Blogs --- */}
      <section className={`py-32 px-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-4">Knowledge Base</h2>
              <p className="opacity-60">Insights from our agronomists and market analysts</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold hover:text-green-500 transition-colors">
              View All Posts <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((post, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-6 relative shadow-xl">
                  <img src={post.img_src} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 py-1 px-3 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                    Industry News
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors">{post.title}</h3>
                <p className="opacity-60 line-clamp-2 leading-relaxed mb-4">{post.summary}</p>
                <span className="text-sm font-bold uppercase tracking-widest text-green-500">Read Write-up</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Newsletter --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 to-green-800 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Market</h2>
          <p className="opacity-80 mb-10 max-w-md mx-auto">Get monthly reports on yield forecasts, market pricing trends, and new investment cycles.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input placeholder="Name" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/50" />
            <input placeholder="Email Address" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/50" />
          </div>
          <button className="mt-6 bg-white text-green-700 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:shadow-xl transition-shadow active:scale-95">
            Subscribe
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className={`pt-24 pb-12 px-6 border-t border-white/5 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">BLUEWAVE</span>
            </div>
            <p className="opacity-50 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneering the future of ethical and profitable agriculture through technology and traditional expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-green-500/10 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-green-500/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest opacity-40">Company</h4>
            <a href="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Our Story</a>
            <a href="/vision" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Vision</a>
            <a href="/team" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Farmers</a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest opacity-40">Products</h4>
            <a href="/cocoa" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Cocoa Beans</a>
            <a href="/cashew" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Cashew Nuts</a>
            <a href="/orders" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Bulk Orders</a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest opacity-40">Resources</h4>
            <a href="/blog" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Market Blog</a>
            <a href="/calendar" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Farming Calendar</a>
            <a href="/tour" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Farm Tours</a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest opacity-40">Contact</h4>
            <span className="block text-sm opacity-70">Headquarters: Global Trade Center, Suite 500</span>
            <button className="text-sm font-bold text-green-500 hover:underline">Get Directions</button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30 font-bold">
          <p>© 2026 BLUEWAVE MULTI BUSINESS ENTERPRISES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Trade Terms</a>
          </div>
        </div>
      </footer>

      {/* --- Floating Utilities --- */}
      <ChatBot theme={theme} />
    </div>
  );
}
