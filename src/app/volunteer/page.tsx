"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, HeartHandshake, ArrowRight } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(2, "City is required"),
  areaOfInterest: z.string().min(2, "Please select an area of interest"),
  availability: z.string().min(2, "Please select availability"),
});

type FormData = z.infer<typeof formSchema>;

export default function VolunteerPage() {
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
    <div className="bg-background min-h-screen pb-24">
      <div className="bg-primary pt-24 pb-32 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-50 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6"
          >
            <HeartHandshake className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Become a Volunteer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Your time and skills can make a world of difference. Join our mission and help empower our students to achieve greatness.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-support/10 text-support rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Welcome to the Team!</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Thank you for offering to volunteer with us. Our coordinator will reach out to you shortly to discuss how you can help.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                Submit another application
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-primary">Full Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="text-destructive text-sm font-medium">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-bold text-primary">Mobile Number</label>
                  <input
                    {...register("mobile")}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobile && <span className="text-destructive text-sm font-medium">{errors.mobile.message}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-primary">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Enter email address"
                  />
                  {errors.email && <span className="text-destructive text-sm font-medium">{errors.email.message}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-bold text-primary">City</label>
                  <input
                    {...register("city")}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Which city are you located in?"
                  />
                  {errors.city && <span className="text-destructive text-sm font-medium">{errors.city.message}</span>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="areaOfInterest" className="text-sm font-bold text-primary">Area of Interest</label>
                  <select
                    {...register("areaOfInterest")}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30 text-foreground"
                  >
                    <option value="">Select an area of interest</option>
                    <option value="Teaching Assistance">Teaching Assistance</option>
                    <option value="Vocational Skill Training">Vocational Skill Training (Computers, Art, etc.)</option>
                    <option value="Event Organization">Event Organization & Management</option>
                    <option value="Fundraising">Fundraising & Marketing</option>
                    <option value="Mentorship">Student Mentorship</option>
                    <option value="Other">Other (General Help)</option>
                  </select>
                  {errors.areaOfInterest && <span className="text-destructive text-sm font-medium">{errors.areaOfInterest.message}</span>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="availability" className="text-sm font-bold text-primary">Availability</label>
                  <select
                    {...register("availability")}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30 text-foreground"
                  >
                    <option value="">Select your availability</option>
                    <option value="Weekdays">Weekdays (Morning/Afternoon)</option>
                    <option value="Weekends">Weekends Only</option>
                    <option value="Flexible">Flexible / On-call</option>
                    <option value="Full-time Short Term">Full-time (Short term projects)</option>
                  </select>
                  {errors.availability && <span className="text-destructive text-sm font-medium">{errors.availability.message}</span>}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-accent/90 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Become A Volunteer
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
