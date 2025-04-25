"use client";
import React, { useState } from "react";
import { Sidebar } from "@/components/mainpage/sidebar";
import { DashboardPage } from "@/components/mainpage/DashboardPage";
import { MenuOrderPage } from "@/components/mainpage/MenuOrderPage";
import { ReservationPage } from "@/components/mainpage/ReservationPage";
import { PaymentPage } from "@/components/mainpage/PaymentPage";
import { LogoutPage } from "@/components/mainpage/LogoutPage";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

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