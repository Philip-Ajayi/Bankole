"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Globe, ShieldCheck, TrendingUp } from "lucide-react";

export default function MissionVisionPage() {
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
              <Leaf size={14} /> Our Purpose
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Mission & <span className="text-[#8B5E3C]">Vision</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              At Bluewave Multi Business Enterprises, our direction is guided by
              a commitment to sustainable agriculture, global excellence, and
              generational impact across Africa and beyond.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Explore Our Strategy
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeXdxw9EUpejKplzPm5skPcFzCiyvcC9QmA&s"
              className="w-full h-full object-cover"
              alt="Mission"
            />
          </motion.div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Our <span className="text-[#8B5E3C]">Mission</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto leading-relaxed">
            To cultivate, process, and deliver premium agricultural commodities
            through ethical practices, advanced farming technologies, and a
            vertically integrated supply chain that guarantees quality,
            traceability, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Leaf />,
              title: "Sustainable Agriculture",
              desc: "Implementing regenerative farming practices that restore soil health and increase long-term productivity.",
            },
            {
              icon: <ShieldCheck />,
              title: "Quality Assurance",
              desc: "Maintaining strict grading, processing, and export standards to deliver globally competitive products.",
            },
            {
              icon: <Globe />,
              title: "Global Reach",
              desc: "Connecting African produce to international markets with efficient and reliable logistics systems.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-md p-10 rounded-[2rem] border border-white/30 shadow-lg"
            >
              <div className="mb-6 text-[#2D4F1E]">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-4">
                {item.title}
              </h3>
              <p className="text-[#6A6B4E] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- VISION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-6">
            Our <span className="text-[#8B5E3C]">Vision</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto leading-relaxed">
            To become Africa’s leading agro-export powerhouse, recognized for
            innovation, sustainability, and the consistent delivery of world-
            class agricultural products that drive economic growth and empower
            communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-6">
              {[
                "Expand to over 50,000 hectares of managed farmland",
                "Lead innovation in smart agriculture and IoT farming",
                "Build strong global trade partnerships across continents",
                "Empower local communities through employment and training",
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
              <TrendingUp size={32} />
              <h3 className="text-xl font-bold mt-4">Growth</h3>
              <p className="text-sm opacity-80">
                Scaling production and export capacity sustainably.
              </p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <Globe size={32} />
              <h3 className="text-xl font-bold mt-4">Global Impact</h3>
              <p className="text-sm opacity-80">
                Strengthening Africa’s presence in global agriculture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Future-Driven
              </h3>
              <p className="text-[#6A6B4E]">
                Our vision is anchored in innovation, sustainability, and
                resilience—ensuring we remain ahead in a rapidly evolving global
                agricultural landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#2D4F1E] rounded-[3rem] p-16 text-center text-white">
          <h2 className="text-4xl font-black mb-6">
            Join Our Vision for the Future
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Partner with us to shape the future of agriculture, trade, and
            sustainable wealth creation.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Become a Partner
          </button>
        </div>
      </section>
    </main>
  );
}