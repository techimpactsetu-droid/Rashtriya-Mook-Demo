"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Software Engineer at TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    quote: "The vocational training and early intervention I received at Vidyalaya completely changed the trajectory of my life. I was taught to focus on my abilities, not my disabilities. Today, I lead a team of developers and communicate efficiently using specialized tech.",
    year: "Class of 2018"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Professional Artist & Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    quote: "Words were hard for me, but art became my voice. The dedicated educators recognized my passion early on and provided me with advanced training. Now, I run my own design studio and employ other deaf artists.",
    year: "Class of 2015"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "National Athlete",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    quote: "Sports gave me confidence. The sports infrastructure and dedicated coaching staff at Rashtriya Mook Badhir Vidyalaya pushed me to compete at the national level. I owe my medals to my teachers who never gave up on me.",
    year: "Class of 2021"
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary opacity-50" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-6"
          >
            <span className="w-8 h-[2px] bg-accent" />
            Alumni Triumphs
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 leading-relaxed"
          >
            Read the inspiring journeys of our alumni who have broken barriers, achieved their dreams, and are now leading independent, successful lives.
          </motion.p>
        </div>
      </section>

      {/* Main Stories */}
      <section className="py-24 container mx-auto px-4">
        <div className="space-y-16 max-w-5xl mx-auto">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-[100%] -z-10 group-hover:scale-110 transition-transform duration-500" />
              <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/20 rotate-180" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className="shrink-0 relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shadow-md z-20">
                    <Star className="w-6 h-6 fill-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-primary font-medium italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{story.name}</h3>
                    <p className="text-accent font-medium">{story.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{story.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all shadow-lg"
          >
            Start Your Child's Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
