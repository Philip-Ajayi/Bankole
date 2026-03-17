"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, Leaf, Globe, ShieldCheck } from "lucide-react";

export default function MissionVisionPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* --- HERO --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden text-center">
        <motion.div
          style={{ scale }}
          className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-[#4A3728] mb-8"
          >
            Purpose That <span className="text-[#8B5E3C]">Drives Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6A6B4E] leading-relaxed"
          >
            Everything we do is guided by a clear mission and a bold vision—
            shaping how we grow, trade, and impact the global agricultural
            ecosystem.
          </motion.p>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-xl border-t-8 border-[#2D4F1E]"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-[#E9EDC6] flex items-center justify-center text-[#2D4F1E]">
              <Target size={28} />
            </div>

            <h2 className="text-3xl font-black text-[#4A3728] mb-6">
              Our Mission
            </h2>

            <p className="text-[#6A6B4E] leading-relaxed text-lg">
              To cultivate and deliver premium agricultural products through
              sustainable practices, efficient systems, and a commitment to
              quality—connecting African production directly to global demand
              while maintaining integrity at every stage.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-xl border-t-8 border-[#8B5E3C]"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-[#FEFAE0] flex items-center justify-center text-[#8B5E3C]">
              <Eye size={28} />
            </div>

            <h2 className="text-3xl font-black text-[#4A3728] mb-6">
              Our Vision
            </h2>

            <p className="text-[#6A6B4E] leading-relaxed text-lg">
              To become a leading force in global agricultural trade, recognized
              for excellence, innovation, and our role in elevating the value of
              African-grown commodities across international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GUIDING PRINCIPLES --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-[#2D4F1E] mb-4"
          >
            What Guides Our Direction
          </motion.h2>
          <p className="text-[#6A6B4E]">
            The principles behind every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Leaf />,
              title: "Sustainability",
              desc: "Ensuring long-term productivity through responsible farming.",
            },
            {
              icon: <ShieldCheck />,
              title: "Integrity",
              desc: "Maintaining transparency and trust across all operations.",
            },
            {
              icon: <Globe />,
              title: "Global Impact",
              desc: "Connecting local production to worldwide opportunities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#FAEDCD] flex items-center justify-center text-[#2D4F1E]">
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

      {/* --- CLOSING --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-[#4A3728] mb-6"
          >
            Built With Purpose
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6A6B4E] leading-relaxed"
          >
            Our mission defines what we do today, while our vision shapes where
            we are going tomorrow—ensuring every step forward is intentional,
            impactful, and sustainable.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
