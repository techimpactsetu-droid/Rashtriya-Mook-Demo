import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 11, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the website of Rashtriya Mook Badhir Vidyalaya, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Donations and Refunds</h2>
              <p>All donations made to Rashtriya Mook Badhir Vidyalaya are processed securely. Due to the nature of charitable donations, all contributions are non-refundable. However, if a donation is made in error, please contact us within 48 hours for review.</p>
              <p className="mt-2">Donors will receive an 80G tax exemption certificate for eligible donations within 15-30 working days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Content</h2>
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of Rashtriya Mook Badhir Vidyalaya and is protected by international copyright laws. You may not modify, copy, reproduce, republish, or distribute any content without our prior written consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Volunteer and Admission Applications</h2>
              <p>Submitting an application for volunteering or admission does not guarantee acceptance. The Vidyalaya reserves the right to review, accept, or decline applications based on internal criteria, availability, and organizational requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Disclaimer</h2>
              <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
