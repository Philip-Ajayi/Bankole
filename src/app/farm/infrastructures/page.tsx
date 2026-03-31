"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Warehouse,
} from "lucide-react";

export default function InfrastructurePage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* --- HERO --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
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
              <Warehouse size={14} /> Operational Backbone
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Farm <span className="text-[#8B5E3C]">Infrastructure</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our infrastructure forms the backbone of our agricultural
              operations—integrating advanced facilities, storage systems, and
              logistics hubs to ensure efficiency, quality, and scalability.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Explore Our Facilities
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClSJwIagbRaUZiEJ72i3r1wTa6K082LH9yQ&s"
              className="w-full h-full object-cover"
              alt="Infrastructure"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CORE INFRASTRUCTURE --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Core <span className="text-[#8B5E3C]">Facilities</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our infrastructure is strategically designed to support large-scale
            agricultural production while maintaining efficiency, quality, and
            environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Warehouse />,
              title: "Processing Units",
              desc: "Modern facilities for sorting, grading, and preparing produce for export.",
            },
            {
              icon: <Droplets />,
              title: "Irrigation Systems",
              desc: "Efficient water distribution networks supporting year-round crop production.",
            },
            {
              icon: <ShieldCheck />,
              title: "Storage Facilities",
              desc: "Climate-controlled warehouses preserving quality and extending shelf life.",
            },
            {
              icon: <Globe />,
              title: "Logistics Hubs",
              desc: "Strategically positioned centers ensuring smooth transportation and export readiness.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/30 shadow-lg"
            >
              <div className="mb-5 text-[#2D4F1E]">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#4A3728] mb-3">
                {item.title}
              </h3>
              <p className="text-[#6A6B4E] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- OPERATIONAL FLOW --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Infrastructure <span className="text-[#8B5E3C]">Flow</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              Our integrated infrastructure ensures seamless movement from farm
              production to final export, minimizing delays and maximizing
              efficiency.
            </p>

            <div className="space-y-6">
              {[
                "On-site processing and initial quality grading",
                "Transfer to controlled storage facilities",
                "Logistics coordination and packaging",
                "Export handling and global distribution",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/40 p-5 rounded-xl"
                >
                  <div className="w-3 h-3 bg-[#2D4F1E] rounded-full" />
                  <p className="text-[#4A3728] font-medium">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#2D4F1E] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">24/7</h3>
              <p className="text-sm opacity-80">Operations</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">Global</h3>
              <p className="text-sm opacity-80">Distribution</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Seamless Integration
              </h3>
              <p className="text-[#6A6B4E]">
                Every infrastructure component is interconnected, ensuring
                efficient workflows from production to export.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SCALABILITY --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Built for <span className="text-[#8B5E3C]">Scale</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            Our infrastructure is designed not only for current operations but
            for future expansion—supporting increased production capacity and
            global demand.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Expandable processing and storage facilities",
              "Modular logistics systems for increased throughput",
              "Continuous infrastructure upgrades with modern technology",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-[#4A3728] font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#2D4F1E] rounded-[3rem] p-16 text-center text-white">
          <h2 className="text-4xl font-black mb-6">
            Infrastructure That Delivers Results
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Our robust infrastructure ensures consistent quality, operational
            efficiency, and reliable global supply.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Discover Our Operations
          </button>
        </div>
      </section>
    </main>
  );
}