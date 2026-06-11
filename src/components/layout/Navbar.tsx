"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Programs", 
    href: "#",
    dropdown: [
      { name: "Academic Curriculum", href: "/academic-programs" },
      { name: "Vocational Training", href: "/vocational-training" }
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Success Stories", href: "/success-stories" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MagneticButton>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:bg-accent group-hover:text-primary transition-colors">
                <span className="font-serif font-bold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg leading-tight transition-colors ${scrolled ? "text-primary" : "text-primary"}`}>Rashtriya Mook</span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Badhir Vidyalaya</span>
              </div>
            </Link>
          </MagneticButton>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <MagneticButton>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold text-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </MagneticButton>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border py-2 overflow-hidden"
                      >
                        {link.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton>
              <Link
                href="/support-us"
                className="px-6 py-2.5 bg-white border border-border text-primary font-bold rounded-full hover:bg-muted/80 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transform flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-accent" />
                Donate Now
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/admissions"
                className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
              >
                Admissions Open
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    href={link.href}
                    className="block px-4 py-3 text-base font-bold text-foreground hover:bg-muted/50 rounded-lg"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 flex flex-col gap-1 border-l-2 border-muted ml-4 mt-1">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  href="/support-us"
                  className="px-4 py-3 bg-white border border-border text-primary text-center font-bold rounded-lg flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="w-4 h-4 text-accent" />
                  Donate Now
                </Link>
                <Link
                  href="/admissions"
                  className="px-4 py-3 bg-accent text-primary text-center font-bold rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Admissions Open
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
