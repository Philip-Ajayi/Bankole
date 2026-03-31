"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, TrendingUp, Leaf, Droplets } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <ShieldCheck className="text-[#2D4F1E]" />,
    title: "Certified Quality",
    description: "Our produce is rigorously inspected and certified, ensuring only premium-grade cocoa and cashew products reach the market."
  },
  {
    icon: <Globe className="text-[#D4A373]" />,
    title: "Global Market Reach",
    description: "Strong trade partnerships across Europe, Asia, and North America allow us to deliver consistently to international clients."
  },
  {
    icon: <TrendingUp className="text-[#8B5E3C]" />,
    title: "High-Yield Practices",
    description: "Optimized farming techniques and regenerative methods maximize yield while maintaining soil health and sustainability."
  },
  {
    icon: <Leaf className="text-[#2D4F1E]" />,
    title: "Sustainable Operations",
    description: "From solar drying to organic fertilizers, our operations reduce environmental impact while enhancing crop quality."
  },
  {
    icon: <Droplets className="text-[#8B5E3C]" />,
    title: "Tech-Enabled Farming",
    description: "IoT sensors and precision agriculture enable real-time monitoring of soil, irrigation, and crop growth for peak efficiency."
  }
];

const YIELD_SECTIONS = [
  {
    title: "Optimized Cocoa Yield",
    description: "Through seasonal planning, careful pruning, fertilization, and pest control, our cocoa plantations consistently deliver top-grade beans, meeting the growing global demand.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8H1v1x9YKsXvQjFQ2X3Gx6iQtS5psx0z3gA&s",
    color: "#8B5E3C"
  },
  {
    title: "Maximized Cashew Production",
    description: "Combining high-density planting, irrigation management, and sustainable harvesting, our cashew yield remains competitive while preserving soil fertility.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s",
    color: "#2D4F1E"
  }
];

export default function CompetitiveAdvantagePage() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh] flex flex-col items-center justify-center bg-[#FAEDCD]">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black mb-6 text-[#4A3728]"
          >
            Our <span className="text-[#8B5E3C]">Competitive Advantage</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#6A6B4E] mb-12 leading-relaxed"
          >
            Bluewave Multi Business Enterprises combines advanced agronomic practices, ethical sourcing, and technology-driven operations to consistently deliver superior cocoa and cashew products to global markets.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-[#2D4F1E] text-white font-bold rounded-2xl flex items-center gap-3 shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all"
          >
            Explore Our Products <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* --- ADVANTAGES GRID --- */}
      <section className="py-24 px-6 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#4A3728] mb-4">Why We Stand Out</h2>
          <p className="text-[#6A6B4E]">Our unique combination of expertise, technology, and sustainability ensures consistent quality and reliability.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/20 text-left flex flex-col gap-4 cursor-pointer shadow-lg"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#4A3728]">{item.title}</h3>
              <p className="text-[#6A6B4E] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- YIELD & PRODUCTION SECTION --- */}
      {YIELD_SECTIONS.map((section, i) => (
        <section key={i} className={`py-24 px-6 ${i % 2 === 0 ? "bg-[#FAEDCD]" : "bg-[#E9EDC6]"}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">
                {section.title}
              </h2>
              <p className="text-lg text-[#6A6B4E] leading-relaxed">{section.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-video"
            >
              <img src={section.img} alt={section.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 bg-[#2D4F1E] text-white text-center">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Experience The Difference</h2>
          <p className="text-white/80 mb-12 leading-relaxed">
            Partner with Bluewave for ethically sourced, high-yield cocoa and cashew products that consistently meet international standards.
          </p>
          <button className="px-12 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
