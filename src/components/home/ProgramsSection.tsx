"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Lightbulb, HeartHandshake, Smile } from "lucide-react";

const programs = [
  {
    id: "primary",
    icon: <Smile className="w-8 h-8" />,
    title: "Primary Education",
    desc: "Foundational learning tailored for young minds, focusing on basic communication, sign language, and core subjects.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: "secondary",
    icon: <BookOpen className="w-8 h-8" />,
    title: "Secondary Education",
    desc: "Comprehensive curriculum designed to prepare students for board examinations and higher education.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    id: "special",
    icon: <Brain className="w-8 h-8" />,
    title: "Special Learning Support",
    desc: "Individualized attention for students needing extra help, utilizing visual aids and specialized teaching methods.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: "communication",
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Communication Dev",
    desc: "Intensive speech therapy and advanced Indian Sign Language (ISL) training to bridge communication gaps.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    id: "lifeskills",
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Life Skills Training",
    desc: "Practical education focusing on daily living, social interaction, and navigating the world confidently.",
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-8 h-[2px] bg-accent" />
            Curriculum
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Academic Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We offer specialized educational programs designed to cater to the unique learning needs of our students, from their first day of school to graduation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                {/* Decorative BG */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full transition-transform group-hover:scale-150 ${program.color.split(' ')[0]}`} />
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${program.color}`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {program.desc}
                </p>
                
                <Link
                  href="/academic-programs"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors mt-auto absolute bottom-8 left-8"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
          
          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: programs.length * 0.1 }}
            className="group"
          >
            <div className="bg-primary rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Explore All Curriculums
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Discover our complete range of educational support.
              </p>
              <Link
                href="/academic-programs"
                className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
