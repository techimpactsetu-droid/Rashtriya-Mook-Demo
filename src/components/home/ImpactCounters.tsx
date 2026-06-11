"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Users, BookOpen, Building2, GraduationCap } from "lucide-react";

const counters = [
  { label: "Students Empowered", value: "2,500+", icon: <Users className="w-8 h-8" /> },
  { label: "Expert Educators", value: "85+", icon: <BookOpen className="w-8 h-8" /> },
  { label: "Years of Service", value: "18+", icon: <Building2 className="w-8 h-8" /> },
  { label: "Vocational Placements", value: "95%", icon: <GraduationCap className="w-8 h-8" /> },
];

function TiltCard({ children, index }: { children: React.ReactNode, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY }}
        className="flex flex-col items-center p-8 bg-white rounded-[2rem] border border-border shadow-sm hover:shadow-2xl transition-shadow duration-300 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function ImpactCounters() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <TiltCard key={counter.label} index={index}>
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {counter.icon}
              </div>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
              >
                {counter.value}
              </motion.div>
              <div className="text-muted-foreground font-medium text-center">{counter.label}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
