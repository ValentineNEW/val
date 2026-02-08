import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionPageProps {
  onNext: () => void;
}

export function QuestionPage({ onNext }: QuestionPageProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-rose-50/40 flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-2xl w-full">
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mb-4 sm:mb-6 shadow-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ delay: 0.8, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4"
          >
            One more question 🙂
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 px-4"
          >
            What would you do if Valentine's Day was today?
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-pink-100 p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label htmlFor="answer" className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                Your answer
              </label>
              <motion.textarea
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                whileFocus={{ scale: 1.01 }}
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                rows={6}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition resize-none text-gray-900 text-sm sm:text-base"
                placeholder="Share your thoughts..."
              />
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 italic"
        >
          Take your time to answer thoughtfully...
        </motion.p>
      </div>
    </motion.div>
  );
}
