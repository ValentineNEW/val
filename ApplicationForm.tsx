import { useState } from 'react';
import { FileText, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface ApplicationFormProps {
  onNext: () => void;
}

export function ApplicationForm({ onNext }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    schoolName: '',
    graduatingYear: '',
    fundingReason: '',
    fundingAmount: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col"
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="border-b border-gray-200 bg-white w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">Application Form</h1>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Secure</span>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-gray-600">Step 1 of 2</span>
              <span className="text-xs sm:text-sm text-gray-600">50% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8"
          >
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Personal Information</h2>
                <p className="text-xs sm:text-sm text-gray-500">Please provide your details for verification</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Enter your school name"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <label htmlFor="graduatingYear" className="block text-sm font-medium text-gray-700 mb-2">
                  Graduating Year *
                </label>
                <select
                  id="graduatingYear"
                  name="graduatingYear"
                  value={formData.graduatingYear}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                >
                  <option value="">Select graduating year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <label htmlFor="fundingReason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Funding *
                </label>
                <textarea
                  id="fundingReason"
                  name="fundingReason"
                  value={formData.fundingReason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-sm sm:text-base"
                  placeholder="Please explain why you need funding and how it will help your education"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Funding Amount Needed *
                </label>
                <select
                  id="fundingAmount"
                  name="fundingAmount"
                  value={formData.fundingAmount}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                >
                  <option value="">Select amount ($500 - $5,000)</option>
                  <option value="$500">$500</option>
                  <option value="$1,000">$1,000</option>
                  <option value="$1,500">$1,500</option>
                  <option value="$2,000">$2,000</option>
                  <option value="$2,500">$2,500</option>
                  <option value="$3,000">$3,000</option>
                  <option value="$3,500">$3,500</option>
                  <option value="$4,000">$4,000</option>
                  <option value="$4,500">$4,500</option>
                  <option value="$5,000">$5,000</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">Select the funding amount that meets your needs</p>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Name *
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Enter your bank name"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-2">
                  Account Name *
                </label>
                <input
                  type="text"
                  id="accountName"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Name on account"
                />
                <p className="mt-1 text-xs text-gray-500">This should match the name on your bank account</p>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.4 }}
              >
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number *
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Enter account number"
                />
                <p className="mt-1 text-xs text-gray-500">Your information is encrypted and secure</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4"
              >
                <div className="flex gap-2 sm:gap-3">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-blue-900 mb-1">Security & Privacy</p>
                    <p className="text-xs text-blue-700">
                      All information is encrypted using bank-level security protocols. We never share your data with third parties.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Continue Application
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>FDIC Compliant</span>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
