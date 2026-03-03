"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Sun, Moon, ArrowRight, MessageCircle, 
  Send, Leaf, Globe, TrendingUp, Calendar, ShoppingCart, 
  Linkedin, Twitter, Play, Pause, Droplets, Zap
} from 'lucide-react';

// --- DATA ---
const NAVIGATION_DATA = [
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
      { title: "Bulk Orders", link: "/products/packaging-bulk-orders" }
    ]
  },
  {
    title: "Services",
    link: "/services",
    submenu: [
      { title: "Workshops", link: "/services/consultations-workshops" },
      { title: "Farm Tours", link: "/services/farm-tours" }
    ]
  },
  { title: "Bid/Reservation", link: "/bid-reservation", submenu: [] },
  { title: "Blog", link: "/blog", submenu: [] },
  {
    title: "Contact",
    link: "/contact-us",
    submenu: [
      { title: "Social Media", link: "/contact-us/form-map-social" },
      { title: "Careers", link: "/contact-us/careers-volunteer" }
    ]
  }
];

const METRICS = {
  hectares_under_management: 15,
  annual_cocoa_yield: 200,
  annual_cashew_yield: 500,
  number_of_global_trade_partners: 4
};

const RECENT_BLOGS = [
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s",
    title: "The Golden Bean: Future of Cocoa",
    summary: "Exploring how sustainable techniques are doubling yields in the tropical belt.",
    timestamp: "2026-02-25T14:30:00Z"
  },
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s",
    title: "Cashew Harvesting Secrets",
    summary: "How our precision drying methods ensure premium grade cashew nuts.",
    timestamp: "2026-02-26T09:00:00Z"
  }
];

const CALENDAR_DATA = [
  {
    month_year: "052026",
    activities: ["Pruning Cocoa Trees", "Soil Enrichment with Bio-char"]
  },
  {
    month_year: "112026",
    activities: ["Peak Cashew Harvesting", "Main Crop Cocoa Fermentation"]
  }
];

const BID_PRODUCTS = [
  { product_name: "Cocoa", units_produced: 500000, units_reserved: 100000 },
  { product_name: "Cashew", units_produced: 250000, units_reserved: 50000 }
];

// --- UTILS ---
const formatMonthYear = (my: string): string => {
  const month = parseInt(my.substring(0, 2));
  const year = parseInt(my.substring(2));
  const date = new Date(year, month - 1);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const calculateAvailability = (prod: number, res: number): string =>
  ((prod - res) / prod * 100).toFixed(0);

// --- COMPONENTS ---

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-6 glass-card rounded-2xl">
      <div className="text-4xl md:text-5xl font-bold text-cocoa-main mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {label.replace(/_/g, ' ')}
      </div>
    </div>
  );
};

interface NavItemType {
  title: string;
  link: string;
  submenu?: NavItemType[];
}

