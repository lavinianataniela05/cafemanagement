import React from "react";
import { FaPhone, FaClock, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#5c3a28] mb-3 font-[var(--font-lexend-deca)] tracking-wide">
            Brew & Bliss Café
          </h1>
          <p className="text-xl text-[#7a5c44] max-w-2xl mx-auto">
            Where every cup tells a story and every moment creates a memory
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* Logo Section with enhanced styling */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-amber-700 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
              <Image
                src="/images/logo1.jpg"
                alt="Brew & Bliss Logo"
                fill
                className="rounded-2xl shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          {/* Contact information with improved cards */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-600"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-amber-800 dark:text-amber-500 flex items-center gap-3">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                  <FaPhone className="text-amber-600 text-xl" />
                </div>
                Contact Us
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-lg font-medium">
                Call us at <span className="font-bold">(021) 11223344</span> for reservations or inquiries
              </p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-600"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-amber-800 dark:text-amber-500 flex items-center gap-3">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                  <FaClock className="text-amber-600 text-xl" />
                </div>
                Open Hours
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-lg font-medium">
                Open <span className="font-bold">Everyday</span>
                <br />
                <span className="font-bold">10 AM - 10 PM</span>
              </p>
            </motion.div>

            
          </motion.div>
        </div>

        {/* Social Media Section - Enhanced */}
        <motion.div 
          className="bg-gradient-to-r from-amber-900 to-amber-700 p-10 rounded-3xl shadow-xl text-center overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decorative coffee beans */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-800/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-amber-800/20 rounded-full blur-xl"></div>
          
          <h2 className="text-3xl font-semibold mb-8 text-amber-100 relative z-10">
            Stay Connected
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <motion.a 
              href="#" 
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-amber-200/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="text-amber-300 text-2xl" />
              <span className="text-amber-50 font-medium">@BrewnBliss_coffee</span>
            </motion.a>
            <motion.a 
              href="#" 
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-amber-200/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-amber-300 text-2xl" />
              <span className="text-amber-50 font-medium">+62 878 1111 222</span>
            </motion.a>
          </div>
          
          <motion.div 
            className="mt-12 text-amber-200/80 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p>Join us for a cup of excellence and experience our artisanal coffee creations, crafted with love and passion.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};