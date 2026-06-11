"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Animated Background shapes */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[20%] w-16 h-16 bg-support/20 rounded-full blur-xl animate-pulse" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Rashtriya Mook Badhir Vidyalaya
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight tracking-tight max-w-4xl mx-auto"
        >
          Excellence in Special Education & <br className="hidden md:block" />
          <span className="text-accent relative inline-block">
            Skill Development
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-2 bg-accent/30 origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Dedicated to providing comprehensive academic curriculum, advanced speech therapy, and industry-aligned vocational training for hearing and speech-impaired individuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <Link
              href="/admissions"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply for Admission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/support-us"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-full font-bold text-lg hover:border-accent hover:text-accent transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Heart className="w-5 h-5 group-hover:fill-accent transition-colors" />
              Support Our Cause
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Parallax Elements */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" 
      />
    </section>
  );
}
