// // // // // // components/ReservationPage.tsx
// // // // // "use client";
// // // // // // "use client";
// // // // // // import React, { useState } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // import React, { useState } from "react";
// // // // // import { motion } from "framer-motion";

// // // // // export const ReservationPage = () => {
// // // // //   const [date, setDate] = useState("");
// // // // //   const [time, setTime] = useState("02 : 30");
// // // // //   const [timePeriod, setTimePeriod] = useState("PM");
// // // // //   const [guests, setGuests] = useState(5);
// // // // //   const [name, setName] = useState("durianmntuh");
// // // // //   const [email, setEmail] = useState("@gmail.com");
// // // // //   const [phone, setPhone] = useState("0872xxx");
// // // // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsSubmitted(true);
// // // // //   };

// // // // //   // Sample calendar data
// // // // //   const currentMonth = "May 2025";
// // // // //   const days = [
// // // // //     { day: "Mon", date: "1" },
// // // // //     { day: "Tue", date: "2" },
// // // // //     { day: "Wed", date: "3" },
// // // // //     { day: "Thu", date: "3" }, // Note: This appears to be a duplicate in the screenshot
// // // // //     { day: "Fri", date: "4" },
// // // // //     { day: "Sat", date: "5" },
// // // // //     { day: "Sun", date: "" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="max-w-md mx-auto p-4">
// // // // //       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
// // // // //       {isSubmitted ? (
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// // // // //         >
// // // // //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// // // // //           <p>We've sent the details to your email.</p>
// // // // //         </motion.div>
// // // // //       ) : (
// // // // //         <form onSubmit={handleSubmit} className="space-y-6">
// // // // //           {/* Calendar Section */}
// // // // //           <div>
// // // // //             <div className="flex justify-between items-center mb-2">
// // // // //               <h2 className="text-lg font-semibold dark:text-white">{currentMonth}</h2>
// // // // //               <div className="text-gray-500">♦ ♦</div>
// // // // //             </div>
            
// // // // //             <div className="grid grid-cols-7 gap-2 mb-4">
// // // // //               {days.map((day, index) => (
// // // // //                 <div 
// // // // //                   key={index}
// // // // //                   className={`text-center p-2 rounded-full ${day.date === "3" ? "bg-amber-500 text-white" : ""}`}
// // // // //                 >
// // // // //                   <div className="text-xs">{day.day}</div>
// // // // //                   <div className="font-medium">{day.date}</div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
            
// // // // //             <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //               <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
// // // // //               <div className="space-y-2">
// // // // //                 <div className="flex items-center">
// // // // //                   <input type="checkbox" className="mr-2" />
// // // // //                   <span className="text-sm">Otomatis terisi saat user klik tanggal di kalendar</span>
// // // // //                 </div>
// // // // //                 <div className="flex items-center">
// // // // //                   <input type="checkbox" className="mr-2" />
// // // // //                   <span className="text-sm">(Additional option)</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Time Section */}
// // // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
// // // // //             <div className="flex items-center space-x-2">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 value={time}
// // // // //                 onChange={(e) => setTime(e.target.value)}
// // // // //                 className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //               />
// // // // //               <select
// // // // //                 value={timePeriod}
// // // // //                 onChange={(e) => setTimePeriod(e.target.value)}
// // // // //                 className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //               >
// // // // //                 <option>AM</option>
// // // // //                 <option>PM</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Guests Section */}
// // // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
// // // // //             <div className="flex items-center">
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={guests}
// // // // //                 onChange={(e) => setGuests(parseInt(e.target.value))}
// // // // //                 className="w-20 p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //                 min="1"
// // // // //               />
// // // // //               <span className="ml-2 text-sm">orang termasuk pemesan</span>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Name & Email Section */}
// // // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
// // // // //             <div className="space-y-2">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 value={name}
// // // // //                 onChange={(e) => setName(e.target.value)}
// // // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //                 required
// // // // //               />
// // // // //               <div className="flex">
// // // // //                 <span className="text-gray-500 mr-1">-</span>
// // // // //                 <span className="text-sm text-gray-500">Email</span>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 value={email}
// // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //           </div>
          
// // // // //           {/* Phone Section */}
// // // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
// // // // //             <input
// // // // //               type="tel"
// // // // //               value={phone}
// // // // //               onChange={(e) => setPhone(e.target.value)}
// // // // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // //               required
// // // // //             />
// // // // //           </div>
          
// // // // //           {/* Notes Section */}
// // // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
// // // // //             <div className="flex">
// // // // //               <span className="text-gray-500 mr-1">-</span>
// // // // //               <span className="text-sm">RESERVE NOW</span>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.02 }}
// // // // //             whileTap={{ scale: 0.98 }}
// // // // //             type="submit"
// // // // //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition mt-6"
// // // // //           >
// // // // //             Confirm Reservation
// // // // //           </motion.button>
// // // // //         </form>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // // // components/ReservationPage.tsx
// // // // // // "use client";
// // // // // // import React, { useState } from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // export const ReservationPage = () => {
// // // // // //   const [date, setDate] = useState("");
// // // // // //   const [time, setTime] = useState("");
// // // // // //   const [guests, setGuests] = useState(1);
// // // // // //   const [name, setName] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [phone, setPhone] = useState("");
// // // // // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsSubmitted(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-md mx-auto">
// // // // // //       <h2 className="text-2xl font-bold dark:text-white mb-6">Make a Reservation</h2>
      
// // // // // //       {isSubmitted ? (
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// // // // // //         >
// // // // // //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// // // // // //           <p>We've sent the details to your email.</p>
// // // // // //         </motion.div>
// // // // // //       ) : (
// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// // // // // //               Full Name
// // // // // //             </label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={name}
// // // // // //               onChange={(e) => setName(e.target.value)}
// // // // // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>
          
// // // // // //           {/* Other form fields... */}
          
// // // // // //           <motion.button
// // // // // //             whileHover={{ scale: 1.02 }}
// // // // // //             whileTap={{ scale: 0.98 }}
// // // // // //             type="submit"
// // // // // //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition"
// // // // // //           >
// // // // // //             Confirm Reservation
// // // // // //           </motion.button>
// // // // // //         </form>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };
// // // // // components/ReservationPage.tsx
// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export const ReservationPage = () => {
// // // //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// // // //   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4)); // May 2025 (months are 0-indexed)
// // // //   const [time, setTime] = useState("02 : 30");
// // // //   const [timePeriod, setTimePeriod] = useState("PM");
// // // //   const [guests, setGuests] = useState(5);
// // // //   const [name, setName] = useState("durianmntuh");
// // // //   const [email, setEmail] = useState("@gmail.com");
// // // //   const [phone, setPhone] = useState("0872xxx");
// // // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitted(true);
// // // //   };

// // // //   // Generate days for the current month view
// // // //   const getDaysInMonth = (year: number, month: number) => {
// // // //     const date = new Date(year, month, 1);
// // // //     const days = [];
    
