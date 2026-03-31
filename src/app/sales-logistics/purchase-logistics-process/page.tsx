"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Globe, PackageCheck, Leaf, ShieldCheck } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: <Leaf className="text-[#2D4F1E]" />,
    title: "Sourcing",
    description: "We carefully select premium cocoa and cashew directly from our certified farms, ensuring quality and traceability from seed to shipment."
  },
  {
    icon: <PackageCheck className="text-[#8B5E3C]" />,
    title: "Processing & Packaging",
    description: "Our on-site facilities process, ferment, and package the produce in premium-grade, export-ready packaging that meets international standards."
  },
  {
    icon: <Truck className="text-[#D4A373]" />,
    title: "Logistics Coordination",
    description: "We manage end-to-end logistics, including warehousing, consolidation, and timely dispatch to ensure seamless delivery worldwide."
  },
  {
    icon: <Globe className="text-[#4A3728]" />,
    title: "Global Shipping",
    description: "Partnering with reliable international carriers, we guarantee safe, efficient, and cost-effective transport to all major markets."
  },
  {
    icon: <ShieldCheck className="text-[#2D4F1E]" />,
    title: "Quality Assurance",
    description: "Every shipment undergoes rigorous inspections to maintain consistency, purity, and compliance with global standards."
  }
];

export default function PurchaseLogisticsProcess() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center bg-[#FAEDCD]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC6] text-[#2D4F1E] text-xs font-bold uppercase tracking-widest mb-6">
            <Truck size={14} /> Purchase & Logistics
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#4A3728]">
            Streamlined <span className="text-[#8B5E3C]">Purchase</span> & <span className="text-[#D4A373]">Logistics</span> Process
          </h1>
          <p className="text-lg text-[#6A6B4E] mb-10 leading-relaxed">
            Bluewave Multi Business Enterprises ensures seamless procurement, processing, and global distribution of premium cocoa and cashew. Our advanced logistics network guarantees that every order reaches its destination on time and in perfect condition.
          </p>
          <button className="px-10 py-4 bg-[#2D4F1E] text-white rounded-xl font-bold shadow-2xl shadow-[#2D4F1E]/30 hover:bg-[#1A3012] transition-all flex items-center gap-3 group mx-auto">
            Explore Our Workflow <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* --- PROCESS STEPS SECTION --- */}
      <section className="py-32 px-6 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-4">Our Purchase & Logistics Workflow</h2>
          <p className="text-[#6A6B4E] max-w-2xl mx-auto">
            From farm sourcing to international shipping, we maintain full control over each stage, ensuring reliability, efficiency, and premium quality every step of the way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-10 shadow-xl border border-white/30 flex flex-col items-center text-center hover:scale-[1.03] transition-transform"
            >
              <div className="p-4 mb-6 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-[#4A3728] mb-4">{step.title}</h3>
              <p className="text-[#6A6B4E]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DETAILED LOGISTICS INFO SECTION --- */}
      <section className="py-32 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-[#4A3728] mb-8">
              Global <span className="text-[#8B5E3C]">Distribution</span> & Traceability
            </h2>
            <p className="text-lg text-[#6A6B4E] mb-6">
              Our logistics team ensures every shipment is tracked from farm to port. Using advanced inventory systems, temperature-controlled transport, and verified carriers, we maintain the highest standards of safety and efficiency.
            </p>
            <p className="text-lg text-[#6A6B4E] mb-6">
              Whether you are importing cocoa for chocolate production or cashew for retail, our process is transparent, timely, and fully traceable, giving our clients peace of mind and maximum satisfaction.
            </p>
            <div className="space-y-4">
              {[
                "Real-time tracking of all shipments",
                "Customs documentation and export compliance",
                "Temperature and humidity-controlled storage",
                "Priority scheduling for bulk orders",
                "Dedicated customer support for every shipment"
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/30 border border-white/20">
                  <div className="shrink-0 mt-1"><ShieldCheck className="text-[#2D4F1E]" /></div>
                  <p className="text-[#6A6B4E] font-medium">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img
              src="https://images.unsplash.com/photo-1601582585583-b1b3ffef0ee1?auto=format&fit=crop&w=1470&q=80"
              alt="Logistics Workflow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 px-6 bg-[#2D4F1E] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Experience Seamless Procurement?
          </h2>
          <p className="text-white/80 mb-12">
            Partner with Bluewave and streamline your cocoa and cashew supply chain with our end-to-end purchase and logistics expertise.
          </p>
          <button className="px-12 py-4 bg-[#E9EDC6] text-[#2D4F1E] font-bold rounded-2xl hover:bg-white transition-colors">
            Contact Our Logistics Team
          </button>
        </div>
      </section>
    </main>
  );
}