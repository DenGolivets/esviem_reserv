"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import DashboardLogo from "./dashboard/DashboardLogo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            backgroundColor: `linear-gradient(
              to right,
              var(--main-slate-light) 0%,
              var(--main-gray) 80%,
              var(--main-slate-dark) 100%
            )`,
          }}
        >
          {/* <DashboardLogo /> */}
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-700" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
