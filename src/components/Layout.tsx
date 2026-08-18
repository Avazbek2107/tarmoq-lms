import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-ink-50 dark:bg-ink-950">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar onMenu={() => setOpen(true)} />
        <main key={location.pathname} className="min-w-0 flex-1 animate-fade-up">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
}
