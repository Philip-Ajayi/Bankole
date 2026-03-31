"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Droplets,
  TrendingUp,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function MaintenancePage() {
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
              <Wrench size={14} /> Continuous Optimization
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Farm <span className="text-[#8B5E3C]">Maintenance</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              Our maintenance systems ensure that farmland, crops, and
              infrastructure operate at peak performance—sustaining productivity,
              protecting investments, and guaranteeing long-term yield stability.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Explore Maintenance Systems
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
              alt="Farm Maintenance"
            />
          </motion.div>
        </div>
      </section>

      {/* --- MAINTENANCE AREAS --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Maintenance <span className="text-[#8B5E3C]">Areas</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our maintenance operations span across all farm systems to ensure
            efficiency, sustainability, and continuous productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Droplets />,
              title: "Irrigation Control",
              desc: "Routine inspection and optimization of water delivery systems.",
            },
            {
              icon: <ShieldCheck />,
              title: "Pest Management",
              desc: "Preventive and responsive strategies to protect crops.",
            },
            {
              icon: <Wrench />,
              title: "Equipment Servicing",
              desc: "Regular servicing of machinery to ensure peak performance.",
            },
            {
              icon: <TrendingUp />,
              title: "Soil Health",
              desc: "Continuous soil monitoring and nutrient replenishment.",
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

      {/* --- OPERATIONAL CYCLE --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Maintenance <span className="text-[#8B5E3C]">Cycle</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              Our structured maintenance cycle ensures continuous monitoring,
              timely interventions, and consistent farm performance.
            </p>

            <div className="space-y-6">
              {[
                "Routine inspection and monitoring of all farm systems",
                "Preventive maintenance to reduce operational risks",
                "Corrective actions for identified issues",
                "Continuous improvement and system optimization",
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
              <h3 className="text-3xl font-black">Continuous</h3>
              <p className="text-sm opacity-80">Monitoring</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">Preventive</h3>
              <p className="text-sm opacity-80">Maintenance</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                System Reliability
              </h3>
              <p className="text-[#6A6B4E]">
                Consistent maintenance ensures long-term operational stability
                and sustained agricultural output.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LONG TERM VALUE --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Long-Term <span className="text-[#8B5E3C]">Value</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            Maintenance is at the core of our sustainability strategy—ensuring
            consistent yields, cost efficiency, and operational resilience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Extended lifespan of equipment and infrastructure",
              "Reduced operational downtime and risks",
              "Consistent crop quality and yield performance",
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
            Sustaining Excellence Over Time
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Our maintenance systems ensure that every aspect of our farming
            operations continues to perform at the highest level.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Explore Full Farm Operations
          </button>
        </div>
      </section>
    </main>
  );
}