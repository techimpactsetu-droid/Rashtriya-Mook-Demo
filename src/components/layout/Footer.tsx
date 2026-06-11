"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Heart, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Rashtriya Mook</span>
                <span className="text-xs font-medium opacity-80">Badhir Vidyalaya</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 max-w-xs mt-4">
              Providing quality education, vocational training and equal opportunities for hearing and speech impaired students to help them lead independent and successful lives.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-xs font-bold">
                TW
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-xs font-bold">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/academic-programs" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link href="/vocational-training" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Vocational Training</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/admissions" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Become a Volunteer</Link>
              </li>
              <li>
                <Link href="/support-us" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors flex items-center gap-2">
                  Donate Now <Heart className="w-3 h-3 text-accent" />
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <p className="text-xs opacity-80 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="bg-background text-foreground px-3 py-2 text-sm rounded-l-md w-full focus:outline-none" />
                <button className="bg-accent text-primary px-3 py-2 text-sm font-bold rounded-r-md hover:bg-accent/90 transition-colors">
                  Send
                </button>
              </div>
            </div>
            {/* Legal Links */}
            <div className="mt-6">
              <h4 className="font-bold text-accent mb-3 text-sm">Legal & Transparency</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/ngo-documentation" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                    NGO Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  123 Education Lane, Knowledge Park,
                  New Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm opacity-80">contact@rashtriyamook.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Rashtriya Mook Badhir Vidyalaya. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs opacity-60">
            <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
            <Link href="/ngo-documentation" className="hover:opacity-100 transition-opacity">NGO Documentation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
