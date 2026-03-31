"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Users } from "lucide-react";

const CONTACT_INFO = [
  {
    title: "Head Office",
    icon: <MapPin className="text-[#8B5E3C]" />,
    details: "Bluewave HQ, 45 Greenway Road, Accra, Ghana"
  },
  {
    title: "Email Us",
    icon: <Mail className="text-[#2D4F1E]" />,
    details: "info@bluewavemulti.com"
  },
  {
    title: "Call Us",
    icon: <Phone className="text-[#D4A373]" />,
    details: "+233 24 123 4567"
  }
];

const TEAM_MEMBERS = [
  { name: "Ama Owusu", role: "Client Relations", email: "ama.owusu@bluewavemulti.com" },
  { name: "Kwame Mensah", role: "Operations Lead", email: "kwame.mensah@bluewavemulti.com" },
  { name: "Nana Adomako", role: "Sales & Export", email: "nana.adomako@bluewavemulti.com" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate an API or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-[#D4A373]/10 rounded-full blur-3xl -z-10"
        />
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-[#4A3728] leading-[1.1] mb-6"
          >
            Get In Touch With <span className="text-[#8B5E3C]">Bluewave</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#6A6B4E] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Whether you have inquiries about our products, partnerships, or supply chain solutions, our team is ready to assist. Reach out today and let's cultivate opportunities together.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT INFO SECTION --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {CONTACT_INFO.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-start gap-4 bg-white/30 p-10 rounded-[2rem] shadow-lg border border-white/20"
            >
              <div className="text-4xl">{info.icon}</div>
              <h3 className="text-2xl font-bold text-[#4A3728]">{info.title}</h3>
              <p className="text-[#6A6B4E]">{info.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-[#4A3728] mb-6 text-center">Send Us A Message</h2>
          <p className="text-[#6A6B4E] mb-12 text-center">Fill out the form below and our team will respond promptly.</p>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl bg-white/30 border border-white/20 focus:bg-white/40 outline-none placeholder:text-[#6A6B4E]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl bg-white/30 border border-white/20 focus:bg-white/40 outline-none placeholder:text-[#6A6B4E]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl bg-white/30 border border-white/20 focus:bg-white/40 outline-none placeholder:text-[#6A6B4E]"
            ></textarea>
            <button
              type="submit"
              className="px-10 py-4 bg-[#2D4F1E] text-white font-bold rounded-2xl hover:bg-[#1A3012] transition-all flex items-center justify-center gap-3"
            >
              {submitted ? "Sent!" : "Submit"} <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* --- TEAM CONTACT SECTION --- */}
      <section className="py-24 px-6 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#4A3728] mb-4">Meet Our Team</h2>
          <p className="text-[#6A6B4E]">Direct contacts for different departments to help you faster.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/30 p-10 rounded-[2rem] shadow-lg border border-white/20 flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 bg-[#D4A373]/40 rounded-full flex items-center justify-center text-3xl font-bold text-[#4A3728]">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728]">{member.name}</h3>
              <p className="text-[#6A6B4E]">{member.role}</p>
              <p className="text-[#2D4F1E]/80 font-bold">{member.email}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 px-6 bg-[#E9EDC6] relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.52316012345!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNQ!5e0!3m2!1sen!2sgh!4v1679468342981!5m2!1sen!2sgh"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-6 left-6 bg-[#2D4F1E]/80 p-6 rounded-2xl text-white max-w-md">
            <h3 className="text-2xl font-bold mb-2">Find Us Here</h3>
            <p className="text-sm opacity-90">Visit our headquarters in Accra or reach us digitally from anywhere in the world.</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}