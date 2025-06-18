'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const icons = [
  "bi-heart",
  "bi-activity",
  "bi-patch-check",
  "bi-hospital",
  "bi-emoji-smile",
  "bi-heart-pulse",
  "bi-plus-circle",
  "bi-brightness-high",
  "bi-stars",
  "bi-shield-check",
];

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5s splash
    return () => clearTimeout(timer);
  }, []);

  // Generates random styles for icons
  const randomStyles = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    fontSize: `${Math.random() * 30 + 20}px`,
    opacity: 0.3 + Math.random() * 0.7,
  });

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-red-600 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #7f1d1d 0%, #ef4444 100%)',
          }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold text-white z-10"
          >
            Medify
          </motion.h1>

          {/* Floating icons */}
          {icons.map((icon, idx) => (
            <motion.i
              key={idx}
              className={`bi ${icon} absolute text-white`}
              style={randomStyles()}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: idx * 0.25,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
