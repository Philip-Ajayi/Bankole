"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Settings,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Cpu,
} from "lucide-react";

export default function EquipmentPage() {
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
              <Settings size={14} /> Advanced Machinery
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Farm <span className="text-[#8B5E3C]">Equipment</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our operations are powered by modern agricultural equipment,
              enabling efficiency, precision, and scalability across all stages
              of farming—from land preparation to post-harvest processing.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              View Our Capabilities
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH2idwWd2ApYiu_xNk4VEJt_XCv4cIyaY3w&s"
              className="w-full h-full object-cover"
              alt="Farm Equipment"
            />
          </motion.div>
        </div>
      </section>

      {/* --- EQUIPMENT CATEGORIES --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Equipment <span className="text-[#8B5E3C]">Categories</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our equipment ecosystem is designed to support every stage of
            agricultural production with precision, reliability, and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Settings />,
              title: "Land Preparation",
              desc: "Tractors, ploughs, and tillers designed for efficient soil conditioning.",
            },
            {
              icon: <Droplets />,
              title: "Irrigation Systems",
              desc: "Automated irrigation equipment ensuring optimal water delivery.",
            },
            {
              icon: <Cpu />,
              title: "Smart Tech",
              desc: "IoT-enabled sensors and monitoring devices for real-time farm insights.",
            },
            {
              icon: <ShieldCheck />,
              title: "Processing Machines",
              desc: "Advanced equipment for cleaning, grading, and packaging produce.",
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

      {/* --- OPERATIONAL EFFICIENCY --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Operational <span className="text-[#8B5E3C]">Efficiency</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              Our equipment enables faster operations, reduced labor dependency,
              and improved accuracy across all farming activities.
            </p>

            <div className="space-y-6">
              {[
                "Reduced planting and harvesting time through mechanization",
                "Improved crop quality via precision handling systems",
                "Lower operational costs through automation",
                "Consistent performance across large-scale farmland",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/40 p-5 rounded-xl"
                >
                  <div className="w-3 h-3 bg-[#2D4F1E] rounded-full" />
                  <p className="text-[#4A3728] font-medium">{item}</p>
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
              <h3 className="text-3xl font-black">High</h3>
              <p className="text-sm opacity-80">Efficiency</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">Smart</h3>
              <p className="text-sm opacity-80">Automation</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Technology-Driven
              </h3>
              <p className="text-[#6A6B4E]">
                Our equipment integrates with digital systems to deliver real-
                time insights and optimized performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAINTENANCE & RELIABILITY --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Reliability & <span className="text-[#8B5E3C]">Maintenance</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            We ensure all equipment operates at peak performance through regular
            maintenance, upgrades, and strict operational standards.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Routine inspection and servicing of all machinery",
              "Upgrading equipment with modern innovations",
              "Highly trained operators and technical teams",
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
            Powered by Precision & Innovation
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Our investment in modern equipment ensures consistent quality,
            scalability, and long-term agricultural success.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Explore Our Operations
          </button>
        </div>
      </section>
    </main>
  );
}