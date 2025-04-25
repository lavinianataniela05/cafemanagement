// components/Dashboard.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardProps {
  onNavigate: (key: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const featuredDrinks = [
    {
      name: "Strawberry Yoghurt",
      description: "Creamy yogurt blended with fresh strawberries",
      image: "https://source.unsplash.com/300x200/?strawberry,yogurt",
    },
    {
      name: "Le MochaMilk",
      description: "Rich chocolate and espresso with steamed milk",
      image: "https://source.unsplash.com/300x200/?mocha,coffee",
    },
    {
      name: "Matcha Greentiao",
      description: "Premium matcha green tea with a smooth finish",
      image: "https://source.unsplash.com/300x200/?matcha,tea",
    },
  ];

  const dashboardFeatures = [
    {
      title: "View Our Menu",
      key: "menu-order",
      description: "Browse our handcrafted coffee and treats.",
      image: "https://source.unsplash.com/400x300/?coffee,menu",
    },
    {
      title: "Make a Reservation",
      key: "reservation",
      description: "Easily book a table for you and your guests.",
      image: "https://source.unsplash.com/400x300/?restaurant,table",
    },
    {
      title: "Payment History",
      key: "payment",
      description: "View your previous transactions.",
      image: "https://source.unsplash.com/400x300/?payment,creditcard",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Brew n Bliss Coffeeshop</h1>
        <p className="text-lg mb-6">wanna make a reservation?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("reservation")}
          className="bg-white text-amber-600 px-6 py-3 rounded-lg font-medium shadow-md"
        >
          Reserve now
        </motion.button>
      </div>

      {/* Featured Drinks */}
      <div>
        <h2 className="text-2xl font-bold dark:text-white mb-4">Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredDrinks.map((drink, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
              <img 
                src={drink.image} 
                alt={drink.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg dark:text-white">{drink.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{drink.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {dashboardFeatures.map((feature) => (
            <motion.div
              key={feature.key}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate(feature.key)}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-4 cursor-pointer"
            >
              <h3 className="font-semibold text-lg dark:text-white">{feature.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};