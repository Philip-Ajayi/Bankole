"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Globe, TrendingUp } from "lucide-react";

export default function OurStoryPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* --- HERO --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <motion.div
          style={{ scale }}
          className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E9EDC6] text-[#2D4F1E] text-xs font-bold uppercase tracking-widest mb-6">
              <Leaf size={14} /> Our Journey
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-[#4A3728] leading-tight mb-8">
              From Soil to <span className="text-[#8B5E3C]">Global Trade</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-2xl mx-auto leading-relaxed">
              Our story is rooted in the fertile lands of Africa—where passion,
              resilience, and innovation came together to build a bridge between
              local agriculture and the global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ORIGIN STORY --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">
              Where It All <span className="text-[#8B5E3C]">Began</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-6 leading-relaxed">
              What started as a small-scale agricultural initiative quickly
              evolved into a structured enterprise driven by one core idea:
              Africa’s land holds unmatched potential.
            </p>

            <p className="text-lg text-[#6A6B4E] leading-relaxed">
              Through years of hands-on cultivation, experimentation, and
              learning, we transformed traditional farming into a modern,
              data-informed system—ensuring consistency, quality, and
              scalability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
              alt="Farm"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- GROWTH TIMELINE --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-[#2D4F1E] mb-4">
              Growth Through Time
            </h2>
            <p className="text-[#6A6B4E]">
              A journey defined by progress and expansion.
            </p>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                year: "2018",
                text: "Foundation laid with initial cocoa cultivation and small export partnerships.",
              },
              {
                year: "2020",
                text: "Expansion into cashew production and improved processing systems.",
              },
              {
                year: "2023",
                text: "Adoption of technology-driven farming and scaling operations.",
              },
              {
                year: "2025",
                text: "Establishment of global trade relationships across multiple continents.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#D4A373]"
              >
                <h3 className="text-2xl font-black text-[#4A3728] mb-2">
                  {item.year}
                </h3>
                <p className="text-[#6A6B4E]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION SECTION --- */}
      <section className="py-24 px-6 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Leaf />,
              title: "Rooted in Agriculture",
              desc: "Built on deep agricultural knowledge and hands-on field experience.",
            },
            {
              icon: <TrendingUp />,
              title: "Driven by Growth",
              desc: "Scaling production through innovation and strategic expansion.",
            },
            {
              icon: <Globe />,
              title: "Globally Connected",
              desc: "Linking African produce to international markets efficiently.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E9EDC6] flex items-center justify-center text-[#2D4F1E]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4A3728] mb-3">
                {item.title}
              </h3>
              <p className="text-[#6A6B4E]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CLOSING STATEMENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black text-[#4A3728] mb-8"
          >
            Still Growing. Still Evolving.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6A6B4E] leading-relaxed"
          >
            Our journey continues to evolve with every harvest, every shipment,
            and every new partnership. What began as a vision rooted in the soil
            is now a growing force shaping the future of agricultural trade.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
