"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  ArrowRight, 
  Leaf, 
  Globe, 
  TrendingUp, 
  Calendar, 
  Droplets,
  Zap,
  ShieldCheck,
  Send,
  Plus
} from 'lucide-react';

// --- DATA CONSTANTS ---
const NAVIGATION_DATA = [
  { title: "Home", link: "/home", submenu: [] },
  { title: "About Us", link: "/about-us", submenu: [
      { title: "Our Story", link: "/about-us/our-story" },
      { title: "Mission/Vision", link: "/about-us/mission-vision" },
      { title: "Team/Farmers", link: "/about-us/team-farmers" }
  ]},
  { title: "Farming Practice", link: "/farming-practice", submenu: [
      { title: "Crop Farming", link: "/farming-practice/crop-farming", submenu: [
          { title: "Cocoa Farming", link: "/farming-practice/crop-farming/cocoa" },
          { title: "Cashew Farming", link: "/farming-practice/crop-farming/cashew" }
      ]},
      { title: "Sustainable Farming", link: "/farming-practice/sustainable-farming" },
      { title: "Organic Farming", link: "/farming-practice/organic-farming" },
      { title: "Farming Calendar", link: "/farming-practice/farming-calendar" }
  ]},
  { title: "Products", link: "/products", submenu: [
      { title: "Cocoa Beans", link: "/products/cocoa-beans" },
      { title: "Cashew Nuts", link: "/products/cashew-nuts" },
      { title: "Quality & Grading", link: "/products/quality-grading" },
      { title: "Packaging & Bulk Orders", link: "/products/packaging-bulk-orders" }
  ]},
  { title: "Services", link: "/services", submenu: [
      { title: "Consultations & Workshops", link: "/services/consultations-workshops" },
      { title: "Farm Tours / Agri-Tourism", link: "/services/farm-tours" }
  ]},
  { title: "Bid/Reservation", link: "/bid-reservation", submenu: [] },
  { title: "Knowledge/Blog", link: "/blog", submenu: [] },
  { title: "Contact Us", link: "/contact-us", submenu: [
      { title: "Map & Social Media", link: "/contact-us/form-map-social" },
      { title: "Careers / Volunteer", link: "/contact-us/careers-volunteer" }
  ]}
];

const FOOTER_DATA = [
  { title: "About Us", links: [{ title: "Our Story", link: "#" }, { title: "Mission", link: "#" }, { title: "Team", link: "#" }] },
  { title: "Products", links: [{ title: "Cocoa Beans", link: "#" }, { title: "Cashew Nuts", link: "#" }, { title: "Quality Control", link: "#" }] },
  { title: "Farming", links: [{ title: "Sustainable", link: "#" }, { title: "Organic", link: "#" }, { title: "Calendar", link: "#" }] },
  { title: "Connect", links: [{ title: "Blog", link: "#" }, { title: "Bid Now", link: "#" }, { title: "Careers", link: "#" }] }
];

const METRICS = {
  hectares_under_management: 15,
  annual_cocoa_yield: 200,
  annual_cashew_yield: 500,
  number_of_global_trade_partners: 4
};

const BLOGS = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s", title: "Sustainable Cocoa: Beyond the Bean", summary: "How we implement regenerative soil practices to increase flavonoid counts and ensure a 100-year farm lifecycle.", timestamp: "2026-02-25T14:30:00Z" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s", title: "Global Cashew Trends", summary: "Analysis of the surging demand for premium grade cashew kernels in the European and Asian markets.", timestamp: "2026-02-28T09:15:00Z" }
];

const CALENDAR = [
  { month_year: "102026", activities: ["Main Cocoa Harvest Peak", "Nut Drying & Grading"] },
  { month_year: "022027", activities: ["Cashew Bloom Monitoring", "Irrigation System Optimization"] }
];

const BID_PRODUCTS = [
  { product_name: "Cocoa", units_produced: 500000, units_reserved: 100000 },
  { product_name: "Cashew", units_produced: 250000, units_reserved: 50000 }
];

// --- COMPONENTS ---

type NavSubItem = {
  title: string;
  link: string;
  submenu?: NavSubItem[];
};

type NavItemType = {
  title: string;
  link: string;
  submenu?: NavSubItem[];
};

