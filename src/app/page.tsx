"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring,
  useInView 
} from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Sun, Moon, 
  Twitter, Linkedin, Send, MessageCircle, ArrowRight,
  Leaf, Sprout, Globe, Package, Calendar, TrendingUp,
  Users, Mail, User, ShieldCheck
} from 'lucide-react';

// --- TYPES ---
type NavItem = {
  title: string;
  link: string;
  submenu?: NavItem[];
};

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

type AnimatedNumberProps = {
  value: number;
};

type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  theme: Theme;
  toggleTheme: () => void;
};

type DropdownMenuProps = {
  item: NavItem;
  isMobile?: boolean; // make optional (important fix)
};

// --- DATA ---
const NAV_DATA = [
  { title: "Home", link: "#", submenu: [] },
  {
    title: "About Us", link: "#",
    submenu: [
      { title: "Our Story", link: "#" },
      { title: "Mission/Vision", link: "#" },
      { title: "Team/Farmers", link: "#" }
    ]
  },
  {
    title: "Farming Practice", link: "#",
    submenu: [
      {
        title: "Crop Farming", link: "#",
        submenu: [
          { title: "Cocoa Farming", link: "#" },
          { title: "Cashew Farming", link: "#" }
        ]
      },
      { title: "Sustainable Farming", link: "#" },
      { title: "Organic Farming", link: "#" },
      { title: "Farming Calendar", link: "#" }
    ]
  },
  {
    title: "Products", link: "#",
    submenu: [
      { title: "Cocoa Beans", link: "#" },
      { title: "Cashew Nuts", link: "#" },
      { title: "Quality & Grading", link: "#" },
      { title: "Packaging & Bulk", link: "#" }
    ]
  },
  {
    title: "Services", link: "#",
    submenu: [
      { title: "Workshops", link: "#" },
      { title: "Farm Tours", link: "#" }
    ]
  },
  { title: "Bid/Reservation", link: "#", submenu: [] },
  { title: "Blog", link: "#", submenu: [] },
  {
    title: "Contact Us", link: "#",
    submenu: [
      { title: "Social Media", link: "#" },
      { title: "Careers", link: "#" }
    ]
  }
];

const METRICS = {
  hectares_under_management: 15,
  annual_cocoa_yield: 200,
  annual_cashew_yield: 500,
  number_of_global_trade_partners: 4
};

const BLOGS = [
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s",
    title: "Sustainable Cocoa: The Future of Chocolate",
    summary: "Discover how we are revolutionizing the cocoa industry through organic practices and solar-integrated farm management.",
    timestamp: "2026-02-25T14:30:00Z"
  },
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s",
    title: "Cashew Harvesting Techniques",
    summary: "Learn about the precision required to harvest and process the highest grade cashew nuts for global export.",
    timestamp: "2026-02-20T10:00:00Z"
  }
];

const CALENDAR_DATA = {
  month_year: "022026",
  activities: ["Planting Cocoa Trees", "Cashew Harvesting"]
};

const BID_DATA = {
  products: [
    { product_name: "Cocoa", units_produced: 500000, units_reserved: 100000 },
    { product_name: "Cashew", units_produced: 250000, units_reserved: 50000 },
  ]
};

