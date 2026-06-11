"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValues = [
  { icon: <Heart className="w-5 h-5" />, title: "Compassion", desc: "Understanding and supporting each student's unique journey." },
  { icon: <Award className="w-5 h-5" />, title: "Excellence", desc: "Delivering the highest quality of specialized education." },
  { icon: <Target className="w-5 h-5" />, title: "Empowerment", desc: "Building independence through vocational training." },
];

export default function AboutSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image & Founder Message Column */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop"
                alt="Students learning sign language"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              
              {/* Founder Message Overlay */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="w-12 h-1 bg-accent mb-6" />
                <p className="text-lg md:text-xl font-serif italic leading-relaxed mb-4">
                  "Our goal is not just to educate, but to give these children the confidence to navigate the world on their own terms."
                </p>
                <div>
                  <h4 className="font-bold text-accent">Dr. Anjali Sharma</h4>
                  <p className="text-sm text-white/80">Founder & Director</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-accent" />
                About Our Institution
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Breaking the silence with the power of education.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rashtriya Mook Badhir Vidyalaya was founded with a singular, unwavering mission: to provide world-class, specialized education and vocational training to hearing and speech-impaired students. We believe that every child deserves the opportunity to reach their full potential, regardless of the challenges they face.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To create an inclusive society where hearing and speech-impaired individuals are respected, empowered, and have equal access to all life opportunities.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To impart comprehensive education, life skills, and vocational training, bridging the communication gap and fostering self-reliance.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Our Core Values</h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
              >
                Read Our Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