const NavItem = ({ item }: { item: NavItemType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSub = item.submenu && item.submenu.length > 0;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium hover:text-[#D4A373] transition-colors py-4">
        {item.title}
        {hasSub && <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </button>

      <AnimatePresence>
        {isOpen && hasSub && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-full left-0 min-w-[220px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden z-50 shadow-2xl"
          >
            {item.submenu?.map((sub, idx) => (
              <div key={idx} className="relative group/sub">
                <a href={sub.link} className="block px-6 py-3 hover:bg-white/10 text-sm transition-colors border-b border-white/5 last:border-0">
                  {sub.title}
                </a>
                {sub.submenu && (
                  <div className="pl-4 pb-2 bg-black/10">
                    {sub.submenu.map((s, i) => (
                      <a key={i} href={s.link} className="block px-6 py-2 text-xs opacity-70 hover:opacity-100">{s.title}</a>
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

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-2 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#606C38] to-[#D4A373] rounded-full flex items-center justify-center shadow-lg">
            <Leaf className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Bluewave</span>
        </div>

        <nav className="hidden lg:flex gap-8">
          {NAVIGATION_DATA.map((item, idx) => <NavItem key={idx} item={item} />)}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2 bg-[#D4A373] text-white rounded-full text-sm font-semibold hover:bg-[#BC8A5F] transition-all shadow-[0_0_20px_rgba(212,163,115,0.4)]">
            Invest Now
          </button>
          <button className="lg:hidden" onClick={() => setMobileMenu(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-[#283618] z-[110] p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={() => setMobileMenu(false)}><X size={32} /></button>
            </div>
            <div className="space-y-6">
              {NAVIGATION_DATA.map((item, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-[#D4A373] mb-2">{item.title}</p>
                  {item.submenu.map((s, j) => (
                    <a key={j} href={s.link} className="block py-2 opacity-80 text-lg">{s.title}</a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { role: 'bot', text: 'Hello! I am WaveBot. How can I assist you with your investment or trade inquiry today?' }
  ]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if(!message) return;
    setChat([...chat, { role: 'user', text: message }]);
    setMessage("");
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'bot', text: 'Thank you for your message. An advisor from Bluewave will contact you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[350px] h-[500px] bg-white text-black rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#283618] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4A373] flex items-center justify-center font-bold">B</div>
                <div>
                  <p className="text-xs opacity-70">Bluewave Intelligence</p>
                  <p className="text-sm font-bold">WaveBot Active</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {chat.map((c, i) => (
                <div key={i} className={`flex ${c.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${c.role === 'user' ? 'bg-[#D4A373] text-white' : 'bg-white border border-slate-200'}`}>
                    {c.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={send} className="p-4 bg-white border-t flex gap-2">
              <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..." 
                className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 ring-[#D4A373]"
              />
              <button className="p-2 bg-[#283618] text-white rounded-full"><Send size={16} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-4">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#D4A373] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={28} /> : <Zap size={28} />}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white font-sans overflow-x-hidden selection:bg-[#D4A373] selection:text-white">
      <Header />
      <ChatBot />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-96 h-96 bg-[#D4A373] rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#606C38] rounded-full blur-[150px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#D4A373] rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">Redefining Global Agriculture</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Cultivating Excellence <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] via-[#FEFAE0] to-[#606C38]">
                For the Global Market
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              Bluewave Multi Business Enterprises bridges the gap between traditional organic farming 
              and global trade high-tech logistics. We produce premium cocoa and cashew at scale, 
              meeting world-class standards for ethical sourcing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#D4A373] text-white rounded-full font-bold flex items-center gap-3 group hover:scale-105 transition-all">
                Explore Our Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all backdrop-blur-sm">
                Watch Virtual Tour
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white/5 aspect-video shadow-2xl group">
              {/* Fallback Image / Video Wrapper */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              >
                <source src="/Video.mp4" type="video/mp4" />
                {/* Fallback to image if video fails */}
                <img src="https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=1200" alt="Farm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            {/* Parallax Floating Cards */}
            <motion.div 
              style={{ translateY: -30 }}
              className="absolute -bottom-10 -left-10 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#606C38] rounded-2xl flex items-center justify-center"><Globe className="text-white" /></div>
                <div>
                  <p className="text-sm font-bold">100% Export Grade</p>
                  <p className="text-xs opacity-60">Verified Origin Status</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-24 bg-[#FEFAE0] text-[#283618]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(METRICS).map(([key, value], idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-3xl shadow-sm border border-[#606C38]/10"
              >
                <h3 className="text-4xl lg:text-5xl font-black mb-2 text-[#606C38]">
                  <Counter value={value} suffix={key.includes('hectares') ? '+' : ''} />
                </h3>
                <p className="text-xs uppercase font-bold tracking-widest opacity-60">
                  {key.replace(/_/g, ' ')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLEX INFO SECTION: INVESTOR OPPORTUNITIES */}
      <section className="py-32 bg-[#283618] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                whileHover={{ scale: 0.95 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s" 
                className="rounded-3xl h-64 object-cover w-full" 
              />
              <motion.img 
                whileHover={{ scale: 0.95 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&s" 
                className="rounded-3xl h-80 object-cover w-full mt-10" 
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Scalable Future in <br /> 
              <span className="text-[#D4A373]">Agri-Commodity Assets</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: <TrendingUp size={24} />, title: "Market-Leading Yields", text: "Leveraging precision agriculture and IoT soil monitoring to maximize per-hectare output beyond industry standards." },
                { icon: <ShieldCheck size={24} />, title: "Risk Mitigation", text: "Diversified production across cocoa and cashew assets ensures stable returns regardless of single-commodity market shifts." },
                { icon: <Globe size={24} />, title: "Global Logistics", text: "Proprietary supply chain networks reaching 4 continents with integrated tracking and transparency for buyers." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 shrink-0 bg-[#D4A373]/20 rounded-2xl flex items-center justify-center text-[#D4A373]">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="opacity-70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BID PERCENTAGE SECTION */}
      <section className="py-32 bg-[#D4A373] text-[#283618]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Real-Time Allocation</h2>
              <p className="text-lg font-medium opacity-80 leading-relaxed">
                As a high-demand enterprise, our harvest cycles are reserved months in advance. 
                Below is the live availability of our current production window.
              </p>
            </div>
            <button className="px-10 py-5 bg-[#283618] text-white rounded-full font-bold shadow-2xl hover:-translate-y-1 transition-transform">
              Enter Bidding Portal
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {BID_PRODUCTS.map((prod, i) => {
              const percLeft = ((prod.units_produced - prod.units_reserved) / prod.units_produced * 100).toFixed(1);
              return (
                <div key={i} className="bg-white/20 p-10 rounded-[3rem] border border-white/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                    <TrendingUp size={48} className="opacity-10 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <h4 className="text-3xl font-black mb-8 uppercase tracking-tighter">{prod.product_name}</h4>
                  <div className="relative h-2 bg-black/10 rounded-full mb-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percLeft}%` }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#283618]"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-5xl font-black">{percLeft}%</p>
                      <p className="text-sm font-bold opacity-60 uppercase mt-2 text-[#283618]">Available for Public Reservation</p>
                    </div>
                    <button className="w-12 h-12 rounded-full border-2 border-[#283618] flex items-center justify-center hover:bg-[#283618] hover:text-white transition-all">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="py-32 bg-[#606C38]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Seasonal Intelligence</h2>
            <p className="opacity-70">Align your supply chain with our biological cycles.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CALENDAR.map((item, idx) => (
              <div key={idx} className="bg-[#283618] p-10 rounded-3xl border border-white/5 relative group hover:border-[#D4A373]/50 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4A373]/10 flex flex-col items-center justify-center text-[#D4A373]">
                    <span className="text-xs font-bold uppercase">{item.month_year.substring(0,2)}</span>
                    <span className="text-xl font-bold">{item.month_year.substring(2)}</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(parseInt(item.month_year.substring(2)), parseInt(item.month_year.substring(0,2)) - 1))} {item.month_year.substring(2)}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {item.activities.map((act, i) => (
                    <li key={i} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></div>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              View Full 2026/27 Seasonal Calendar
            </button>
          </div>
        </div>
      </section>

      {/* RECENT BLOGS */}
      <section className="py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tighter">Knowledge Base</h2>
            <button className="text-[#D4A373] font-bold flex items-center gap-2 group">
              View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {BLOGS.map((blog, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold">Industry Analysis</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D4A373] transition-colors">{blog.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed mb-6">{blog.summary}</p>
                <span className="text-xs uppercase tracking-widest font-black text-[#D4A373]">Read Insight</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-32 relative overflow-hidden bg-[#D4A373]">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 text-[#283618]">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Partner With Bluewave</h2>
          <p className="text-lg opacity-80 mb-10 font-medium">Get early notifications on harvest allocations, commodity pricing, and farm tours.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="flex-1 px-8 py-5 rounded-full bg-white/20 border-white/30 placeholder:text-[#283618]/50 focus:outline-none focus:bg-white transition-all shadow-xl" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 px-8 py-5 rounded-full bg-white/20 border-white/30 placeholder:text-[#283618]/50 focus:outline-none focus:bg-white transition-all shadow-xl" 
            />
            <button className="px-10 py-5 bg-[#283618] text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Join
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] border-t border-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-tr from-[#606C38] to-[#D4A373] rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">Bluewave</span>
            </div>
            <p className="opacity-50 text-sm max-w-xs mb-8">
              A global leader in multi-business enterprise agriculture, specialized in cocoa and cashew production with ethical transparency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          {FOOTER_DATA.map((col, i) => (
            <div key={i}>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#D4A373]">{col.title}</h5>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}><a href={link.link} className="opacity-50 hover:opacity-100 text-sm transition-opacity">{link.title}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs opacity-40 uppercase tracking-widest font-bold">
          <p>© 2026 Bluewave Multi Business Enterprises. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Trade</a>
            <a href="#">Sustainability Report</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
