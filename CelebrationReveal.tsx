import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CelebrationRevealProps {
  onNext: () => void;
}

export function CelebrationReveal({ onNext }: CelebrationRevealProps) {
  const [confetti, setConfetti] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const confettiElements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setConfetti(confettiElements);
  }, []);

  const handleYesClick = () => {
    onNext();
  };

  const handleYesSmileyClick = () => {
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-hidden"
    >
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            delay: item.delay,
            duration: item.duration,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            left: `${item.left}%`,
          }}
        >
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-pink-400 fill-pink-400 opacity-70" />
        </motion.div>
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              delay: Math.random() * 5,
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart
              className="text-pink-300 fill-pink-300 opacity-20"
              style={{
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-full mb-6 sm:mb-8 shadow-2xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
          </motion.div>

          <div className="mb-8 sm:mb-12">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 150 }}
              className="text-5xl sm:text-6xl mb-4 sm:mb-6"
            >
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
              >
                😊
              </motion.span>
            </motion.p>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
            >
              Pookie here smiles
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-700 mb-3 sm:mb-4 px-4"
            >
              I have something to ask you...
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-pink-200 mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 fill-rose-500" />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                <Heart className="w-10 h-10 sm:w-14 sm:h-14 text-rose-500 fill-rose-500" />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 fill-rose-500" />
              </motion.div>
            </div>

            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 px-4"
            >
              Will you be my Valentine? 💌
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-10 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Yes 💖
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesSmileyClick}
                className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Yes 😌
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 italic px-4"
          >
            Click either one... they both mean the same thing 💝
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