// // // //     // Get days from previous month to fill the first week
// // // //     const firstDayOfWeek = date.getDay() || 7; // Sunday is 0, make it 7
// // // //     const prevMonthDays = firstDayOfWeek - 1;
// // // //     if (prevMonthDays > 0) {
// // // //       const prevMonth = new Date(year, month - 1, 1);
// // // //       const daysInPrevMonth = new Date(year, month, 0).getDate();
// // // //       for (let i = daysInPrevMonth - prevMonthDays + 1; i <= daysInPrevMonth; i++) {
// // // //         days.push({ day: i, month: 'prev', date: new Date(year, month - 1, i) });
// // // //       }
// // // //     }
    
// // // //     // Get days from current month
// // // //     const daysInMonth = new Date(year, month + 1, 0).getDate();
// // // //     for (let i = 1; i <= daysInMonth; i++) {
// // // //       days.push({ day: i, month: 'current', date: new Date(year, month, i) });
// // // //     }
    
// // // //     // Get days from next month to fill the last week
// // // //     const totalDays = days.length;
// // // //     const remainingDays = 42 - totalDays; // 6 weeks display
// // // //     for (let i = 1; i <= remainingDays; i++) {
// // // //       days.push({ day: i, month: 'next', date: new Date(year, month + 1, i) });
// // // //     }
    
// // // //     return days;
// // // //   };

// // // //   const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());

// // // //   const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// // // //   const handleDateClick = (day: { day: number; month: string; date: Date }) => {
// // // //     if (day.month === 'current') {
// // // //       setSelectedDate(day.date);
// // // //     }
// // // //   };

// // // //   const changeMonth = (increment: number) => {
// // // //     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment));
// // // //   };

// // // //   const formatMonthYear = (date: Date) => {
// // // //     const options = { month: 'long', year: 'numeric' };
// // // //     return date.toLocaleDateString('en-US', options);
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
// // // //       {isSubmitted ? (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// // // //         >
// // // //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// // // //           <p>We've sent the details to your email.</p>
// // // //         </motion.div>
// // // //       ) : (
// // // //         <form onSubmit={handleSubmit} className="space-y-6">
// // // //           {/* Calendar Section */}
// // // //           <div>
// // // //             <div className="flex justify-between items-center mb-2">
// // // //               <h2 className="text-lg font-semibold dark:text-white">
// // // //                 {formatMonthYear(currentMonth)}
// // // //               </h2>
// // // //               <div className="flex space-x-2">
// // // //                 <button 
// // // //                   type="button" 
// // // //                   onClick={() => changeMonth(-1)}
// // // //                   className="text-gray-500 hover:text-gray-700"
// // // //                 >
// // // //                   &lt;
// // // //                 </button>
// // // //                 <span className="text-gray-500">♦</span>
// // // //                 <button 
// // // //                   type="button" 
// // // //                   onClick={() => changeMonth(1)}
// // // //                   className="text-gray-500 hover:text-gray-700"
// // // //                 >
// // // //                   &gt;
// // // //                 </button>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="grid grid-cols-7 gap-1 mb-2">
// // // //               {weekdays.map((day) => (
// // // //                 <div key={day} className="text-center text-sm font-medium py-1">
// // // //                   {day}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
            
// // // //             <div className="grid grid-cols-7 gap-1">
// // // //               {days.map((day, index) => (
// // // //                 <button
// // // //                   key={index}
// // // //                   type="button"
// // // //                   onClick={() => handleDateClick(day)}
// // // //                   className={`p-2 rounded-full text-center
// // // //                     ${day.month !== 'current' ? 'text-gray-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
// // // //                     ${selectedDate && day.month === 'current' && selectedDate.getDate() === day.day && selectedDate.getMonth() === currentMonth.getMonth() ? 
// // // //                       'bg-amber-500 text-white' : ''}
// // // //                     ${day.month === 'current' ? 'cursor-pointer' : 'cursor-default'}
// // // //                   `}
// // // //                   disabled={day.month !== 'current'}
// // // //                 >
// // // //                   {day.day}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
            
// // // //             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
// // // //               <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
// // // //               <div className="space-y-2">
// // // //                 <div className="flex items-center">
// // // //                   <input type="checkbox" className="mr-2" />
// // // //                   <span className="text-sm">Otomatis terisi saat user klik tanggal di kalendar</span>
// // // //                 </div>
// // // //                 <div className="flex items-center">
// // // //                   <input type="checkbox" className="mr-2" />
// // // //                   <span className="text-sm">(Additional option)</span>
// // // //                 </div>
// // // //               </div>
// // // //               {selectedDate && (
// // // //                 <p className="mt-2 text-sm">
// // // //                   Selected: {selectedDate.toLocaleDateString('en-US', { 
// // // //                     weekday: 'short', 
// // // //                     month: 'short', 
// // // //                     day: 'numeric' 
// // // //                   })}
// // // //                 </p>
// // // //               )}
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Rest of the form remains the same */}
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
// // // //             <div className="flex items-center space-x-2">
// // // //               <input
// // // //                 type="text"
// // // //                 value={time}
// // // //                 onChange={(e) => setTime(e.target.value)}
// // // //                 className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               />
// // // //               <select
// // // //                 value={timePeriod}
// // // //                 onChange={(e) => setTimePeriod(e.target.value)}
// // // //                 className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               >
// // // //                 <option>AM</option>
// // // //                 <option>PM</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
// // // //             <div className="flex items-center">
// // // //               <input
// // // //                 type="number"
// // // //                 value={guests}
// // // //                 onChange={(e) => setGuests(parseInt(e.target.value))}
// // // //                 className="w-20 p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 min="1"
// // // //               />
// // // //               <span className="ml-2 text-sm">orang termasuk pemesan</span>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
// // // //             <div className="space-y-2">
// // // //               <input
// // // //                 type="text"
// // // //                 value={name}
// // // //                 onChange={(e) => setName(e.target.value)}
// // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 required
// // // //               />
// // // //               <div className="flex">
// // // //                 <span className="text-gray-500 mr-1">-</span>
// // // //                 <span className="text-sm text-gray-500">Email</span>
// // // //               </div>
// // // //               <input
// // // //                 type="email"
// // // //                 value={email}
// // // //                 onChange={(e) => setEmail(e.target.value)}
// // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
// // // //             <input
// // // //               type="tel"
// // // //               value={phone}
// // // //               onChange={(e) => setPhone(e.target.value)}
// // // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               required
// // // //             />
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
// // // //             <div className="flex">
// // // //               <span className="text-gray-500 mr-1">-</span>
// // // //               <span className="text-sm">RESERVE NOW</span>
// // // //             </div>
// // // //           </div>
          
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.02 }}
// // // //             whileTap={{ scale: 0.98 }}
// // // //             type="submit"
// // // //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition mt-6"
// // // //           >
// // // //             Confirm Reservation
// // // //           </motion.button>
// // // //         </form>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };
// // // // components/ReservationPage.tsx
// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export const ReservationPage = () => {
// // // //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// // // //   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3)); // April 2025 (matches your image)
// // // //   const [time, setTime] = useState("02 : 30");
// // // //   const [timePeriod, setTimePeriod] = useState("PM");
// // // //   const [guests, setGuests] = useState(5);
// // // //   const [name, setName] = useState("durianmntuh");
// // // //   const [email, setEmail] = useState("@gmail.com");
// // // //   const [phone, setPhone] = useState("0872xxx");
// // // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitted(true);
// // // //   };

