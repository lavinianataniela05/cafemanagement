// // // // // // // components/DashboardPage.tsx
// // // // // // "use client";
// // // // // // import { motion } from "framer-motion";

// // // // // // interface DashboardFeature {
// // // // // //   title: string;
// // // // // //   key: string;
// // // // // //   description: string;
// // // // // //   image: string;
// // // // // // }

// // // // // // export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
// // // // // //   const dashboardFeatures: DashboardFeature[] = [
// // // // // //     {
// // // // // //       title: "View Our Menu",
// // // // // //       key: "menu-order",
// // // // // //       description: "Browse our handcrafted coffee and treats.",
// // // // // //       image: "https://source.unsplash.com/400x300/?coffee,menu",
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Make a Reservation",
// // // // // //       key: "reservation",
// // // // // //       description: "Easily book a table for you and your guests.",
// // // // // //       image: "https://source.unsplash.com/400x300/?restaurant,table",
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Payment History",
// // // // // //       key: "payment",
// // // // // //       description: "View your previous transactions.",
// // // // // //       image: "https://source.unsplash.com/400x300/?payment,creditcard",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="space-y-6">
// // // // // //       <div className="text-center">
// // // // // //         <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
// // // // // //           Welcome to Brew & Bliss
// // // // // //         </h1>
// // // // // //         <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
// // // // // //           At Brew & Bliss, we believe every cup tells a story. Whether you're here to unwind or catch up on work,
// // // // // //           we've got the perfect brew waiting for you.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // //         {dashboardFeatures.map((feature) => (
// // // // // //           <motion.div
// // // // // //             key={feature.key}
// // // // // //             whileHover={{ y: -5 }}
// // // // // //             onClick={() => onNavigate(feature.key)}
// // // // // //             className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border dark:border-neutral-700 hover:shadow-lg transition cursor-pointer"
// // // // // //           >
// // // // // //             <img
// // // // // //               src={feature.image}
// // // // // //               alt={feature.title}
// // // // // //               className="w-full h-40 object-cover rounded-t-2xl"
// // // // // //             />
// // // // // //             <div className="p-4 space-y-2">
// // // // // //               <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
// // // // // //                 {feature.title}
// // // // // //               </h3>
// // // // // //               <p className="text-sm text-neutral-600 dark:text-neutral-400">
// // // // // //                 {feature.description}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // app/dashboard/page.tsx
// // // // // // components/DashboardPage.tsx
// // // // // "use client";
// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";

// // // // // interface DashboardFeature {
// // // // //   title: string;
// // // // //   key: string;
// // // // //   description: string;
// // // // //   image: string;
// // // // // }

// // // // // const drinks = [
// // // // //   {
// // // // //     name: "Le MochaMilk",
// // // // //     image: "/mocha.png",
// // // // //     rating: 5,
// // // // //     favorite: false,
// // // // //   },
// // // // //   {
// // // // //     name: "Strawberry Yoghurt",
// // // // //     image: "/strawberry.png",
// // // // //     rating: 5,
// // // // //     favorite: true,
// // // // //   },
// // // // //   {
// // // // //     name: "Matcha Greenteato",
// // // // //     image: "/matcha.png",
// // // // //     rating: 5,
// // // // //     favorite: false,
// // // // //   },
// // // // // ];

// // // // // export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
// // // // //   const dashboardFeatures: DashboardFeature[] = [
// // // // //     {
// // // // //       title: "View Our Menu",
// // // // //       key: "menu-order",
// // // // //       description: "Browse our handcrafted coffee and treats.",
// // // // //       image: "https://source.unsplash.com/400x300/?coffee,menu",
// // // // //     },
// // // // //     {
// // // // //       title: "Make a Reservation",
// // // // //       key: "reservation",
// // // // //       description: "Easily book a table for you and your guests.",
// // // // //       image: "https://source.unsplash.com/400x300/?restaurant,table",
// // // // //     },
// // // // //     {
// // // // //       title: "Payment History",
// // // // //       key: "payment",
// // // // //       description: "View your previous transactions.",
// // // // //       image: "https://source.unsplash.com/400x300/?payment,creditcard",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="space-y-10 px-4 py-10 bg-[#f8e9d3] min-h-screen">
// // // // //       <div className="text-center space-y-2">
// // // // //         <h1 className="text-4xl font-bold text-neutral-800">Brew n Bliss Coffeeshop</h1>
// // // // //         <p className="text-sm text-neutral-600">wanna make a reservation?</p>

