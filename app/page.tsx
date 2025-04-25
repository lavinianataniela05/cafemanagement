// import React from "react";
// import { SidebarDemo } from "@/components/mainpage/sidebar";

// export default function Home() {
//   return <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100 dark:bg-neutral-800">
//     <SidebarDemo />
//     </div>;
// }
// app/page.tsx

"use client";
import React, { useState } from "react";
import { Sidebar } from "@/components/mainpage/sidebar";
import React, { useEffect } from "react";

import { 
  DashboardPage,
  MenuOrderPage,
  ReservationPage,
  PaymentPage,
  LogoutPage
} from "@/components/mainpage/index"; // Adjusted to explicitly point to the index file
import { useEffect } from "react";
useEffect(() => {
  console.log("Component mounted");
}, []);
export default function Home() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <DashboardPage onNavigate={setActivePage} />;
      case "menu-order": return <MenuOrderPage setActivePage={setActivePage} />;
      case "reservation": return <ReservationPage />;
      case "payment": return <PaymentPage />;
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
