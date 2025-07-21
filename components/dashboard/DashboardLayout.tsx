"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleCloseContent = () => {
    setActiveMenu(null);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-[#324158]">
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={handleToggleSidebar}
          className="fixed top-6 left-6 z-50 w-12 h-12 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-yellow-400/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6 text-yellow-400" />
        </motion.button>
      )}

      {/* Dashboard Sidebar */}
      <DashboardSidebar
        onMenuClick={handleMenuClick}
        activeMenu={activeMenu}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div
        className={`min-h-screen transition-all duration-300  ${
          isMobile ? "" : "ml-80"
        }`}
      >
        {/* Page Content */}
        {!activeMenu && children}

        {/* Dashboard Content Overlay */}
        <DashboardContent
          activeMenu={activeMenu}
          onClose={handleCloseContent}
          isMobile={isMobile}
          onNavigateToPage={handleCloseContent}
        />
      </div>
    </div>
  );
}