// // // // //         <motion.button
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //           onClick={() => onNavigate("reservation")}
// // // // //           className="mt-4 bg-white px-6 py-2 rounded-full shadow-md hover:bg-gray-100"
// // // // //         >
// // // // //           reserve now
// // // // //         </motion.button>
// // // // //       </div>

// // // // //       {/* Drinks Section */}
// // // // //       <div className="flex justify-center gap-6 flex-wrap mt-10">
// // // // //         {drinks.map((drink, idx) => (
// // // // //           <motion.div
// // // // //             key={idx}
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             className="bg-white rounded-2xl shadow-md w-60 p-4 text-center relative"
// // // // //           >
// // // // //             <Image
// // // // //               src={drink.image}
// // // // //               alt={drink.name}
// // // // //               width={100}
// // // // //               height={100}
// // // // //               className="mx-auto rounded-lg"
// // // // //             />
// // // // //             <h3 className="mt-4 font-semibold text-lg text-neutral-800">{drink.name}</h3>
// // // // //             <div className="flex justify-center mt-2 text-yellow-500">
// // // // //               {Array.from({ length: drink.rating }).map((_, i) => (
// // // // //                 <span key={i}>⭐</span>
// // // // //               ))}
// // // // //             </div>
// // // // //             {drink.favorite && (
// // // // //               <div className="absolute top-2 right-2 text-orange-500 text-xl">👍</div>
// // // // //             )}
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Feature Navigation Section */}
// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
// // // // //         {dashboardFeatures.map((feature) => (
// // // // //           <motion.div
// // // // //             key={feature.key}
// // // // //             whileHover={{ y: -5 }}
// // // // //             onClick={() => onNavigate(feature.key)}
// // // // //             className="bg-white rounded-2xl shadow-md border hover:shadow-lg transition cursor-pointer"
// // // // //           >
// // // // //             <img
// // // // //               src={feature.image}
// // // // //               alt={feature.title}
// // // // //               className="w-full h-40 object-cover rounded-t-2xl"
// // // // //             />
// // // // //             <div className="p-4 space-y-2">
// // // // //               <h3 className="text-lg font-semibold text-neutral-800">
// // // // //                 {feature.title}
// // // // //               </h3>
// // // // //               <p className="text-sm text-neutral-600">
// // // // //                 {feature.description}
// // // // //               </p>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // components/DashboardPage.tsx
// // // // "use client";
// // // // import { motion } from "framer-motion";
// // // // import Image from "next/image";

// // // // interface DashboardFeature {
// // // //   title: string;
// // // //   key: string;
// // // //   description: string;
// // // //   image: string;
// // // // }

// // // // const drinks = [
// // // //   {
// // // //     name: "Le MochaMilk",
// // // //     image: "/mocha.png",
// // // //     rating: 5,
// // // //     favorite: false,
// // // //   },
// // // //   {
// // // //     name: "Strawberry Yoghurt",
// // // //     image: "/strawberry.png",
// // // //     rating: 5,
// // // //     favorite: true,
// // // //   },
// // // //   {
// // // //     name: "Matcha Greenteato",
// // // //     image: "/matcha.png",
// // // //     rating: 5,
// // // //     favorite: false,
// // // //   },
// // // // ];

// // // // export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
// // // //   const dashboardFeatures: DashboardFeature[] = [
// // // //     {
// // // //       title: "View Our Menu",
// // // //       key: "menu-order",
// // // //       description: "Browse our handcrafted coffee and treats.",
// // // //       image: "https://source.unsplash.com/400x300/?coffee,menu",
// // // //     },
// // // //     {
// // // //       title: "Make a Reservation",
// // // //       key: "reservation",
// // // //       description: "Easily book a table for you and your guests.",
// // // //       image: "https://source.unsplash.com/400x300/?restaurant,table",
// // // //     },
// // // //     {
// // // //       title: "Payment History",
// // // //       key: "payment",
// // // //       description: "View your previous transactions.",
// // // //       image: "https://source.unsplash.com/400x300/?payment,creditcard",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="bg-[#fef7ef] min-h-screen px-6 py-12 space-y-14 font-sans">
// // // //       {/* Hero Section */}
// // // //       <div className="text-center space-y-3">
// // // //         <h1 className="text-4xl font-extrabold text-[#5c3d2e]">Brew n Bliss Coffeeshop</h1>
// // // //         <p className="text-base text-[#8c6e56] italic">wanna make a reservation?</p>
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => onNavigate("reservation")}
// // // //           className="mt-4 bg-[#fff8f0] text-[#5c3d2e] px-8 py-3 rounded-full shadow-lg hover:bg-[#f2e4d9] transition-all font-semibold"
// // // //         >
// // // //           reserve now
// // // //         </motion.button>
// // // //       </div>

