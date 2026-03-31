"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Calendar, Droplets, TrendingUp, ExternalLink } from 'lucide-react';

const COCOA_METRICS = {
  farm_size_hectares: 15000,
  annual_yield_mt: 200,
  peak_season_start: "October",
  peak_season_end: "February",
  off_season_start: "March",
  off_season_end: "September"
};

const SEASON_CALENDAR = [
  { month: "October", activities: ["Pruning", "Fertilizer Application", "Pest Monitoring"] },
  { month: "November", activities: ["Flowering Observation", "Soil Moisture Check"] },
  { month: "December", activities: ["Harvesting Begins", "Quality Assessment"] },
  { month: "January", activities: ["Peak Harvesting", "Sorting & Fermentation"] },
  { month: "February", activities: ["Final Harvest", "Processing & Packaging"] },
  { month: "March", activities: ["Maintenance & Irrigation"] },
  { month: "April", activities: ["Off-season Soil Preparation"] },
  { month: "May", activities: ["Nursery Preparation"] },
  { month: "June", activities: ["Irrigation Tuning"] },
  { month: "July", activities: ["Pest Prevention & Monitoring"] },
  { month: "August", activities: ["Off-season Pruning"] },
  { month: "September", activities: ["Fertilizer Application & Readiness"] },
];

// --- COUNTER COMPONENT ---
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = totalMiliseconds / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

// --- PAGE COMPONENT ---
export default function CocoaPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        <motion.div
          style={{ scale }}
          className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC6] text-[#2D4F1E] text-xs font-bold uppercase tracking-widest mb-6">
              <Leaf size={14} /> Premium Cocoa
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Sustainable <span className="text-[#8B5E3C]">Cocoa</span> From Seed To Market
            </h1>
            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our cocoa plantations span {COCOA_METRICS.farm_size_hectares.toLocaleString()} hectares, delivering {COCOA_METRICS.annual_yield_mt} metric tons of premium-grade cocoa annually. With carefully planned on-season and off-season cycles, Bluewave ensures consistent quality and peak flavor in every bean.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
                Buy Cocoa <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#D4A373] text-[#8B5E3C] rounded-xl font-bold hover:bg-[#D4A373] hover:text-white transition-all">
                Our Farm Practices
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
                <source src="/CocoaFarm.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- METRICS SECTION --- */}
      <section className="py-24 bg-[#CCD5AE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Farm Size (ha)", value: COCOA_METRICS.farm_size_hectares, color: "#2D4F1E" },
              { label: "Annual Yield (MT)", value: COCOA_METRICS.annual_yield_mt, color: "#8B5E3C" },
              { label: "Peak Season", value: COCOA_METRICS.peak_season_start + " – " + COCOA_METRICS.peak_season_end, color: "#D4A373", isText: true },
              { label: "Off Season", value: COCOA_METRICS.off_season_start + " – " + COCOA_METRICS.off_season_end, color: "#4A3728", isText: true },
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
                  {m.isText ? m.value : <Counter value={m.value as number } />}
                </div>
                <div className="text-sm font-bold text-[#4A3728]/70 uppercase tracking-widest leading-tight">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEASON CALENDAR --- */}
      <section className="py-24 bg-[#FAEDCD] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#4A3728] mb-4">Cocoa Seasonal Calendar</h2>
          <p className="text-[#6A6B4E]">On-season and off-season activities for optimum yield.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {SEASON_CALENDAR.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-lg border-b-8 border-[#D4A373]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FEFAE0] rounded-2xl flex items-center justify-center text-[#8B5E3C]">
                  <Calendar size={32} />
                </div>
                <h3 className="text-3xl font-black text-[#4A3728]">{item.month}</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {item.activities.map((act, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#6A6B4E]">
                    <div className="w-2 h-2 bg-[#2D4F1E] rounded-full"></div> {act}
                  </li>
                ))}
              </ul>
              <button className="text-[#8B5E3C] font-bold flex items-center gap-2 hover:underline">
                View Detailed Plan <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- YIELD & QUALITY SECTION --- */}
      <section className="py-24 bg-[#E9EDC6] px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">Premium Cocoa <span className="text-[#8B5E3C]">Quality</span></h2>
            <p className="text-lg text-[#6A6B4E] mb-6">
              Our cocoa beans are carefully harvested during the peak season, fermented to perfection, and dried under controlled conditions to preserve flavor, aroma, and quality. Off-season care ensures soil fertility and tree health for consistent high yields year after year.
            </p>
            <div className="space-y-4">
              {[
                { title: "Ethically Sourced", desc: "Traceable beans from certified farms, supporting local communities." },
                { title: "Sustainably Managed", desc: "Regenerative practices to ensure long-term productivity." },
                { title: "Market-Ready", desc: "Optimized for global shipment with premium-grade certification." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/30 border border-white/20">
                  <div className="shrink-0 mt-1"><Droplets className="text-[#2D4F1E]" /></div>
                  <div>
                    <h4 className="font-bold text-[#4A3728]">{item.title}</h4>
                    <p className="text-sm text-[#6A6B4E]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8H1v1x9YKsXvQjFQ2X3Gx6iQtS5psx0z3gA&s" alt="Cocoa Beans" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}