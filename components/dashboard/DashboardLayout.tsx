"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [manualActiveMenu, setManualActiveMenu] = useState<string | null>(null);
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

  useEffect(() => {
    if (pathname.startsWith("/land-consulting")) {
      setManualActiveMenu(null);
    }
    if (pathname.startsWith("/construction-consulting")) {
      setManualActiveMenu(null);
    }
    if (pathname.startsWith("/financial-consulting")) {
      setManualActiveMenu(null);
    }
    // Аналогично для других страниц:
    // if (pathname.startsWith('/legal-consulting')) setManualActiveMenu(null);
  }, [pathname]);

  const handleMenuClick = (menuId: string) => {
    setManualActiveMenu(menuId);
  };

  const handleCloseContent = () => {
    setManualActiveMenu(null);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Автоматическая активация меню по pathname
  let activeMenu = manualActiveMenu;
  if (!manualActiveMenu) {
    if (pathname.startsWith("/land-consulting")) {
      activeMenu = "land";
    }
    if (pathname.startsWith("/construction-consulting")) {
      activeMenu = "construction";
    }
    if (pathname.startsWith("/financial-consulting")) {
      activeMenu = "financial";
    }
    // Здесь можно добавить аналогично для других консалтингов:
    // if (pathname.startsWith('/construction-consulting')) activeMenu = 'construction';
    // и т.д.
  }

  const isLandConsultingPage = pathname.startsWith("/land-consulting");
  const isConstructionConsultingPage = pathname.startsWith(
    "/construction-consulting"
  );
  const isFinancialConsultingPage = pathname.startsWith(
    "/financial-consulting"
  );
  const isManualMenu = !!manualActiveMenu;

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
        {(!activeMenu ||
          ((isLandConsultingPage || isConstructionConsultingPage || isFinancialConsultingPage) &&
            !isManualMenu)) &&
          children}

        {/* Dashboard Content Overlay */}
        {activeMenu &&
          (!(isLandConsultingPage || isConstructionConsultingPage || isFinancialConsultingPage) ||
            isManualMenu) && (
            <DashboardContent
              activeMenu={activeMenu}
              onClose={handleCloseContent}
              isMobile={isMobile}
              onNavigateToPage={handleCloseContent}
            />
          )}
      </div>
    </div>
  );
}
