"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, TrendingUp, ExternalLink, Users } from "lucide-react";

const SALES_CHANNELS = [
  {
    title: "Direct Export",
    description:
      "We engage directly with international buyers, ensuring traceability, premium pricing, and strong partnerships in Europe, Asia, and North America.",
    icon: <Globe className="text-[#D4A373]" />,
  },
  {
    title: "Wholesale Distribution",
    description:
      "Our wholesale partners receive bulk cocoa and cashew shipments with guaranteed quality and timely delivery, optimizing their supply chains.",
    icon: <Truck className="text-[#2D4F1E]" />,
  },
  {
    title: "E-Commerce & Online Sales",
    description:
      "Bluewave offers direct-to-consumer sales online, providing traceable, organic cocoa and cashew products with detailed sourcing information.",
    icon: <TrendingUp className="text-[#8B5E3C]" />,
  },
  {
    title: "Local Retail Partnerships",
    description:
      "Collaborations with supermarkets, specialty stores, and organic retailers help expand our presence and brand awareness locally.",
    icon: <Users className="text-[#4A3728]" />,
  },
];

// --- SALES CHANNEL PAGE ---
export default function SalesChannelsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC6] text-[#2D4F1E] text-xs font-bold uppercase tracking-widest mb-6">
            <Globe size={14} /> Global Distribution Network
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
            Delivering <span className="text-[#8B5E3C]">Excellence</span> Across Every Market
          </h1>
          <p className="text-lg text-[#6A6B4E] mb-10 leading-relaxed">
            Bluewave Multi Business Enterprises leverages diverse sales channels to connect our premium cocoa and cashew products to buyers globally. Our integrated logistics, strategic partnerships, and technology-driven solutions ensure consistent supply, superior quality, and timely delivery to every market.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Explore Channels <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-[#D4A373] text-[#8B5E3C] rounded-xl font-bold hover:bg-[#D4A373] hover:text-white transition-all">
              Contact Sales Team
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SALES CHANNELS GRID --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {SALES_CHANNELS.map((channel, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`flex gap-8 p-8 rounded-[2rem] shadow-xl border border-white/20 transition-all ${
                hovered === index ? "bg-white/40 backdrop-blur-md" : "bg-white/10"
              }`}
            >
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A373]/20">
                {channel.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black text-[#4A3728] mb-4">{channel.title}</h3>
                <p className="text-[#6A6B4E] mb-6">{channel.description}</p>
                <button className="text-[#8B5E3C] font-bold flex items-center gap-2 hover:underline">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STRATEGY SECTION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">Our Sales Strategy</h2>
            <p className="text-lg text-[#6A6B4E] mb-6">
              Bluewave follows a multi-pronged sales strategy that combines global reach, digital innovation, and strategic partnerships. We aim to maximize market access for our premium products while maintaining brand integrity and sustainability.
            </p>
            <ul className="space-y-4">
              {[
                "Direct-to-buyer engagement ensuring transparency and premium pricing.",
                "Wholesale partnerships for bulk supply and consistent market presence.",
                "E-commerce initiatives to provide traceable, high-quality products to consumers.",
                "Local retail collaborations for wider visibility and brand awareness.",
              ].map((point, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-3 h-3 mt-2 bg-[#2D4F1E] rounded-full flex-shrink-0"></span>
                  <p className="text-[#6A6B4E]">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1600488990750-60db0fa65ca7?auto=format&fit=crop&w=1470&q=80"
              alt="Sales Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- MARKET REACH SECTION --- */}
      <section className="py-24 px-6 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#4A3728] mb-4">Global Market Reach</h2>
          <p className="text-[#6A6B4E] max-w-2xl mx-auto">
            Our products reach multiple continents with an emphasis on Europe, Asia, and North America. By combining logistics efficiency with market intelligence, we ensure our cocoa and cashew maintain premium quality from farm to consumer.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { title: "Europe", description: "Premium-grade cocoa & cashew exported to key European markets." },
            { title: "Asia", description: "High-demand supply to specialty and bulk buyers across Asia." },
            { title: "North America", description: "Reliable exports to wholesalers, retailers, and e-commerce platforms." },
          ].map((region, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-[#4A3728] mb-4">{region.title}</h3>
              <p className="text-[#6A6B4E]">{region.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#2D4F1E] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Connect With Our Sales Team</h2>
          <p className="text-white/80 mb-12 max-w-xl mx-auto">
            Explore partnership opportunities or get tailored solutions for your business. Our team ensures a seamless experience from order to delivery.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition-colors">
            Contact Sales <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}