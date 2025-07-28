"use client";

import { motion, AnimatePresence } from "framer-motion";
import LandConsulting from "../Land/LandConsulting";
import AboutUs from "../AboutUs2/AboutUs2";
import ConstructionConsulting from "../Construction/ConstructionConsulting";
import FinancialConsulting from "../Financial/FinancialConsulting";
import LegalConsulting from "../Legal/LegalConsulting";

interface DashboardContentProps {
  activeMenu: string | null;
  isMobile: boolean;
  onNavigateToPage?: () => void;
  handleShowComponent?: (component: string) => void;
  scrollToTop?: () => void;
}

export default function DashboardContent({
  activeMenu,
  isMobile,
  scrollToTop,
}: DashboardContentProps) {
  const renderContent = () => {
    switch (activeMenu) {
      case "about":
        return <AboutUs />;
      case "land":
        return <LandConsulting scrollToTop={scrollToTop} />;
      case "construction":
        return <ConstructionConsulting scrollToTop={scrollToTop} />;
      case "financial":
        return <FinancialConsulting scrollToTop={scrollToTop} />;
      case "legal":
        return <LegalConsulting scrollToTop={scrollToTop} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`fixed inset-0 z-30 ${isMobile ? "" : "ml-[280px]"}`}
          style={{ background: "transparent" }}
        >
          {/* Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {renderContent()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