// // // //       {/* Featured Drinks Section */}
// // // //       <div className="flex justify-center flex-wrap gap-8">
// // // //         {drinks.map((drink, idx) => (
// // // //           <motion.div
// // // //             key={idx}
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white rounded-3xl shadow-xl w-64 p-5 text-center relative hover:shadow-2xl transition-all"
// // // //           >
// // // //             <Image
// // // //               src={drink.image}
// // // //               alt={drink.name}
// // // //               width={110}
// // // //               height={110}
// // // //               className="mx-auto rounded-full shadow-sm"
// // // //             />
// // // //             <h3 className="mt-4 text-lg font-semibold text-[#5c3d2e]">{drink.name}</h3>
// // // //             <div className="flex justify-center mt-1 text-yellow-400">
// // // //               {Array.from({ length: drink.rating }).map((_, i) => (
// // // //                 <span key={i}>⭐</span>
// // // //               ))}
// // // //             </div>
// // // //             {drink.favorite && (
// // // //               <div className="absolute top-2 left-2 text-orange-500 text-2xl">👍</div>
// // // //             )}
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Features Section */}
// // // //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //         {dashboardFeatures.map((feature) => (
// // // //           <motion.div
// // // //             key={feature.key}
// // // //             whileHover={{ y: -5 }}
// // // //             onClick={() => onNavigate(feature.key)}
// // // //             className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer border border-[#f0e6dc]"
// // // //           >
// // // //             <img
// // // //               src={feature.image}
// // // //               alt={feature.title}
// // // //               className="w-full h-44 object-cover"
// // // //             />
// // // //             <div className="p-5 space-y-2">
// // // //               <h3 className="text-xl font-semibold text-[#5c3d2e]">{feature.title}</h3>
// // // //               <p className="text-sm text-[#7d6651]">{feature.description}</p>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // components/DashboardPage.tsx
// // // "use client";
// // // import { motion } from "framer-motion";
// // // import Image from "next/image";

// // // interface DashboardFeature {
// // //   title: string;
// // //   key: string;
// // //   description: string;
// // //   image: string;
// // // }

// // // const drinks = [
// // //   {
// // //     name: "Le MochaMilk",
// // //     image: "/mocha.png",
// // //     rating: 5,
// // //     featured: false,
// // //   },
// // //   {
// // //     name: "Strawberry Yoghurt",
// // //     image: "/strawberry.png",
// // //     rating: 5,
// // //     featured: true,
// // //   },
// // //   {
// // //     name: "Matcha Greenteato",
// // //     image: "/matcha.png",
// // //     rating: 5,
// // //     featured: false,
// // //   },
// // // ];

// // // export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
// // //   const dashboardFeatures: DashboardFeature[] = [
// // //     {
// // //       title: "View Our Menu",
// // //       key: "menu-order",
// // //       description: "Browse our handcrafted coffee, teas, and sweet delights.",
// // //       image: "https://source.unsplash.com/600x400/?coffee,cafe",
// // //     },
// // //     {
// // //       title: "Make a Reservation",
// // //       key: "reservation",
// // //       description: "Book your cozy corner in just a few clicks.",
// // //       image: "https://source.unsplash.com/600x400/?coffee,table",
// // //     },
// // //     {
// // //       title: "Payment History",
// // //       key: "payment",
// // //       description: "Easily track your orders and receipts.",
// // //       image: "https://source.unsplash.com/600x400/?coffee,receipt",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="bg-[#faf5f0] min-h-screen px-6 py-12 space-y-20 font-sans text-[#40342e]">
// // //       {/* Hero Section */}
// // //       <div className="text-center space-y-4 max-w-xl mx-auto">
// // //         <h1 className="text-5xl font-extrabold tracking-tight">Brew n Bliss</h1>
// // //         <p className="text-lg text-[#7c6659]">Your cozy corner for handcrafted drinks and warm moments.</p>
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.97 }}
// // //           onClick={() => onNavigate("reservation")}
// // //           className="mt-4 bg-[#6f4e37] text-white px-8 py-3 rounded-full text-base font-medium shadow-md hover:bg-[#5a3e2c] transition"
// // //         >
// // //           Reserve Now
// // //         </motion.button>
// // //       </div>

