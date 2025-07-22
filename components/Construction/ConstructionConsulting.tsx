"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Building, 
  FileText, 
  Hammer,
  ChevronDown,
  X,
  ArrowRight,
  Zap,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: FileText,
    title: "Документообіг",
    description: "Повний супровід документообігу з будівельних питань",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Hammer,
    title: "Будівельні роботи",
    description: "Професійний супровід будівельних процесів",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Правовий захист",
    description: "Юридичний супровід будівельних спорів та процедур",
    color: "from-red-500 to-pink-500"
  }
];

export default function ConstructionConsulting() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section 
      id="construction-section" 
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* 3D Construction Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: 'perspective(1000px) rotateX(25deg)',
            transformOrigin: 'center bottom'
          }}
        />
      </div>

      {/* Floating 3D Construction Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 25, 0],
              rotateY: [0, 360],
              rotateX: [0, 180, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 25px rgba(249, 115, 22, 0.6)',
                filter: 'blur(0.5px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, rotateY: -180 }}
            animate={inView ? { scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8 shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              transform: 'perspective(1000px)'
            }}
          >
            <Building className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Будівельний
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              консалтинг
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Професійні послуги в галузі будівництва, 
            документообігу та правового супроводу
          </motion.p>

          <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-12">
            ВИДИ ПОСЛУГ В ГАЛУЗІ БУДІВНИЦТВА
          </h3>
        </motion.div>

        {/* 3D Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredService === index ? 10 : 0,
                    rotateX: hoveredService === index ? -5 : 0,
                    scale: hoveredService === index ? 1.05 : 1,
                    z: hoveredService === index ? 50 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600 h-full relative overflow-hidden">
                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0.2 : 0,
                        scale: hoveredService === index ? 1.2 : 1
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{
                          rotateY: hoveredService === index ? 360 : 0,
                          scale: hoveredService === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                        style={{
                          boxShadow: hoveredService === index ? '0 0 30px rgba(249, 115, 22, 0.6)' : '0 0 15px rgba(0,0,0,0.3)'
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <motion.h3
                        animate={{
                          color: hoveredService === index ? '#fb923c' : '#ffffff'
                        }}
                        className="text-xl md:text-2xl font-bold mb-4"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          color: hoveredService === index ? '#d1d5db' : '#9ca3af'
                        }}
                        className="leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* 3D Border Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl border border-slate-500 opacity-20"
                      style={{
                        transform: 'translateZ(-5px)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive 3D CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-4xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              rotateX: -1,
              z: 30
            }}
            className="relative group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
              {/* 3D Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    transform: 'perspective(500px) rotateX(10deg)'
                  }}
                />
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-700 to-red-700 rounded-full mb-6 backdrop-blur-sm shadow-2xl"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)'
                  }}
                >
                  <Zap className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Отримати детальну консультацію
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Дізнайтеся більше про наші послуги в галузі будівництва
                </p>

                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotateX: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center text-lg font-semibold bg-gradient-to-r from-orange-700 to-red-700 px-6 py-3 rounded-full backdrop-blur-sm"
                >
                  <span className="mr-2">Натисніть тут</span>
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>

              {/* 3D Depth Layer */}
              {/* <div 
                className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 rounded-3xl"
                style={{
                  transform: 'translateZ(-20px)',
                  filter: 'blur(2px)'
                }}
              /> */}
              <div className="absolute inset-0 z-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/construction/const-bg.jpg"
                    alt="Будівельний консалтинг"
                    className="w-full h-full object-cover opacity-80 blur-[3px]"
                    style={{ pointerEvents: "none" }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70 rounded-3xl'></div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: "100%", opacity: 0, rotateX: -90 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-t-3xl md:rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 50px rgba(249, 115, 22, 0.3), inset 0 0 20px rgba(255,255,255,0.05)'
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                  Наші послуги
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-orange-400">Амністія</strong> - повний супровід процедури амністії самовільного будівництва.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-orange-400">Отримання схеми намірів</strong> - підготовка та отримання схеми намірів розміщення об{"'"}єкта.
                  </p>
                </motion.div>
              </div>

              <Link href="/construction-consulting">
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span>Дізнатися більше</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}