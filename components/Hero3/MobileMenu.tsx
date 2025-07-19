"use client";

import { scrollToSection } from "@/utils/scrollToSection";
import { motion } from "framer-motion";
import { menuItems } from "./Hero3";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -20,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="absolute top-20 left-4 right-4 bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-yellow-400/20 p-6 z-50"
    >
      <div className="grid grid-cols-1 gap-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                scrollToSection(item.sectionId);
                onClose();
              }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                <Icon className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
