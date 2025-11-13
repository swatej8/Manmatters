import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, CheckCircle, Star, Flame } from 'lucide-react';

export function Products() {
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
      title: 'Superblend - Unflavoured Shots',
      description: 'Premium nutritional blend for optimal performance and recovery',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025053/Super%20blend%20%20unflavoured%20Shots_b914nr.png?tr=w-1080,c-at_max',
      price: '₹1,499',
      originalPrice: '₹2,299',
      discount: '35%',
      benefits: ['Muscle recovery', 'Energy boost', 'Complete nutrition'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Science-backed formula', 'No artificial flavors', 'Fast absorption'],
      rating: 4.8,
      reviews: 2340,
      badge: 'Bestseller',
    },
    {
      id: 2,
      title: 'Superblend Pouch',
      description: 'Convenient pouch format for on-the-go nutrition',
      image: 'https://i.mscwlns.co/media/misc/others/Super%20Blend%20Pouch-min_em4qks.png?tr=w-1080,c-at_max',
      price: '₹1,299',
      originalPrice: '₹1,899',
      discount: '32%',
      benefits: ['Portable format', 'Quick mix', 'Travel friendly'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Resealable pouch', 'Easy dosing', 'Stays fresh'],
      rating: 4.7,
      reviews: 1890,
      badge: 'Popular',
    },
    {
      id: 3,
      title: 'Shilajit Premium',
      description: 'Pure Himalayan shilajit for vitality and stamina',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024397/Shilajit_5duoxo.jpg?tr=w-1080,c-at_max',
      price: '₹799',
      originalPrice: '₹1,199',
      discount: '33%',
      benefits: ['Energy enhancement', 'Stamina boost', 'Natural vigor'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Purified shilajit', 'Lab tested', '84+ minerals'],
      rating: 4.9,
      reviews: 3120,
      badge: 'Hot',
    },
    {
      id: 4,
      title: 'Creatine - Flavoured',
      description: 'Premium creatine monohydrate for muscle strength',
      image: 'https://i.mscwlns.co/media/misc/others/Creatine-Flavoured-Thumbnail_jkf2my.jpg?tr=w-1080,c-at_max',
      price: '₹1,099',
      originalPrice: '₹1,599',
      discount: '31%',
      benefits: ['Muscle strength', 'Performance boost', 'Endurance'],
      color: 'from-green-500 to-teal-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      features: ['99.9% pure', 'Great taste', 'Micronized form'],
      rating: 4.8,
      reviews: 2100,
      badge: 'Bestseller',
    },
    {
      id: 5,
      title: 'Magnesium Gummies',
      description: 'Tasty gummies for muscle relaxation and recovery',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024494/Magnesium%20Gummies_br8d83.jpg?tr=w-1080,c-at_max',
      price: '₹699',
      originalPrice: '₹999',
      discount: '30%',
      benefits: ['Muscle relaxation', 'Sleep quality', 'Stress relief'],
      color: 'from-purple-500 to-pink-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      features: ['Easy to consume', 'Great taste', 'Highly absorbable'],
      rating: 4.6,
      reviews: 1560,
      badge: 'Popular',
    },
    {
      id: 6,
      title: 'Magnesium Muscle Recovery Lotion',
      description: 'Topical lotion for muscle recovery and pain relief',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024474/Magnesium%20Muscle%20Recovery%20Lotion_hnvv06.png?tr=w-1080,c-at_max',
      price: '₹549',
      originalPrice: '₹799',
      discount: '31%',
      benefits: ['Muscle recovery', 'Pain relief', 'Faster healing'],
      color: 'from-indigo-500 to-blue-600',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      features: ['Fast absorption', 'Non-greasy', 'Soothing formula'],
      rating: 4.5,
      reviews: 980,
      badge: '',
    },
    {
      id: 7,
      title: 'Shilajit Advanced',
      description: 'Enhanced shilajit formula with added bioactive compounds',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2024468/Shilajit%20Advanced%20%281%29_hfkt7m.png?tr=w-1080,c-at_max',
      price: '₹1,299',
      originalPrice: '₹1,899',
      discount: '32%',
      benefits: ['Advanced energy', 'Immunity boost', 'Cellular health'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Enhanced formula', 'Bioavailable', 'Synergistic blend'],
      rating: 4.7,
      reviews: 2450,
      badge: 'Hot',
    },
    {
      id: 8,
      title: 'Creatine Gummies',
      description: 'Convenient creatine in delicious gummy format',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/2025041/Creatine%20Gummies%20pouch_fn65ct.png?tr=w-1080,c-at_max',
      price: '₹899',
      originalPrice: '₹1,299',
      discount: '31%',
      benefits: ['Easy dosing', 'Muscle strength', 'Great taste'],
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Tasty formula', 'No mixing needed', 'Perfect dosage'],
      rating: 4.6,
      reviews: 1340,
      badge: 'Bestseller',
    },
    {
      id: 9,
      title: 'HG 30+ Anti-Aging Serum',
      description: 'Premium anti-aging serum for youthful skin',
      image: 'https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030%2B%20Serum_blfhj2.png?tr=w-1080,c-at_max',
      price: '₹1,199',
      originalPrice: '₹1,799',
      discount: '33%',
      benefits: ['Wrinkle reduction', 'Skin firming', 'Hydration'],
      color: 'from-rose-500 to-pink-600',
      buttonColor: 'bg-rose-600 hover:bg-rose-700',
      features: ['Clinically tested', 'Quick absorption', 'Visible results'],
      rating: 4.8,
      reviews: 2890,
      badge: 'Hot',
    },
  ];

 const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id='beard'
      className="scroll-mt-10 py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6 border border-blue-300"
          >
            <Flame className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
            <span className="text-blue-700 font-medium text-sm">Premium Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Nutrition & Wellness Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Premium products crafted with science and natural ingredients. Trusted by 10L+ customers worldwide.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {products.map((product, index) => (
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
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg"
                >
                  {product.discount} OFF
                </motion.div>

                {/* Badge Indicator - Top Left */}
                {(product.badge === 'Hot' || product.badge === 'Bestseller') && (
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-sm text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-700`}
                  >
                    {product.badge === 'Hot' ? (
                      <Flame className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <CheckCircle className="w-4 h-4" strokeWidth={1.5} />
                    )}
                    {product.badge}
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.title}
                </h3>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-blue-500 text-blue-500'
                              : 'text-gray-300'
                          }`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    <span className="font-bold text-gray-900">{product.rating}</span>
                    <span className="text-xs"> ({(product.reviews/1000).toFixed(1)}k)</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                  {product.description}
                </p>

                {/* Benefits - Smaller */}
                <div className="mb-2 space-y-0.5 flex-grow">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2" />

                {/* Pricing Section */}
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold mt-0.5">
                    Save ₹{(parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))).toLocaleString()}
                  </p>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mb-2 pb-2 border-b border-gray-100">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="line-clamp-1">100% Authentic</span>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 text-sm"
                  title="Add to cart"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"
      />
    </section>
  );
}