// // //       {/* Drinks Showcase */}
// // //       <section className="max-w-6xl mx-auto">
// // //         <h2 className="text-2xl font-semibold mb-6 text-center">Popular Drinks</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
// // //           {drinks.map((drink, idx) => (
// // //             <motion.div
// // //               key={idx}
// // //               whileHover={{ y: -5 }}
// // //               className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-xl transition"
// // //             >
// // //               <div className="p-6">
// // //                 <Image
// // //                   src={drink.image}
// // //                   alt={drink.name}
// // //                   width={120}
// // //                   height={120}
// // //                   className="mx-auto rounded-full border shadow-sm"
// // //                 />
// // //                 <h3 className="mt-4 text-lg font-semibold">{drink.name}</h3>
// // //                 <p className="text-yellow-500 mt-1">
// // //                   {"⭐".repeat(drink.rating)}
// // //                 </p>
// // //                 {drink.featured && (
// // //                   <span className="inline-block mt-2 text-sm px-3 py-1 bg-amber-100 text-amber-600 rounded-full font-medium">
// // //                     Customer Favorite
// // //                   </span>
// // //                 )}
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Feature Navigation */}
// // //       <section className="max-w-6xl mx-auto space-y-8">
// // //         <h2 className="text-2xl font-semibold text-center">Explore</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// // //           {dashboardFeatures.map((feature) => (
// // //             <motion.div
// // //               key={feature.key}
// // //               whileHover={{ y: -5 }}
// // //               onClick={() => onNavigate(feature.key)}
// // //               className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition bg-white cursor-pointer"
// // //             >
// // //               <img
// // //                 src={feature.image}
// // //                 alt={feature.title}
// // //                 className="w-full h-44 object-cover"
// // //               />
// // //               <div className="p-6 space-y-2">
// // //                 <h3 className="text-lg font-semibold">{feature.title}</h3>
// // //                 <p className="text-sm text-[#7c6659]">{feature.description}</p>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // components/DashboardPage.tsx
// // "use client";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // interface DashboardFeature {
// //   title: string;
// //   key: string;
// //   description: string;
// //   image: string;
// // }

// // const drinks = [
// //   {
// //     name: "Le MochaMilk",
// //     image: "/mocha.png",
// //     rating: 5,
// //     featured: false,
// //   },
// //   {
// //     name: "Strawberry Yoghurt",
// //     image: "/strawberry.png",
// //     rating: 5,
// //     featured: true,
// //   },
// //   {
// //     name: "Matcha Greenteato",
// //     image: "/matcha.png",
// //     rating: 5,
// //     featured: false,
// //   },
// // ];

// // export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
// //   const dashboardFeatures: DashboardFeature[] = [
// //     {
// //       title: "View Our Menu",
// //       key: "menu-order",
// //       description: "Explore our carefully curated beverages and sweet delights.",
// //       image: "https://source.unsplash.com/600x400/?coffee,beans",
// //     },
// //     {
// //       title: "Make a Reservation",
// //       key: "reservation",
// //       description: "Book your table in seconds for your next cozy hangout.",
// //       image: "https://source.unsplash.com/600x400/?cafe,table",
// //     },
// //     {
// //       title: "Payment History",
// //       key: "payment",
// //       description: "Keep track of all your transactions easily.",
// //       image: "https://source.unsplash.com/600x400/?receipt,coffee",
// //     },
// //   ];

// //   return (
// //     <div className="bg-[#fef8f3] min-h-screen px-6 py-16 space-y-24 font-sans text-[#3e322d]">
      
// //       {/* Hero Section */}
// //       <section className="text-center space-y-6">
// //         <motion.h1 
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-5xl font-bold tracking-tight"
// //         >
// //           Brew n Bliss Café
// //         </motion.h1>
// //         <p className="text-lg text-[#7d6657] max-w-xl mx-auto">
// //           Savor moments, one cup at a time. Welcome to your neighborhood retreat.
// //         </p>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.97 }}
// //           onClick={() => onNavigate("reservation")}
// //           className="mt-6 bg-[#5a4332] text-white px-10 py-3 rounded-full text-base font-medium shadow-lg hover:bg-[#4a3529] transition"
// //         >
// //           Reserve Now
// //         </motion.button>
// //       </section>

