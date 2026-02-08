import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function GiftBoxAnimation() {
  const [boxState, setBoxState] = useState<'closed' | 'opening' | 'opened'>('closed');
  const [showFlower, setShowFlower] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setBoxState('opening'), 1000);
    setTimeout(() => setBoxState('opened'), 2000);
    setTimeout(() => setShowFlower(true), 2500);
    setTimeout(() => setShowMessage(true), 3500);
  }, []);

  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: 50 + (Math.random() - 0.5) * 60,
    y: 50 + (Math.random() - 0.5) * 60,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900/30 to-rose-900/30 relative overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {boxState === 'opened' && sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: `${sparkle.x - 50}vw`,
            y: `${sparkle.y - 50}vh`,
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            delay: sparkle.delay,
            duration: 2,
            ease: 'easeOut',
          }}
          className="absolute left-1/2 top-1/2"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center w-full max-w-md">
        <div className="relative inline-block mb-8 sm:mb-12">
          <motion.div
            animate={{
              scale: boxState === 'opened' ? 1.1 : 1,
            }}
            transition={{ duration: 1 }}
            className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg shadow-2xl relative mx-auto"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-full bg-gradient-to-b from-yellow-300 to-yellow-400"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-6 sm:h-8 bg-gradient-to-r from-yellow-300 to-yellow-400"></div>
            <motion.div
              animate={{ rotate: boxState === 'opened' ? 180 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full shadow-lg z-10"
            />
          </motion.div>

          <motion.div
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={{
              y: boxState === 'opening' || boxState === 'opened' ? -128 : 0,
              rotate: boxState === 'opening' || boxState === 'opened' ? -12 : 0,
              opacity: boxState === 'opening' || boxState === 'opened' ? 0.7 : 1,
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute -top-6 sm:-top-8 left-0 w-48 h-16 sm:w-64 sm:h-20 bg-gradient-to-br from-red-600 to-rose-700 rounded-t-lg shadow-2xl mx-auto"
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-5 sm:h-6 bg-gradient-to-r from-yellow-300 to-yellow-400"></div>
          </motion.div>

          {showFlower && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -180, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="w-1.5 sm:w-2 h-32 sm:h-40 bg-gradient-to-b from-green-600 to-green-700 mx-auto rounded-full origin-bottom"
                />
                
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.6 + i * 0.05,
                          duration: 0.4,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        className="absolute top-1/2 left-1/2 w-8 h-12 sm:w-10 sm:h-16 bg-gradient-to-t from-pink-400 to-pink-300 rounded-full shadow-lg"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-20px)`,
                          transformOrigin: 'center',
                        }}
                      />
                    ))}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, duration: 0.3, type: 'spring', stiffness: 300 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-inner"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, x: -20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-16 sm:top-20 -left-3 sm:-left-4 w-10 h-6 sm:w-12 sm:h-8 bg-green-500 rounded-full transform -rotate-45"
                />
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-24 sm:top-28 -right-3 sm:-right-4 w-10 h-6 sm:w-12 sm:h-8 bg-green-500 rounded-full transform rotate-45"
                />
              </div>
            </motion.div>
          )}
        </div>

        {showMessage && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="px-4"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
            >
              Happy Valentine's Day! 🌹
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-pink-200 mb-3 sm:mb-4 drop-shadow"
            >
              You mean the world to me
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-pink-300 italic drop-shadow"
            >
              Thank you for being my Valentine 💕
            </motion.p>
          </motion.div>
        )}
      </div>

      {boxState === 'opened' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full blur-3xl"
        />
      )}
    </motion.div>
  );
}
