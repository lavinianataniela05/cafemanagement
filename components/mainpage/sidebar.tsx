// components/Sidebar.tsx
"use client";
import React from "react";
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
import Link from "next/link"; // Import Link from Next.js

interface SidebarProps {
  open: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

interface SidebarLinkProps {
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
  };
  active?: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, active, onClick }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer",
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

export const Sidebar: React.FC<SidebarProps> = ({ 
  open, 
  activePage, 
  setActivePage 
}) => {
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
      <div className="flex h-full flex-col p-2 justify-between gap-6">
        <div className="flex flex-col overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          
          <motion.nav className="mt-6 flex flex-col gap-1">
            {links.map((link) => (
              <motion.div
                key={link.key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SidebarLink 
                  link={link} 
                  active={activePage === link.key}
                  onClick={() => setActivePage(link.key)}
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
            onClick={() => {}}
            active={false}
          />
          {/* Make "Coffee Master" link navigate to profile page */}
          <Link href="/profile">
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
              onClick={() => {}}
              active={false}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
