import { MenuItem } from "@/types/heroTypes";
import { scrollToSection } from "@/utils/scrollToSection";
import { motion } from "framer-motion";

interface MenuCircleProps {
  item: MenuItem;
  index: number;
}

const MenuCircle = ({ item, index }: MenuCircleProps) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      className="absolute group cursor-pointer"
      style={{
        left: item.position.x,
        top: item.position.y,
        transform: "translate(-50%, -50%)",
      }}
      onClick={() => scrollToSection(item.sectionId)}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full pulse-animation"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />

        {/* Main circle */}
        <div className="relative w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full menu-circle flex items-center justify-center transition-all duration-300">
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />

          {/* Tooltip */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="bg-slate-800 text-yellow-400 px-3 py-1 rounded-lg text-xs lg:text-sm font-medium whitespace-nowrap border border-yellow-400/20">
              {item.title}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-yellow-400/20"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuCircle;
