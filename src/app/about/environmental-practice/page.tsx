"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Droplets, Globe, ShieldCheck, ArrowRight } from "lucide-react";

export default function EnvironmentalPracticePage() {
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
              <Leaf size={14} /> Sustainability First
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Environmental <span className="text-[#8B5E3C]">Practices</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              We operate at the intersection of agriculture and environmental
              stewardship—building regenerative systems that protect ecosystems,
              enhance soil vitality, and secure long-term agricultural
              sustainability.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Our Sustainability Model
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
              alt="Sustainability"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CORE PRACTICES --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Our Core <span className="text-[#8B5E3C]">Practices</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our environmental strategy is built on measurable, science-driven
            agricultural systems that minimize ecological impact while
            maximizing yield efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Leaf />,
              title: "Regenerative Farming",
              desc: "Restoring soil health through organic inputs, crop rotation, and biodiversity enhancement.",
            },
            {
              icon: <Droplets />,
              title: "Water Conservation",
              desc: "Precision irrigation systems that reduce waste and optimize moisture distribution.",
            },
            {
              icon: <Globe />,
              title: "Carbon Reduction",
              desc: "Solar-powered drying and low-emission logistics to reduce environmental footprint.",
            },
            {
              icon: <ShieldCheck />,
              title: "Eco Compliance",
              desc: "Aligned with global environmental and organic certification standards.",
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

      {/* --- IMPACT SECTION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Measurable <span className="text-[#8B5E3C]">Impact</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              Our environmental initiatives are not theoretical—they are
              quantified, monitored, and continuously optimized to deliver
              real-world results.
            </p>

            <div className="space-y-6">
              {[
                "80% of farms using organic soil enrichment techniques",
                "40% reduction in water waste through smart irrigation",
                "Solar drying systems reducing carbon emissions by 30%",
                "Biodiversity corridors integrated across all farm zones",
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
              <h3 className="text-3xl font-black">80%</h3>
              <p className="text-sm opacity-80">Organic Practices</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">40%</h3>
              <p className="text-sm opacity-80">Water Savings</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Sustainable by Design
              </h3>
              <p className="text-[#6A6B4E]">
                Every operational decision—from planting to export—is guided by
                environmental responsibility and long-term ecological balance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STRATEGY --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Long-Term <span className="text-[#8B5E3C]">Strategy</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            We are building a future-proof agricultural ecosystem designed to
            withstand climate change, increase productivity, and preserve
            natural resources for generations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Expansion of renewable energy usage across all farm operations",
              "Full transition to organic certification for all produce lines",
              "AI-driven environmental monitoring and predictive farming",
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
            Partner in Sustainable Growth
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Join us in redefining agriculture through environmental
            responsibility, innovation, and long-term value creation.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Work With Us
          </button>
        </div>
      </section>
    </main>
  );
}