// // // //   // Generate days for the current month view matching your image exactly
// // // //   const generateCalendarDays = () => {
// // // //     const year = 2025;
// // // //     const month = 3; // April (0-indexed)
// // // //     const days = [];
    
// // // //     // Week 1 (from your image)
// // // //     days.push(
// // // //       { day: 30, month: 'prev', date: new Date(2025, 2, 30) },
// // // //       { day: 31, month: 'prev', date: new Date(2025, 2, 31) },
// // // //       { day: 1, month: 'current', date: new Date(year, month, 1) },
// // // //       { day: 2, month: 'current', date: new Date(year, month, 2) },
// // // //       { day: 3, month: 'current', date: new Date(year, month, 3) },
// // // //       { day: 4, month: 'current', date: new Date(year, month, 4) },
// // // //       { day: 5, month: 'current', date: new Date(year, month, 5) }
// // // //     );
    
// // // //     // Week 2
// // // //     for (let i = 6; i <= 12; i++) {
// // // //       days.push({ day: i, month: 'current', date: new Date(year, month, i) });
// // // //     }
    
// // // //     // Week 3
// // // //     for (let i = 13; i <= 19; i++) {
// // // //       days.push({ day: i, month: 'current', date: new Date(year, month, i) });
// // // //     }
    
// // // //     // Week 4
// // // //     for (let i = 20; i <= 26; i++) {
// // // //       days.push({ day: i, month: 'current', date: new Date(year, month, i) });
// // // //     }
    
// // // //     // Week 5
// // // //     days.push(
// // // //       { day: 27, month: 'current', date: new Date(year, month, 27) },
// // // //       { day: 28, month: 'current', date: new Date(year, month, 28) },
// // // //       { day: 29, month: 'current', date: new Date(year, month, 29) },
// // // //       { day: 30, month: 'current', date: new Date(year, month, 30) },
// // // //       { day: 1, month: 'next', date: new Date(2025, 4, 1) },
// // // //       { day: 2, month: 'next', date: new Date(2025, 4, 2) },
// // // //       { day: 3, month: 'next', date: new Date(2025, 4, 3) }
// // // //     );
    
// // // //     return days;
// // // //   };

// // // //   const days = generateCalendarDays();
// // // //   const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// // // //   const handleDateClick = (day: { day: number; month: string; date: Date }) => {
// // // //     if (day.month === 'current') {
// // // //       setSelectedDate(day.date);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
// // // //       {isSubmitted ? (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// // // //         >
// // // //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// // // //           <p>We've sent the details to your email.</p>
// // // //         </motion.div>
// // // //       ) : (
// // // //         <form onSubmit={handleSubmit} className="space-y-6">
// // // //           {/* Calendar Section - Matches your image exactly */}
// // // //           <div>
// // // //             <div className="flex justify-between items-center mb-2">
// // // //               <h2 className="text-lg font-semibold dark:text-white">
// // // //                 April 2025
// // // //               </h2>
// // // //               <div className="flex space-x-2">
// // // //                 <span className="text-gray-500">♦</span>
// // // //                 <span className="text-gray-500">♦</span>
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Weekday headers */}
// // // //             <div className="grid grid-cols-7 gap-1 mb-1">
// // // //               {weekdays.map((day) => (
// // // //                 <div key={day} className="text-center text-sm font-medium py-1">
// // // //                   {day}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
            
// // // //             {/* Calendar days with dots below */}
// // // //             {[0, 1, 2, 3, 4].map((week) => (
// // // //               <React.Fragment key={week}>
// // // //                 <div className="grid grid-cols-7 gap-1">
// // // //                   {days.slice(week * 7, (week + 1) * 7).map((day, index) => (
// // // //                     <button
// // // //                       key={index}
// // // //                       type="button"
// // // //                       onClick={() => handleDateClick(day)}
// // // //                       className={`p-1 text-center
// // // //                         ${day.month !== 'current' ? 'text-gray-400' : ''}
// // // //                         ${selectedDate && day.month === 'current' && selectedDate.getDate() === day.day ? 
// // // //                           'bg-amber-500 text-white rounded-full' : ''}
// // // //                         ${day.month === 'current' ? 'cursor-pointer' : 'cursor-default'}
// // // //                       `}
// // // //                       disabled={day.month !== 'current'}
// // // //                     >
// // // //                       {day.day}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //                 {/* Dots row - matches your image */}
// // // //                 <div className="grid grid-cols-7 gap-1 mb-1">
// // // //                   {days.slice(week * 7, (week + 1) * 7).map((_, index) => (
// // // //                     <div key={index} className="text-center text-xs">
// // // //                       ●
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </React.Fragment>
// // // //             ))}
            
// // // //             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
// // // //               <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
// // // //               <div className="space-y-2">
// // // //                 <div className="flex items-center">
// // // //                   <input type="checkbox" className="mr-2" />
// // // //                   <span className="text-sm">Otomatis terisi saat user klik tanggal di kalendar</span>
// // // //                 </div>
// // // //                 <div className="flex items-center">
// // // //                   <input type="checkbox" className="mr-2" />
// // // //                   <span className="text-sm">(Additional option)</span>
// // // //                 </div>
// // // //               </div>
// // // //               {selectedDate && (
// // // //                 <p className="mt-2 text-sm">
// // // //                   Selected: {selectedDate.toLocaleDateString('en-US', { 
// // // //                     weekday: 'short', 
// // // //                     month: 'short', 
// // // //                     day: 'numeric' 
// // // //                   })}
// // // //                 </p>
// // // //               )}
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Rest of the form remains the same as previous implementation */}
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
// // // //             <div className="flex items-center space-x-2">
// // // //               <input
// // // //                 type="text"
// // // //                 value={time}
// // // //                 onChange={(e) => setTime(e.target.value)}
// // // //                 className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               />
// // // //               <select
// // // //                 value={timePeriod}
// // // //                 onChange={(e) => setTimePeriod(e.target.value)}
// // // //                 className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               >
// // // //                 <option>AM</option>
// // // //                 <option>PM</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
// // // //             <div className="flex items-center">
// // // //               <input
// // // //                 type="number"
// // // //                 value={guests}
// // // //                 onChange={(e) => setGuests(parseInt(e.target.value))}
// // // //                 className="w-20 p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 min="1"
// // // //               />
// // // //               <span className="ml-2 text-sm">orang termasuk pemesan</span>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
// // // //             <div className="space-y-2">
// // // //               <input
// // // //                 type="text"
// // // //                 value={name}
// // // //                 onChange={(e) => setName(e.target.value)}
// // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 required
// // // //               />
// // // //               <div className="flex">
// // // //                 <span className="text-gray-500 mr-1">-</span>
// // // //                 <span className="text-sm text-gray-500">Email</span>
// // // //               </div>
// // // //               <input
// // // //                 type="email"
// // // //                 value={email}
// // // //                 onChange={(e) => setEmail(e.target.value)}
// // // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
// // // //             <input
// // // //               type="tel"
// // // //               value={phone}
// // // //               onChange={(e) => setPhone(e.target.value)}
// // // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // // //               required
// // // //             />
// // // //           </div>
          
// // // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
// // // //             <div className="flex">
// // // //               <span className="text-gray-500 mr-1">-</span>
// // // //               <span className="text-sm">RESERVE NOW</span>
// // // //             </div>
// // // //           </div>
          
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.02 }}
// // // //             whileTap={{ scale: 0.98 }}
// // // //             type="submit"
// // // //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition mt-6"
// // // //           >
// // // //             Confirm Reservation
// // // //           </motion.button>
// // // //         </form>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";
// // // import { ChevronDown, ChevronUp } from "lucide-react";

// // // export const ReservationPage = () => {
// // //   const today = new Date();
// // //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// // //   const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth()));
// // //   const [showMonthDropdown, setShowMonthDropdown] = useState(false);
// // //   const [showYearDropdown, setShowYearDropdown] = useState(false);
// // //   const [time, setTime] = useState("02 : 30");
// // //   const [timePeriod, setTimePeriod] = useState("PM");
// // //   const [guests, setGuests] = useState(5);
// // //   const [name, setName] = useState("durianmntuh");
// // //   const [email, setEmail] = useState("@gmail.com");
// // //   const [phone, setPhone] = useState("0872xxx");
// // //   const [isSubmitted, setIsSubmitted] = useState(false);
// // //   const [availableTimes, setAvailableTimes] = useState<string[]>([]);

// // //   // Months for dropdown
// // //   const months = [
// // //     "January", "February", "March", "April", 
// // //     "May", "June", "July", "August", 
// // //     "September", "October", "November", "December"
// // //   ];

// // //   // Generate years for dropdown (current year ± 5 years)
// // //   const currentYear = today.getFullYear();
// // //   const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

// // //   useEffect(() => {
// // //     // Generate available times when date is selected
// // //     if (selectedDate) {
// // //       // This would normally come from an API based on the selected date
// // //       // For now, we'll generate some sample times
// // //       const times = [
// // //         "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
// // //         "11:00 AM", "12:00 PM", "12:30 PM", "01:00 PM", 
// // //         "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"
// // //       ];
// // //       setAvailableTimes(times);
// // //     } else {
// // //       setAvailableTimes([]);
// // //     }
// // //   }, [selectedDate]);

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
    
// // //     // Here you would typically send the reservation data to your API
// // //     const reservationData = {
// // //       date: selectedDate,
// // //       time: `${time} ${timePeriod}`,
// // //       guests,
// // //       name,
// // //       email,
// // //       phone
// // //     };
    
// // //     console.log("Submitting reservation:", reservationData);
// // //     setIsSubmitted(true);
// // //   };

// // //   const changeMonth = (offset: number) => {
// // //     const newMonth = new Date(currentMonth);
// // //     newMonth.setMonth(newMonth.getMonth() + offset);
// // //     setCurrentMonth(newMonth);
// // //   };

// // //   const selectMonth = (monthIndex: number) => {
// // //     const newDate = new Date(currentMonth);
// // //     newDate.setMonth(monthIndex);
// // //     setCurrentMonth(newDate);
// // //     setShowMonthDropdown(false);
// // //   };

// // //   const selectYear = (year: number) => {
// // //     const newDate = new Date(currentMonth);
// // //     newDate.setFullYear(year);
// // //     setCurrentMonth(newDate);
// // //     setShowYearDropdown(false);
// // //   };

// // //   // Generate days for the current month view
// // //   const generateCalendarDays = () => {
// // //     const year = currentMonth.getFullYear();
// // //     const month = currentMonth.getMonth();
    
// // //     const firstDayOfMonth = new Date(year, month, 1);
// // //     const lastDayOfMonth = new Date(year, month + 1, 0);
    
// // //     const daysInMonth = lastDayOfMonth.getDate();
// // //     const startingDayOfWeek = firstDayOfMonth.getDay();
    
// // //     // If Sunday is 0, we want Monday to be 0
// // //     const adjustedStartingDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    
// // //     const days = [];
    
// // //     // Add days from previous month
// // //     const prevMonth = new Date(year, month, 0);
// // //     const prevMonthDays = prevMonth.getDate();
    
// // //     for (let i = prevMonthDays - adjustedStartingDay + 1; i <= prevMonthDays; i++) {
// // //       days.push({ 
// // //         day: i, 
// // //         month: 'prev', 
// // //         date: new Date(year, month - 1, i),
// // //         available: false // Previous month days not available
// // //       });
// // //     }
    
// // //     // Add days from current month
// // //     for (let i = 1; i <= daysInMonth; i++) {
// // //       const date = new Date(year, month, i);
// // //       // We could check against an API or database here to see if this date is available
// // //       // For demo purposes, let's make weekends unavailable
// // //       const isWeekend = date.getDay() === 0 || date.getDay() === 6;
// // //       const isPast = date < new Date(today.setHours(0, 0, 0, 0));
      
// // //       days.push({ 
// // //         day: i, 
// // //         month: 'current', 
// // //         date,
// // //         available: !isWeekend && !isPast
// // //       });
// // //     }
    
// // //     // Add days from next month to complete the grid
// // //     const totalDaysNeeded = Math.ceil((adjustedStartingDay + daysInMonth) / 7) * 7;
// // //     const daysFromNextMonth = totalDaysNeeded - adjustedStartingDay - daysInMonth;
    
// // //     for (let i = 1; i <= daysFromNextMonth; i++) {
// // //       days.push({ 
// // //         day: i, 
// // //         month: 'next', 
// // //         date: new Date(year, month + 1, i),
// // //         available: false // Next month days not available yet
// // //       });
// // //     }
    
// // //     return days;
// // //   };

// // //   const days = generateCalendarDays();
// // //   const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// // //   const handleDateClick = (day: { day: number; month: string; date: Date; available: boolean }) => {
// // //     if (day.month === 'current' && day.available) {
// // //       setSelectedDate(day.date);
// // //       // Reset time when new date is selected
// // //       setTime("02 : 30");
// // //       setTimePeriod("PM");
// // //     }
// // //   };