interface NavItemProps {
  item: NavItemType;
}
const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 py-4 px-3 text-sm font-medium hover:text-green-600 transition-colors">
        {item.title}
        {item.submenu && item.submenu.length > 0 && (
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && item.submenu && item.submenu.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl rounded-xl border border-white/20 p-2 z-50"
          >
            {item.submenu?.map((sub, idx) => (
              <div key={idx} className="relative group/sub">
                <a href={sub.link} className="block px-4 py-3 text-sm rounded-lg hover:bg-cocoa-50 dark:hover:bg-cocoa-900/20 transition-all flex justify-between items-center">
                  {sub.title}
                  {sub.submenu && <ChevronDown size={12} className="-rotate-90 opacity-40" />}
                </a>
                {sub.submenu && (
                  <div className="hidden group-hover/sub:block absolute left-full top-0 ml-1 w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl rounded-xl border border-white/20 p-2">
                    {sub.submenu.map((s, i) => (
                      <a key={i} href={s.link} className="block px-4 py-2 text-sm rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20">
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
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', text: 'Welcome to Bluewave. How can we help you with your cocoa or cashew inquiries today?' }
  ]);

  // Handle time-based theme
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6 || hour > 18) setIsDark(true);
  }, []);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatHistory([...chatHistory, { role: 'user', text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'bot', text: "Thank you for your message. An expert from our global trade team will reach out shortly." }]);
    }, 1000);
  };

  return (
    <div className={`${isDark ? 'dark' : ''} selection:bg-cocoa-200 selection:text-cocoa-900`}>
      <div className="bg-beige-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans overflow-x-hidden">
        
        {/* CSS VARS FOR THEME */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --cocoa: #5C3D2E;
            --green: #2D5A27;
            --beige: #F4F1EA;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .dark .glass-card {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .text-cocoa-main { color: #5C3D2E; }
          .dark .text-cocoa-main { color: #D7A86E; }
          .bg-cocoa-main { background-color: #5C3D2E; }
          .bg-green-main { background-color: #2D5A27; }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}} />

        {/* NAVIGATION */}
        <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-2 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cocoa-main rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Bluewave</span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION_DATA.map((item, i) => <NavItem key={i} item={item} />)}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="bg-cocoa-main text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-all hidden md:block">
                Inquire Now
              </button>
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-0 z-[90] bg-white dark:bg-gray-950 p-8 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                {NAVIGATION_DATA.map((item, i) => (
                  <div key={i} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.submenu?.map((sub, j) => (
                        <a key={j} href={sub.link} className="text-gray-500 dark:text-gray-400">{sub.title}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cocoa-200/30 dark:bg-cocoa-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-green-200/30 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200/30 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold mb-6 tracking-widest uppercase">
                <Leaf size={14} /> Sustainable Farming Leaders
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                Revolutionizing <span className="text-cocoa-main">Agriculture</span> for the Next Gen.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
                At Bluewave, we bridge the gap between traditional soil wisdom and modern trade efficiency. 
                Premium cocoa and cashews, cultivated with care for global excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cocoa-main text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
                  View Catalog <ArrowRight size={20} />
                </button>
                <button className="bg-white/50 dark:bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/80 transition-all">
                  Our Partnerships
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cocoa-main/20 to-green-main/20 rounded-[2.5rem] blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-white/50 shadow-2xl bg-black">
                {/* Standalone Video Mockup */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                >
                  <source src="/Video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <Play size={24} fill="white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Experience Bluewave</h4>
                      <p className="text-white/60 text-sm">Direct from our fields in Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="py-24 bg-beige-100 dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Counter value={METRICS.hectares_under_management} label="Hectares Managed" suffix="+" />
              <Counter value={METRICS.annual_cocoa_yield} label="Annual Cocoa Yield" suffix=" MT" />
              <Counter value={METRICS.annual_cashew_yield} label="Annual Cashew Yield" suffix=" MT" />
              <Counter value={METRICS.number_of_global_trade_partners} label="Global Trade Partners" />
            </div>
            <div className="mt-20 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Empowering Local Ecosystems</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Bluewave Multi Business Enterprises isn't just a farm; it's a hub for economic revitalization. 
                We manage over 15 hectares of prime arable land using bio-regenerative techniques that restore the soil while producing 
                world-class export-grade raw materials. Our global partners rely on us for consistency, quality, and ethical transparency.
              </p>
            </div>
          </div>
        </section>

        {/* INVESTOR PITCH SECTIONS (ADDITIONAL SECTIONS) */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                <h3 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-12 h-1 bg-green-main rounded"></div> Precision Sourcing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Investors choose us because we control the entire vertical stack. From high-yielding seedling distribution 
                  to post-harvest fermentation monitoring, we ensure that every kilogram of cocoa meets the strict 
                  Standard Quality benchmarks of international markets.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Our cashew operations leverage automated sorting and specialized moisture-controlled storage facilities, 
                  reducing waste by 35% compared to regional averages.
                </p>
              </motion.div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border-8 border-beige-200 dark:border-gray-800">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s" alt="Cocoa Farm" className="w-full h-full object-cover aspect-video" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-[2.5rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border-8 border-cocoa-100 dark:border-gray-800">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&s" alt="Cashew Farm" className="w-full h-full object-cover aspect-video" />
              </div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
                <h3 className="text-4xl font-bold mb-6 flex items-center gap-3">
                   Scaling Global Impact <div className="w-12 h-1 bg-cocoa-main rounded"></div>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  We are actively expanding our trade network across North America and Europe. By integrating 
                  IoT-enabled farm monitoring, we provide real-time yield predictions to our off-take partners, 
                  ensuring supply chain reliability even in fluctuating seasons.
                </p>
                <ul className="space-y-4">
                  {['Ethical Labor Certification', 'Blockchain Traceability Ready', 'Zero-Deforestation Commitment'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                        <Zap size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BID AVAILABILITY SECTION */}
        <section className="py-24 bg-cocoa-main text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-extrabold mb-12">Live Harvest Availability</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {BID_PRODUCTS.map((prod, i) => {
                const perc = calculateAvailability(prod.units_produced, prod.units_reserved);
                return (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20"
                  >
                    <div className="text-6xl font-black mb-4">{perc}%</div>
                    <div className="text-2xl font-bold mb-6">{prod.product_name} Stock Available</div>
                    <div className="w-full h-3 bg-white/20 rounded-full mb-8 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${perc}%` }}
                        className="h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      ></motion.div>
                    </div>
                    <button className="w-full bg-white text-cocoa-main py-4 rounded-xl font-bold hover:bg-beige-50 transition-colors">
                      Place Bid Now
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEASONAL CALENDAR SECTION */}
        <section className="py-24 bg-beige-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold mb-4">Farm Operations Hub</h2>
                <p className="text-gray-600 dark:text-gray-400">Our meticulous seasonal planning ensures we deliver products at their nutritional and flavor peak.</p>
              </div>
              <button className="flex items-center gap-2 text-cocoa-main dark:text-cocoa-200 font-bold border-b-2 border-cocoa-main py-1">
                View Full Season Calendar <Calendar size={18} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {CALENDAR_DATA.map((cal, i) => (
                <div key={i} className="glass-card p-8 rounded-[2rem] border-l-8 border-green-600">
                  <div className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400">
                    {formatMonthYear(cal.month_year)}
                  </div>
                  <ul className="space-y-4">
                    {cal.activities.map((act, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-cocoa-main"></div>
                        <span className="text-lg font-medium">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOGS SECTION */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-extrabold">Knowledge Hub</h2>
              <button className="text-sm font-bold bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full hover:bg-cocoa-main hover:text-white transition-all">
                Read All Articles
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {RECENT_BLOGS.map((blog, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-[2.5rem] overflow-hidden mb-6 aspect-video shadow-xl relative">
                    <img src={blog.img_src} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full">Read Story</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cocoa-main transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{blog.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 text-center border-4 border-white/30 dark:border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <h2 className="text-4xl font-bold mb-6">Stay Planted in Progress</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">Join our newsletter for weekly trade insights and harvest availability alerts.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input type="text" placeholder="Your Name" className="flex-1 px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cocoa-main outline-none" />
              <input type="email" placeholder="Email Address" className="flex-1 px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-cocoa-main outline-none" />
              <button className="bg-green-main text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all">Subscribe</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-100 dark:bg-gray-950 pt-20 pb-10 border-t border-gray-200 dark:border-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16">
              <div className="col-span-2 md:col-span-4 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-cocoa-main rounded flex items-center justify-center text-white font-bold">B</div>
                  <span className="font-bold text-lg">Bluewave Enterprises</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Cultivating excellence from the ground up. Join us in shaping a sustainable agricultural future.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-cocoa-main hover:text-white transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-cocoa-main hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              {NAVIGATION_DATA.slice(1, 6).map((item, i) => (
                <div key={i} className="col-span-1">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.submenu?.map((sub, j) => (
                      <li key={j}><a href={sub.link} className="text-sm text-gray-500 dark:text-gray-400 hover:text-cocoa-main transition-colors">{sub.title}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© 2026 Bluewave Multi Business Enterprises. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="text-sm text-gray-500">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING ACTION BUTTONS */}
        <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4">
          <a href="https://wa.me/your-link" target="_blank" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <MessageCircle size={30} />
          </a>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-cocoa-main text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
          >
            <Zap size={30} fill="white" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">1</div>
          </button>
        </div>

        {/* CHATBOT MODAL */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-28 right-8 w-80 md:w-96 z-[200] bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="bg-cocoa-main p-6 text-white flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Bluewave Assistant</h3>
                  <div className="flex items-center gap-1 text-xs text-green-300">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Online
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)}><X size={20} /></button>
              </div>
              <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50 dark:bg-gray-950">
                {chatHistory.map((chat, i) => (
                  <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      chat.role === 'user' 
                        ? 'bg-cocoa-main text-white rounded-tr-none' 
                        : 'bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none'
                    }`}>
                      {chat.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about bulk cocoa prices..."
                  className="flex-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm outline-none focus:ring-1 focus:ring-cocoa-main" 
                />
                <button type="submit" className="w-10 h-10 bg-cocoa-main text-white rounded-full flex items-center justify-center shrink-0">
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
