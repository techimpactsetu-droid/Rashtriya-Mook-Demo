"use client";

import { motion } from "framer-motion";
import { Monitor, Scissors, PenTool, Brush, Briefcase, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "Computer Skills", icon: <Monitor className="w-5 h-5" /> },
  { name: "Tailoring & Stitching", icon: <Scissors className="w-5 h-5" /> },
  { name: "Handicrafts", icon: <PenTool className="w-5 h-5" /> },
  { name: "Arts & Crafts", icon: <Brush className="w-5 h-5" /> },
  { name: "Vocational Workshops", icon: <Briefcase className="w-5 h-5" /> },
];

export default function VocationalSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-[100px] -mr-20 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm"
            >
              <span className="w-8 h-[2px] bg-accent" />
              Skill Development
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Building careers through practical vocational training.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 leading-relaxed"
            >
              Our vocational training programs are specifically designed to equip students with market-relevant skills, making them financially independent and ready for the modern workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/5 hover:bg-primary-foreground/20 transition-colors">
                  <div className="text-accent shrink-0">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link
                href="/vocational-training"
                className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Explore Training Programs
              </Link>
            </motion.div>
          </div>

          {/* Image & Stats Column */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-video lg:aspect-square shadow-2xl border-4 border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Student learning computer skills"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Outcomes Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white text-foreground p-6 rounded-2xl shadow-xl max-w-[280px] border border-border"
            >
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-support" />
                Student Outcomes
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">85% placement rate in inclusive workplaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">50+ local business partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">Self-employment initiatives support</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