// // //   const formatDate = (date: Date | null): string => {
// // //     if (!date) return "";
// // //     return date.toLocaleDateString('en-US', { 
// // //       weekday: 'short', 
// // //       month: 'short', 
// // //       day: 'numeric',
// // //       year: 'numeric'
// // //     });
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto p-4">
// // //       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
// // //       {isSubmitted ? (
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// // //         >
// // //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// // //           <p>Thank you for your reservation for {formatDate(selectedDate)} at {time} {timePeriod}.</p>
// // //           <p className="mt-2">We've sent the details to {email}.</p>
// // //           <button 
// // //             onClick={() => setIsSubmitted(false)} 
// // //             className="mt-4 text-sm underline"
// // //           >
// // //             Make another reservation
// // //           </button>
// // //         </motion.div>
// // //       ) : (
// // //         <form onSubmit={handleSubmit} className="space-y-6">
// // //           {/* Calendar Section - Styled like the image */}
// // //           <div className="border border-amber-800/20 rounded-lg p-4 shadow-md bg-white dark:bg-neutral-900">
// // //             <div className="flex justify-between items-center mb-4">
// // //               {/* Month Dropdown */}
// // //               <div className="relative">
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => {
// // //                     setShowMonthDropdown(!showMonthDropdown);
// // //                     setShowYearDropdown(false);
// // //                   }}
// // //                   className="flex items-center text-xl font-bold dark:text-white border border-amber-800/20 px-4 py-2 rounded-md"
// // //                 >
// // //                   {months[currentMonth.getMonth()]} 
// // //                   {showMonthDropdown ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
// // //                 </button>
// // //                 {showMonthDropdown && (
// // //                   <div className="absolute z-10 mt-1 w-40 bg-white dark:bg-neutral-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
// // //                     {months.map((month, idx) => (
// // //                       <button
// // //                         key={month}
// // //                         type="button"
// // //                         onClick={() => selectMonth(idx)}
// // //                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-sm"
// // //                       >
// // //                         {month}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
              
// // //               {/* Year Dropdown */}
// // //               <div className="relative">
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => {
// // //                     setShowYearDropdown(!showYearDropdown);
// // //                     setShowMonthDropdown(false);
// // //                   }}
// // //                   className="flex items-center text-xl font-bold dark:text-white border border-amber-800/20 px-4 py-2 rounded-md"
// // //                 >
// // //                   {currentMonth.getFullYear()}
// // //                   {showYearDropdown ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
// // //                 </button>
// // //                 {showYearDropdown && (
// // //                   <div className="absolute right-0 z-10 mt-1 w-24 bg-white dark:bg-neutral-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
// // //                     {years.map((year) => (
// // //                       <button
// // //                         key={year}
// // //                         type="button"
// // //                         onClick={() => selectYear(year)}
// // //                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-sm"
// // //                       >
// // //                         {year}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
            
// // //             <div className="border-t border-amber-800/20 pt-4">
// // //               {/* Weekday headers */}
// // //               <div className="grid grid-cols-7 gap-1 mb-2">
// // //                 {weekdays.map((day) => (
// // //                   <div key={day} className="text-center font-medium py-1 text-amber-800 dark:text-amber-500">
// // //                     {day}
// // //                   </div>
// // //                 ))}
// // //               </div>
              
// // //               {/* Calendar days */}
// // //               <div className="grid grid-cols-7 gap-1">
// // //                 {days.map((day, index) => (
// // //                   <div 
// // //                     key={index} 
// // //                     className={`relative aspect-square flex items-center justify-center`}
// // //                   >
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => handleDateClick(day)}
// // //                       disabled={day.month !== 'current' || !day.available}
// // //                       className={`
// // //                         w-12 h-12 flex items-center justify-center rounded-full
// // //                         ${day.month !== 'current' ? 'text-gray-400 dark:text-gray-600' : ''}
// // //                         ${day.month === 'current' && !day.available ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed' : ''}
// // //                         ${selectedDate && day.month === 'current' && day.date.toDateString() === selectedDate.toDateString() ? 
// // //                           'bg-amber-500 text-white shadow-lg' : ''}
// // //                         ${day.month === 'current' && day.available && (!selectedDate || day.date.toDateString() !== selectedDate.toDateString()) ? 
// // //                           'hover:bg-amber-100 dark:hover:bg-amber-900/30' : ''}
// // //                         ${day.month === 'current' && day.available ? 'cursor-pointer' : 'cursor-default'}
// // //                         transition-all duration-200
// // //                       `}
// // //                     >
// // //                       {day.day}
// // //                     </button>
// // //                     {day.month === 'current' && day.available && (
// // //                       <div className={`absolute -bottom-1 w-1 h-1 rounded-full
// // //                         ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 
// // //                           'bg-white' : 'bg-amber-500'}
// // //                       `}></div>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
            
// // //             <div className="border-t border-amber-800/20 pt-4 mt-4">
// // //               <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
// // //               {selectedDate ? (
// // //                 <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md border border-amber-100 dark:border-amber-800/30">
// // //                   <p className="font-medium text-amber-800 dark:text-amber-300">
// // //                     {formatDate(selectedDate)}
// // //                   </p>
// // //                 </div>
// // //               ) : (
// // //                 <p className="text-sm text-gray-500 dark:text-gray-400">Please select a date on the calendar</p>
// // //               )}
// // //             </div>
// // //           </div>
          
// // //           {/* Time Selection */}
// // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
// // //             {selectedDate ? (
// // //               <div className="space-y-3">
// // //                 <div className="flex items-center space-x-2">
// // //                   <input
// // //                     type="text"
// // //                     value={time}
// // //                     onChange={(e) => setTime(e.target.value)}
// // //                     className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //                   />
// // //                   <select
// // //                     value={timePeriod}
// // //                     onChange={(e) => setTimePeriod(e.target.value)}
// // //                     className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //                   >
// // //                     <option>AM</option>
// // //                     <option>PM</option>
// // //                   </select>
// // //                 </div>
                
// // //                 {/* Available time slots */}
// // //                 <div className="mt-2">
// // //                   <p className="text-sm font-medium mb-2">Available time slots:</p>
// // //                   <div className="grid grid-cols-3 gap-2">
// // //                     {availableTimes.map((timeSlot) => (
// // //                       <button
// // //                         key={timeSlot}
// // //                         type="button"
// // //                         onClick={() => {
// // //                           const [hourMin, period] = timeSlot.split(' ');
// // //                           setTime(hourMin);
// // //                           setTimePeriod(period);
// // //                         }}
// // //                         className={`
// // //                           text-sm py-1 px-2 rounded border
// // //                           ${time === timeSlot.split(' ')[0] && timePeriod === timeSlot.split(' ')[1] ? 
// // //                             'bg-amber-500 text-white border-amber-600' : 
// // //                             'bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:bg-amber-50 dark:hover:bg-amber-900/20'}
// // //                         `}
// // //                       >
// // //                         {timeSlot}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <p className="text-sm text-gray-500 dark:text-gray-400">Please select a date first</p>
// // //             )}
// // //           </div>
          
// // //           {/* Guest Count */}
// // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
// // //             <div className="flex items-center">
// // //               <button
// // //                 type="button"
// // //                 onClick={() => guests > 1 && setGuests(guests - 1)}
// // //                 className="p-2 rounded-l border border-r-0 dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //               >
// // //                 -
// // //               </button>
// // //               <input
// // //                 type="number"
// // //                 value={guests}
// // //                 onChange={(e) => {
// // //                   const value = parseInt(e.target.value);
// // //                   if (!isNaN(value) && value >= 1) {
// // //                     setGuests(value);
// // //                   }
// // //                 }}
// // //                 className="w-16 p-2 text-center border-y dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //                 min="1"
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setGuests(guests + 1)}
// // //                 className="p-2 rounded-r border border-l-0 dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //               >
// // //                 +
// // //               </button>
// // //               <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">orang termasuk pemesan</span>
// // //             </div>
// // //           </div>
          
