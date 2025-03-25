import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', href: '/#hero', text: 'Home' },
    { id: 'about', href: '/#about', text: 'About' },
    { id: 'skills', href: '/#skills', text: 'Skills' },
    { id: 'projects', href: '/#projects', text: 'Projects' },
    { id: 'contact', href: '/#contact', text: 'Contact' },
  ];

  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-lg' : 'bg-neutral-900'
        }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="p-2 rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold tracking-tighter text-white"
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Krishnaraj Irkal
                </span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-gray-300 hover:text-blue-500 font-medium transition-colors duration-300 relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-blue-700/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-blue-400" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-400" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-neutral-800 border-t border-neutral-700"
            >
              <div className="pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    href={`/${link.href}`}
                    scroll={false}
                    shallow={true}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState(null, "", link.href); // Update URL hash without reload
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3 py-2 text-gray-300 hover:text-blue-500 font-medium transition-colors duration-300 relative group"
                  >
                    {link.text}
                  </Link>

                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