// --- COMPONENTS ---

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div className={`backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl ${className}`}>
    {children}
  </div>
);

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => (
  <button 
    onClick={toggleTheme}
    className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 transition-all hover:scale-110"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const DropdownMenu = ({ item, isMobile = false }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSub = item.submenu && item.submenu.length > 0;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button 
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-amber-500 transition-colors"
      >
        {item.title}
        {hasSub && <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      
      <AnimatePresence>
        {isOpen && hasSub && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`${isMobile ? 'relative pl-4' : 'absolute left-0 top-full pt-2'} min-w-[200px] z-50`}
          >
            <GlassCard className="p-2 shadow-xl border-amber-500/20 bg-white/90 dark:bg-neutral-900/90">
              {item.submenu?.map((sub: NavItem, idx: number) => (
                <div key={idx} className="relative group/sub">
                  <a 
                    href={sub.link}
                    className="flex items-center justify-between p-2 text-sm rounded-lg hover:bg-amber-500/10 hover:text-amber-600"
                  >
                    {sub.title}
                    {sub.submenu && <ChevronRight size={14} />}
                  </a>
                  {sub.submenu && (
                    <div className="hidden group-hover/sub:block absolute left-full top-0 pl-2">
                       <GlassCard className="p-2 min-w-[180px]">
                         {sub.submenu.map((s, i) => (
                           <a key={i} href={s.link} className="block p-2 text-sm hover:text-amber-500">{s.title}</a>
                         ))}
                       </GlassCard>
                    </div>
                  )}
                </div>
              ))}
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([{ type: 'bot', text: 'Welcome to Bluewave! How can we help you today?' }]);
  const [inputMsg, setInputMsg] = useState('');
useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);
  // Auto Theme based on time (6PM to 6AM = dark)
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme((hour >= 18 || hour < 6) ? 'dark' : 'light');
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const handleSendChat = () => {
    if (!inputMsg.trim()) return;
    setChatHistory([...chatHistory, { type: 'user', text: inputMsg }]);
    setInputMsg('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', text: "Thank you for reaching out. A Bluewave representative will be with you shortly." }]);
    }, 1000);
  };

  return (
    <div className={theme}>
      <div className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 min-h-screen selection:bg-amber-500 selection:text-white overflow-x-hidden font-sans">
        
        {/* Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-amber-600 z-[100] origin-left" style={{ scaleX }} />

        {/* --- NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-[90] transition-all px-6 py-4">
          <GlassCard className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 border-amber-500/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-600/20">
                <Leaf className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                BLUEWAVE
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-4">
              {NAV_DATA.map((item, idx) => (
                <DropdownMenu key={idx} item={item} />
              ))}
              <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700 mx-2" />
              <ThemeToggle theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md">
                Get Started
              </button>
            </div>

            {/* Mobile Nav Trigger */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </GlassCard>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="fixed inset-0 bg-neutral-50 dark:bg-neutral-950 z-[100] p-8 lg:hidden overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="text-2xl font-bold text-amber-600">Bluewave</div>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 border rounded-full"><X /></button>
                </div>
                <div className="space-y-4">
                  {NAV_DATA.map((item, idx) => (
                    <div key={idx} className="border-b border-neutral-200 dark:border-neutral-800 pb-2">
                      <DropdownMenu item={item} isMobile={true} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6">
                <Globe size={14} /> Global Multi-Business Enterprise
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Sustainable <span className="text-amber-600">Agro-Futures</span> For The World.
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg leading-relaxed">
                Empowering international trade through ethically sourced Cocoa and premium Cashew. We blend traditional farming wisdom with futuristic logistics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-amber-600/30 hover:-translate-y-1 transition-transform">
                  Explore Products <ArrowRight size={20} />
                </button>
                <button className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-8 py-4 rounded-xl font-bold hover:bg-neutral-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-amber-600 rounded-[3rem] rotate-6 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <video 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/Video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/20">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-80 uppercase tracking-tighter">Live Yield Growth</p>
                      <p className="text-2xl font-bold">+12.4% Annual Increase</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- METRICS / ABOUT --- */}
        <section className="py-24 bg-neutral-100 dark:bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Hectares Managed", value: METRICS.hectares_under_management, icon: <Leaf /> },
                { label: "Cocoa Yield (Tons)", value: METRICS.annual_cocoa_yield, icon: <Sprout /> },
                { label: "Cashew Yield (Tons)", value: METRICS.annual_cashew_yield, icon: <Package /> },
                { label: "Trade Partners", value: METRICS.number_of_global_trade_partners, icon: <Globe /> }
              ].map((m, i) => (
                <GlassCard key={i} className="p-8 text-center group hover:border-amber-500/50 transition-all cursor-default">
                  <div className="w-14 h-14 bg-amber-600/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {m.icon}
                  </div>
                  <h3 className="text-4xl font-black mb-2"><AnimatedNumber value={m.value} />+</h3>
                  <p className="text-sm text-neutral-500 uppercase tracking-widest">{m.label}</p>
                </GlassCard>
              ))}
            </div>
            
            <div className="mt-20 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Our Legacy, Your Growth.</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  At Bluewave Multi Business Enterprises, we are more than a farm; we are an ecosystem. Our expansive hectares are cultivated using regenerative agriculture that ensures soil health for decades to come. 
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/10 p-2 rounded-lg text-green-600 mt-1"><ShieldCheck size={20} /></div>
                    <div>
                      <h4 className="font-bold">Quality Guaranteed</h4>
                      <p className="text-sm opacity-70">Every bean and nut is graded to international standards (Grade A++).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/10 p-2 rounded-lg text-blue-600 mt-1"><Users size={20} /></div>
                    <div>
                      <h4 className="font-bold">Community Led</h4>
                      <p className="text-sm opacity-70">Empowering 500+ local farming families with fair-trade agreements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s" className="rounded-3xl shadow-lg hover:scale-105 transition-transform" alt="Cocoa" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&s" className="rounded-3xl shadow-lg translate-y-8 hover:scale-105 transition-transform" alt="Cashew" />
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCTS & BIDDING --- */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">Live Stock Availability</h2>
              <p className="text-neutral-500">Real-time inventory for global commodity investors.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {BID_DATA.products.map((p, i) => {
                const percentage = Math.round(((p.units_produced - p.units_reserved) / p.units_produced) * 100);
                return (
                  <GlassCard key={i} className="p-8 flex flex-col md:flex-row gap-8 items-center border-amber-600/30">
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle className="text-neutral-200 dark:text-neutral-800" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                        <motion.circle 
                          className="text-amber-600" 
                          strokeWidth="10" 
                          strokeDasharray={251.2}
                          initial={{ strokeDashoffset: 251.2 }}
                          whileInView={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          strokeLinecap="round" 
                          stroke="currentColor" 
                          fill="transparent" 
                          r="40" cx="50" cy="50" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-black">{percentage}%</span>
                        <span className="text-[10px] uppercase font-bold opacity-60">Left</span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-black mb-2">{p.product_name}</h3>
                      <p className="text-neutral-500 text-sm mb-6">Total Harvest: {p.units_produced.toLocaleString()} Units</p>
                      <button className="w-full md:w-auto bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950 text-neutral-50 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        Bid Now <TrendingUp size={18} />
                      </button>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- SEASONAL CALENDAR --- */}
        <section className="py-24 bg-amber-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <Calendar size={60} className="mb-6 opacity-50" />
                <h2 className="text-5xl font-black mb-4">Season {CALENDAR_DATA.month_year.slice(2)}</h2>
                <p className="text-amber-100 text-lg">February Cycle Activities. Our precision farming follows a strict seasonal calendar for maximum nutrient density.</p>
              </div>
              <div className="lg:w-2/3 flex flex-wrap gap-4">
                {CALENDAR_DATA.activities.map((act, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 min-w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] flex items-center gap-6"
                  >
                    <div className="text-6xl font-black opacity-20">0{i+1}</div>
                    <div className="text-2xl font-bold">{act}</div>
                  </motion.div>
                ))}
                <button className="flex-1 min-w-[300px] border-2 border-dashed border-white/30 rounded-[2rem] flex items-center justify-center text-xl font-bold hover:bg-white hover:text-amber-600 transition-all">
                  View Full Calendar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- BLOG SECTION --- */}
        <section className="py-24 px-6 bg-white dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-black mb-4">Bluewave Intelligence</h2>
                <p className="text-neutral-500">Market trends and farming breakthroughs.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all">
                All Stories <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {BLOGS.map((blog, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="flex flex-col md:flex-row gap-6 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800"
                >
                  <img src={blog.img_src} className="w-full md:w-56 h-56 object-cover rounded-2xl" alt={blog.title} />
                  <div className="flex flex-col justify-between py-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">{blog.title}</h3>
                      <p className="text-neutral-500 text-sm line-clamp-3 leading-relaxed">{blog.summary}</p>
                    </div>
                    <button className="text-amber-600 font-bold flex items-center gap-2 mt-4">Read Full Article <ArrowRight size={16}/></button>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="md:hidden w-full mt-10 bg-amber-600 text-white p-4 rounded-xl font-bold">See All Blogs</button>
          </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <GlassCard className="p-12 text-center relative overflow-hidden bg-amber-600/5">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl" />
              
              <Mail size={40} className="mx-auto mb-6 text-amber-600" />
              <h2 className="text-3xl md:text-5xl font-black mb-6">Join the Wave</h2>
              <p className="text-neutral-500 mb-10 max-w-xl mx-auto">Subscribe to our investor-exclusive newsletter for quarterly yield forecasts and market analysis.</p>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 rounded-xl border dark:bg-neutral-800 dark:border-neutral-700 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 rounded-xl border dark:bg-neutral-800 dark:border-neutral-700 outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-amber-600/20">
                  Subscribe
                </button>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-24 pb-12 bg-neutral-900 text-neutral-400">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Leaf className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold text-white tracking-tighter">BLUEWAVE</span>
              </div>
              <p className="max-w-xs mb-8 text-sm leading-relaxed">
                Pioneering the future of global agricultural trade through innovation, ethics, and premium sourcing.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-amber-600 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-amber-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            {NAV_DATA.filter(n => n.submenu.length > 0).slice(0, 4).map((col, i) => (
              <div key={i}>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-3 text-sm">
                  {col.submenu.map((s, j) => (
                    <li key={j}><a href={s.link} className="hover:text-amber-500 transition-colors">{s.title}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-6 border-t border-neutral-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
            <p>© 2026 Bluewave Multi Business Enterprises. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Trade</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </footer>

        {/* --- FLOATING CHAT & WHATSAPP --- */}
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-[350px] h-[500px] shadow-2xl overflow-hidden mb-2"
              >
                <GlassCard className="h-full flex flex-col bg-white dark:bg-neutral-900 shadow-none border-amber-600/30">
                  <div className="p-4 bg-amber-600 text-white flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle size={18}/></div>
                      <span className="font-bold">Bluewave Support</span>
                    </div>
                    <button onClick={() => setIsChatOpen(false)}><X size={20}/></button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-950">
                    {chatHistory.map((msg, i) => (
                      <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-neutral-200 dark:bg-neutral-800 rounded-tl-none'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t dark:border-neutral-800 flex gap-2 items-center">
                    <input 
                      type="text" 
                      value={inputMsg}
                      onChange={(e) => setInputMsg(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
                      placeholder="Type a message..." 
                      className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-4 py-2 text-sm outline-none" 
                    />
                    <button onClick={handleSendChat} className="text-amber-600"><Send size={20}/></button>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 self-end">
            <a 
              href="https://wa.me/yournumber" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform shadow-green-500/30"
            >
              <MessageCircle size={28} />
            </a>
            <button 
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform shadow-amber-600/30"
            >
              {isChatOpen ? <X size={28} /> : <Send size={28} />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