// // //           {/* Contact Information */}
// // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
// // //             <div className="space-y-2">
// // //               <input
// // //                 type="text"
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //                 required
// // //               />
// // //               <div className="flex">
// // //                 <span className="text-gray-500 mr-1">-</span>
// // //                 <span className="text-sm text-gray-500">Email</span>
// // //               </div>
// // //               <input
// // //                 type="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 placeholder="Enter your email address"
// // //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
          
// // //           {/* Phone Number */}
// // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // //             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
// // //             <input
// // //               type="tel"
// // //               value={phone}
// // //               onChange={(e) => setPhone(e.target.value)}
// // //               placeholder="Enter your phone number"
// // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// // //               required
// // //             />
// // //           </div>
          
// // //           {/* Notes */}
// // //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// // //             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
// // //             <textarea
// // //               placeholder="Optional: Add any specific requests or notes for your reservation"
// // //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700 h-24"
// // //             ></textarea>
// // //           </div>
          
// // //           {/* Submit Button */}
// // //           <motion.button
// // //             whileHover={{ scale: 1.02 }}
// // //             whileTap={{ scale: 0.98 }}
// // //             type="submit"
// // //             disabled={!selectedDate}
// // //             className={`
// // //               w-full p-3 rounded-lg transition mt-6 text-white font-medium
// // //               ${selectedDate ? 
// // //                 'bg-amber-500 hover:bg-amber-600' : 
// // //                 'bg-gray-400 cursor-not-allowed'}
// // //             `}
// // //           >
// // //             {selectedDate ? "Confirm Reservation" : "Please Select Date"}
// // //           </motion.button>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // };
// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { ChevronDown, ChevronUp } from "lucide-react";

// // export const ReservationPage = () => {
// //   const today = new Date();
// //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// //   const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth()));
// //   const [showMonthDropdown, setShowMonthDropdown] = useState(false);
// //   const [showYearDropdown, setShowYearDropdown] = useState(false);
// //   const [time, setTime] = useState("02 : 30");
// //   const [timePeriod, setTimePeriod] = useState("PM");
// //   const [guests, setGuests] = useState(5);
// //   const [name, setName] = useState("durianmntuh");
// //   const [email, setEmail] = useState("@gmail.com");
// //   const [phone, setPhone] = useState("0872xxx");
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   // Months for dropdown
// //   const months = [
// //     "January", "February", "March", "April", 
// //     "May", "June", "July", "August", 
// //     "September", "October", "November", "December"
// //   ];

// //   // Generate years for dropdown (current year ± 5 years)
// //   const currentYear = today.getFullYear();
// //   const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     // Here you would typically send the reservation data to your API
// //     const reservationData = {
// //       date: selectedDate,
// //       time: `${time} ${timePeriod}`,
// //       guests,
// //       name,
// //       email,
// //       phone
// //     };
    
// //     console.log("Submitting reservation:", reservationData);
// //     setIsSubmitted(true);
// //   };

// //   const changeMonth = (offset: number) => {
// //     const newMonth = new Date(currentMonth);
// //     newMonth.setMonth(newMonth.getMonth() + offset);
// //     setCurrentMonth(newMonth);
// //   };

// //   const selectMonth = (monthIndex: number) => {
// //     const newDate = new Date(currentMonth);
// //     newDate.setMonth(monthIndex);
// //     setCurrentMonth(newDate);
// //     setShowMonthDropdown(false);
// //   };

// //   const selectYear = (year: number) => {
// //     const newDate = new Date(currentMonth);
// //     newDate.setFullYear(year);
// //     setCurrentMonth(newDate);
// //     setShowYearDropdown(false);
// //   };

// //   // Generate days for the current month view
// //   const generateCalendarDays = () => {
// //     const year = currentMonth.getFullYear();
// //     const month = currentMonth.getMonth();
    
// //     const firstDayOfMonth = new Date(year, month, 1);
// //     const lastDayOfMonth = new Date(year, month + 1, 0);
    
// //     const daysInMonth = lastDayOfMonth.getDate();
// //     const startingDayOfWeek = firstDayOfMonth.getDay();
    
// //     // For Monday as first day of week (like in your image)
// //     const adjustedStartingDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    
// //     const days = [];
    
// //     // Add days from previous month
// //     const prevMonth = new Date(year, month, 0);
// //     const prevMonthDays = prevMonth.getDate();
    
// //     for (let i = prevMonthDays - adjustedStartingDay + 1; i <= prevMonthDays; i++) {
// //       days.push({ 
// //         day: i, 
// //         month: 'prev', 
// //         date: new Date(year, month - 1, i),
// //         available: false
// //       });
// //     }
    
// //     // Add days from current month
// //     for (let i = 1; i <= daysInMonth; i++) {
// //       const date = new Date(year, month, i);
// //       // For demo purposes, assume all dates are available
// //       days.push({ 
// //         day: i, 
// //         month: 'current', 
// //         date,
// //         available: true
// //       });
// //     }
    
// //     // Add days from next month to complete the grid
// //     const totalDaysNeeded = Math.ceil((adjustedStartingDay + daysInMonth) / 7) * 7;
// //     const daysFromNextMonth = totalDaysNeeded - adjustedStartingDay - daysInMonth;
    
// //     for (let i = 1; i <= daysFromNextMonth; i++) {
// //       days.push({ 
// //         day: i, 
// //         month: 'next', 
// //         date: new Date(year, month + 1, i),
// //         available: false
// //       });
// //     }
    
// //     return days;
// //   };

// //   const days = generateCalendarDays();
// //   // Use full day names like in your image
// //   const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// //   const handleDateClick = (day: { day: number; month: string; date: Date; available: boolean }) => {
// //     if (day.month === 'current') {
// //       setSelectedDate(day.date);
// //     }
// //   };

