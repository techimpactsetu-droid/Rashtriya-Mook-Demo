import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 11, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you make a donation, register as a volunteer, or apply for admission. This may include your name, email address, phone number, PAN card number (for tax exemption receipts), and postal address.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process your donations and issue 80G tax exemption certificates.</li>
                <li>Communicate with you about admissions, volunteer opportunities, and organizational updates.</li>
                <li>Improve our website and services based on user feedback.</li>
                <li>Comply with legal and regulatory obligations as an NGO.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Sharing Your Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or processing donations (such as secure payment gateways like Razorpay), so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Contacting Us</h2>
              <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
              <div className="mt-4 p-6 bg-muted/50 rounded-xl">
                <p><strong>Rashtriya Mook Badhir Vidyalaya</strong></p>
                <p>123 Education Lane, Knowledge Park, New Delhi, 110001, India</p>
                <p>Email: privacy@rashtriyamook.org</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
