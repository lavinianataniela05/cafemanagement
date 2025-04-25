// // "use client";
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // export const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("credit-card");
// //   const [cardNumber, setCardNumber] = useState("");
// //   const [expiry, setExpiry] = useState("");
// //   const [cvv, setCvv] = useState("");
// //   const [paypalEmail, setPaypalEmail] = useState("");
// //   const [isPaid, setIsPaid] = useState(false);

// //   const handlePayment = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (paymentMethod === "credit-card" && (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3)) {
// //       alert("Please fill in all credit card fields correctly.");
// //       return;
// //     }

// //     if (paymentMethod === "paypal" && !paypalEmail.includes("@")) {
// //       alert("Please enter a valid PayPal email.");
// //       return;
// //     }

// //     setIsPaid(true);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-12 bg-[#fdf7f1] p-8 rounded-2xl shadow-md border border-[#e8d9c0] text-[#4b2e1e]">
// //       <h2 className="text-3xl font-bold mb-6 text-center text-[#5c3a28]">Complete Your Payment</h2>

// //       {isPaid ? (
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-[#d6f5d6] text-green-900 p-4 rounded-xl text-center shadow-inner"
// //         >
// //           <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
// //           <p>Thank you for your order 🍰</p>
// //         </motion.div>
// //       ) : (
// //         <form onSubmit={handlePayment} className="space-y-6">
// //           <div className="space-y-2">
// //             <label className="block text-sm font-semibold">Select Payment Method</label>
// //             <select
// //               value={paymentMethod}
// //               onChange={(e) => setPaymentMethod(e.target.value)}
// //               className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b08060]"
// //             >
// //               <option value="credit-card">Credit Card</option>
// //               <option value="paypal">PayPal</option>
// //               <option value="cash">Cash on Delivery</option>
// //             </select>
// //           </div>

// //           {/* Credit Card Fields */}
// //           {paymentMethod === "credit-card" && (
// //             <>
// //               <div>
// //                 <label className="block text-sm font-semibold mb-1">Card Number</label>
// //                 <input
// //                   type="text"
// //                   value={cardNumber}
// //                   onChange={(e) => setCardNumber(e.target.value)}
// //                   placeholder="1234 5678 9012 3456"
// //                   className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
// //                   required
// //                 />
// //               </div>
// //               <div className="flex space-x-4">
// //                 <div className="w-1/2">
// //                   <label className="block text-sm font-semibold mb-1">Expiry</label>
// //                   <input
// //                     type="text"
// //                     value={expiry}
// //                     onChange={(e) => setExpiry(e.target.value)}
// //                     placeholder="MM/YY"
// //                     className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="w-1/2">
// //                   <label className="block text-sm font-semibold mb-1">CVV</label>
// //                   <input
// //                     type="text"
// //                     value={cvv}
// //                     onChange={(e) => setCvv(e.target.value)}
// //                     placeholder="123"
// //                     className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
// //                     required
// //                   />
// //                 </div>
// //               </div>
// //             </>
// //           )}

// //           {/* PayPal Field */}
// //           {paymentMethod === "paypal" && (
// //             <div>
// //               <label className="block text-sm font-semibold mb-1">PayPal Email</label>
// //               <input
// //                 type="email"
// //                 value={paypalEmail}
// //                 onChange={(e) => setPaypalEmail(e.target.value)}
// //                 placeholder="you@example.com"
// //                 className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
// //                 required
// //               />
// //             </div>
// //           )}

// //           {/* Cash Info */}
// //           {paymentMethod === "cash" && (
// //             <div className="text-sm text-[#5c3a28] italic">
// //               Please prepare the exact amount. Our barista will collect it upon delivery ☕💵
// //             </div>
// //           )}

// //           <motion.button
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.98 }}
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-[#a97458] to-[#d4a373] text-white font-semibold py-2 rounded-lg shadow-md hover:brightness-105 transition"
// //           >
// //             Pay Now
// //           </motion.button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// interface PaymentPageProps {
//   totalAmount?: number;
// }

// export const PaymentPage = ({ totalAmount = 25.99 }: PaymentPageProps) => {
//   const [paymentMethod, setPaymentMethod] = useState("credit-card");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [paypalEmail, setPaypalEmail] = useState("");
//   const [isPaid, setIsPaid] = useState(false);

//   const handlePayment = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (paymentMethod === "credit-card" && (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3)) {
//       alert("Please fill in all credit card fields correctly.");
//       return;
//     }

//     if (paymentMethod === "paypal" && !paypalEmail.includes("@")) {
//       alert("Please enter a valid PayPal email.");
//       return;
//     }

//     setIsPaid(true);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12 bg-[#fdf7f1] p-8 rounded-2xl shadow-md border border-[#e8d9c0] text-[#4b2e1e]">
//       <h2 className="text-3xl font-bold mb-6 text-center text-[#5c3a28]">Complete Your Payment</h2>

//       <div className="text-xl font-semibold text-center mb-4">
//         Total: <span className="text-[#a97458]">${totalAmount.toFixed(2)}</span>
//       </div>

//       {isPaid ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-[#d6f5d6] text-green-900 p-4 rounded-xl text-center shadow-inner"
//         >
//           <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
//           <p>Thank you for your order 🍰</p>
//         </motion.div>
//       ) : (
//         <form onSubmit={handlePayment} className="space-y-6">
//           <div className="space-y-2">
//             <label className="block text-sm font-semibold">Select Payment Method</label>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b08060]"
//             >
//               <option value="credit-card">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="cash">Cash on Delivery</option>
//             </select>
//           </div>

//           {paymentMethod === "credit-card" && (
//             <>
//               <div>
//                 <label className="block text-sm font-semibold mb-1">Card Number</label>
//                 <input
//                   type="text"
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   placeholder="1234 5678 9012 3456"
//                   className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
//                   required
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <div className="w-1/2">
//                   <label className="block text-sm font-semibold mb-1">Expiry</label>
//                   <input
//                     type="text"
//                     value={expiry}
//                     onChange={(e) => setExpiry(e.target.value)}
//                     placeholder="MM/YY"
//                     className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
//                     required
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block text-sm font-semibold mb-1">CVV</label>
//                   <input
//                     type="text"
//                     value={cvv}
//                     onChange={(e) => setCvv(e.target.value)}
//                     placeholder="123"
//                     className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
//                     required
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           {paymentMethod === "paypal" && (
//             <div>
//               <label className="block text-sm font-semibold mb-1">PayPal Email</label>
//               <input
//                 type="email"
//                 value={paypalEmail}
//                 onChange={(e) => setPaypalEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
//                 required
//               />
//             </div>
//           )}

//           {paymentMethod === "cash" && (
//             <div className="text-sm text-[#5c3a28] italic">
//               Please prepare the exact amount. Our barista will collect it upon delivery ☕💵
//             </div>
//           )}

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#a97458] to-[#d4a373] text-white font-semibold py-2 rounded-lg shadow-md hover:brightness-105 transition"
//           >
//             Pay Now
//           </motion.button>
//         </form>
//       )}
//     </div>
//   );
// };
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface PaymentPageProps {
  totalAmount?: number;
}

export const PaymentPage = ({ totalAmount = 25.99 }: PaymentPageProps) => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  // Formatter untuk menampilkan total dalam format Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "credit-card" && (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3)) {
      alert("Please fill in all credit card fields correctly.");
      return;
    }

    if (paymentMethod === "paypal" && !paypalEmail.includes("@")) {
      alert("Please enter a valid PayPal email.");
      return;
    }

    setIsPaid(true);
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-[#fdf7f1] p-8 rounded-2xl shadow-md border border-[#e8d9c0] text-[#4b2e1e]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#5c3a28]">Complete Your Payment</h2>

      <div className="text-xl font-semibold text-center mb-4">
        Total: <span className="text-[#a97458]">{formatRupiah(totalAmount)}</span>
      </div>

      {isPaid ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#d6f5d6] text-green-900 p-4 rounded-xl text-center shadow-inner"
        >
          <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
          <p>Thank you for your order 🍰</p>
        </motion.div>
      ) : (
        <form onSubmit={handlePayment} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b08060]"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          {paymentMethod === "credit-card" && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1">Expiry</label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {paymentMethod === "paypal" && (
            <div>
              <label className="block text-sm font-semibold mb-1">PayPal Email</label>
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border border-[#d2b48c] bg-white shadow-sm focus:ring-[#b08060]"
                required
              />
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className="text-sm text-[#5c3a28] italic">
              Please prepare the exact amount. Our barista will collect it upon delivery ☕💵
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#a97458] to-[#d4a373] text-white font-semibold py-2 rounded-lg shadow-md hover:brightness-105 transition"
          >
            Pay Now
          </motion.button>
        </form>
      )}
    </div>
  );
};
