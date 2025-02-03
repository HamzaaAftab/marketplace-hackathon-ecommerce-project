"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  // Auto-hide Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < prevScroll || currentScroll < 50);
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  // Menu items animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#B88E2F" }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white shadow-sm ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-12 px-6 py-4">
        {/* Brand */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/">
            <Image 
              src="/logo.png" 
              width={140} 
              height={400} 
              alt="Logo" 
              className="hover:opacity-80 transition-opacity md:w-[130px] "
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Shop", "Blog", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.3, type: "spring" }}
            >
              <Link 
                href={`/${item.toLowerCase()}`} 
                className="text-md font-medium text-gray-700 hover:text-[#B88E2F] transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <motion.div 
            className="relative space-x-4 gap-12"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              type="text"
              className={`rounded-full px-4 py-2 text-gray-700 bg-gray-50 focus:outline-none border transition-all duration-300 ${
                searchOpen ? "w-64 border-[#B88E2F]" : "w-48 border-transparent"
              }`}
              placeholder="Search products"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button 
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <FiSearch size={19} className="text-gray-500 hover:text-[#B88E2F] transition-colors" />
            </motion.button>
          </motion.div>

          {/* Cart */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Link href="/cart" className="flex items-center">
              <FiShoppingCart size={26} className="text-gray-700 hover:text-[#B88E2F] transition-colors" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-xs font-bold px-2 py-1 rounded-full"
              >
                3
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <FiX size={24} className="text-gray-700" />
            ) : (
              <FiMenu size={24} className="text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {["Home", "About", "Shop", "Cart"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-[#B88E2F] transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}