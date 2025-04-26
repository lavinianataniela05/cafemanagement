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
//     image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Mocha-Milkshake-Recipe.jpg",
//     rating: 5,
//     featured: false,
//   },
//   {
//     name: "Strawberry Yoghurt",
//     image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Strawberry-Yogurt-Smoothie-Recipe.jpg",
//     rating: 5,
//     featured: true,
//   },
//   {
//     name: "Matcha Greenteato",
//     image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Matcha-Green-Tea-Smoothie-Recipe.jpg",
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
//     <div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-10 px-4 sm:px-6 lg:px-8">

//     <div
//       className="min-h-screen px-6 py-16 space-y-24 font-sans text-[#3b2e28] bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/mainpage.jpg')",
//       }}
//     >
//       {/* Hero Section */}
//       <section className="text-center space-y-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B4513] to-[#5D2906] text-transparent bg-clip-text font-[var(--font-lexend-deca)]"

//           // className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B4513] to-[#5D2906] text-transparent bg-clip-text font-serif"
//         >
//           Brew & Bliss Café

//         </motion.h1>
//         <p className="text-lg text-[#3b2e28] max-w-xl mx-auto">
//           Sip, savor, and stay awhile — where every cup is crafted with love, and every visit feels like home.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={() => onNavigate("reservation")}
//           className="mt-6 bg-gradient-to-r from-[#6B4226] to-[#3B2314] text-white px-10 py-3 rounded-full text-base font-semibold shadow-lg hover:brightness-110 transition"
//         >
//           Book Your Cozy Spot
//         </motion.button>
//       </section>

//       {/* Popular Drinks */}
//       <section className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#4A2C1B]">☕ Popular Drinks</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {drinks.map((drink, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center hover:shadow-[#A67C52] hover:shadow-xl transition-all relative border border-[#C8A586]"
//             >
//               <Image
//                 src={drink.image}
//                 alt={drink.name}
//                 width={120}
//                 height={120}
//                 className="rounded-full border-4 border-[#E6D7C3] shadow-sm object-cover"
//               />
//               <h3 className="mt-6 text-xl font-bold text-[#6b4226]">{drink.name}</h3>
//               <div className="text-[#C87D2B] mt-1">
//                 {"⭐".repeat(drink.rating)}
//               </div>
//               {drink.featured && (
//                 <span className="absolute top-4 right-4 text-xs bg-[#8B4513] text-white px-3 py-1 rounded-full font-medium shadow-md">
//                   Best Seller
//                 </span>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Dashboard Features */}
//       <section className="max-w-7xl mx-auto space-y-12">
//         <h2 className="text-3xl font-bold text-center text-[#4b2e1e]">✨ Explore More</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
//           {dashboardFeatures.map((feature) => (
//             <motion.div
//               key={feature.key}
//               whileHover={{ y: -6, scale: 1.02 }}
//               onClick={() => onNavigate(feature.key)}
//               className="rounded-3xl overflow-hidden shadow-lg hover:shadow-[#A67C52] transition cursor-pointer bg-white border border-[#C8A586]"
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
    image: "./components/mainpage/le-mocha-milk.jpg",
    rating: 5,
    featured: false,
  },
  {
    name: "Strawberry Yoghurt",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FKopi&psig=AOvVaw31BnfHayaWQ9l7FsCkhZb5&ust=1745766115162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNihkdv79YwDFQAAAAAdAAAAABAE",
    rating: 5,
    featured: true,
  },
  {
    name: "Matcha Greenteato",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FKopi&psig=AOvVaw31BnfHayaWQ9l7FsCkhZb5&ust=1745766115162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNihkdv79YwDFQAAAAAdAAAAABAE",
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
    <div 
      className="min-h-screen bg-cover bg-center py-16 px-6 space-y-24 font-sans text-[#3b2e28]"
      style={{
        backgroundImage: "url('/mainpage.jpg')",
      }}
    >
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B4513] to-[#5D2906] text-transparent bg-clip-text font-[var(--font-lexend-deca)]"
        >
          Brew & Bliss Café
        </motion.h1>
        <p className="text-lg text-[#3b2e28] max-w-xl mx-auto">
          Sip, savor, and stay awhile — where every cup is crafted with love, and every visit feels like home.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate("reservation")}
          className="mt-6 bg-gradient-to-r from-[#6B4226] to-[#3B2314] text-white px-10 py-3 rounded-full text-base font-semibold shadow-lg hover:brightness-110 transition"
        >
          Book Your Cozy Spot
        </motion.button>
      </section>

      {/* Popular Drinks */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#4A2C1B]">☕ Popular Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {drinks.map((drink, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center hover:shadow-[#A67C52] hover:shadow-xl transition-all relative border border-[#C8A586]"
            >
              <img
                src={drink.image || "/placeholder-image.jpg"}
                alt={drink.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-[#E6D7C3] shadow-sm object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-[#6b4226]">{drink.name}</h3>
              <div className="text-[#C87D2B] mt-1">
                {"⭐".repeat(drink.rating)}
              </div>
              {drink.featured && (
                <span className="absolute top-4 right-4 text-xs bg-[#8B4513] text-white px-3 py-1 rounded-full font-medium shadow-md">
                  Best Seller
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-[#4b2e1e]">✨ Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {dashboardFeatures.map((feature) => (
            <motion.div
              key={feature.key}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onNavigate(feature.key)}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-[#A67C52] transition cursor-pointer bg-white border border-[#C8A586]"
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

export default DashboardPage;