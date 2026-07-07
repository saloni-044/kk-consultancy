import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-3' : 'bg-primary py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button 
          className="flex items-center gap-3 cursor-pointer bg-transparent border-0 p-0" 
          onClick={() => scrollTo('home')}
          aria-label="KK Consultancy — scroll to top"
        >
          <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary font-bold text-xl leading-none">
            KK
          </div>
          <span className="text-white font-bold text-xl tracking-tight">KK Consultancy</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')}
            className="bg-white text-primary px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-white/90 transition-colors shadow-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md shadow-lg border-t border-white/10 p-4 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white font-medium text-left px-4 py-2 hover:bg-white/10 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-white text-primary px-4 py-3 rounded-md font-semibold mt-2"
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}