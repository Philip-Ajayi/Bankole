"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Calendar, Droplets, TrendingUp, ExternalLink } from 'lucide-react';

const CASHEW_METRICS = {
  farm_size_hectares: 12000,
  annual_yield_mt: 500,
  peak_season_start: "January",
  peak_season_end: "April",
  off_season_start: "May",
  off_season_end: "December"
};

const SEASON_CALENDAR = [
  { month: "January", activities: ["Flowering Observation", "Fertilizer Application"] },
  { month: "February", activities: ["Pest Monitoring", "Soil Moisture Check"] },
  { month: "March", activities: ["Nut Formation Monitoring", "Irrigation Optimization"] },
  { month: "April", activities: ["Harvesting Begins", "Sorting & Drying"] },
  { month: "May", activities: ["Off-season Pruning", "Soil Enrichment"] },
  { month: "June", activities: ["Nursery Preparation", "Irrigation Tuning"] },
  { month: "July", activities: ["Pest Prevention", "Maintenance Checks"] },
  { month: "August", activities: ["Tree Health Assessment", "Weeding"] },
  { month: "September", activities: ["Off-season Fertilization"] },
  { month: "October", activities: ["Preparation for Flowering"] },
  { month: "November", activities: ["Flower Bud Development"] },
  { month: "December", activities: ["Irrigation & Pest Monitoring"] },
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
export default function CashewPage() {
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
              <Leaf size={14} /> Premium Cashew
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              High-Yield <span className="text-[#8B5E3C]">Cashew</span> Cultivation & Export
            </h1>
            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our cashew plantations cover {CASHEW_METRICS.farm_size_hectares.toLocaleString()} hectares, producing {CASHEW_METRICS.annual_yield_mt} metric tons annually. With carefully structured on-season and off-season management, Bluewave ensures premium quality and maximum yield for every harvest cycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
                Buy Cashew <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#D4A373] text-[#8B5E3C] rounded-xl font-bold hover:bg-[#D4A373] hover:text-white transition-all">
                Learn About Farming
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
                <source src="/CashewFarm.mp4" type="video/mp4" />
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
              { label: "Farm Size (ha)", value: CASHEW_METRICS.farm_size_hectares, color: "#2D4F1E" },
              { label: "Annual Yield (MT)", value: CASHEW_METRICS.annual_yield_mt, color: "#8B5E3C" },
              { label: "Peak Season", value: CASHEW_METRICS.peak_season_start + " – " + CASHEW_METRICS.peak_season_end, color: "#D4A373", isText: true },
              { label: "Off Season", value: CASHEW_METRICS.off_season_start + " – " + CASHEW_METRICS.off_season_end, color: "#4A3728", isText: true },
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
          <h2 className="text-4xl font-black text-[#4A3728] mb-4">Cashew Seasonal Calendar</h2>
          <p className="text-[#6A6B4E]">On-season and off-season activities for optimum cashew yield.</p>
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
            <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">Premium Cashew <span className="text-[#8B5E3C]">Quality</span></h2>
            <p className="text-lg text-[#6A6B4E] mb-6">
              Our cashew nuts are harvested during peak season, sun-dried under controlled conditions, and sorted to ensure the highest quality. Off-season care maintains tree health and soil fertility for consistent high yields.
            </p>
            <div className="space-y-4">
              {[
                { title: "Ethically Sourced", desc: "Traceable cashew nuts supporting local farmers." },
                { title: "Sustainably Managed", desc: "Regenerative practices ensure long-term productivity." },
                { title: "Global Market Ready", desc: "Optimized for premium export markets with certified quality." }
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNNLx6bO2ecfFh5K5F_4nxYx9QbHxAgvY3w&s" alt="Cashew Nuts" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}