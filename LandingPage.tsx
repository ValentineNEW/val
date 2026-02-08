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
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="border-b border-gray-200 bg-white"
      >
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Student Support Initiative 2026</h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">February 2026 Program</span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl font-semibold text-gray-900 mb-6 leading-tight"
          >
            Supporting Students<br />Building Futures
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-4"
          >
            We're committed to helping students achieve their academic and financial goals through our monthly support program.
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-500 max-w-xl mx-auto"
          >
            Apply now for this month's financial assistance opportunity. Quick application process with immediate confirmation.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              color: 'blue',
              title: 'Secure Process',
              description: 'Bank-level security to protect your information throughout the application.',
              delay: 0.7
            },
            {
              icon: TrendingUp,
              color: 'green',
              title: 'Fast Approval',
              description: 'Applications are reviewed and processed within 24-48 hours.',
              delay: 0.8
            },
            {
              icon: GraduationCap,
              color: 'purple',
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
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
                <div className="text-4xl font-semibold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Apply for Giveaway
          </motion.button>
          
          <p className="mt-4 text-sm text-gray-500">
            Free to apply • No obligations • Secure application
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>© 2026 Student Support Initiative. Helping students succeed.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
