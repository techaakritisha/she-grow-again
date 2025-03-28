
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CreditCard, PiggyBank, HandCoins, Award } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're in the dashboard route to avoid logo duplication
  const isDashboardRoute = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/credit-evaluation') ||
                          location.pathname.includes('/loan-application') ||
                          location.pathname.includes('/financial-literacy') ||
                          location.pathname.includes('/transparency') ||
                          location.pathname.includes('/feedback');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);
  
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? "py-3 bg-purple-dark shadow-md" 
      : "py-5 bg-transparent"
  }`;
  
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Only show the logo in navbar if we're not in the dashboard */}
          {!isDashboardRoute && (
            <Link to="/dashboard" className="flex items-center">
              <div className="bg-purple px-6 py-3 rounded-xl flex items-center space-x-6 relative overflow-hidden shadow-glow hover:shadow-purple transition-all duration-300">
                {/* Background icons */}
                <PiggyBank className="absolute -left-1 top-1 text-white/20 w-8 h-8" />
                <HandCoins className="absolute right-2 bottom-0 text-white/20 w-8 h-8" />
                <Award className="absolute left-9 -bottom-1 text-white/20 w-7 h-7" />
                <CreditCard className="absolute right-14 top-0 text-white/20 w-7 h-7" />
                
                {/* Logo text */}
                <span className="text-3xl font-bold text-white relative z-10">She</span>
                <span className="text-3xl font-bold text-white relative z-10">Grow</span>
              </div>
            </Link>
          )}
          
          {/* If in dashboard, show a spacer instead of the logo */}
          {isDashboardRoute && <div className="w-24"></div>}
          
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-darkest focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-purple shadow-md md:hidden z-50"
        >
          <div className="py-3 px-4 space-y-1 relative">
            {/* Background icons for mobile menu */}
            <PiggyBank className="absolute right-4 top-2 text-white/20 w-8 h-8 rotate-12" />
            <HandCoins className="absolute left-3 bottom-2 text-white/20 w-8 h-8 -rotate-12" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;