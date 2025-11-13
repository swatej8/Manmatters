import { motion } from 'framer-motion';
import { Zap, Shield, Truck, RotateCcw, Award, Leaf, Sparkles, Heart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Clinically Proven',
      description: 'All products backed by rigorous scientific research and clinical trials verified by leading institutions',
      color: 'from-blue-500 to-blue-600',
      subtext: '100+ Studies',
      benefit: 'Science-backed results',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030%2B%20Serum_blfhj2.png?tr=w-1080,c-at_max',
    },
    {
      icon: Shield,
      title: 'Safe & Natural',
      description: '100% pure natural ingredients with no harmful chemicals, additives, or side effects whatsoever',
      color: 'from-blue-600 to-blue-700',
      subtext: 'Certified Pure',
      benefit: 'Toxin-free formula',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025053/Super%20blend%20%20unflavoured%20Shots_b914nr.png?tr=w-1080,c-at_max',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on all orders with guaranteed 24-48 hour delivery across India',
      color: 'from-blue-500 to-blue-600',
      subtext: 'Pan India',
      benefit: 'Express shipping',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024374/BGK_kpcriu.jpg?tr=w-1080,c-at_max',
    },
    {
      icon: RotateCcw,
      title: '30-Day Guarantee',
      description: 'Full refund if you don\'t see visible results within 30 days - zero questions asked',
      color: 'from-blue-600 to-blue-700',
      subtext: 'Risk-Free',
      benefit: 'Money-back promise',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1626/Endure%20long%20last%20spray%20_e4n97h.png?tr=w-1080,c-at_max',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized and trusted by dermatologists, fitness experts, and health professionals nationwide',
      color: 'from-blue-500 to-blue-600',
      subtext: 'Industry Leaders',
      benefit: 'Expert recommended',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/1182231/Saly%20open%20%281%29-compressed_3tvxc2.jpg?tr=w-1080,c-at_max',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: '10L+ happy customers with average 4.8/5 star rating and dedicated 24/7 customer support',
      color: 'from-blue-600 to-blue-700',
      subtext: '500K+ Reviews',
      benefit: 'Trusted by millions',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166769/Charcoal%20bodywash_d8uyaq.jpg?tr=w-1080,c-at_max',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-10 -left-32 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6 border border-blue-300"
          >
            <Sparkles className="w-4 h-4 text-blue-700" strokeWidth={2} />
            <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent mb-6">
            Why Choose Man Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            We're committed to delivering superior quality products with proven results. 
            Our commitment to excellence and customer satisfaction has made us India's most trusted men's wellness brand.
          </p>
        </motion.div>

        {/* Features Grid - Always single row, scrollable on small screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-6 gap-4 md:gap-5 lg:gap-6 mb-16 overflow-x-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group"
              >
                {/* Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front Side - Icon */}
                    <div className="flip-card-front flex flex-col justify-center items-center p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-2 py-1 w-fit">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-xs font-semibold text-blue-700 line-clamp-1">
                          {feature.subtext}
                        </span>
                      </div>
                    </div>

                    {/* Back Side - Information */}
                    <div className="flip-card-back flex flex-col justify-center items-center p-6 text-center">
                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 flex-grow font-normal">
                        {feature.description}
                      </p>

                      {/* Benefit chip */}
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 mb-3 border border-blue-100">
                        <p className="text-xs md:text-sm text-blue-700 font-semibold line-clamp-1">
                          ✓ {feature.benefit}
                        </p>
                      </div>

                      {/* Animated underline */}
                      <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full w-full`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-normal">
              Join 10L+ men who have already experienced the Man Matters difference. 
              Start your wellness journey today with our proven products backed by science.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
            >
              Explore Our Products →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
