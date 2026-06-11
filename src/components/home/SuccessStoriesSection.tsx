"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    name: "Rohan Patel",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    quote: "The computer skills training at Vidyalaya changed my life. Today, I work at a top tech firm, proving that silence is not a barrier to success.",
    parentQuote: "We never imagined Rohan would be completely independent. The school gave him wings.",
    parentName: "Mrs. Patel (Mother)"
  },
  {
    name: "Priya Sharma",
    role: "Boutique Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    quote: "Tailoring was just a skill, but here it became my passion. Now I run my own boutique and employ two other deaf women.",
    parentQuote: "Watching her manage her own business brings tears to my eyes. She is our pride.",
    parentName: "Mr. Sharma (Father)"
  }
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4"
            >
              <span className="w-8 h-[2px] bg-accent" />
              Impact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
            >
              Real stories of triumph over challenges.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
            >
              View All Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20 rotate-180" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-muted">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                    <p className="text-accent font-medium text-sm">{story.role}</p>
                  </div>
                </div>

                <p className="text-lg text-foreground italic mb-8 relative z-10 flex-1">
                  "{story.quote}"
                </p>

                <div className="pt-6 border-t border-border mt-auto">
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{story.parentQuote}"
                  </p>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    - {story.parentName}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
