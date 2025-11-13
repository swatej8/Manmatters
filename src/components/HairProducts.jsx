import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, Star, Flame, CheckCircle, Zap } from 'lucide-react';

export function HairProducts() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const products = [
    {
      id: 1,
      title: 'HG 30+ Serum',
      description: 'Premium anti-aging serum for hair rejuvenation and growth',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030%2B%20Serum_blfhj2.png?tr=w-1080,c-at_max',
      price: '₹1,199',
      originalPrice: '₹1,799',
      discount: '33%',
      benefits: ['Hair regrowth', 'Strengthens roots', 'Reduces hairfall'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Clinically tested', '30-day results', 'Natural ingredients'],
      rating: 4.8,
      reviews: 2890,
      badge: 'Bestseller',
    },
    {
      id: 2,
      title: 'HG Booster + Minoxidil',
      description: 'Advanced formula combining HG booster with minoxidil for maximum growth',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2861144/HG%2B%20Booster%20%2B%20Minoxifin-compressed_4mwzmr.jpg?tr=w-1080,c-at_max',
      price: '₹1,499',
      originalPrice: '₹2,299',
      discount: '35%',
      benefits: ['Rapid hair growth', 'Thicker hair', 'Prevent hairfall'],
      color: 'from-emerald-500 to-teal-600',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      features: ['Dermatologist approved', 'Visible in 60 days', 'Proven results'],
      rating: 4.9,
      reviews: 3240,
      badge: 'Hot',
    },
    {
      id: 3,
      title: 'HG Booster + Growmax 50ml',
      description: 'Potent combination with growmax for accelerated hair development',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166915/HG%20%2B%20Booster%20%2B%20Growmax%20%2B%2050ml_fej4j3.png?tr=w-1080,c-at_max',
      price: '₹999',
      originalPrice: '₹1,499',
      discount: '33%',
      benefits: ['Enhanced growth', 'Hair density', 'Nourishment'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['50ml bottle', 'Quick absorption', 'All hair types'],
      rating: 4.7,
      reviews: 2150,
      badge: 'Popular',
    },
    {
      id: 4,
      title: 'ADUS Premium Hair Treatment',
      description: 'Specialized treatment for dense, strong and voluminous hair',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025050/ADUS_3n9h9m.png?tr=w-1080,c-at_max',
      price: '₹1,399',
      originalPrice: '₹2,099',
      discount: '33%',
      benefits: ['Hair density', 'Volume boost', 'Shine enhancement'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Premium formula', 'Deep conditioning', 'Silky texture'],
      rating: 4.6,
      reviews: 1890,
      badge: 'Bestseller',
    },
    {
      id: 5,
      title: 'Hair Growth Oil',
      description: 'Traditional yet scientific hair growth oil with modern ingredients',
      image: 'https://i.mscwlns.co/media/misc/others/IMG_9399%20%281%29_bin4nr.png?tr=w-1080,c-at_max',
      price: '₹599',
      originalPrice: '₹899',
      discount: '33%',
      benefits: ['Natural growth', 'Scalp health', 'Nourishing'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['100% natural', 'Easy to apply', 'Pleasant aroma'],
      rating: 4.5,
      reviews: 1560,
      badge: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="hair" ref={sectionRef} className="scroll-mt-10 py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6 border border-blue-300"
          >
            <Zap className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
            <span className="text-blue-700 font-medium text-sm">Hair Care Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Hair Growth & Care Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Premium hair care products backed by science. Reduce hairfall, promote growth, and achieve thicker, stronger hair.
          </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Discount Badge - Top Right */}
                <motion.div
                  initial={{ rotate: -12, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg"
                >
                  {product.originalPrice && `${Math.round((1 - parseInt(product.price.replace('₹', '')) / parseInt(product.originalPrice.replace('₹', ''))) * 100)}% OFF`}
                </motion.div>
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.title}
                </h3>
                {/* Description */}
                <div className="text-sm text-blue-700 font-bold mb-2">{product.description}</div>
                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-bold">{product.rating}</span>
                </div>
                {/* Pricing Section */}
                <div className="mb-4">
                  <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                  <span className="text-base text-gray-400 line-through ml-2">{product.originalPrice}</span>
                </div>
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
