"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  Leaf, 
  TrendingUp, 
  Globe, 
  Calendar, 
  Droplets,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const METRICS = {
  hectares_under_management: 15,
  annual_cocoa_yield: 200,
  annual_cashew_yield: 500,
  number_of_global_trade_partners: 4
};

const BLOGS = [
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s",
    title: "Sustainable Harvesting in 2026",
    summary: "How Bluewave is revolutionizing cocoa yields through precision agriculture and soil regeneration.",
    timestamp: "2026-02-25T14:30:00Z"
  },
  {
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s",
    title: "Global Cashew Markets",
    summary: "A deep dive into why our grade-A cashew nuts are outperforming competitors in the European sector.",
    timestamp: "2026-02-20T10:00:00Z"
  }
];

const CALENDAR = [
  { month_year: "032026", activities: ["Peak Pruning", "Soil PH Analysis"] },
  { month_year: "042026", activities: ["Irrigation Tuning", "Pollination Monitoring"] }
];

const BID_PRODUCTS = [
  { product_name: "Cocoa", units_produced: 500000, units_reserved: 100000 },
  { product_name: "Cashew", units_produced: 250000, units_reserved: 50000 }
];

// --- COMPONENTS ---

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

export default function App() {  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const formatMonth = (my: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = parseInt(my.substring(0, 2)) - 1;
    const y = my.substring(2);
    return `${months[m]} ${y}`;
  };

  return (
    <main>
    {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        <motion.div 
          style={{ scale }}
          className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        ></motion.div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC6] text-[#2D4F1E] text-xs font-bold uppercase tracking-widest mb-6">
              <Leaf size={14} /> Global Agricultural Leaders
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Cultivating <span className="text-[#8B5E3C]">Wealth</span> Through The Earth's Finest.
            </h1>
            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Bluewave Multi Business Enterprises bridges the gap between fertile African soils and the global market, specializing in premium Grade-A Cocoa and high-yield Cashew exports.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
                Invest Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#D4A373] text-[#8B5E3C] rounded-xl font-bold hover:bg-[#D4A373] hover:text-white transition-all">
                Our Heritage
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] aspect-video border-8 border-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600"><TrendingUp /></div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">Yield Growth</div>
                  <div className="text-xl font-black text-[#2D4F1E]">+24% YoY</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- METRICS SECTION --- */}
      <section className="py-24 bg-[#CCD5AE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Hectares Managed", value: METRICS.hectares_under_management, suffix: "k+", color: "#2D4F1E" },
              { label: "Cocoa Yield (MT)", value: METRICS.annual_cocoa_yield, suffix: "k", color: "#8B5E3C" },
              { label: "Cashew Yield (MT)", value: METRICS.annual_cashew_yield, suffix: "k", color: "#D4A373" },
              { label: "Global Partners", value: METRICS.number_of_global_trade_partners, suffix: "", color: "#4A3728" },
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/30 text-center"
              >
                <div className="text-4xl lg:text-5xl font-black mb-2" style={{ color: m.color }}>
                  <Counter value={m.value} />{m.suffix}
                </div>
                <div className="text-sm font-bold text-[#4A3728]/70 uppercase tracking-widest leading-tight">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUE PROP SECTION (The Multi Sections) --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">Direct From The <span className="text-[#8B5E3C]">Roots</span> Of Africa</h2>
              <p className="text-lg text-[#6A6B4E] mb-6">
                Our multi-business enterprise operates on the principles of <strong>Ethical Sourcing</strong> and <strong>Regenerative Agriculture</strong>. We don't just farm; we build ecosystems that sustain generations. By controlling every step of the supply chain, from the first seed in our 15,000-hectare nursery to the final shipping container, we guarantee 100% purity and unmatched quality.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <ShieldCheck className="text-[#2D4F1E]" />, title: "Certified Grading", desc: "Rigorous quality control for every ton produced." },
                  { icon: <Globe className="text-[#D4A373]" />, title: "Export Ready", desc: "Logistics pipelines optimized for EU and Asian markets." },
                  { icon: <Droplets className="text-[#8B5E3C]" />, title: "Tech-Driven", desc: "IoT monitoring for optimal moisture and crop health." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/30 border border-white/20">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#4A3728]">{item.title}</h4>
                      <p className="text-sm text-[#6A6B4E]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s" className="rounded-3xl shadow-xl" alt="Farming" />
                <div className="bg-[#D4A373] p-8 rounded-3xl text-white">
                  <h3 className="text-2xl font-bold mb-2">Purity Guarantee</h3>
                  <p className="text-sm opacity-90">Organic certification on 80% of current yield.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#2D4F1E] p-8 rounded-3xl text-white">
                  <h3 className="text-2xl font-bold mb-2">Sustainable</h3>
                  <p className="text-sm opacity-90">Reducing carbon footprint through solar drying.</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&s" className="rounded-3xl shadow-xl" alt="Harvest" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALENDAR SECTION --- */}
      <section className="py-24 bg-[#E9EDC6] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#2D4F1E] mb-4">Seasonal Intelligence</h2>
          <p className="text-[#6A6B4E]">Transparency in our farming lifecycle.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {CALENDAR.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-lg border-b-8 border-[#D4A373]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FEFAE0] rounded-2xl flex items-center justify-center text-[#8B5E3C]"><Calendar size={32} /></div>
                <h3 className="text-3xl font-black text-[#4A3728]">{formatMonth(item.month_year)}</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {item.activities.map((act, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#6A6B4E]">
                    <div className="w-2 h-2 bg-[#2D4F1E] rounded-full"></div> {act}
                  </li>
                ))}
              </ul>
              <button className="text-[#8B5E3C] font-bold flex items-center gap-2 hover:underline">
                View Full Season <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- BID SECTION --- */}
      <section className="py-24 bg-[#8B5E3C] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-12">Limited Inventory Reservation</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {BID_PRODUCTS.map((p, i) => {
              const perc = ((p.units_produced - p.units_reserved) / p.units_produced) * 100;
              return (
                <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20">
                  <h3 className="text-3xl font-bold mb-2">{p.product_name}</h3>
                  <div className="text-[#E9EDC6] font-black text-6xl mb-6">{perc.toFixed(0)}%</div>
                  <p className="text-white/70 text-sm mb-8 font-medium tracking-widest uppercase">Available for Bidding</p>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-8">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${perc}%` }}
                      className="h-full bg-[#E9EDC6]"
                    ></motion.div>
                  </div>
                  <button className="w-full py-4 bg-white text-[#8B5E3C] rounded-xl font-black hover:scale-[1.02] transition-transform">
                    PLACE BID NOW
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- BLOG SECTION --- */}
      <section className="py-24 px-6 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-[#4A3728] mb-4">Latest Insights</h2>
              <p className="text-[#6A6B4E]">Market analysis and farming updates.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#8B5E3C] font-bold group">
              Go to Blog Page <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {BLOGS.map((blog, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img src={blog.img_src} alt={blog.title} className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-3xl font-black text-[#4A3728] mb-4 group-hover:text-[#8B5E3C] transition-colors">{blog.title}</h3>
                <p className="text-[#6A6B4E] leading-relaxed mb-6">{blog.summary}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#8B5E3C]">
                  Read Full Write-up <ExternalLink size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#2D4F1E] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Stay Ahead of the Yield</h2>
          <p className="text-white/80 mb-12 max-w-xl mx-auto">Get monthly market reports and priority access to new harvest reserves directly in your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Your Name" className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:bg-white/20 outline-none placeholder:text-white/50" />
            <input type="email" placeholder="Email Address" className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:bg-white/20 outline-none placeholder:text-white/50" />
            <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition-colors">Join Now</button>
          </form>
        </div>
      </section>
     </main>
  )
}
