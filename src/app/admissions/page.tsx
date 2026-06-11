"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, GraduationCap, ArrowRight } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  age: z.string().min(1, "Age is required"),
  address: z.string().min(10, "Full address is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-primary pt-24 pb-32 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6"
          >
            <GraduationCap className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Begin The Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Take the first step towards an empowering educational experience. We are currently accepting applications for the upcoming academic year.
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
              <h2 className="text-3xl font-bold text-primary mb-4">Application Received!</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Thank you for applying to Rashtriya Mook Badhir Vidyalaya. Our admissions team will contact you within 48 hours.
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
                {/* Student Name */}
                <div className="space-y-2">
                  <label htmlFor="studentName" className="text-sm font-bold text-primary">Student Name</label>
                  <input
                    {...register("studentName")}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Enter student's full name"
                  />
                  {errors.studentName && <span className="text-destructive text-sm font-medium">{errors.studentName.message}</span>}
                </div>

                {/* Parent Name */}
                <div className="space-y-2">
                  <label htmlFor="parentName" className="text-sm font-bold text-primary">Parent/Guardian Name</label>
                  <input
                    {...register("parentName")}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Enter parent's full name"
                  />
                  {errors.parentName && <span className="text-destructive text-sm font-medium">{errors.parentName.message}</span>}
                </div>

                {/* Mobile Number */}
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

                {/* Email Address */}
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

                {/* Age */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="age" className="text-sm font-bold text-primary">Student's Age</label>
                  <input
                    {...register("age")}
                    type="number"
                    min="3"
                    max="25"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30"
                    placeholder="Enter age in years"
                  />
                  {errors.age && <span className="text-destructive text-sm font-medium">{errors.age.message}</span>}
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="address" className="text-sm font-bold text-primary">Full Address</label>
                  <textarea
                    {...register("address")}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30 resize-none"
                    placeholder="Enter complete residential address"
                  />
                  {errors.address && <span className="text-destructive text-sm font-medium">{errors.address.message}</span>}
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold text-primary">Additional Information (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-muted/30 resize-none"
                    placeholder="Any specific medical condition, previous schooling history, etc."
                  />
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
                      Apply For Admission
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
