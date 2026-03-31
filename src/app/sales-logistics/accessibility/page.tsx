"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, MapPin, ExternalLink, Compass } from "lucide-react";

const ACCESSIBILITY_SECTIONS = [
  {
    title: "Strategic Port Locations",
    description: "Our logistics hubs are positioned near key seaports and airports, enabling rapid export of cocoa and cashew products across Europe, Asia, and the Americas. This minimizes transport time and ensures product freshness.",
    icon: <MapPin className="text-[#8B5E3C]" />
  },
  {
    title: "Efficient Road Networks",
    description: "We utilize a network of paved and rural roads optimized for freight, ensuring smooth transit from farms to processing facilities. Regular maintenance schedules guarantee minimal delays even during heavy rains.",
    icon: <Truck className="text-[#2D4F1E]" />
  },
  {
    title: "Digital Tracking & Monitoring",
    description: "All shipments are tracked in real-time using IoT sensors, GPS monitoring, and smart logistics dashboards. Transparency in every shipment allows partners to monitor quality and delivery timelines.",
    icon: <Globe className="text-[#D4A373]" />
  },
  {
    title: "Regional Accessibility",
    description: "We ensure that rural farm operations are accessible year-round via sustainable bridgeworks, river crossings, and local transport partnerships. This reduces dependency on seasonal roads and weather constraints.",
    icon: <Compass className="text-[#4A3728]" />
  }
];

const FAQS = [
  {
    question: "How quickly can shipments reach international markets?",
    answer: "Depending on destination, priority shipments reach European markets within 7–10 days and Asian markets within 10–14 days from the farm gate."
  },
  {
    question: "Do you provide cold-chain solutions for sensitive products?",
    answer: "Yes, our logistics include refrigerated containers for products requiring temperature-controlled transit, ensuring optimal quality."
  },
  {
    question: "Is there flexibility for last-mile delivery in remote regions?",
    answer: "Absolutely. Our partnerships with regional transport providers ensure coverage even in remote areas, with real-time tracking to maintain transparency."
  }
];

export default function AccessibilityPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        />
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-[#4A3728] leading-[1.1] mb-6"
          >
            Seamless <span className="text-[#8B5E3C]">Accessibility</span> Across Supply Chains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#6A6B4E] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            At Bluewave, accessibility isn’t just about roads and ports — it’s about creating a fully connected ecosystem where every farm, warehouse, and market is reachable, monitored, and optimized for speed, quality, and transparency.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-10 py-4 bg-[#2D4F1E] text-white font-bold rounded-xl shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 mx-auto"
          >
            Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* --- FEATURE SECTIONS --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {ACCESSIBILITY_SECTIONS.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col gap-6 bg-white/30 p-10 rounded-[2rem] shadow-lg border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{section.icon}</div>
                <h3 className="text-3xl font-black text-[#4A3728]">{section.title}</h3>
              </div>
              <p className="text-[#6A6B4E] leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ACCESSIBILITY MAP SECTION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6] relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMapExample&s"
            alt="Global Accessibility Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 bg-[#2D4F1E]/80 p-6 rounded-2xl text-white max-w-md">
            <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
            <p className="text-sm opacity-90">
              Our infrastructure spans continents, connecting African farms with premium cocoa and cashew markets worldwide.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#4A3728] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#6A6B4E]">All you need to know about our accessibility and logistics network.</p>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/30 border border-white/20 rounded-xl p-6 cursor-pointer"
              onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-[#4A3728]">{faq.question}</h4>
                <span className="text-[#8B5E3C] font-black">{expandedFAQ === i ? "-" : "+"}</span>
              </div>
              {expandedFAQ === i && (
                <p className="text-[#6A6B4E] mt-4 leading-relaxed">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 bg-[#2D4F1E] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Partner With Bluewave Logistics</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto">Ensure your products reach global markets efficiently and reliably through our fully accessible logistics network.</p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition-colors">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}