
"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCoffee,
  IconCash,
  IconCalendar,
  IconShoppingCart,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Sidebar Components
const Sidebar = ({ 
  open, 
  setOpen, 
  children 
}: { 
  open: boolean; 
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ width: open ? 240 : 64 }}
      animate={{ width: open ? 240 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "relative h-full border-r border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-950"
      )}
    >
      {children}
    </motion.div>
  );
};

const SidebarBody = ({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex h-full flex-col p-2", className)}>
      {children}
    </div>
  );
};

const SidebarLink = ({ 
  link,
  active
}: { 
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
  };
  active?: boolean;
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center rounded-lg p-2 text-sm font-medium transition-colors",
        active
          ? "bg-amber-500 text-white"
          : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
      )}
    >
      <span className="flex items-center justify-center w-5 h-5">
        {link.icon}
      </span>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        className="ml-3"
      >
        {link.label}
      </motion.span>
    </motion.a>
  );
};

// Logo Components
const Logo = () => (
  <a href="#" className="relative z-20 flex items-center px-2 py-4">
    <motion.div
      className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
      whileHover={{ rotate: 5 }}
    />
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="ml-2 text-lg font-semibold text-black dark:text-white"
    >
      Brew & Bliss
    </motion.span>
  </a>
);

const LogoIcon = () => (
  <a href="#" className="relative z-20 flex items-center justify-center px-2 py-4">
    <motion.div
      className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
      whileHover={{ rotate: 5 }}
    />
  </a>
);

