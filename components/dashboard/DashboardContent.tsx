"use client";

import { motion, AnimatePresence } from "framer-motion";
import LandConsulting from "../Land/LandConsulting";
import AboutUs from "../AboutUs2/AboutUs2";
import ConstructionConsulting from "../Construction/ConstructionConsulting";

interface DashboardContentProps {
  activeMenu: string | null;
  onClose: () => void;
  isMobile: boolean;
  onNavigateToPage?: () => void;
}

export default function DashboardContent({
  activeMenu,
  onClose,
  isMobile,
}: DashboardContentProps) {
  const renderContent = () => {
    switch (activeMenu) {
      case "about":
        return <AboutUs />;
      case "land":
        return <LandConsulting />;
      case "construction":
        return <ConstructionConsulting />;
      case "financial":
        return (
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Фінансовий консалтинг
              </h2>
              <p className="text-xl text-gray-300">
                Фінансові рішення та інвестиції
              </p>
            </div>
          </div>
        );
      case "legal":
        return (
          <div className="h-screen bg-gradient-to-r from-slate-700 via-gray-800 to-slate-800 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Юридичний консалтинг
              </h2>
              <p className="text-xl text-gray-300">Правовий супровід</p>
            </div>
          </div>
        );
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
          className={`fixed inset-0 z-30 ${isMobile ? "" : "md:ml-80"}`}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="fixed top-6 right-6 z-50 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          >
            <span className="text-white text-xl">×</span>
          </motion.button>

          {/* Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {renderContent()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
