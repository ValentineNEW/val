import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TransitionPageProps {
  onNext: () => void;
}

export function TransitionPage({ onNext }: TransitionPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50/30 flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full mb-4 sm:mb-6 shadow-lg"
          >
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4"
          >
            Application Almost Complete...
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4"
          >
            Your information has been securely received and verified.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 text-center"
        >
          <div className="mb-4 sm:mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4"
            >
              <span className="text-xs sm:text-sm font-medium">One more step</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-700 px-2"
            >
              To finalize your application, we need you to answer one additional question for our records.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-gray-600">Almost there</span>
              <span className="text-xs sm:text-sm text-gray-600">95% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '95%' }}
                transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                className="bg-gradient-to-r from-blue-500 to-orange-400 h-2 rounded-full"
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Answer 1 More Question
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6"
        >
          This will only take a moment
        </motion.p>
      </div>
    </motion.div>
  );
}