// //       {/* Popular Drinks */}
// //       <section className="max-w-7xl mx-auto">
// //         <h2 className="text-3xl font-semibold text-center mb-12">Popular Picks</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //           {drinks.map((drink, idx) => (
// //             <motion.div
// //               key={idx}
// //               whileHover={{ y: -8 }}
// //               className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all relative"
// //             >
// //               <Image
// //                 src={drink.image}
// //                 alt={drink.name}
// //                 width={120}
// //                 height={120}
// //                 className="rounded-full border-4 border-[#f5e9e0] shadow-sm object-cover"
// //               />
// //               <h3 className="mt-6 text-xl font-semibold">{drink.name}</h3>
// //               <div className="text-yellow-400 mt-2">
// //                 {"⭐".repeat(drink.rating)}
// //               </div>
// //               {drink.featured && (
// //                 <span className="absolute top-4 right-4 text-xs bg-amber-300 text-white px-3 py-1 rounded-full">
// //                   Popular
// //                 </span>
// //               )}
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Dashboard Features */}
// //       <section className="max-w-7xl mx-auto space-y-12">
// //         <h2 className="text-3xl font-semibold text-center">Explore Brew & Bliss</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
// //           {dashboardFeatures.map((feature) => (
// //             <motion.div
// //               key={feature.key}
// //               whileHover={{ y: -8 }}
// //               onClick={() => onNavigate(feature.key)}
// //               className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition group"
// //             >
// //               <img
// //                 src={feature.image}
// //                 alt={feature.title}
// //                 className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
// //               />
// //               <div className="p-6 space-y-3">
// //                 <h3 className="text-lg font-semibold">{feature.title}</h3>
// //                 <p className="text-[#7d6657] text-sm">{feature.description}</p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };
// // components/DashboardPage.tsx
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface DashboardFeature {
//   title: string;
//   key: string;
//   description: string;
//   image: string;
// }

// const drinks = [
//   {
//     name: "Le MochaMilk",
//     image: "/mocha.png",
//     rating: 5,
//     featured: false,
//   },
//   {
//     name: "Strawberry Yoghurt",
//     image: "/strawberry.png",
//     rating: 5,
//     featured: true,
//   },
//   {
//     name: "Matcha Greenteato",
//     image: "/matcha.png",
//     rating: 5,
//     featured: false,
//   },
// ];

// export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
//   const dashboardFeatures: DashboardFeature[] = [
//     {
//       title: "View Our Menu",
//       key: "menu-order",
//       description: "Savor the finest brews and sweet delights curated just for you.",
//       image: "https://source.unsplash.com/600x400/?latte,coffeeart",
//     },
//     {
//       title: "Make a Reservation",
//       key: "reservation",
//       description: "Reserve your cozy corner for a blissful escape.",
//       image: "https://source.unsplash.com/600x400/?cafe,table",
//     },
//     {
//       title: "Payment History",
//       key: "payment",
//       description: "Track your past orders and keep everything delightful.",
//       image: "https://source.unsplash.com/600x400/?receipt,cafe",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-[#fff7f1] via-[#fdebd0] to-[#f7d4c2] min-h-screen px-6 py-16 space-y-24 font-sans text-[#3b2e28]">
      
//       {/* Hero Section */}
//       <section className="text-center space-y-6">
//         <motion.h1 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#e79e71] to-[#a67c52] text-transparent bg-clip-text"
//         >
//           Brew n Bliss
//         </motion.h1>
//         <p className="text-lg text-[#6d564a] max-w-xl mx-auto">
//           Your café experience, reimagined — with flavor, style, and comfort.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={() => onNavigate("reservation")}
//           className="mt-6 bg-gradient-to-r from-[#ff9770] to-[#ffcc70] text-white px-10 py-3 rounded-full text-base font-semibold shadow-lg hover:brightness-110 transition"
//         >
//           Reserve Your Table
//         </motion.button>
//       </section>

//       {/* Popular Drinks */}
//       <section className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#5c3a28]">☕ Popular Drinks</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {drinks.map((drink, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center hover:shadow-amber-200 hover:shadow-xl transition-all relative border border-amber-100"
//             >
//               <Image
//                 src={drink.image}
//                 alt={drink.name}
//                 width={120}
//                 height={120}
//                 className="rounded-full border-4 border-[#fff4ec] shadow-sm object-cover"
//               />
//               <h3 className="mt-6 text-xl font-bold text-[#6b4226]">{drink.name}</h3>
//               <div className="text-yellow-400 mt-1">
//                 {"⭐".repeat(drink.rating)}
//               </div>
//               {drink.featured && (
//                 <span className="absolute top-4 right-4 text-xs bg-pink-300 text-white px-3 py-1 rounded-full font-medium shadow-md">
//                   Best Seller
//                 </span>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Dashboard Features */}
//       <section className="max-w-7xl mx-auto space-y-12">
//         <h2 className="text-3xl font-bold text-center text-[#4b2e1e]">✨ Explore Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
//           {dashboardFeatures.map((feature) => (
//             <motion.div
//               key={feature.key}
//               whileHover={{ y: -6, scale: 1.02 }}
//               onClick={() => onNavigate(feature.key)}
//               className="rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-100 transition cursor-pointer bg-white border border-amber-100"
//             >
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-full h-56 object-cover hover:brightness-105 transition"
//               />
//               <div className="p-6 space-y-2">
//                 <h3 className="text-xl font-semibold text-[#442d25]">{feature.title}</h3>
//                 <p className="text-[#7e5d4c] text-sm">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface DashboardFeature {
  title: string;
  key: string;
  description: string;
  image: string;
}

