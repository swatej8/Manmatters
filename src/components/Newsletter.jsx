import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Get Exclusive Wellness Tips
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 drop-shadow-md">
            Subscribe to our newsletter for expert advice, special offers, and health insights delivered to your inbox
          </p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" email-input w-full pl-12 pr-4 py-4 rounded-full text-gray-100 font-semibold placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
            >
              {isSubmitted ? 'Subscribed! ✓' : 'Subscribe'}
              {!isSubmitted && <Send className="w-5 h-5" />}
            </motion.button>
          </motion.form>

          {/* Confirmation Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSubmitted ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white font-semibold drop-shadow-lg"
          >
            Thank you for subscribing! Check your email for a welcome offer.
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-extrabold drop-shadow-lg"
              >
                ✓
              </motion.p>
              <p className="text-sm opacity-90 mt-2">Weekly Tips</p>
            </div>
            <div className="text-center">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="text-3xl font-extrabold drop-shadow-lg"
              >
                ✓
              </motion.p>
              <p className="text-sm opacity-90 mt-2">20% Discount</p>
            </div>
            <div className="text-center">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="text-3xl font-extrabold drop-shadow-lg"
              >
                ✓
              </motion.p>
              <p className="text-sm opacity-90 mt-2">Exclusive Offers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
