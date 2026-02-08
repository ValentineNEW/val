import { GraduationCap, Award, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageProps {
  onNext: () => void;
}

export function LandingPage({ onNext }: LandingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex flex-col"
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="border-b border-gray-200 bg-white w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 text-center sm:text-left">Student Support Initiative 2026</h1>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
            >
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">February 2026 Program</span>
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Supporting Students<br />Building Futures
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4"
            >
              We're committed to helping students achieve their academic and financial goals through our monthly support program.
            </motion.p>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-gray-500"
            >
              Apply now for this month's financial assistance opportunity. Quick application process with immediate confirmation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                bgColor: 'bg-blue-100',
                textColor: 'text-blue-600',
                title: 'Secure Process',
                description: 'Bank-level security to protect your information throughout the application.',
                delay: 0.7
              },
              {
                icon: TrendingUp,
                bgColor: 'bg-green-100',
                textColor: 'text-green-600',
                title: 'Fast Approval',
                description: 'Applications are reviewed and processed within 24-48 hours.',
                delay: 0.8
              },
              {
                icon: GraduationCap,
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-600',
                title: 'Student Focused',
                description: 'Designed specifically for students pursuing higher education.',
                delay: 0.9
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: feature.delay, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 text-center sm:text-left"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.textColor}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-white max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { value: '3,200+', label: 'Students Supported' },
                { value: '$2.4M', label: 'Total Distributed' },
                { value: '98%', label: 'Satisfaction Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: 'spring' }}
                >
                  <div className="text-3xl sm:text-4xl font-semibold mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Apply for Giveaway
            </motion.button>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
              Free to apply • No obligations • Secure application
            </p>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-xs sm:text-sm text-gray-500">
            <p>© 2026 Student Support Initiative. Helping students succeed.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
