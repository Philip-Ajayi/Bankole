"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Scissors,
  TrendingUp,
  ShieldCheck,
  Droplets,
  ArrowRight,
} from "lucide-react";

export default function HarvestingProcessingPage() {
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
              <Scissors size={14} /> Final Production Stage
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Harvesting &{" "}
              <span className="text-[#8B5E3C]">Processing</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our harvesting and processing systems ensure that every crop is
              handled with precision—preserving quality, maximizing yield, and
              preparing produce for premium global markets.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Discover Our Process
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyZoIO9cW_O8JZw02Fozco2-aAWdqz9iQg&s"
              className="w-full h-full object-cover"
              alt="Harvesting and Processing"
            />
          </motion.div>
        </div>
      </section>

      {/* --- HARVESTING METHODS --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Harvesting <span className="text-[#8B5E3C]">Methods</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our harvesting approach combines skilled labor with efficient tools
            to ensure crops are collected at peak maturity and optimal quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Scissors />,
              title: "Selective Harvesting",
              desc: "Only fully matured crops are harvested to maintain premium quality.",
            },
            {
              icon: <TrendingUp />,
              title: "Yield Optimization",
              desc: "Efficient harvesting cycles to maximize output per hectare.",
            },
            {
              icon: <ShieldCheck />,
              title: "Damage Control",
              desc: "Careful handling to prevent damage and preserve product integrity.",
            },
            {
              icon: <Droplets />,
              title: "Moisture Control",
              desc: "Immediate handling to maintain optimal moisture levels.",
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

      {/* --- PROCESSING FLOW --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Processing <span className="text-[#8B5E3C]">Flow</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              After harvesting, crops move through a structured processing
              system designed to enhance quality and prepare for export.
            </p>

            <div className="space-y-6">
              {[
                "Sorting and initial quality inspection",
                "Cleaning and removal of impurities",
                "Drying and moisture stabilization",
                "Grading, packaging, and storage",
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
              <h3 className="text-3xl font-black">Premium</h3>
              <p className="text-sm opacity-80">Quality</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">Efficient</h3>
              <p className="text-sm opacity-80">Processing</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Controlled Systems
              </h3>
              <p className="text-[#6A6B4E]">
                Every step is carefully monitored to maintain consistency,
                quality, and export readiness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESSING FACILITIES --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Processing <span className="text-[#8B5E3C]">Facilities</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            Our facilities are equipped with modern systems that ensure
            efficient processing while preserving the natural quality of our
            produce.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Automated sorting and grading systems",
              "Solar and mechanical drying technologies",
              "Quality-controlled packaging and storage units",
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
            From Harvest to Global Markets
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Our harvesting and processing systems ensure that every product
            meets the highest international standards.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Explore Our Products
          </button>
        </div>
      </section>
    </main>
  );
}