
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export const LogoutPage = () => {
//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       alert("Logged out successfully");
//       window.location.href = "/login"; // Redirect to login page
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-full">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="text-xl dark:text-white"
//       >
//         Logging out...
//       </motion.div>
//     </div>
//   );
// };
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const LogoutPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login"); // Using Next.js router for smoother navigation
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 max-w-md w-full"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center border-2 border-amber-300 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-amber-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-amber-900 font-sans text-[#3b2e28] mb-4"
        >
          Goodbye for now!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-amber-800 mb-8 italic"
        >
          You're being safely logged out...
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-2 bg-amber-200 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-amber-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-amber-600"
        >
          Come back soon for more coffee delights!
        </motion.p>
      </motion.div>
    </div>
  );
};