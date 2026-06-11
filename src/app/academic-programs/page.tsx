"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Lightbulb, Users, ArrowRight, Activity, Ear, MessageSquare } from "lucide-react";
import Link from "next/link";

const methodologies = [
  { icon: <Ear className="w-6 h-6" />, title: "Auditory-Verbal Therapy", desc: "Maximizing the use of residual hearing through structured listening exercises and hearing aids." },
  { icon: <MessageSquare className="w-6 h-6" />, title: "Indian Sign Language (ISL)", desc: "Comprehensive training in standardized sign language for expressive and receptive communication." },
  { icon: <Activity className="w-6 h-6" />, title: "Multisensory Learning", desc: "Engaging visual, tactile, and kinesthetic pathways to reinforce academic concepts." },
];

export default function AcademicProgramsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-6"
          >
            <span className="w-8 h-[2px] bg-accent" />
            Curriculum
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Academic Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 leading-relaxed"
          >
            A tailored curriculum designed to nurture intellectual growth, communication skills, and critical thinking from early childhood through secondary education.
          </motion.p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-24 container mx-auto px-4">
        <div className="space-y-24">
          
          {/* Primary Education */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Primary Education" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Primary Education (Grades 1-5)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our primary education framework builds the foundational pillars of literacy, numeracy, and communication. We utilize highly visual teaching aids, smart boards, and customized textbooks designed for visually-oriented learners.
              </p>
              <ul className="space-y-3">
                {["Basic Indian Sign Language mastery", "Foundational mathematics & science", "Early speech and language therapy", "Creative arts and motor skills development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" alt="Secondary Education" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Secondary Education (Grades 6-10)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As students mature, the curriculum aligns strictly with the state board syllabus, adapted for accessibility. The focus shifts towards academic rigor, analytical thinking, and preparation for board examinations.
              </p>
              <ul className="space-y-3">
                {["State board aligned curriculum", "Advanced computer and IT education", "Pre-vocational exposure and career counseling", "Integration of complex scientific concepts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Teaching Methodology</h2>
            <p className="text-muted-foreground">We employ globally recognized special education frameworks to ensure our students comprehend and retain complex concepts effectively.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, i) => (
              <motion.div 
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-border shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all shadow-lg"
            >
              Start Admission Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
