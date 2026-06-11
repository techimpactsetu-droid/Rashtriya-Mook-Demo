"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Building2, BookOpen, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const donationCauses = [
  { id: "sponsor", title: "Sponsor a Student", icon: <GraduationCap className="w-6 h-6" />, desc: "Cover tuition, books, and uniforms for one student for an entire year.", amount: "₹15,000" },
  { id: "education", title: "Donate for Education", icon: <BookOpen className="w-6 h-6" />, desc: "Contribute to our general education fund for learning materials and tech aids.", amount: "Any Amount" },
  { id: "training", title: "Support Training Programs", icon: <Building2 className="w-6 h-6" />, desc: "Help fund our vocational workshops and equipment for skill development.", amount: "₹5,000" },
];

export default function SupportUsPage() {
  const [selectedCause, setSelectedCause] = useState("sponsor");
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = () => {
    // Razorpay placeholder logic
    alert(`Initiating Razorpay payment for cause: ${selectedCause}. Integration pending.`);
  };

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-8 h-[2px] bg-accent" />
            Make an Impact
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Support Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Your contribution directly empowers hearing and speech impaired students. By supporting us, you are not just giving money; you are giving confidence, independence, and a brighter future.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Causes Selection */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Choose a Cause</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {donationCauses.map((cause) => (
                <div
                  key={cause.id}
                  onClick={() => setSelectedCause(cause.id)}
                  className={`p-6 rounded-2xl cursor-pointer border-2 transition-all ${
                    selectedCause === cause.id
                      ? "border-accent bg-accent/5 shadow-md"
                      : "border-border bg-white hover:border-accent/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    selectedCause === cause.id ? "bg-accent text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {cause.icon}
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">{cause.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{cause.desc}</p>
                  <div className="font-bold text-accent">{cause.amount}</div>
                </div>
              ))}
              
              <div
                  onClick={() => setSelectedCause("infrastructure")}
                  className={`p-6 rounded-2xl cursor-pointer border-2 transition-all ${
                    selectedCause === "infrastructure"
                      ? "border-accent bg-accent/5 shadow-md"
                      : "border-border bg-white hover:border-accent/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    selectedCause === "infrastructure" ? "bg-accent text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">Infrastructure Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">Help us maintain and upgrade our specialized classrooms and campus facilities.</p>
                  <div className="font-bold text-accent">Any Amount</div>
                </div>
            </div>
          </motion.div>

          {/* Donation Payment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Heart className="w-6 h-6 text-accent" />
                Make a Donation
              </h3>

              <div className="space-y-6 flex-1 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Donation Amount (₹)</label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[1000, 2500, 5000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setCustomAmount(amt.toString())}
                      className="py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder:text-white/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder:text-white/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">PAN Number (For 80G Receipt)</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder:text-white/40 uppercase"
                  />
                </div>
              </div>

              <div className="pt-8 mt-auto relative z-10">
                <button
                  onClick={handleDonate}
                  className="w-full py-4 bg-accent text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all hover:-translate-y-1"
                >
                  Donate with Razorpay
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Secure Payment. 80G Tax Exemption available.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
