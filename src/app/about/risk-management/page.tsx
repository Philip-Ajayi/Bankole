"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Globe,
  AlertTriangle,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function RiskManagementPage() {
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
              <ShieldCheck size={14} /> Risk Intelligence
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
              Risk <span className="text-[#8B5E3C]">Management</span>
            </h1>

            <p className="text-lg text-[#6A6B4E] max-w-lg mb-10 leading-relaxed">
              We proactively identify, assess, and mitigate operational,
              environmental, and market risks through data-driven strategies and
              resilient agricultural systems.
            </p>

            <button className="px-8 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-xl hover:bg-[#1A3012] transition-all flex items-center gap-3 group">
              Explore Our Framework
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
              alt="Risk Management"
            />
          </motion.div>
        </div>
      </section>

      {/* --- RISK PILLARS --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Risk <span className="text-[#8B5E3C]">Pillars</span>
          </h2>
          <p className="text-lg text-[#6A6B4E] max-w-3xl mx-auto">
            Our risk management framework is built on proactive monitoring,
            diversified systems, and strategic safeguards across all operational
            levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Leaf />,
              title: "Environmental Risk",
              desc: "Climate variability, soil degradation, and ecosystem disruptions managed through regenerative systems.",
            },
            {
              icon: <TrendingUp />,
              title: "Market Risk",
              desc: "Price volatility and demand fluctuations mitigated through diversified export channels.",
            },
            {
              icon: <Globe />,
              title: "Logistics Risk",
              desc: "Supply chain disruptions reduced through multi-route export and strong global partnerships.",
            },
            {
              icon: <AlertTriangle />,
              title: "Operational Risk",
              desc: "Farm-level inefficiencies minimized through automation, training, and real-time monitoring.",
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

      {/* --- MITIGATION STRATEGY --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#2D4F1E] mb-8">
              Mitigation <span className="text-[#8B5E3C]">Strategy</span>
            </h2>

            <p className="text-lg text-[#6A6B4E] mb-8">
              We deploy layered risk mitigation strategies designed to ensure
              continuity, resilience, and consistent output regardless of
              external disruptions.
            </p>

            <div className="space-y-6">
              {[
                "Diversified crop production across multiple zones",
                "Smart irrigation and climate monitoring systems",
                "Forward contracts and global buyer agreements",
                "Continuous workforce training and compliance protocols",
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
              <h3 className="text-3xl font-black">24/7</h3>
              <p className="text-sm opacity-80">Monitoring Systems</p>
            </div>

            <div className="bg-[#D4A373] text-white p-8 rounded-3xl">
              <h3 className="text-3xl font-black">Multi</h3>
              <p className="text-sm opacity-80">Export Channels</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-2">
                Resilient Systems
              </h3>
              <p className="text-[#6A6B4E]">
                Our integrated approach ensures stability across production,
                processing, and global distribution networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GOVERNANCE --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-6">
            Governance & <span className="text-[#8B5E3C]">Compliance</span>
          </h2>

          <p className="text-lg text-[#6A6B4E] mb-12">
            Our governance framework ensures that all operations adhere to
            international standards, ethical practices, and strict quality
            controls.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Strict adherence to export and agricultural regulations",
              "Regular audits across farm and logistics operations",
              "Transparent reporting and stakeholder accountability",
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
            Secure, Stable, Scalable
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Our risk management systems ensure consistent performance, making
            us a trusted partner for global agricultural trade.
          </p>
          <button className="px-10 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition">
            Partner With Confidence
          </button>
        </div>
      </section>
    </main>
  );
}