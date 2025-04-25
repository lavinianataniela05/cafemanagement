// components/LogoutPage.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export const LogoutPage = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      alert("Logged out successfully");
      window.location.href = "/";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl dark:text-white"
      >
        Logging out...
      </motion.div>
    </div>
  );
};