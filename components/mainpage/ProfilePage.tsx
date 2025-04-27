// export default ProfilePage;
import React, { useState } from "react";
import { motion } from "framer-motion";


const CustomerProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Lavinia Nataniela",
    email: "lavinianataniela@gmail.com",
    phone: "081234567890",
  });
  const [isEditing, setIsEditing] = useState(false);

  interface Profile {
    name: string;
    email: string;
    phone: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfile((prev: Profile) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    console.log("Profile updated:", profile);
  };

  return (
    
<div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-10 px-4 sm:px-6 lg:px-8">
      {/* Coffee Shop Header with animated coffee steam */}
      <motion.div 
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24">
          <motion.div 
            className="absolute top-0 left-0 w-2 h-8 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [8, 16, 8],
              opacity: [0.6, 0.3, 0.6],
              y: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 left-6 w-2 h-10 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [10, 18, 10],
              opacity: [0.6, 0.2, 0.6],
              y: [0, -8, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-2 h-6 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [6, 12, 6],
              opacity: [0.6, 0.4, 0.6],
              y: [0, -4, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.8,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-[#5C3A28] mb-2 font-[var(--font-lexend-deca)] tracking-wide">
          Brew & Bliss Café
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#D4A76A] via-[#6A3911] to-[#D4A76A] mx-auto mb-6 rounded-full" />
      
        <p className="mt-2 text-[#A78A6D] max-w-lg mx-auto">
          Experience the perfect blend of aroma and ambiance at our cozy café
        </p>
      </motion.div>
        

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
              <div className="bg-amber-700 h-20 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-amber-100 flex items-center justify-center text-amber-800 text-4xl font-bold shadow-lg">
                    {profile.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6 text-center">
                <h2 className="text-2xl font-bold text-amber-900">{profile.name}</h2>
                
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-4 px-5 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
              
              
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6 pb-2 border-b border-amber-100">
                Customer Information
              </h3>
              
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-amber-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        readOnly
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-amber-100 cursor-not-allowed"
                      />
                    </div>

                    
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-5 py-2 border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-100 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition duration-200 shadow hover:shadow-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-amber-600">Full Name</p>
                      <p className="text-lg font-medium text-amber-900">{profile.name}</p>
                    </div>

                    <div>
                      <p className="text-sm text-amber-600">Phone Number</p>
                      <p className="text-lg font-medium text-amber-900">{profile.phone}</p>
                    </div>

                    <div>
                      <p className="text-sm text-amber-600">Email</p>
                      <p className="text-lg font-medium text-amber-900">{profile.email}</p>
                    </div>

              
                  </div>

                  
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerProfilePage;