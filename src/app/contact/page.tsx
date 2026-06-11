"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
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
            Get In Touch
            <span className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Have questions about our programs, admissions, or how you can help? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm space-y-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Location</h4>
                  <p className="text-muted-foreground">123 Education Lane, Knowledge Park, New Delhi, 110001, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Call Us</h4>
                  <p className="text-muted-foreground mb-2">+91 98765 43210</p>
                  <a href="tel:+919876543210" className="text-sm font-bold text-accent hover:text-primary transition-colors">Call Now →</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email Us</h4>
                  <p className="text-muted-foreground mb-2">contact@rashtriyamook.org</p>
                  <a href="mailto:contact@rashtriyamook.org" className="text-sm font-bold text-accent hover:text-primary transition-colors">Send Email →</a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1DA851] hover:-translate-y-1 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-border relative bg-muted flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                <p className="text-muted-foreground font-medium">Interactive Map Embed Area</p>
                <p className="text-xs text-muted-foreground/70">Replace with actual Google Maps iframe in production</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm h-full">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-support/10 text-support rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Message Sent!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-primary">Your Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-destructive text-sm font-medium">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-primary">Email Address</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-destructive text-sm font-medium">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-primary">Subject</label>
                      <input
                        {...register("subject")}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                        placeholder="How can we help?"
                      />
                      {errors.subject && <span className="text-destructive text-sm font-medium">{errors.subject.message}</span>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-primary">Message</label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30 resize-none"
                        placeholder="Type your message here..."
                      />
                      {errors.message && <span className="text-destructive text-sm font-medium">{errors.message.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