// Main Component
export function SidebarDemo() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const links = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="h-5 w-5" />,
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="h-5 w-5" />,
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="h-5 w-5" />,
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="h-5 w-5" />,
    },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <Dashboard onNavigate={setActivePage} />;
      case "menu-order": return <MenuOrderPage />;
      case "reservation": return <ReservationPage />;
      case "payment": return <PaymentPage />;
      case "logout": return <LogoutPage />;
      default: return <Dashboard onNavigate={setActivePage} />;
    }
  };

  return (
    <div className={cn(
      "flex h-screen w-full bg-neutral-100 dark:bg-neutral-900",
      "overflow-hidden"
    )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-6">
          <div className="flex flex-col overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            
            <motion.nav className="mt-6 flex flex-col gap-1">
              {links.map((link) => (
                <motion.div
                  key={link.key}
                  onClick={() => setActivePage(link.key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SidebarLink 
                    link={link} 
                    active={activePage === link.key}
                  />
                </motion.div>
              ))}
            </motion.nav>
          </div>

          <div className="mb-4">
            <SidebarLink
              link={{
                key: "profile",
                label: open ? "Coffee Master" : "",
                icon: (
                  <img
                    src="https://source.unsplash.com/random/200x200/?barista"
                    className="h-5 w-5 rounded-full object-cover"
                    alt="Profile"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 overflow-y-auto p-6">
        {renderPage()}
      </main>
    </div>
  );
}

// Combined Menu & Order Page
const MenuOrderPage = () => {
  const menuItems = [
    { id: 1, name: "Espresso", price: 25000, category: "Coffee", image: "https://source.unsplash.com/200x200/?espresso" },
    { id: 2, name: "Latte", price: 28000, category: "Coffee", image: "https://source.unsplash.com/200x200/?latte" },
    { id: 3, name: "Cappuccino", price: 30000, category: "Coffee", image: "https://source.unsplash.com/200x200/?cappuccino" },
    { id: 4, name: "Green Tea", price: 20000, category: "Tea", image: "https://source.unsplash.com/200x200/?green-tea" },
    { id: 5, name: "Croissant", price: 18000, category: "Pastry", image: "https://source.unsplash.com/200x200/?croissant" },
    { id: 6, name: "Blueberry Muffin", price: 22000, category: "Pastry", image: "https://source.unsplash.com/200x200/?muffin" },
  ];

  const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        );
      }
      return [...prev, {...item, quantity: 1}];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return removeFromCart(id);
    setCart(prev => 
      prev.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Menu Section */}
      <div className="lg:col-span-2">
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Coffee", "Tea", "Pastry"].map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                activeCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">{item.name}</h3>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">
                      Rp {item.price.toLocaleString()}
                    </p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.category}
                    </span>
                  </div>
                  <motion.button
                    onClick={() => addToCart(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    Add +
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-6 sticky top-6">
          <h2 className="text-xl font-bold dark:text-white mb-4">Your Order</h2>
          
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neutral-500 dark:text-neutral-400 text-center py-8"
            >
              Your cart is empty
            </motion.div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                    >
                      -
                    </button>
                    <span className="dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                    >
                      +
                    </button>
                    <span className="dark:text-white">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="dark:text-white">
                      Rp {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      ×
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg dark:text-white">
                  <span>Total:</span>
                  <span>Rp {total.toLocaleString()}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg mt-6 transition"
                onClick={() => setActivePage("payment")}
                disabled={cart.length === 0}
              >
                Proceed to Payment
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Page
const Dashboard = ({ onNavigate }: { onNavigate: (key: string) => void }) => {
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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
          Welcome to Brew & Bliss
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          At Brew & Bliss, we believe every cup tells a story. Whether you're here to unwind or catch up on work,
          we've got the perfect brew waiting for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {dashboardFeatures.map((feature) => (
          <motion.div
            key={feature.key}
            whileHover={{ y: -5 }}
            onClick={() => onNavigate(feature.key)}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border dark:border-neutral-700 hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Reservation Page
const ReservationPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold dark:text-white mb-6">Make a Reservation</h2>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
        >
          <h3 className="font-bold text-lg mb-2">Reservation Confirmed!</h3>
          <p>We've sent the details to your email.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              required
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition"
          >
            Confirm Reservation
          </motion.button>
        </form>
      )}
    </div>
  );
};

// Payment Page
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold dark:text-white mb-6">Payment</h2>
      
      {isPaid ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
        >
          <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
          <p>Thank you for your order.</p>
        </motion.div>
      ) : (
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["credit-card", "gopay", "ovo", "dana"].map((method) => (
                <motion.button
                  key={method}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPaymentMethod(method)}
                  className={cn(
                    "p-2 border rounded-lg flex items-center justify-center",
                    paymentMethod === method
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                      : "border-neutral-200 dark:border-neutral-700"
                  )}
                >
                  <span className="capitalize">
                    {method === "credit-card" ? "Credit Card" : method.toUpperCase()}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {paymentMethod === "credit-card" && (
            <>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border dark:border-neutral-700">
            <div className="flex justify-between py-2 border-b dark:border-neutral-700">
              <span className="text-neutral-700 dark:text-neutral-300">Subtotal</span>
              <span className="dark:text-white">Rp 120,000</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-neutral-700 dark:text-neutral-300">Total</span>
              <span className="font-bold text-lg dark:text-white">Rp 120,000</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition"
          >
            Pay Now
          </motion.button>
        </form>
      )}
    </div>
  );
};

// Logout Page
const LogoutPage = () => {
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

export default SidebarDemo;
// // "use client";
// // import React, { useState } from "react";
// // import {
// //   IconArrowLeft,
// //   IconBrandTabler,
// //   IconCoffee,
// //   IconCash,
// //   IconCalendar,
// //   IconShoppingCart,
// // } from "@tabler/icons-react";
// // import { motion } from "framer-motion";
// // import { cn } from "@/lib/utils";

// // // 1. First, create the exact Sidebar components from Aceternity
// // const Sidebar = ({ 
// //   open, 
// //   setOpen, 
// //   children 
// // }: { 
// //   open: boolean; 
// //   setOpen: (open: boolean) => void;
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <motion.div
// //       initial={{ width: open ? 240 : 64 }}
// //       animate={{ width: open ? 240 : 64 }}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //       className={cn(
// //         "relative h-full border-r border-neutral-200 dark:border-neutral-800",
// //         "bg-white dark:bg-neutral-950"
// //       )}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // const SidebarBody = ({ 
// //   className, 
// //   children 
// // }: { 
// //   className?: string; 
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <div className={cn("flex h-full flex-col p-2", className)}>
// //       {children}
// //     </div>
// //   );
// // };

// // const SidebarLink = ({ 
// //   link,
// //   active
// // }: { 
// //   link: {
// //     label: string;
// //     icon: React.ReactNode;
// //     key: string;
// //   };
// //   active?: boolean;
// // }) => {
// //   return (
// //     <motion.a
// //       whileHover={{ scale: 1.02 }}
// //       whileTap={{ scale: 0.98 }}
// //       className={cn(
// //         "flex items-center rounded-lg p-2 text-sm font-medium transition-colors",
// //         active
// //           ? "bg-amber-500 text-white"
// //           : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
// //       )}
// //     >
// //       <span className="flex items-center justify-center w-5 h-5">
// //         {link.icon}
// //       </span>
// //       <motion.span
// //         initial={{ opacity: 0, x: -10 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         exit={{ opacity: 0, x: -10 }}
// //         className="ml-3"
// //       >
// //         {link.label}
// //       </motion.span>
// //     </motion.a>
// //   );
// // };

// // // 2. Logo Components with the exact Aceternity animation
// // const Logo = () => (
// //   <a href="#" className="relative z-20 flex items-center px-2 py-4">
// //     <motion.div
// //       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
// //       whileHover={{ rotate: 5 }}
// //     />
// //     <motion.span
// //       initial={{ opacity: 0, x: -10 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       className="ml-2 text-lg font-semibold text-black dark:text-white"
// //     >
// //       Brew & Bliss
// //     </motion.span>
// //   </a>
// // );

// // const LogoIcon = () => (
// //   <a href="#" className="relative z-20 flex items-center justify-center px-2 py-4">
// //     <motion.div
// //       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
// //       whileHover={{ rotate: 5 }}
// //     />
// //   </a>
// // );

// // // 3. Main Component
// // export function SidebarDemo() {
// //   const [open, setOpen] = useState(true);
// //   const [activePage, setActivePage] = useState("dashboard");

// //   const links = [
// //     {
// //       label: "Dashboard",
// //       key: "dashboard",
// //       icon: <IconBrandTabler className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Menu",
// //       key: "menu",
// //       icon: <IconCoffee className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Reservation",
// //       key: "reservation",
// //       icon: <IconCalendar className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Order",
// //       key: "order",
// //       icon: <IconShoppingCart className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Payment",
// //       key: "payment",
// //       icon: <IconCash className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Logout",
// //       key: "logout",
// //       icon: <IconArrowLeft className="h-5 w-5" />,
// //     },
// //   ];

// //   const renderPage = () => {
// //     switch (activePage) {
// //       case "dashboard": return <Dashboard onNavigate={setActivePage} />;
// //       case "menu": return <MenuPage />;
// //       case "reservation": return <ReservationPage />;
// //       case "order": return <OrderPage />;
// //       case "payment": return <PaymentPage />;
// //       case "logout": return <LogoutPage />;
// //       default: return <Dashboard onNavigate={setActivePage} />;
// //     }
// //   };

// //   return (
// //     <div className={cn(
// //       "flex h-screen w-full bg-neutral-100 dark:bg-neutral-900",
// //       "overflow-hidden"
// //     )}>
// //       <Sidebar open={open} setOpen={setOpen}>
// //         <SidebarBody className="justify-between gap-6">
// //           <div className="flex flex-col overflow-y-auto">
// //             {open ? <Logo /> : <LogoIcon />}
            
// //             <motion.nav className="mt-6 flex flex-col gap-1">
// //               {links.map((link) => (
// //                 <motion.div
// //                   key={link.key}
// //                   onClick={() => setActivePage(link.key)}
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                 >
// //                   <SidebarLink 
// //                     link={link} 
// //                     active={activePage === link.key}
// //                   />
// //                 </motion.div>
// //               ))}
// //             </motion.nav>
// //           </div>

// //           <div className="mb-4">
// //             <SidebarLink
// //               link={{
// //                 key: "profile",
// //                 label: open ? "Coffee Master" : "",
// //                 icon: (
// //                   <img
// //                     src="https://source.unsplash.com/random/200x200/?barista"
// //                     className="h-5 w-5 rounded-full object-cover"
// //                     alt="Profile"
// //                   />
// //                 ),
// //               }}
// //             />
// //           </div>
// //         </SidebarBody>
// //       </Sidebar>

// //       <main className="flex-1 overflow-y-auto p-6">
// //         {renderPage()}
// //       </main>
// //     </div>
// //   );
// // }

// // // [Keep all your existing page components exactly the same]

// // const Dashboard = ({ onNavigate }: { onNavigate: (key: string) => void }) => {
// //   const dashboardFeatures = [
// //     {
// //       title: "View Our Menu",
// //       key: "menu",
// //       description: "Browse our handcrafted coffee and treats.",
// //       image: "https://source.unsplash.com/400x300/?coffee,menu",
// //     },
// //     {
// //       title: "Make a Reservation",
// //       key: "reservation",
// //       description: "Easily book a table for you and your guests.",
// //       image: "https://source.unsplash.com/400x300/?restaurant,table",
// //     },
// //     {
// //       title: "Place an Order",
// //       key: "order",
// //       description: "Quickly order your favorites with just a click.",
// //       image: "https://source.unsplash.com/400x300/?coffee,order",
// //     },
// //     {
// //       title: "Make a Payment",
// //       key: "payment",
// //       description: "Complete your transaction safely and easily.",
// //       image: "https://source.unsplash.com/400x300/?payment,creditcard",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">Welcome to Brew & Bliss</h1>
// //         <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
// //           At Brew & Bliss, we believe every cup tells a story. Whether you're here to unwind or catch up on work,
// //           we've got the perfect brew waiting for you.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
// //         {dashboardFeatures.map((feature) => (
// //           <div
// //             key={feature.key}
// //             className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border dark:border-neutral-700 hover:shadow-lg transition cursor-pointer"
// //             onClick={() => onNavigate(feature.key)}
// //           >
// //             <img
// //               src={feature.image}
// //               alt={feature.title}
// //               className="w-full h-40 object-cover rounded-t-2xl"
// //             />
// //             <div className="p-4 space-y-2">
// //               <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{feature.title}</h3>
// //               <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const MenuPage = () => {
// //   const menuItems = [
// //     { name: "Espresso", image: "https://source.unsplash.com/200x200/?espresso" },
// //     { name: "Latte", image: "https://source.unsplash.com/200x200/?latte" },
// //     { name: "Cappuccino", image: "https://source.unsplash.com/200x200/?cappuccino" },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-2xl font-bold dark:text-white">Our Menu</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {menuItems.map((item, idx) => (
// //           <div
// //             key={idx}
// //             className="rounded-lg border p-4 bg-white dark:bg-neutral-800 dark:border-neutral-700 hover:shadow-md transition"
// //           >
// //             <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2" />
// //             <h3 className="text-lg font-semibold dark:text-white">{item.name}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const ReservationPage = () => {
// //   const [date, setDate] = useState("");
// //   const [guests, setGuests] = useState(1);
// //   const [assignedTable, setAssignedTable] = useState<number | null>(null);
// //   const tables = [1, 2, 3, 4, 5, 6, 7];

// //   const handleReserve = () => {
// //     const randomTable = tables[Math.floor(Math.random() * tables.length)];
// //     setAssignedTable(randomTable);
// //     alert(`Reservation for ${guests} guests on ${date}. Table #${randomTable}`);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto space-y-4">
// //       <h2 className="text-2xl font-bold dark:text-white">Make a Reservation</h2>
// //       <div className="space-y-2">
// //         <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Date</label>
// //         <input 
// //           type="date" 
// //           value={date} 
// //           onChange={(e) => setDate(e.target.value)} 
// //           className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700" 
// //         />
// //       </div>
// //       <div className="space-y-2">
// //         <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Number of Guests</label>
// //         <input 
// //           type="number" 
// //           min={1} 
// //           value={guests} 
// //           onChange={(e) => setGuests(+e.target.value)} 
// //           className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700" 
// //         />
// //       </div>
// //       <button 
// //         onClick={handleReserve} 
// //         className="w-full bg-amber-500 hover:bg-amber-600 text-white p-2 rounded transition"
// //       >
// //         Reserve
// //       </button>
// //       {assignedTable && (
// //         <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
// //           Table #{assignedTable} assigned!
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const OrderPage = () => {
// //   const [cart, setCart] = useState<any[]>([]);
// //   const menu = [
// //     { id: 1, name: "Espresso", price: 25000 },
// //     { id: 2, name: "Latte", price: 28000 },
// //     { id: 3, name: "Cappuccino", price: 30000 },
// //   ];

// //   const addToCart = (item: any) => {
// //     const found = cart.find((c) => c.id === item.id);
// //     if (found) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1 }]);
// //     }
// //   };

// //   const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

// //   return (
// //     <div className="flex flex-col md:flex-row gap-6">
// //       <div className="flex-1">
// //         <h2 className="text-2xl font-bold dark:text-white mb-4">Select Coffee</h2>
// //         <div className="space-y-2">
// //           {menu.map((item) => (
// //             <div key={item.id} className="flex justify-between items-center p-3 border-b dark:border-neutral-700">
// //               <div className="dark:text-white">
// //                 <h3 className="font-medium">{item.name}</h3>
// //                 <p className="text-sm text-neutral-600 dark:text-neutral-400">Rp {item.price}</p>
// //               </div>
// //               <button 
// //                 className="bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded text-white transition" 
// //                 onClick={() => addToCart(item)}
// //               >
// //                 Add
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="flex-1">
// //         <h2 className="text-2xl font-bold dark:text-white mb-4">Your Order</h2>
// //         {cart.length === 0 ? (
// //           <p className="text-neutral-600 dark:text-neutral-400">Your cart is empty</p>
// //         ) : (
// //           <div className="space-y-3">
// //             {cart.map((item) => (
// //               <div key={item.id} className="flex justify-between items-center py-2 dark:text-white">
// //                 <span>{item.name} x{item.qty}</span>
// //                 <span>Rp {item.qty * item.price}</span>
// //               </div>
// //             ))}
// //             <div className="border-t dark:border-neutral-700 pt-3 mt-3">
// //               <div className="flex justify-between font-bold text-lg dark:text-white">
// //                 <span>Total:</span>
// //                 <span>Rp {total}</span>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const PaymentPage = () => {
// //   const [paid, setPaid] = useState(false);
// //   const total = 120000;
  
// //   return (
// //     <div className="max-w-md mx-auto space-y-4">
// //       <h2 className="text-2xl font-bold dark:text-white">Payment</h2>
// //       <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow border dark:border-neutral-700">
// //         <div className="flex justify-between py-2 border-b dark:border-neutral-700">
// //           <span className="text-neutral-700 dark:text-neutral-300">Subtotal</span>
// //           <span className="dark:text-white">Rp {total}</span>
// //         </div>
// //         <div className="flex justify-between py-2">
// //           <span className="text-neutral-700 dark:text-neutral-300">Total</span>
// //           <span className="font-bold text-lg dark:text-white">Rp {total}</span>
// //         </div>
// //       </div>
// //       <button 
// //         onClick={() => setPaid(true)} 
// //         className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg transition"
// //       >
// //         Pay Now
// //       </button>
// //       {paid && (
// //         <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center">
// //           Payment successful! Thank you for your order.
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const LogoutPage = () => {
// //   useEffect(() => {
// //     setTimeout(() => {
// //       alert("Logged out");
// //       window.location.href = "/";
// //     }, 1500);
// //   }, []);

// //   return (
// //     <div className="flex items-center justify-center h-full">
// //       <h2 className="text-xl dark:text-white">Logging out...</h2>
// //     </div>
// //   );
// // };

// // export default SidebarDemo;

// // "use client";
// // import React, { useState } from "react";
// // import {
// //   IconArrowLeft,
// //   IconBrandTabler,
// //   IconCoffee,
// //   IconCash,
// //   IconCalendar,
// //   IconShoppingCart,
// // } from "@tabler/icons-react";
// // import { motion } from "framer-motion";
// // import { cn } from "@/lib/utils";

// // // Sidebar Components
// // const Sidebar = ({ 
// //   open, 
// //   setOpen, 
// //   children 
// // }: { 
// //   open: boolean; 
// //   setOpen: (open: boolean) => void;
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <motion.div
// //       initial={{ width: open ? 240 : 64 }}
// //       animate={{ width: open ? 240 : 64 }}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //       className={cn(
// //         "relative h-full border-r border-neutral-200 dark:border-neutral-800",
// //         "bg-white dark:bg-neutral-950"
// //       )}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // const SidebarBody = ({ 
// //   className, 
// //   children 
// // }: { 
// //   className?: string; 
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <div className={cn("flex h-full flex-col p-2", className)}>
// //       {children}
// //     </div>
// //   );
// // };

// // const SidebarLink = ({ 
// //   link,
// //   active
// // }: { 
// //   link: {
// //     label: string;
// //     icon: React.ReactNode;
// //     key: string;
// //   };
// //   active?: boolean;
// // }) => {
// //   return (
// //     <motion.a
// //       whileHover={{ scale: 1.02 }}
// //       whileTap={{ scale: 0.98 }}
// //       className={cn(
// //         "flex items-center rounded-lg p-2 text-sm font-medium transition-colors",
// //         active
// //           ? "bg-amber-500 text-white"
// //           : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
// //       )}
// //     >
// //       <span className="flex items-center justify-center w-5 h-5">
// //         {link.icon}
// //       </span>
// //       <motion.span
// //         initial={{ opacity: 0, x: -10 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         exit={{ opacity: 0, x: -10 }}
// //         className="ml-3"
// //       >
// //         {link.label}
// //       </motion.span>
// //     </motion.a>
// //   );
// // };

// // // Logo Components
// // const Logo = () => (
// //   <a href="#" className="relative z-20 flex items-center px-2 py-4">
// //     <motion.div
// //       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
// //       whileHover={{ rotate: 5 }}
// //     />
// //     <motion.span
// //       initial={{ opacity: 0, x: -10 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       className="ml-2 text-lg font-semibold text-black dark:text-white"
// //     >
// //       Brew & Bliss
// //     </motion.span>
// //   </a>
// // );

// // const LogoIcon = () => (
// //   <a href="#" className="relative z-20 flex items-center justify-center px-2 py-4">
// //     <motion.div
// //       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
// //       whileHover={{ rotate: 5 }}
// //     />
// //   </a>
// // );

// // // Main Component
// // export function SidebarDemo() {
// //   const [open, setOpen] = useState(true);
// //   const [activePage, setActivePage] = useState("dashboard");

// //   const links = [
// //     {
// //       label: "Dashboard",
// //       key: "dashboard",
// //       icon: <IconBrandTabler className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Menu & Order",
// //       key: "menu-order",
// //       icon: <IconShoppingCart className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Reservation",
// //       key: "reservation",
// //       icon: <IconCalendar className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Payment",
// //       key: "payment",
// //       icon: <IconCash className="h-5 w-5" />,
// //     },
// //     {
// //       label: "Logout",
// //       key: "logout",
// //       icon: <IconArrowLeft className="h-5 w-5" />,
// //     },
// //   ];

// //   const renderPage = () => {
// //     switch (activePage) {
// //       case "dashboard": return <Dashboard onNavigate={setActivePage} />;
// //       case "menu-order": return <MenuOrderPage />;
// //       case "reservation": return <ReservationPage />;
// //       case "payment": return <PaymentPage />;
// //       case "logout": return <LogoutPage />;
// //       default: return <Dashboard onNavigate={setActivePage} />;
// //     }
// //   };

// //   return (
// //     <div className={cn(
// //       "flex h-screen w-full bg-neutral-100 dark:bg-neutral-900",
// //       "overflow-hidden"
// //     )}>
// //       <Sidebar open={open} setOpen={setOpen}>
// //         <SidebarBody className="justify-between gap-6">
// //           <div className="flex flex-col overflow-y-auto">
// //             {open ? <Logo /> : <LogoIcon />}
            
// //             <motion.nav className="mt-6 flex flex-col gap-1">
// //               {links.map((link) => (
// //                 <motion.div
// //                   key={link.key}
// //                   onClick={() => setActivePage(link.key)}
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                 >
// //                   <SidebarLink 
// //                     link={link} 
// //                     active={activePage === link.key}
// //                   />
// //                 </motion.div>
// //               ))}
// //             </motion.nav>
// //           </div>

// //           <div className="mb-4">
// //             <SidebarLink
// //               link={{
// //                 key: "profile",
// //                 label: open ? "Coffee Master" : "",
// //                 icon: (
// //                   <img
// //                     src="https://source.unsplash.com/random/200x200/?barista"
// //                     className="h-5 w-5 rounded-full object-cover"
// //                     alt="Profile"
// //                   />
// //                 ),
// //               }}
// //             />
// //           </div>
// //         </SidebarBody>
// //       </Sidebar>

// //       <main className="flex-1 overflow-y-auto p-6">
// //         {renderPage()}
// //       </main>
// //     </div>
// //   );
// // }

// // // Combined Menu & Order Page
// // const MenuOrderPage = () => {
// //   const menuItems = [
// //     { id: 1, name: "Espresso", price: 25000, category: "Coffee", image: "https://source.unsplash.com/200x200/?espresso" },
// //     { id: 2, name: "Latte", price: 28000, category: "Coffee", image: "https://source.unsplash.com/200x200/?latte" },
// //     { id: 3, name: "Cappuccino", price: 30000, category: "Coffee", image: "https://source.unsplash.com/200x200/?cappuccino" },
// //     { id: 4, name: "Green Tea", price: 20000, category: "Tea", image: "https://source.unsplash.com/200x200/?green-tea" },
// //     { id: 5, name: "Croissant", price: 18000, category: "Pastry", image: "https://source.unsplash.com/200x200/?croissant" },
// //     { id: 6, name: "Blueberry Muffin", price: 22000, category: "Pastry", image: "https://source.unsplash.com/200x200/?muffin" },
// //   ];

// //   const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
// //   const [activeCategory, setActiveCategory] = useState("All");

// //   const addToCart = (item: typeof menuItems[0]) => {
// //     setCart(prev => {
// //       const existing = prev.find(i => i.id === item.id);
// //       if (existing) {
// //         return prev.map(i => 
// //           i.id === item.id ? {...i, quantity: i.quantity + 1} : i
// //         );
// //       }
// //       return [...prev, {...item, quantity: 1}];
// //     });
// //   };

// //   const removeFromCart = (id: number) => {
// //     setCart(prev => prev.filter(item => item.id !== id));
// //   };

// //   const updateQuantity = (id: number, newQuantity: number) => {
// //     if (newQuantity < 1) return removeFromCart(id);
// //     setCart(prev => 
// //       prev.map(item => 
// //         item.id === id ? {...item, quantity: newQuantity} : item
// //       )
// //     );
// //   };

// //   const filteredItems = activeCategory === "All" 
// //     ? menuItems 
// //     : menuItems.filter(item => item.category === activeCategory);

// //   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// //   return (
// //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //       {/* Menu Section */}
// //       <div className="lg:col-span-2">
// //         <div className="flex flex-wrap gap-2 mb-6">
// //           {["All", "Coffee", "Tea", "Pastry"].map(category => (
// //             <motion.button
// //               key={category}
// //               onClick={() => setActiveCategory(category)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={cn(
// //                 "px-4 py-2 rounded-full text-sm font-medium",
// //                 activeCategory === category
// //                   ? "bg-amber-500 text-white"
// //                   : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
// //               )}
// //             >
// //               {category}
// //             </motion.button>
// //           ))}
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {filteredItems.map(item => (
// //             <motion.div 
// //               key={item.id}
// //               whileHover={{ y: -5 }}
// //               className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden"
// //             >
// //               <img 
// //                 src={item.image} 
// //                 alt={item.name}
// //                 className="w-full h-40 object-cover"
// //               />
// //               <div className="p-4">
// //                 <div className="flex justify-between items-start">
// //                   <div>
// //                     <h3 className="font-semibold text-lg dark:text-white">{item.name}</h3>
// //                     <p className="text-amber-600 dark:text-amber-400 font-medium">
// //                       Rp {item.price.toLocaleString()}
// //                     </p>
// //                     <span className="text-xs text-neutral-500 dark:text-neutral-400">
// //                       {item.category}
// //                     </span>
// //                   </div>
// //                   <motion.button
// //                     onClick={() => addToCart(item)}
// //                     whileHover={{ scale: 1.1 }}
// //                     whileTap={{ scale: 0.9 }}
// //                     className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-sm transition"
// //                   >
// //                     Add +
// //                   </motion.button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Order Summary Section */}
// //       <div className="lg:col-span-1">
// //         <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-6 sticky top-6">
// //           <h2 className="text-xl font-bold dark:text-white mb-4">Your Order</h2>
          
// //           {cart.length === 0 ? (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               className="text-neutral-500 dark:text-neutral-400 text-center py-8"
// //             >
// //               Your cart is empty
// //             </motion.div>
// //           ) : (
// //             <div className="space-y-4">
// //               {cart.map(item => (
// //                 <motion.div 
// //                   key={item.id}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="flex justify-between items-center"
// //                 >
// //                   <div className="flex items-center space-x-3">
// //                     <button 
// //                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                       className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="dark:text-white">{item.quantity}</span>
// //                     <button 
// //                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                       className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
// //                     >
// //                       +
// //                     </button>
// //                     <span className="dark:text-white">{item.name}</span>
// //                   </div>
// //                   <div className="flex items-center space-x-2">
// //                     <span className="dark:text-white">
// //                       Rp {(item.price * item.quantity).toLocaleString()}
// //                     </span>
// //                     <button 
// //                       onClick={() => removeFromCart(item.id)}
// //                       className="text-red-500 hover:text-red-700 transition"
// //                     >
// //                       ×
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               ))}

// //               <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
// //                 <div className="flex justify-between font-bold text-lg dark:text-white">
// //                   <span>Total:</span>
// //                   <span>Rp {total.toLocaleString()}</span>
// //                 </div>
// //               </div>

// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg mt-6 transition"
// //                 onClick={() => setActivePage("payment")}
// //                 disabled={cart.length === 0}
// //               >
// //                 Proceed to Payment
// //               </motion.button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Dashboard Page
// // const Dashboard = ({ onNavigate }: { onNavigate: (key: string) => void }) => {
// //   const dashboardFeatures = [
// //     {
// //       title: "View Our Menu",
// //       key: "menu-order",
// //       description: "Browse our handcrafted coffee and treats.",
// //       image: "https://source.unsplash.com/400x300/?coffee,menu",
// //     },
// //     {
// //       title: "Make a Reservation",
// //       key: "reservation",
// //       description: "Easily book a table for you and your guests.",
// //       image: "https://source.unsplash.com/400x300/?restaurant,table",
// //     },
// //     {
// //       title: "Payment History",
// //       key: "payment",
// //       description: "View your previous transactions.",
// //       image: "https://source.unsplash.com/400x300/?payment,creditcard",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
// //           Welcome to Brew & Bliss
// //         </h1>
// //         <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
// //           At Brew & Bliss, we believe every cup tells a story. Whether you're here to unwind or catch up on work,
// //           we've got the perfect brew waiting for you.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// //         {dashboardFeatures.map((feature) => (
// //           <motion.div
// //             key={feature.key}
// //             whileHover={{ y: -5 }}
// //             onClick={() => onNavigate(feature.key)}
// //             className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border dark:border-neutral-700 hover:shadow-lg transition cursor-pointer"
// //           >
// //             <img
// //               src={feature.image}
// //               alt={feature.title}
// //               className="w-full h-40 object-cover rounded-t-2xl"
// //             />
// //             <div className="p-4 space-y-2">
// //               <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
// //                 {feature.title}
// //               </h3>
// //               <p className="text-sm text-neutral-600 dark:text-neutral-400">
// //                 {feature.description}
// //               </p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Reservation Page
// // const ReservationPage = () => {
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [guests, setGuests] = useState(1);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitted(true);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <h2 className="text-2xl font-bold dark:text-white mb-6">Make a Reservation</h2>
      
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
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //               Full Name
// //             </label>
// //             <input
// //               type="text"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               required
// //             />
// //           </div>
          
// //           <div>
// //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               required
// //             />
// //           </div>
          
// //           <div>
// //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //               Phone Number
// //             </label>
// //             <input
// //               type="tel"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               required
// //             />
// //           </div>
          
// //           <div className="grid grid-cols-2 gap-4">
// //             <div>
// //               <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //                 Date
// //               </label>
// //               <input
// //                 type="date"
// //                 value={date}
// //                 onChange={(e) => setDate(e.target.value)}
// //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                 required
// //               />
// //             </div>
            
// //             <div>
// //               <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //                 Time
// //               </label>
// //               <input
// //                 type="time"
// //                 value={time}
// //                 onChange={(e) => setTime(e.target.value)}
// //                 className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                 required
// //               />
// //             </div>
// //           </div>
          
// //           <div>
// //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //               Number of Guests
// //             </label>
// //             <input
// //               type="number"
// //               min="1"
// //               value={guests}
// //               onChange={(e) => setGuests(parseInt(e.target.value))}
// //               className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //               required
// //             />
// //           </div>
          
// //           <motion.button
// //             whileHover={{ scale: 1.02 }}
// //             whileTap={{ scale: 0.98 }}
// //             type="submit"
// //             className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-lg transition"
// //           >
// //             Confirm Reservation
// //           </motion.button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // // Payment Page
// // const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("credit-card");
// //   const [cardNumber, setCardNumber] = useState("");
// //   const [expiry, setExpiry] = useState("");
// //   const [cvv, setCvv] = useState("");
// //   const [isPaid, setIsPaid] = useState(false);

// //   const handlePayment = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsPaid(true);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <h2 className="text-2xl font-bold dark:text-white mb-6">Payment</h2>
      
// //       {isPaid ? (
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center"
// //         >
// //           <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
// //           <p>Thank you for your order.</p>
// //         </motion.div>
// //       ) : (
// //         <form onSubmit={handlePayment} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
// //               Payment Method
// //             </label>
// //             <div className="grid grid-cols-2 gap-2">
// //               {["credit-card", "gopay", "ovo", "dana"].map((method) => (
// //                 <motion.button
// //                   key={method}
// //                   type="button"
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   onClick={() => setPaymentMethod(method)}
// //                   className={cn(
// //                     "p-2 border rounded-lg flex items-center justify-center",
// //                     paymentMethod === method
// //                       ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
// //                       : "border-neutral-200 dark:border-neutral-700"
// //                   )}
// //                 >
// //                   <span className="capitalize">
// //                     {method === "credit-card" ? "Credit Card" : method.toUpperCase()}
// //                   </span>
// //                 </motion.button>
// //               ))}
// //             </div>
// //           </div>

// //           {paymentMethod === "credit-card" && (
// //             <>
// //               <div>
// //                 <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //                   Card Number
// //                 </label>
// //                 <input
// //                   type="text"
// //                   placeholder="1234 5678 9012 3456"
// //                   value={cardNumber}
// //                   onChange={(e) => setCardNumber(e.target.value)}
// //                   className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                   required
// //                 />
// //               </div>
              
// //               <div className="grid grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //                     Expiry Date
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="MM/YY"
// //                     value={expiry}
// //                     onChange={(e) => setExpiry(e.target.value)}
// //                     className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                     required
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
// //                     CVV
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="123"
// //                     value={cvv}
// //                     onChange={(e) => setCvv(e.target.value)}
// //                     className="w-full p-2 rounded border dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
// //                     required
// //                   />
// //                 </div>
// //               </div>
// //             </>
// //           )}

// //           <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border dark:border-neutral-700">
// //             <div className="flex justify-between py-2 border-b dark:border-neutral-700">
// //               <span className="text-neutral-700 dark:text-neutral-300">Subtotal</span>
// //               <span className="dark:text-white">Rp 120,000</span>
// //             </div>
// //             <div className="flex justify-between py-2">
// //               <span className="text-neutral-700 dark:text-neutral-300">Total</span>
// //               <span className="font-bold text-lg dark:text-white">Rp 120,000</span>
// //             </div>
// //           </div>

// //           <motion.button
// //             whileHover={{ scale: 1.02 }}
// //             whileTap={{ scale: 0.98 }}
// //             type="submit"
// //             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition"
// //           >
// //             Pay Now
// //           </motion.button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // // Logout Page
// // const LogoutPage = () => {
// //   React.useEffect(() => {
// //     const timer = setTimeout(() => {
// //       alert("Logged out successfully");
// //       window.location.href = "/";
// //     }, 1500);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="flex items-center justify-center h-full">
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         className="text-xl dark:text-white"
// //       >
// //         Logging out...
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default SidebarDemo;

// // components/Sidebar.tsx
// "use client";
// import React from "react";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconCoffee,
//   IconCash,
//   IconCalendar,
//   IconShoppingCart,
// } from "@tabler/icons-react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface SidebarProps {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   activePage: string;
//   setActivePage: (page: string) => void;
// }

// const SidebarLink = ({ 
//   link,
//   active,
//   onClick
// }: { 
//   link: {
//     label: string;
//     icon: React.ReactNode;
//     key: string;
//   };
//   active?: boolean;
//   onClick: () => void;
// }) => {
//   return (
//     <motion.a
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={onClick}
//       className={cn(
//         "flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer",
//         active
//           ? "bg-amber-500 text-white"
//           : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
//       )}
//     >
//       <span className="flex items-center justify-center w-5 h-5">
//         {link.icon}
//       </span>
//       <motion.span
//         initial={{ opacity: 0, x: -10 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -10 }}
//         className="ml-3"
//       >
//         {link.label}
//       </motion.span>
//     </motion.a>
//   );
// };

// const Logo = () => (
//   <a href="#" className="relative z-20 flex items-center px-2 py-4">
//     <motion.div
//       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
//       whileHover={{ rotate: 5 }}
//     />
//     <motion.span
//       initial={{ opacity: 0, x: -10 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="ml-2 text-lg font-semibold text-black dark:text-white"
//     >
//       Brew & Bliss
//     </motion.span>
//   </a>
// );

// const LogoIcon = () => (
//   <a href="#" className="relative z-20 flex items-center justify-center px-2 py-4">
//     <motion.div
//       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-500"
//       whileHover={{ rotate: 5 }}
//     />
//   </a>
// );

// export const Sidebar: React.FC<SidebarProps> = ({ 
//   open, 
//   setOpen, 
//   activePage, 
//   setActivePage 
// }) => {
//   const links = [
//     {
//       label: "Dashboard",
//       key: "dashboard",
//       icon: <IconBrandTabler className="h-5 w-5" />,
//     },
//     {
//       label: "Menu & Order",
//       key: "menu-order",
//       icon: <IconShoppingCart className="h-5 w-5" />,
//     },
//     {
//       label: "Reservation",
//       key: "reservation",
//       icon: <IconCalendar className="h-5 w-5" />,
//     },
//     {
//       label: "Payment",
//       key: "payment",
//       icon: <IconCash className="h-5 w-5" />,
//     },
//     {
//       label: "Logout",
//       key: "logout",
//       icon: <IconArrowLeft className="h-5 w-5" />,
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ width: open ? 240 : 64 }}
//       animate={{ width: open ? 240 : 64 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className={cn(
//         "relative h-full border-r border-neutral-200 dark:border-neutral-800",
//         "bg-white dark:bg-neutral-950"
//       )}
//     >
//       <div className="flex h-full flex-col p-2 justify-between gap-6">
//         <div className="flex flex-col overflow-y-auto">
//           {open ? <Logo /> : <LogoIcon />}
          
//           <motion.nav className="mt-6 flex flex-col gap-1">
//             {links.map((link) => (
//               <motion.div
//                 key={link.key}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <SidebarLink 
//                   link={link} 
//                   active={activePage === link.key}
//                   onClick={() => setActivePage(link.key)}
//                 />
//               </motion.div>
//             ))}
//           </motion.nav>
//         </div>

//         <div className="mb-4">
//           <SidebarLink
//             link={{
//               key: "profile",
//               label: open ? "Coffee Master" : "",
//               icon: (
//                 <img
//                   src="https://source.unsplash.com/random/200x200/?barista"
//                   className="h-5 w-5 rounded-full object-cover"
//                   alt="Profile"
//                 />
//               ),
//             }}
//             onClick={() => {}}
//             active={false}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };