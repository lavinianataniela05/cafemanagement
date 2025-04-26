import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-amber-900">About Brew & Bliss</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Brew & Bliss is a cozy café where passion meets flavor. We serve artisanal coffees, handcrafted beverages, and delightful pastries
          to bring warmth and joy to your day. ✨
        </p>
        <img
          src="https://source.unsplash.com/random/400x400/?coffee,shop"
          alt="Cafe"
          className="rounded-xl mx-auto shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutPage;