const drinks = [
  {
    name: "Le MochaMilk",
    image: "/mocha.png",
    rating: 5,
    featured: false,
  },
  {
    name: "Strawberry Yoghurt",
    image: "/strawberry.png",
    rating: 5,
    featured: true,
  },
  {
    name: "Matcha Greenteato",
    image: "/matcha.png",
    rating: 5,
    featured: false,
  },
];

export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
  const dashboardFeatures: DashboardFeature[] = [
    {
      title: "View Our Menu",
      key: "menu-order",
      description: "Savor the finest brews and sweet delights curated just for you.",
      image: "https://source.unsplash.com/600x400/?latte,coffeeart",
    },
    {
      title: "Make a Reservation",
      key: "reservation",
      description: "Reserve your cozy corner for a blissful escape.",
      image: "https://source.unsplash.com/600x400/?cafe,table",
    },
    {
      title: "Payment History",
      key: "payment",
      description: "Track your past orders and keep everything delightful.",
      image: "https://source.unsplash.com/600x400/?receipt,cafe",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#fff7f1] via-[#fdebd0] to-[#f7d4c2] min-h-screen px-6 py-16 space-y-24 font-sans text-[#3b2e28]">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#d67d47] to-[#915a3b] text-transparent bg-clip-text"
        >
          Brew & Bliss Café
        </motion.h1>
        <p className="text-lg text-[#6d564a] max-w-xl mx-auto">
          Sip, savor, and stay awhile — where every cup is crafted with love, and every visit feels like home.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate("reservation")}
          className="mt-6 bg-gradient-to-r from-[#ff9770] to-[#ffcc70] text-white px-10 py-3 rounded-full text-base font-semibold shadow-lg hover:brightness-110 transition"
        >
          Book Your Cozy Spot
        </motion.button>
      </section>

      {/* Popular Drinks */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5c3a28]">☕ Popular Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {drinks.map((drink, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center hover:shadow-amber-200 hover:shadow-xl transition-all relative border border-amber-100"
            >
              <Image
                src={drink.image}
                alt={drink.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-[#fff4ec] shadow-sm object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-[#6b4226]">{drink.name}</h3>
              <div className="text-yellow-400 mt-1">
                {"⭐".repeat(drink.rating)}
              </div>
              {drink.featured && (
                <span className="absolute top-4 right-4 text-xs bg-pink-300 text-white px-3 py-1 rounded-full font-medium shadow-md">
                  Best Seller
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-[#4b2e1e]">✨ Explore Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {dashboardFeatures.map((feature) => (
            <motion.div
              key={feature.key}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onNavigate(feature.key)}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-100 transition cursor-pointer bg-white border border-amber-100"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover hover:brightness-105 transition"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-[#442d25]">{feature.title}</h3>
                <p className="text-[#7e5d4c] text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
