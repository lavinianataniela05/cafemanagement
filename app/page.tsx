"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/mainpage/sidebar";
import {
  DashboardPage,
  MenuOrderPage,
  ReservationPage,
  PaymentPage,
  LogoutPage,
  AboutPage,
} from "@/components/mainpage";
import ProfilePage from "@/components/mainpage/ProfilePage";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <DashboardPage onNavigate={setActivePage} />;
      case "menu-order": return <MenuOrderPage setActivePage={setActivePage} />;
      case "reservation": return <ReservationPage />;
      case "payment": return <PaymentPage />;
      case "about": return <AboutPage />;
      case "profile": return <ProfilePage />;
      case "logout": return <LogoutPage />;
      default: return <DashboardPage onNavigate={setActivePage} />;
    }
  };

  function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={cn(
      "flex h-screen w-full bg-neutral-100 dark:bg-neutral-900",
      "overflow-hidden"
    )}>
      <Sidebar 
        open={open} 
        setOpen={setOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 overflow-y-auto p-6">
        {renderPage()}
      </main>
    </div>
  );
}