// //   const formatDate = (date: Date | null): string => {
// //     if (!date) return "";
// //     return date.toLocaleDateString('en-US', { 
// //       weekday: 'short', 
// //       month: 'short', 
// //       day: 'numeric',
// //       year: 'numeric'
// //     });
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-4">
// //       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
// //       {isSubmitted ? (
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// //         >
// //           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
// //           <p>We've sent the details to your email.</p>
// //         </motion.div>
// //       ) : (
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {/* Calendar Section - Styled like the image */}
// //           <div className="border border-amber-800/30 rounded-lg overflow-hidden shadow-md bg-white dark:bg-neutral-900">
// //             {/* Month and Year selector */}
// //             <div className="flex justify-between p-4 border-b border-amber-800/20">
// //               {/* Month Dropdown */}
// //               <div className="relative">
// //                 <button
// //                   type="button"
// //                   onClick={() => {
// //                     setShowMonthDropdown(!showMonthDropdown);
// //                     setShowYearDropdown(false);
// //                   }}
// //                   className="flex items-center text-xl font-bold text-amber-800 dark:text-amber-500"
// //                 >
// //                   {months[currentMonth.getMonth()]} 
// //                   <ChevronDown size={18} className="ml-2 text-amber-800 dark:text-amber-500" />
// //                 </button>
// //                 {showMonthDropdown && (
// //                   <div className="absolute z-10 mt-1 w-40 bg-white dark:bg-neutral-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
// //                     {months.map((month, idx) => (
// //                       <button
// //                         key={month}
// //                         type="button"
// //                         onClick={() => selectMonth(idx)}
// //                         className="block w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-sm"
// //                       >
// //                         {month}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
              
// //               {/* Year Dropdown */}
// //               <div className="relative">
// //                 <button
// //                   type="button"
// //                   onClick={() => {
// //                     setShowYearDropdown(!showYearDropdown);
// //                     setShowMonthDropdown(false);
// //                   }}
// //                   className="flex items-center text-xl font-bold text-amber-800 dark:text-amber-500"
// //                 >
// //                   {currentMonth.getFullYear()}
// //                   <ChevronDown size={18} className="ml-2 text-amber-800 dark:text-amber-500" />
// //                 </button>
// //                 {showYearDropdown && (
// //                   <div className="absolute right-0 z-10 mt-1 w-24 bg-white dark:bg-neutral-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
// //                     {years.map((year) => (
// //                       <button
// //                         key={year}
// //                         type="button"
// //                         onClick={() => selectYear(year)}
// //                         className="block w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-sm"
// //                       >
// //                         {year}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
            
// //             {/* Weekday headers */}
// //             <div className="grid grid-cols-7 text-center border-b border-amber-800/20">
// //               {weekdays.map((day) => (
// //                 <div key={day} className="py-2 font-bold text-amber-800 dark:text-amber-500">
// //                   {day}
// //                 </div>
// //               ))}
// //             </div>
            
// //             {/* Calendar days - simple grid like your image */}
// //             <div className="grid grid-cols-7 text-center">
// //               {days.map((day, index) => (
// //                 <button
// //                   key={index}
// //                   type="button"
// //                   onClick={() => handleDateClick(day)}
// //                   disabled={day.month !== 'current'}
// //                   className={`
// //                     py-4 relative
// //                     ${day.month !== 'current' ? 'text-gray-400 dark:text-gray-600' : ''}
// //                     ${selectedDate && day.month === 'current' && selectedDate.getDate() === day.day ? 
// //                       'bg-amber-500 text-white' : ''}
// //                     ${day.month === 'current' ? 'cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-900/20' : 'cursor-default'}
// //                   `}
// //                 >
// //                   <span className={`
// //                     flex items-center justify-center mx-auto w-8 h-8 rounded-full
// //                     ${selectedDate && day.month === 'current' && selectedDate.getDate() === day.day ? 
// //                       'bg-amber-500 shadow-lg' : ''}
// //                   `}>
// //                     {day.day}
// //                   </span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
          
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
// //             <p className="text-sm">
// //               {selectedDate ? formatDate(selectedDate) : "Please select a date on the calendar"}
// //             </p>
// //           </div>
          
// //           {/* Rest of the form remains the same as previous implementation */}
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
// //             <div className="flex items-center space-x-2">
// //               <input
// //                 type="text"
// //                 value={time}
// //                 onChange={(e) => setTime(e.target.value)}
// //                 className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               />
// //               <select
// //                 value={timePeriod}
// //                 onChange={(e) => setTimePeriod(e.target.value)}
// //                 className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               >
// //                 <option>AM</option>
// //                 <option>PM</option>
// //               </select>
// //             </div>
// //           </div>
          
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
// //             <div className="flex items-center">
// //               <input
// //                 type="number"
// //                 value={guests}
// //                 onChange={(e) => setGuests(parseInt(e.target.value))}
// //                 className="w-20 p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                 min="1"
// //               />
// //               <span className="ml-2 text-sm">orang termasuk pemesan</span>
// //             </div>
// //           </div>
          
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
// //             <div className="space-y-2">
// //               <input
// //                 type="text"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                 required
// //               />
// //               <div className="flex">
// //                 <span className="text-gray-500 mr-1">-</span>
// //                 <span className="text-sm text-gray-500">Email</span>
// //               </div>
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                 required
// //               />
// //             </div>
// //           </div>
          
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
// //             <input
// //               type="tel"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               required
// //             />
// //           </div>
          
// //           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
// //             <div className="flex">
// //               <span className="text-gray-500 mr-1">-</span>
// //               <span className="text-sm">RESERVE NOW</span>
// //             </div>
// //           </div>
          
// //           <motion.button
// //             whileHover={{ scale: 1.02 }}
// //             whileTap={{ scale: 0.98 }}
// //             type="submit"
// //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition mt-6"
// //           >
// //             Confirm Reservation
// //           </motion.button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Calendar } from "@/components/ui/calendar";

// export const ReservationPage = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
//   const [time, setTime] = useState("02 : 30");
//   const [timePeriod, setTimePeriod] = useState("PM");
//   const [guests, setGuests] = useState(5);
//   const [name, setName] = useState("durianmntuh");
//   const [email, setEmail] = useState("@gmail.com");
//   const [phone, setPhone] = useState("0872xxx");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Here you would typically send the reservation data to your API
//     const reservationData = {
//       date: selectedDate,
//       time: `${time} ${timePeriod}`,
//       guests,
//       name,
//       email,
//       phone
//     };
    
//     console.log("Submitting reservation:", reservationData);
//     setIsSubmitted(true);
//   };

//   const formatDate = (date: Date | undefined): string => {
//     if (!date) return "";
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
//       {isSubmitted ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
//         >
//           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
//           <p>We've sent the details to your email.</p>
//         </motion.div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Calendar Section using shadcn component */}
//           <div className="border border-amber-800/30 rounded-lg overflow-hidden shadow-md bg-white dark:bg-neutral-900 p-4">
//             <Calendar
//               mode="single"
//               selected={selectedDate}
//               onSelect={setSelectedDate}
//               className="rounded-md"
//               classNames={{
//                 day_selected: "bg-amber-500 text-white hover:bg-amber-600",
//                 day_today: "bg-amber-100 text-amber-900 dark:bg-amber-800/20 dark:text-amber-50",
//                 day: "hover:bg-amber-100 dark:hover:bg-amber-800/20",
//                 head_cell: "text-amber-800 font-bold dark:text-amber-500"
//               }}
//             />
            
//             <div className="pt-4 mt-4 border-t border-amber-800/20">
//               <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Date</h2>
//               <p className="text-amber-800 dark:text-amber-400 font-medium">
//                 {selectedDate ? formatDate(selectedDate) : "Please select a date on the calendar"}
//               </p>
//             </div>
//           </div>
          
//           {/* Rest of the form remains the same as previous implementation */}
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//             <h2 className="text-lg font-semibold dark:text-white mb-2">Reservation Time</h2>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-20 p-2 text-center rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//               />
//               <select
//                 value={timePeriod}
//                 onChange={(e) => setTimePeriod(e.target.value)}
//                 className="p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//               >
//                 <option>AM</option>
//                 <option>PM</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//             <h2 className="text-lg font-semibold dark:text-white mb-2">Total of People</h2>
//             <div className="flex items-center">
//               <input
//                 type="number"
//                 value={guests}
//                 onChange={(e) => setGuests(parseInt(e.target.value))}
//                 className="w-20 p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//                 min="1"
//               />
//               <span className="ml-2 text-sm">orang termasuk pemesan</span>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//             <h2 className="text-lg font-semibold dark:text-white mb-2">Name</h2>
//             <div className="space-y-2">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//                 required
//               />
//               <div className="flex">
//                 <span className="text-gray-500 mr-1">-</span>
//                 <span className="text-sm text-gray-500">Email</span>
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//             <h2 className="text-lg font-semibold dark:text-white mb-2">No Telepon</h2>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
//               required
//             />
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//             <h2 className="text-lg font-semibold dark:text-white mb-2">Notes</h2>
//             <div className="flex">
//               <span className="text-gray-500 mr-1">-</span>
//               <span className="text-sm">RESERVE NOW</span>
//             </div>
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition mt-6"
//           >
//             Confirm Reservation
//           </motion.button>
//         </form>
//       )}
//     </div>
//   );
// };
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";

// export const ReservationPage = () => {
//   const [date, setDate] = useState<Date | undefined>(new Date());
//   const [time, setTime] = useState("02 : 30");
//   const [timePeriod, setTimePeriod] = useState("PM");
//   const [guests, setGuests] = useState(5);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   const formattedDate = date ? format(date, "EEE, MMM d, yyyy") : "Select a date";

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-2xl font-bold dark:text-white mb-6">Reservation</h1>
      
//       {isSubmitted ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
//         >
//           <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
//           <p>We've sent the details to your email.</p>
//         </motion.div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Calendar Section */}
//           <div className="space-y-4">
//             <div className="rounded-lg border bg-background p-4 shadow-sm">
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={setDate}
//                 className="w-full"
//                 classNames={{
//                   head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
//                   cell: "h-8 w-8 p-0 text-center text-sm",
//                   day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-accent",
//                   day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
//                   day_today: "bg-accent text-accent-foreground",
//                 }}
//               />
//             </div>
            
//             <div className="rounded-lg border bg-background p-4">
//               <h2 className="text-lg font-semibold mb-2">Reservation Date</h2>
//               <p className="text-sm font-medium text-foreground">
//                 {formattedDate}
//               </p>
//             </div>
//           </div>

//           {/* Time Selection */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Reservation Time</h2>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-20 p-2 rounded border border-input bg-background text-center"
//               />
//               <select
//                 value={timePeriod}
//                 onChange={(e) => setTimePeriod(e.target.value)}
//                 className="p-2 rounded border border-input bg-background"
//               >
//                 <option>AM</option>
//                 <option>PM</option>
//               </select>
//             </div>
//           </div>

//           {/* Guest Count */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Total of People</h2>
//             <div className="flex items-center gap-2">
//               <input
//                 type="number"
//                 value={guests}
//                 onChange={(e) => setGuests(Number(e.target.value))}
//                 className="w-20 p-2 rounded border border-input bg-background"
//                 min="1"
//               />
//               <span className="text-sm text-muted-foreground">orang termasuk pemesan</span>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Name</h2>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 rounded border border-input bg-background"
//               required
//             />
//             <div className="flex items-center gap-1">
//               <span className="text-sm text-muted-foreground">-</span>
//               <span className="text-sm text-muted-foreground">Email</span>
//             </div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 rounded border border-input bg-background"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">No Telepon</h2>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 rounded border border-input bg-background"
//               required
//             />
//           </div>

//           {/* Notes */}
//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Notes</h2>
//             <div className="flex items-center gap-1">
//               <span className="text-sm text-muted-foreground">-</span>
//               <span className="text-sm">RESERVE NOW</span>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="w-full bg-primary text-primary-foreground p-3 rounded-lg transition-colors hover:bg-primary/90"
//           >
//             Confirm Reservation
//           </motion.button>
//         </form>
//       )}
//     </div>
//   );
// };
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export const ReservationPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("02 : 30");
  const [timePeriod, setTimePeriod] = useState("PM");
  const [guests, setGuests] = useState(5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formattedDate = date ? format(date, "EEE, MMM d, yyyy") : "Select a date";

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
      <h1 className="text-3xl font-semibold dark:text-white mb-6 text-center">
        Reservation
      </h1>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg shadow-md text-center"
        >
          <h3 className="font-bold text-xl mb-2">Reservation Confirmed!</h3>
          <p>We've sent the details to your email.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Calendar Section */}
          <div className="space-y-4">
            <div className="rounded-lg border bg-background p-4 shadow-md">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full"
                classNames={{
                  head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                  cell: "h-8 w-8 p-0 text-center text-sm",
                  day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-accent",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                }}
              />
            </div>

            <div className="rounded-lg border bg-background p-4">
              <h2 className="text-lg font-semibold mb-2">Reservation Date</h2>
              <p className="text-sm font-medium text-foreground">{formattedDate}</p>
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Reservation Time</h2>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-24 p-3 rounded-xl border border-input bg-background text-center focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <select
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="p-3 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          {/* Guest Count */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Total Guests</h2>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-24 p-3 rounded-xl border border-input bg-background text-center focus:ring-2 focus:ring-primary focus:outline-none"
                min="1"
              />
              <span className="text-sm text-muted-foreground">People including reserver</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Your Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <h2 className="text-lg font-semibold mt-4">Email Address</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Phone Number</h2>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary text-primary-foreground p-4 rounded-xl transition-all duration-200 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            Confirm Reservation
          </motion.button>
        </form>
      )}
    </div>
  );
};
