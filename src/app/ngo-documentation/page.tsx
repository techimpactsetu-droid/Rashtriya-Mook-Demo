"use client";

import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck, FileCheck, Landmark } from "lucide-react";

const documents = [
  {
    category: "Legal Registration",
    icon: <Landmark className="w-6 h-6" />,
    items: [
      { name: "Society Registration Certificate", size: "1.2 MB", date: "Aug 2005" },
      { name: "Trust Deed / Memorandum of Association", size: "3.5 MB", date: "Aug 2005" },
      { name: "NITI Aayog Darpan ID", size: "800 KB", date: "Jan 2018" },
    ]
  },
  {
    category: "Tax & Compliance",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { name: "12A Registration Certificate", size: "1.5 MB", date: "Sep 2006" },
      { name: "80G Tax Exemption Certificate", size: "1.1 MB", date: "Sep 2006" },
      { name: "FCRA Registration (For Foreign Funds)", size: "2.1 MB", date: "Mar 2010" },
      { name: "Latest CSR-1 Registration", size: "900 KB", date: "Apr 2021" },
    ]
  },
  {
    category: "Audit & Annual Reports",
    icon: <FileCheck className="w-6 h-6" />,
    items: [
      { name: "Annual Audit Report FY 2024-25", size: "4.2 MB", date: "May 2025" },
      { name: "Annual Audit Report FY 2023-24", size: "4.1 MB", date: "May 2024" },
      { name: "Impact Assessment Report 2024", size: "8.5 MB", date: "Jan 2025" },
    ]
  }
];

export default function NgoDocumentationPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-50" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-6"
          >
            <span className="w-8 h-[2px] bg-accent" />
            Transparency First
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            NGO Documentation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 leading-relaxed"
          >
            We believe in complete financial and operational transparency. All our legal registrations, tax exemptions, and audit reports are available below for public review.
          </motion.p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {documents.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary">{section.category}</h2>
              </div>

              <div className="grid gap-4">
                {section.items.map((item, i) => (
                  <div 
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-2xl border border-border shadow-sm hover:border-accent transition-colors group"
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-lg">{item.name}</h3>
                        <div className="text-sm text-muted-foreground flex gap-3">
                          <span>PDF • {item.size}</span>
                          <span>Issued: {item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-muted text-primary font-bold rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
