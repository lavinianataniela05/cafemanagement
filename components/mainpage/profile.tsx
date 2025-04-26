import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-amber-900">Coffee Master</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Welcome to your profile page. Manage your account details, settings, and more!
        </p>
        <img
          src="https://source.unsplash.com/random/400x400/?barista,coffee"
          alt="Barista"
          className="rounded-xl mx-auto shadow-md"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
